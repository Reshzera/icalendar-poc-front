import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginForm = z.object({
  email: z.string().email().min(0),
  password: z.string().min(6),
});

export type LoginFormData = z.infer<typeof loginForm>;

export const loginFormResolver = zodResolver(loginForm);
