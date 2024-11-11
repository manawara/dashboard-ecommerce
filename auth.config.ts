import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "./lib/zod";
import { getUserByEmail } from "./actions/auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const { email, password } = await loginSchema.parseAsync(credentials);

          const user = await getUserByEmail(email);

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(
            password,
            user.password as string
          );
          if (!passwordMatch) {
            return null;
          }
          return {
            ...user,
            id: user.id.toString(), // Convert numeric id to string
          };
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation error:", error.errors);
          } else {
            console.error("Authorization error:", error);
          }
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
