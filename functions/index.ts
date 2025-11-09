import { onRequest } from "firebase-functions/v2/https";
import express, { Request, Response } from "express";
import * as path from "path";
import * as fs from "fs";

const app = express();

// Serve static Next.js files
const staticPath = path.join(__dirname, "../../.next/static");
app.use("/_next/static", express.static(staticPath));

// Serve other static assets
app.use(express.static(staticPath));

// For all other routes, serve index.html to enable client-side routing
app.get("*", (req: Request, res: Response) => {
  const indexPath = path.join(staticPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send(`
      <!DOCTYPE html>
      <html>
        <head><title>Not Found</title></head>
        <body>
          <h1>Application Not Found</h1>
          <p>The Next.js app static files are not available. Please ensure the app has been built.</p>
        </body>
      </html>
    `);
  }
});

export const nextApp = onRequest(app);


