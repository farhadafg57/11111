'use server';

/**
 * @fileOverview A flow that takes user voice input, transcribes it to text,
 * and then processes it using the existing command processing flow.
 *
 * - processUserVoice - A function that handles voice input.
 * - ProcessUserVoiceInput - The input type for the processUserVoice function.
 * - ProcessUserVoiceOutput - The return type for the processUserVoice function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { processUserCommand } from './process-user-command';
import type { ProcessUserCommandOutput } from './process-user-command';


const ProcessUserVoiceInputSchema = z.object({
  audioBase64: z.string().describe("Base64 encoded audio data from the user's microphone."),
  userId: z.string().optional().describe('The ID of the user.'),
});

export type ProcessUserVoiceInput = z.infer<typeof ProcessUserVoiceInputSchema>;
export type ProcessUserVoiceOutput = ProcessUserCommandOutput;

export async function processUserVoice(
  input: ProcessUserVoiceInput
): Promise<ProcessUserVoiceOutput> {
  return processUserVoiceFlow(input);
}

const processUserVoiceFlow = ai.defineFlow(
  {
    name: 'processUserVoiceFlow',
    inputSchema: ProcessUserVoiceInputSchema,
    outputSchema: z.custom<ProcessUserVoiceOutput>(),
  },
  async ({ audioBase64, userId }) => {
    // 1. Transcribe the audio to text
    const { text: transcribedText } = await ai.generate({
      model: 'googleai/gemini-1.5-flash', // Using a model capable of audio transcription
      prompt: [
        { text: 'Transcribe the following audio.' },
        { media: { url: `data:audio/webm;base64,${audioBase64}` } },
      ],
    });

    if (!transcribedText) {
      throw new Error('Could not transcribe audio.');
    }

    // 2. Process the transcribed text using the existing command flow
    const commandResult = await processUserCommand({
      command: transcribedText,
      userId: userId,
    });
    
    return commandResult;
  }
);
