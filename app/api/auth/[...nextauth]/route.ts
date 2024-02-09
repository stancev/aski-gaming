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
      async profile(profile, tokens) {
        console.log(profile);
        const defaultImage = 'https://cdn-icons-png.flaticon.com/512/174/174857.png';
        const userLinkedInData = {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage
        };
        const res = await fetch(
          `${process.env.API_URL}/auth/linkedin/callback?access_token=${tokens.access_token}`
        );
        const data = await res.json();
        console.log(tokens);
        console.log(data);
        return { ...userLinkedInData, jwt: data.jwt };
        // Fetch user data from Strapi
        // let res = await fetch(`${process.env.API_URL}/users?filters[email]=${profile.email}`);
        //let data = await res.json();

        // // If user does not exist, create a new user
        // try {
        //   if (data.length === 0) {
        //     console.log(userLinkedInData.name);
        //     //const sanitizedUsername = userLinkedInData.name.replace(/\s+/g, '');
        //     console.log(profile);
        //     res = await fetch(`${process.env.API_URL}/auth/local/register`, {
        //       method: 'POST',
        //       headers: { 'Content-Type': 'application/json' },
        //       body: JSON.stringify({
        //         username: profile.given_name,
        //         email: userLinkedInData.email,
        //         password: 'Test12345'
        //       })
        //     });
        //     data = await res.json();
        //     if (!data.user) {
        //       throw new Error('User registration failed');
        //     }
        //   }
        // } catch (error) {
        //   console.error('An error occurred:', error);
        //   throw error; // Propagate the error up the call stack
        // }

        // Authenticate user
        // res = await fetch(`${process.env.API_URL}/auth/local`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     identifier: profile.email,
        //     password: 'Test12345'
        //   })
        // });

        // const authData = await res.json();
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
