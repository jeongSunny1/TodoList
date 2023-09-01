import { z } from "zod";

const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"
);

export const schema = z.object({
  title: z.string().trim().min(1).max(15),
  content: z.string().trim().min(5).max(20),
});

export const loginSchema = z.object({
  email: z.string().trim().email().regex(emailRegex, "Invalid EmailRegex"),
  password: z
    .string()
    .trim()
    .min(8)
    .max(15)
    .regex(passwordRegex, "Invalid PasswordRegex"),
});
