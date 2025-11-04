'use server';

/**
 * @fileOverview Implements agent collaboration flow where agents can call each other to solve complex problems.
 *
 * - enableAgentCollaboration - A function that initiates the agent collaboration flow.
 * - EnableAgentCollaborationInput - The input type for the enableAgentCollaboration function.
 * - EnableAgentCollaborationOutput - The return type for the enableAgentCollaboration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define schemas for input and output
const EnableAgentCollaborationInputSchema = z.object({
  problemDescription: z
    .string()
    .describe('A detailed description of the complex problem to be solved.'),
  agentInstructions: z
    .array(z.string())
    .describe('Instructions for each agent involved in the collaboration.'),
});
export type EnableAgentCollaborationInput = z.infer<
  typeof EnableAgentCollaborationInputSchema
>;

const EnableAgentCollaborationOutputSchema = z.object({
  solution: z.string().describe('The collaboratively generated solution to the problem.'),
  agentInteractions: z
    .array(z.string())
    .describe('A log of how the agents interacted and called each other.'),
});
export type EnableAgentCollaborationOutput = z.infer<
  typeof EnableAgentCollaborationOutputSchema
>;

// Define the main flow function
export async function enableAgentCollaboration(
  input: EnableAgentCollaborationInput
): Promise<EnableAgentCollaborationOutput> {
  return enableAgentCollaborationFlow(input);
}

const agentCollaborationPrompt = ai.definePrompt({
  name: 'agentCollaborationPrompt',
  input: {schema: EnableAgentCollaborationInputSchema},
  output: {schema: EnableAgentCollaborationOutputSchema},
  prompt: `You are a team of AI agents collaborating to solve a complex problem.

Problem Description: {{{problemDescription}}}

Agent Instructions:
{{#each agentInstructions}}
  - {{{this}}}
{{/each}}

Your goal is to collaboratively develop a comprehensive and effective solution.
Log all agent interactions and tool usage.

Solution:`,
});

// Define the Genkit flow
const enableAgentCollaborationFlow = ai.defineFlow(
  {
    name: 'enableAgentCollaborationFlow',
    inputSchema: EnableAgentCollaborationInputSchema,
    outputSchema: EnableAgentCollaborationOutputSchema,
  },
  async input => {
    // Call the prompt to initiate agent collaboration
    const {output} = await agentCollaborationPrompt(input);
    // Return the output, which should contain the solution and agent interaction logs
    return output!;
  }
);
