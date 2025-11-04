# **App Name**: AfghanAI Hub

## Core Features:

- AI Agent Index: A scrollable, categorized index of all AI agents with classical icons, following a persistent, column-based layout.
- Oracle's Command: A minimalist prompt bar docked at the bottom that animates when focused, welcoming user commands.
- Core Router Flow: The tool which receives user prompts, checks for cached responses in Firestore, routes requests to appropriate AI models, and writes results back to the cache.
- AI Agent Interaction: Central forum area for user interaction with selected AI agents, featuring ample white space.
- Gemini Integration: Using Gemini 2.5 Pro and Gemini Flash models to process requests through Firebase Genkit.
- Firestore Caching: Caching Genkit flow outputs in Firestore with TTL policies to prevent redundant API calls.
- Agent Collaboration: Internal flow for agents to call each other to solve complex, multi-domain problems.

## Style Guidelines:

- Background: Marble White (#FDFDFD) provides a clean and focused environment.
- Accents: Lapis Lazuli Blue (#26428B) offers a touch of classical sophistication.
- Highlights: Parchment Tan (#F5EEDA) creates a warm and inviting feel.
- Text: Charcoal Black (#333333) ensures high readability and a classic aesthetic.
- Headings: 'Cormorant Garamond' (serif) provides a scholarly and elegant look.
- Body text: 'Source Serif Pro' (serif) ensures a highly readable experience. Note: currently only Google Fonts are supported.
- Column-based layout reminiscent of a Grand Library, featuring a Scriptorium (agent index) and Forum (content area).
- Subtle animations for the prompt bar, creating a graceful user experience.