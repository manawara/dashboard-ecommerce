"user server";
import * as z from "zod";
import db from "@/app/lib/db/db";
import { loginSchema } from "@/app/lib/zod";

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

export const loginUser = (values: z.infer<typeof loginSchema>) => {};
