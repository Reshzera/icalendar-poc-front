import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpForm = z
  .object({
    email: z.string().email().min(1),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    name: z.string().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type signUpFormData = z.infer<typeof signUpForm>;

export const signUpFormResolver = zodResolver(signUpForm);
