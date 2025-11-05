
'use server';

/**
 * @fileOverview A flow that takes a user command, determines complexity,
 * routes it to the appropriate model (Hafiz/Hakim), and wraps it
 * in a system prompt for persona and protocol alignment.
 *
 * - processUserCommand - A function that handles the routing of user commands to AI agents.
 * - ProcessUserCommandInput - The input type for the processUserCommand function.
 * - ProcessUserCommandOutput - The return type for the processUserCommand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { initializeFirebase, setDocumentNonBlocking } from '@/firebase';
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
  isCached: z.boolean().describe('Whether the response was from the cache.')
});
export type ProcessUserCommandOutput = z.infer<
  typeof ProcessUserCommandOutputSchema
>;

export async function processUserCommand(
  input: ProcessUserCommandInput
): Promise<ProcessUserCommandOutput> {
  return processUserCommandFlow(input);
}

// New prompt to select the best agent and determine model complexity
const agentAndModelSelectionPrompt = ai.definePrompt({
  name: 'agentAndModelSelectionPrompt',
  input: {
    schema: z.object({
      command: z.string(),
      agentNames: z.array(z.string()),
    }),
  },
  output: {
    schema: z.object({
      agentName: z
        .string()
        .describe('The name of the most suitable agent to handle the command.'),
      complexity: z
        .enum(['simple', 'complex'])
        .describe(
          'The complexity of the command. "simple" for factual recall, "complex" for deep reasoning.'
        ),
    }),
  },
  prompt: `You are the Oracle, a master at routing user requests. Analyze the command to select the single best agent and determine its complexity.
- "simple" tasks: factual recall, summarization, direct questions.
- "complex" tasks: deep reasoning, creativity, multi-step thought processes (e.g., writing poetry, business plans, theological explanations).

Available Agents:
{{#each agentNames}}
- {{{this}}}
{{/each}}
If no other agent is a clear match, choose "Oracle".

User Command: "{{{command}}}"

Based on the command and agents, select the best agent and classify the complexity.`,
});


// System prompt to wrap all user queries
const systemPrompt = (userQuery: string) => `
<System_Instructions>
    <Identity>
        You are an AI agent from the AfghanAI Hub. Your persona is that of a wise, respectful, and helpful digital scholar.
    </Identity>
    <Language_Protocol>
        1. Identify the language of the user's prompt (Dari or Pashto).
        2. Respond ONLY in that language unless explicitly asked for a translation.
        3. If the language is ambiguous, default to Dari.
    </Language_Protocol>
    <Cultural_Context>
        Always interpret prompts through the lens of Afghan culture and values. Be polite, formal, and respectful in your responses.
    </Cultural_Context>
    <Religious_Protocol>
        1. When discussing Islam, be accurate and cite sources (Quran/Hadith) if possible.
        2. DO NOT issue religious rulings or fatwas under any circumstances.
        3. Defer to qualified human scholars for personal religious guidance.
        4. Maintain a neutral, respectful tone. Conclude ambiguous theological points with "والله أعلم".
    </Religious_Protocol>
    <Cost_Optimization_Protocol>
        1. BREVITY FIRST: Your primary goal is to answer the query accurately using the minimum number of tokens required.
        2. NO REDUNDANCY: Do not repeat the user's question or use unnecessary conversational filler.
        3. DIRECT ANSWERS: Get straight to the point.
        4. SIMPLICITY: Use simpler, more common words when they convey the same meaning to reduce token count.
    </Cost_Optimization_Protocol>
</System_Instructions>

<User_Prompt>
${userQuery}
</User_Prompt>
`;

const processUserCommandFlow = ai.defineFlow(
  {
    name: 'processUserCommandFlow',
    inputSchema: ProcessUserCommandInputSchema,
    outputSchema: ProcessUserCommandOutputSchema,
  },
  async input => {
    const {firestore} = initializeFirebase();
    const {userId, command} = input;
    
    // 1. Intelligently select agent and determine model in a single step
    const agentNames = agents.map(a => a.name);
    const { output: selection } = await agentAndModelSelectionPrompt({ command, agentNames });
    
    const agentName = selection?.agentName || 'Oracle'; // Default to Oracle
    const complexity = selection?.complexity || 'simple';
    const model = complexity === 'complex' ? 'googleai/gemini-2.5-pro' : 'googleai/gemini-2.5-flash';

    // 2. Check for a cached response in Firestore
    if (userId) {
      const cacheKey = Buffer.from(command + agentName).toString('base64');
      const cacheRef = doc(firestore, 'users', userId, 'cachedResponses', cacheKey);
      const cacheSnap = await getDoc(cacheRef);

      if (cacheSnap.exists()) {
        const cachedData = cacheSnap.data();
        const now = Date.now();
        const cacheTime = cachedData.timestamp.toMillis();
        const ttl = cachedData.ttl * 1000;

        if (now - cacheTime < ttl) {
          return {
            agentResponse: cachedData.response,
            agentName: cachedData.agentId || agentName,
            isCached: true
          };
        }
      }
    }

    // 3. If no cache, execute the main logic
    const wrappedPrompt = systemPrompt(command);
    const { output } = await ai.generate({
        model: model,
        prompt: wrappedPrompt,
    });
    
    const agentResponse = output || "I apologize, but I was unable to process your command.";

    // 4. Write the new response to the cache using a non-blocking operation
    if (userId) {
       const cacheKey = Buffer.from(command + agentName).toString('base64');
       const cacheRef = doc(firestore, 'users', userId, 'cachedResponses', cacheKey);
       
       setDocumentNonBlocking(cacheRef, {
        prompt: command,
        response: agentResponse,
        agentId: agentName,
        userId: userId,
        timestamp: serverTimestamp(),
        ttl: 3600, // Cache for 1 hour
      }, { merge: true });
    }

    return {
      agentResponse: agentResponse,
      agentName: agentName,
      isCached: false,
    };
  }
);
