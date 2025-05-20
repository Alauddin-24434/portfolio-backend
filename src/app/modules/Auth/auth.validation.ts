import { z } from "zod";

export const userValidation = {
  loginUser: z.object({
    body: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
  }),

  getUser: z.object({
    params: z.object({
      id: z.string().uuid(),
    }),
  }),
};
