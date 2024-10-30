"use client"

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FacebookIcon, Github, Mail } from 'lucide-react'
import { signInSchema } from '@/lib/validation'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { CredentialSignIn } from '../actions/action'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const SignInForm = () => {

  const session = useSession()
  const router = useRouter()
  
  useEffect(() => {
    if(session.status==="authenticated"){
      router.replace('/')
    }
  }, [session, router])

    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
    
     async function onSubmit(data) {
        toast.loading("Signing in", { id: "signin" })
        console.log('Sign in with:', data)
       try {
        await CredentialSignIn(data)
        toast.success("Signed in", { id: "signin" });
        session.update()

        router.replace('/')
        
      
       } catch (error) {
        console.log(error)
        toast.error(error.message, { id: "signin" });
       }
        
    }

      

    return (
        <main className="py-10 w-max-4xl mx-auto ">
            <div className="w-full max-w-md mx-auto space-y-6 border p-10 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-center">Sign In</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </Form>
      <div className="space-y-2">
        
        <Button onClick={()=> signIn("google")} variant="outline" className="w-full">
          <Mail className="mr-2 h-4 w-4" /> Sign in with Google
        </Button>
        <Button onClick={()=> signIn("facebook")} variant="outline" className="w-full">
          <FacebookIcon className="mr-2 h-4 w-4" /> Sign in with Facebook
        </Button>
        <Button onClick={()=> signIn("github")} variant="outline" className="w-full">
          <Github className="mr-2 h-4 w-4" /> Sign in with GitHub
        </Button>
      </div>
      <div className="text-center space-y-2">
        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        <p className="text-sm">
          Don&apos;t have an account? <Link href="/api/auth/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
        </main>
    );
};

export default SignInForm;