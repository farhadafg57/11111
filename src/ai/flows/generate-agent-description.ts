'use server';

/**
 * @fileOverview Generates a short description of an AI agent's capabilities.
 *
 * - generateAgentDescription - A function that generates the agent description.
 * - GenerateAgentDescriptionInput - The input type for the generateAgentDescription function.
 * - GenerateAgentDescriptionOutput - The return type for the generateAgentDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAgentDescriptionInputSchema = z.object({
  agentName: z.string().describe('The name of the AI agent.'),
  agentCapabilities: z.string().describe("A detailed description of the AI agent's capabilities."),
});
export type GenerateAgentDescriptionInput = z.infer<typeof GenerateAgentDescriptionInputSchema>;

const GenerateAgentDescriptionOutputSchema = z.object({
  shortDescription: z.string().describe("A short summary of the AI agent's capabilities."),
});
export type GenerateAgentDescriptionOutput = z.infer<typeof GenerateAgentDescriptionOutputSchema>;

export async function generateAgentDescription(input: GenerateAgentDescriptionInput): Promise<GenerateAgentDescriptionOutput> {
  return generateAgentDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAgentDescriptionPrompt',
  input: {schema: GenerateAgentDescriptionInputSchema},
  output: {schema: GenerateAgentDescriptionOutputSchema},
  prompt: `You are an expert at summarizing AI agent capabilities into a single, concise sentence.

  Given the following AI agent name and capabilities, generate a short description of the agent in a single sentence.

  Agent Name: {{{agentName}}}
  Agent Capabilities: {{{agentCapabilities}}}
  `,
});

const generateAgentDescriptionFlow = ai.defineFlow(
  {
    name: 'generateAgentDescriptionFlow',
    inputSchema: GenerateAgentDescriptionInputSchema,
    outputSchema: GenerateAgentDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
