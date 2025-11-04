'use server';

/**
 * @fileOverview A flow that takes a user command, checks for a cached response,
 * and routes it to the appropriate AI agent if no cache is found.
 *
 * - processUserCommand - A function that handles the routing of user commands to AI agents.
 * - ProcessUserCommandInput - The input type for the processUserCommand function.
 * - ProcessUserCommandOutput - The return type for the processUserCommand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { generateAgentDescription } from './generate-agent-description';
import { agents } from '@/lib/agents';

const ProcessUserCommandInputSchema = z.object({
  command: z.string().describe('The command entered by the user.'),
  userId: z.string().optional().describe('The ID of the user.'),
});
export type ProcessUserCommandInput = z.infer<
  typeof ProcessUserCommandInputSchema
>;

const ProcessUserCommandOutputSchema = z.object({
  agentResponse: z.string().describe('The response from the AI agent.'),
  agentName: z.string().describe('The name of the AI agent that handled the command.'),
});
export type ProcessUserCommandOutput = z.infer<
  typeof ProcessUserCommandOutputSchema
>;

export async function processUserCommand(
  input: ProcessUserCommandInput
): Promise<ProcessUserCommandOutput> {
  return processUserCommandFlow(input);
}

const agentList = `You are in charge of choosing an AI agent to respond to a user's command. You have the following agents available to you:

1.  PlantDiagnoser: an expert botanist specializing in diagnosing plant illnesses.
2.  VideoGenerator: an AI that can generate videos based on text or image prompts using the Veo models.
3.  GenerateAgentDescription: Generates a short description of an AI agent's capabilities.

For the command: {{{command}}}, which agent is most appropriate to handle this command? Only respond with the name of the agent.`;

const routeToAgentPrompt = ai.definePrompt({
  name: 'routeToAgentPrompt',
  input: {schema: z.object({command: z.string()})},
  output: {schema: z.string()},
  prompt: agentList,
});

const processUserCommandFlow = ai.defineFlow(
  {
    name: 'processUserCommandFlow',
    inputSchema: ProcessUserCommandInputSchema,
    outputSchema: ProcessUserCommandOutputSchema,
  },
  async input => {
    const {firestore} = initializeFirebase();
    const {userId, command} = input;

    // 1. Determine which agent to use
    const agentName = (await routeToAgentPrompt({command})).trim();

    // 2. Check for a cached response in Firestore
    if (userId) {
      const cacheRef = doc(
        firestore,
        'users',
        userId,
        'cachedResponses',
        btoa(command + agentName) // Simple hash for cache key
      );
      const cacheSnap = await getDoc(cacheRef);
      if (cacheSnap.exists()) {
        const cachedData = cacheSnap.data();
        const now = Date.now();
        const cacheTime = cachedData.timestamp.toMillis();
        const ttl = cachedData.ttl * 1000; // TTL in milliseconds

        if (now - cacheTime < ttl) {
          return {
            agentResponse: `(Cached) ${cachedData.response}`,
            agentName: agentName,
          };
        }
      }
    }

    // 3. If no cache, execute the agent's logic
    let agentResponse = '';
    switch (agentName) {
      case 'VideoGenerator':
        agentResponse = `Routing to VideoGenerator to process: "${command}"`;
        break;
      case 'PlantDiagnoser':
        agentResponse = `Routing to PlantDiagnoser to process: "${command}"`;
        break;
      case 'GenerateAgentDescription': {
        const agentToDescribe = agents.find(agent => command.toLowerCase().includes(agent.name.toLowerCase()));
        if(agentToDescribe) {
            const descriptionResult = await generateAgentDescription({
                agentName: agentToDescribe.name,
                agentCapabilities: agentToDescribe.description
            });
            agentResponse = descriptionResult.shortDescription;
        } else {
            agentResponse = "I can generate a description for any agent in the Scriptorium. Which agent would you like to know more about?";
        }
        break;
      }
      default:
        agentResponse = `Unknown agent: ${agentName}. Could not process command.`;
        break;
    }

    // 4. Write the new response to the cache
    if (userId) {
      const cacheRef = doc(
        firestore,
        'users',
        userId,
        'cachedResponses',
        btoa(command + agentName)
      );
      await setDoc(cacheRef, {
        prompt: command,
        response: agentResponse,
        agentId: agentName,
        userId: userId,
        timestamp: serverTimestamp(),
        ttl: 3600, // Cache for 1 hour
      });
    }

    return {
      agentResponse: agentResponse,
      agentName: agentName,
    };
  }
);
