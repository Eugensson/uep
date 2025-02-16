"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { prisma } from "@/prisma/prisma";

import { RegisterSchema } from "@/schemas";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  try {
    const validatedData = RegisterSchema.parse(data);

    if (!validatedData) {
      return { error: "Invalid input data" };
    }

    const { email, name, password, passwordConfirmation } = validatedData;

    if (password !== passwordConfirmation) {
      return { error: "Passwords do not match" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExists) {
      return { error: "Email already is in use. Please try another one." };
    }

    const lowerCaseEmail = email.toLowerCase();

    await prisma.user.create({
      data: {
        email: lowerCaseEmail,
        name,
        password: hashedPassword,
      },
    });

    return { success: "User created successfully" };
  } catch (error) {
    console.error("Database error:", error);

    if ((error as { code: string }).code === "ETIMEDOUT") {
      return {
        error: "Unable to connect to the database. Please try again later.",
      };
    } else if ((error as { code: string }).code === "503") {
      return {
        error: "Service temporarily unavailable. Please try again later.",
      };
    } else {
      return { error: "An unexpected error occurred. Please try again later." };
    }
  }
};
