"use server";
import * as z from "zod";
import db from "@/app/lib/db/db";
import { loginSchema, registerSchema } from "@/app/lib/zod";
import { signIn } from "@/auth";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const loginUser = async (values: z.infer<typeof loginSchema>) => {
  const { password, email } = values;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Invalid data or not existing user" };
  }
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid data or not existing user" };
        default:
          return { error: "Upss... Something went wrong. Try again" };
      }
    }
  }
};

export const createUser = async (formData: z.infer<typeof registerSchema>) => {
  const { email, name, password } = formData;
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Invalid data or existing user" };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });
    return { success: true };
  } catch (error) {
    return { error: error || "Something went wrong" };
  }
};
