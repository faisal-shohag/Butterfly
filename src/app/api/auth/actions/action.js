"use server";

import { auth, signIn } from "@/auth";
import { signJwt, verifyJwt } from "@/lib/jwt";
import { compileActivationTemplate, sendMail } from "@/lib/mail";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function CredentialSignIn(formData) {
     try {
        const res = await signIn("credentials", {
            username: formData.email,
            password: formData.password,
            redirect: false,
        });

        if (res?.error) {
            return { error: res.error };
        }

        if (res?.url) {
            return { success: true, url: res.url };
        }

    } catch (error) {
         throw new Error(error.message.toString().split('.')[0])
    }
}


export async function CredentialSignUp(formData) {
   try {
     const result = await prisma.user.create({
        data: {
            email: formData.email,
            password: formData.password,
            name: formData.name,
            username: formData.username,
        }
     })

     const jwtUserId = signJwt({ id: result.id })

     const activationUrl = `${process.env.NEXTURL}/api/auth/activation/${jwtUserId}`

     await sendMail({
        to: result.email,
        subject: 'Activate your account',
        body: `${activationUrl}`
     })

    return "verify"
   } catch (error) {
      console.log(error)
      throw new Error(error)
   }
}

export async function GoogleSignIn() {
  try {
    const { data, error } = await signIn("google");
    console.log(data, error);
  } catch (error) {
    throw new Error(error);
  }
}

export async function GithubSignIn() {
  try {
    const response = await signIn("github", { redirectTo: "/" });
    console.log(response);
    return response;
    // redirect('/')
  } catch (error) {
    throw new Error(error);
  }
}


export async function activateUser(jwtId){
    const payload = await verifyJwt(jwtId)
    const userId = payload?.decoded.id
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if(!user) return { message: "!exist" }
    if(user.emailVerified) return { message: "verified" }
    const updatedUser = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            emailVerified: new Date()
        }
    })


    return {message: 'success', user: updatedUser}
}