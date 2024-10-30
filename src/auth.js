import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { AuthError } from "next-auth"
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import Facebook from 'next-auth/providers/facebook';
import prisma from "./lib/prisma";
import Credentials from 'next-auth/providers/credentials';


export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    theme: {
        logo: "/logo.png"
    },
    adapter: PrismaAdapter(prisma),
    providers: [Google, Github, Facebook,
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "text" }, // Change to email
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials.username || !credentials.password) return null;

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.username
                    }
                })
                
                if(!user) throw new AuthError("User not found")
                
                if(!credentials.password) throw new AuthError("Please provide your password!")
                const isPasswordCorrect = credentials.password === user.password;

                // console.log(user, isPasswordCorrect)

                if(!isPasswordCorrect) throw new AuthError("Password is incorrect")

                if(!user.emailVerified) throw new AuthError("Please verify your email")

                    const { password, ...userWithoutPass } = user;
                    return userWithoutPass;
            }
        })
    ],
    events: {
        async signIn({ user }) {
            // console.log("signIN", user)
        },

        async session(session) {
            // console.log("session", session)
        }
    },
    callbacks: {
        
        async jwt({ token, user, session, trigger}) {

            if(trigger === "update" && session?.name) {
                token.name = session.name;
                token.username = session.username;
                token.image = session.image;
            }

            //
            if(user) {
                return {
                    ...token,
                    id: user.id,
                    role: user.role,
                    coverPhoto: user.coverPhoto,
                    username: user.username,
                    image: user.image,
                }
            }
            // console.log(token)
            return token
        },
        async session({ token, session, user }) {
            if(token.sub && session.user){
                session.user.id = token.sub
            }
            // console.log("token from session", token)
            // console.log("session", session)
            return {
                ...session,
                user:{
                    ...session.user, 
                    role: token.role,
                    name: token.name,
                    coverPhoto: token.coverPhoto,
                    username: token.username,
                    image: token.image
                }
            }
        },
    },
    session: { strategy: "jwt" },
})