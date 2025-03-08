import { z } from "zod";

export const usernameValidtaion = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+s/, "Username must not be contain special character");

export const singUpSchema = z.object({
  username: usernameValidtaion,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be atlest 6 character" }),
});
