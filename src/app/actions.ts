'use server';

import {processUserCommand} from '@/ai/flows/process-user-command';
import { processUserVoice } from '@/ai/flows/process-user-voice';

export async function handleCommand(command: string, userId?: string) {
  try {
    const result = await processUserCommand({command, userId});
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred.';
    return {
      success: false,
      error: `An error occurred while processing your command: ${errorMessage}`,
    };
  }
}

export async function handleVoiceCommand(audioBase64: string, userId?: string) {
  try {
    const result = await processUserVoice({ audioBase64, userId });
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred.';
    return {
      success: false,
      error: `An error occurred while processing your voice command: ${errorMessage}`,
    };
  }
}
