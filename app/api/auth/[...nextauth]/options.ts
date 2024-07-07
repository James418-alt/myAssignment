import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { name: "email", type: "text" },
        password: { name: "password", type: "text" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/signin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        // console.log(user);

        if (user) {
          return {
            ...user,
            name: user.data.name,
            email: user.data.email,
            id: user.data._id,
          };
        }

        return null;
      },
    }),
  ],
  secret: "odsdjsdhuweu9467jsdjkhjks",
  callbacks: {
    redirect() {
      return "/";
    },
    async jwt({ user, token }: any) {
      if (user) token.id = user.id;

      return token;
    },

    async session({ session, token }: any) {
      if (session) session.user.id = token.id;

      return session;
    },
  },
};
