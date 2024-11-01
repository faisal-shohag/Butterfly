"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BadgeCheck, FacebookIcon, Github, Mail } from "lucide-react";
import { signUpSchema } from "@/lib/validation";
import Link from "next/link";
import { CredentialSignUp } from "../actions/action";
import { useQuery } from "react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";

const SignUpForm = () => {
  const axiosSecure = useAxiosSecure();
  const [isVerify, setIsVerify] = React.useState(false)
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });




async function onSubmit(data) {
  toast.loading('Signing up...', {id: 'signup'})
  try {
    await CredentialSignUp(data)

    toast.success('Successfully signed up!', {id: 'signup'})

    setIsVerify(true)
  } catch (error) {
    toast.error('Failed to sign up!', {id: 'signup'})
    
  }
    console.log("Sign up with:", data);
  }

  const { data: usernameAvailability, refetch: checkUsername } = useQuery(
    ["checkUsername", form.watch("username")],
    async () => {
      const response = await axiosSecure.get(`/check-username/${form.watch("username")}`);
      return response.data;
    },
    {
      enabled: false, // This query will not run automatically
      retry: false, // Don't retry on failure
    }
  );

  const handleCheckUsername = async () => {
    const username = form.getValues("username");
    if(username.includes(" ") || !/^[a-zA-Z0-9_]+$/.test(username) || !username){
      toast.error("Username should not have spaces and specialcharacter")
      return
    }
      checkUsername();
  };

  React.useEffect(() => {
    if (usernameAvailability) {
      if (usernameAvailability.available) {
        toast.success("Username is available",
         );
      } else {
        toast.error("Username is not available");
      }
    }
  }, [usernameAvailability, toast]);


  return (
    <main className="py-10 w-max-4xl mx-auto ">
     {isVerify? <div className="w-full max-w-md mx-auto space-y-2 border  p-10 rounded-xl shadow-xl text-center flex justify-center flex-col items-center bg-white dark:bg-zinc-900">
      <div className="text-green-500"><BadgeCheck size={40}/></div>
        <div className="font-semibold">An email has been sent.</div>
        <p className="text-sm">

          Please verify your account and then <Link href="/api/auth/signin" className="text-blue-600 hover:underline">Sign in</Link>
        </p>
      </div> : <div className="w-full max-w-md mx-auto space-y-6 border p-10 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


<FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <div className="flex space-x-2">
                      <FormControl>
                        <Input placeholder="Username" {...field} />
                      </FormControl>
                      <Button type="button" variant="outline" onClick={handleCheckUsername}>
                        Check
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
        <div className ="text-center items-center text-slate-500 flex gap-2">
        <div className="w-1/2 h-[1px] bg-slate-400"></div>
        <div>or</div>
        <div className="w-1/2 h-[1px] bg-slate-400"></div>
        </div>
        <div className="space-y-2">
        <Button onClick={()=> signIn("google")} variant="outline" className="w-full">
            <FaGoogle className="mr-2 h-4 w-4" /> Sign in with Google
          </Button>

          <Button onClick={()=> signIn("facebook")} variant="outline" className="w-full">
            <FacebookIcon className="mr-2 h-4 w-4" /> Sign in with Facebook
          </Button>

          {/* <Button onClick={()=> signIn("github")} variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" /> Sign in with GitHub
          </Button> */}
         
        </div>
        <div className="text-center space-y-2">
          <p className="text-sm">
          <span>Already have an account?</span> <Link
              href="/api/auth/signin"
              className="text-blue-600 hover:underline"
            >
              Sign 
            </Link>
          </p>
        </div>
      </div>}
    </main>
  );
};

export default SignUpForm;