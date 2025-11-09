import { onRequest } from "firebase-functions/v2/https";

// This file is intentionally left mostly empty.
// Vercel handles Next.js deployments natively, so this Firebase Function is not needed.
// Keeping the file prevents build errors if it's referenced elsewhere.

export const nextApp = onRequest((req, res) => {
  res.status(501).send("Not Implemented: This function is not used for Vercel deployments.");
});
