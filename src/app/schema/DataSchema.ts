import { z } from "zod";

export const schema = z.object({
  title: z.string().trim().min(1).max(15),
  content: z.string().trim().min(5).max(20),
});

export const loginSchema = z.object({
  email: z.string().trim(),
  password: z.string().trim(),
});
