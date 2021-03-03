import NextAuth from 'next-auth'
import { session, signIn } from 'next-auth/client'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid'
    }),
    // ...add more providers here
  ],
  session: {
    jwt: true
  },
  callbacks: {
    async signIn(user, account, profile) {
      const id = user.id.toString()
      user.idToken = account.idToken
      return true
    },
    async jwt(token, user, account, profile, isNewUser) {
      // Add access_token to the token right after signin
      if (account?.idToken) {
        user.idToken = account.idToken
        token.accessToken = account.idToken
      }
      return token
    },
    async session(session, user, sessionToken) {
      session.idToken = user.accessToken
      return session
    }
  },
  // A database is optional, but required to persist accounts in a database
  //database: "mongodb://127.0.0.1:27017",
})
