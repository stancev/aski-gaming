import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
//import axios from 'axios';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials: any) => {
        const res = await fetch(`${process.env.API_URL}/auth/local`, {
          method: 'POST',
          body: JSON.stringify({
            identifier: credentials.identifier,
            password: credentials.password
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        const data = await res.json();

        if (res.ok && data) {
          const sessionUser = {
            id: data.user.id,
            name: data.user.username,
            email: data.user.email
          };

          return { ...sessionUser, jwt: data.jwt }; // Combine user info and JWT into one object
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { user: any; token: any }) {
      if (user) {
        token.jwt = user.jwt;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.jwt = token.jwt;
      if (session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/signin'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
