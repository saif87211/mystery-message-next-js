import { z } from "zod";
import { usernameValidtaion } from "./signUpSchema";

export const signInSchema = z.object({
  identifier: usernameValidtaion,
  password: z
    .string()
    .min(6, { message: "password must be atlest 6 character" }),
});
