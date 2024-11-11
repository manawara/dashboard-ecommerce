import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./lib/db/db";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role?: string;
    id?: string;
  }
}
declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      role?: string;
      id?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
    id?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ token, session }) {
      if (token.role && session.user) {
        session.user.role = token.role;
        session.user.id = token.id || "";
      }
      return session;
    },
  },
  session: { strategy: "jwt", maxAge: 86400 },

  adapter: PrismaAdapter(db),

  secret: process.env.AUTH_SECRET,
  ...authConfig,
});
