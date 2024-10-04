"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"

export async function SetUsernameDB(username) {
    const {user} = await auth()
    try {
        const existingUser = await prisma.user.findUnique({
          where: { username },
        })
  
        if (existingUser) {
          return { error: 'Username already taken' }
        }
  
        const currentUser = await prisma.user.findUnique({
          where: { id: user.id },
        })
  
        if (currentUser?.username) {
          return { error: 'Username already set!' }
        }

        await prisma.user.update({
          where: { id: user.id },
          data: { username: username },
        })

        return { success: 'Username set successfully!' }
      } catch (error) {
        console.error('Error setting username:', error)
        return { error: 'An error occurred while setting the username' }
      }
}