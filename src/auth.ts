import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "../prisma";
import bcrypt from "bcrypt";

async function getUser(email: string | unknown) {
  try {
    if (email) {
      const user = await prisma.user.findFirst({
        where: { email },
      });
      return user;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = getUser(credentials.email);
        if (!user) return null;
        return user;
      },
      credentials: {
        email: {
          label: "email",
          placeholder: "example@mail.com",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      name: "Sign in",
    }),
  ],
});
