import { z } from "zod";

const envSchema = z.object({
  VITE_GOOGLE_CLIENT_ID: z.string(),
  VITE_TICKET_API_ENDPOINT: z.string().url(),
});

const env = envSchema.parse(import.meta.env);

const configs = {
  google: {
    clientId: env.VITE_GOOGLE_CLIENT_ID,
  },
  endpoint: {
    ticket: env.VITE_TICKET_API_ENDPOINT,
  },
};

export default configs;
