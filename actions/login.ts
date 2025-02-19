"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";

import { LoginSchema } from "@/schemas";

import { prisma } from "@/prisma/prisma";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validatedData = LoginSchema.parse(data);

  if (!validatedData) {
    return { error: "Invalid input data" };
  }

  const { email, password } = validatedData;

  const userExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!userExists || !userExists.password || !userExists.email) {
    return { error: "User not found" };
  }

  try {
    await signIn("credentials", {
      email: userExists.email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Please confirm your email adress" };
      }
    }
    throw error;
  }

  return { success: "User logged in successfully" };
};
