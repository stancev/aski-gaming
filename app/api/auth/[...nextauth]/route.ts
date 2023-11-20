import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

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
        console.log('test', credentials);
        if (credentials.google) {
          const googleUser = credentials.google;
          console.log('test', 'google', googleUser);
        }
        try {
          const { data } = await axios.post(`${process.env.API_URL}/auth/local`, {
            identifier: credentials.identifier,
            password: credentials.password
          });

          if (data) {
            // Any object returned will be saved in `user` property of the JWT
            const sessionUser = {
              id: data.user.id,
              name: data.user.username,
              email: data.user.email
            };
            console.log('test', sessionUser);
            return Promise.resolve({ ...sessionUser, email: sessionUser.email });
          } else {
            // If you return null or false then the credentials will be rejected
            return Promise.resolve(null);
          }
        } catch (error) {
          return Promise.resolve(null);
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      console.log('test', 'session', session);
      console.log('test', 'token', token);
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
