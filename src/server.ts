import { fastify } from "fastify";
import fastifyCors from "@fastify/cors";

import { getAllPromptsRoutes } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify();

app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPromptsRoutes); // GET /prompts 
app.register(uploadVideoRoute); // POST /videos
app.register(createTranscriptionRoute);// POST /videos/videoId/transcription
app.register(generateAICompletionRoute);// POST /ai/complete

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on http://localhost:3333");
  });

