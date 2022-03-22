import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

        // .. add more providers here
    ],
})