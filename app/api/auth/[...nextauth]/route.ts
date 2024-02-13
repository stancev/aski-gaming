import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import LinkedInProvider from 'next-auth/providers/linkedin';
//import axios from 'axios';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      authorization: {
        params: { scope: 'openid profile email' }
      },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture
        };
      }
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
    async jwt({ token, user, account }: { user: any; token: any; account: any }) {
      if (account?.provider === 'linkedin') {
        const res = await fetch(`${process.env.API_URL}/linkedinAuth`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        });
        const data = await res.json();
        token.jwt = data.jwtToken;
      } else {
        if (user) {
          token.jwt = user.jwt;
        }
      }

      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.jwt = token.jwt;
      if (session.user) {
        session.user.id = token.sub as string;
      }
      // Checking user status on Strapi and updating session
      const res = await fetch(`${process.env.API_URL}/users/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.jwt}`
        }
      });
      if (res.ok) {
        return session;
      } else {
        return null;
      }
    }
  },
  pages: {
    signIn: '/signin'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
