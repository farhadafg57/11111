import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {next} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI(),
    next({
      flowServer: process.env.GENKIT_FLOW_SERVER_URL,
    }),
  ],
  model: 'googleai/gemini-2.5-flash',
});
