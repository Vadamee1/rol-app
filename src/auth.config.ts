import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt'
import prisma from '../prisma';
 
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null
        const {email, password} = parsedCredentials.data

        const user = await prisma.user.findUnique({where: {email}})
        if (!user) return null
        if (bcrypt.compareSync( password, user.password )) return null

        const { password: _, ...rest} = user 

        return rest
      },
    }),
  ],
  callbacks: {
    jwt({token, user}) {
      if ( user ) {
        token.data = user
      }

      return token
    },
    session({session, token, user}) {
      session.user = token.data as any
      return session
    }
  }
};

export const { signIn, signOut, auth } = NextAuth(authConfig)