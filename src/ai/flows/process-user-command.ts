'use server';

/**
 * @fileOverview A flow that takes a user command and routes it to the appropriate AI agent.
 *
 * - processUserCommand - A function that handles the routing of user commands to AI agents.
 * - ProcessUserCommandInput - The input type for the processUserCommand function.
 * - ProcessUserCommandOutput - The return type for the processUserCommand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProcessUserCommandInputSchema = z.object({
  command: z.string().describe('The command entered by the user.'),
});
export type ProcessUserCommandInput = z.infer<typeof ProcessUserCommandInputSchema>;

const ProcessUserCommandOutputSchema = z.object({
  agentResponse: z.string().describe('The response from the AI agent.'),
  agentName: z.string().describe('The name of the AI agent that handled the command.'),
});
export type ProcessUserCommandOutput = z.infer<typeof ProcessUserCommandOutputSchema>;

export async function processUserCommand(input: ProcessUserCommandInput): Promise<ProcessUserCommandOutput> {
  return processUserCommandFlow(input);
}

const agentList = `You are in charge of choosing an AI agent to respond to a user's command. You have the following agents available to you:

1.  PlantDiagnoser: an expert botanist specializing diagnosing plant illnesses.
2.  VideoGenerator: an AI that can generate videos based on text or image prompts using the Veo models.

For the command: {{{command}}}, which agent is most appropriate to handle this command? Only respond with the name of the agent.`;

const routeToAgentPrompt = ai.definePrompt({
  name: 'routeToAgentPrompt',
  input: {schema: ProcessUserCommandInputSchema},
  output: z.string(),
  prompt: agentList,
});

const processUserCommandFlow = ai.defineFlow(
  {
    name: 'processUserCommandFlow',
    inputSchema: ProcessUserCommandInputSchema,
    outputSchema: ProcessUserCommandOutputSchema,
  },
  async input => {
    const agentName = await routeToAgentPrompt(input);

    // Simple routing logic based on agent name.
    let agentResponse = '';
    switch (agentName.trim()) {
      case 'VideoGenerator':
        agentResponse = `Routing to VideoGenerator`;
        break;
      case 'PlantDiagnoser':
        agentResponse = `Routing to PlantDiagnoser`;
        break;
      default:
        agentResponse = `Unknown agent: ${agentName}.  Could not process command.`;
    }

    return {
      agentResponse: agentResponse,
      agentName: agentName.trim(),
    };
  }
);
