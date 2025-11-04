'use server';

import {processUserCommand} from '@/ai/flows/process-user-command';

export async function handleCommand(command: string, userId?: string) {
  try {
    // Artificial delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, 1000));
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
