import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          email: "alexdacosta@gmail.com",
          password: '1234',
          name: 'Alex',
          role: 'admin'
        }
        if (user.email !== credentials?.email || user.password !== credentials?.password) {
          return null;
        }
        return user;
      }
    })
  ],
  callbacks: {
    jwt: async ({token, user}) => {
      const customUser = user as unknown as any 
      if (user) {
          return {
          ...token,
          role: customUser.role
          }
      }
      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          role: token.role
        }
      };
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };