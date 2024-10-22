import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./actions/auth";
import { loginSchema } from "./app/lib/zod";

export default {
  providers: [
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

          if (!user || !user.password) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

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
