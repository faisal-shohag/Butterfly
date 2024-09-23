"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import GoogleAuth from "../Social/GoogleAuth";
import FaceBookAuth from "../Social/FaceBookAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login functionality here
  };

  return (
  
      <div className="w-full mx-auto p-10 sm:px-10 px-5 rounded-lg  custom-glass">
        {/* Title */}
        <h2 className="text-2xl  sm:font-3xl font-semibold text-center mb-6">
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div className="w-full relative">
            <label className="block mb-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
              Email*
            </label>
            <Input
              type="email"
            
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-600 dark:text-red-400 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="w-full relative">
            <label className="block mb-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
              Password*
            </label>
            <Input
              type="password"
            
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-600 dark:text-red-400 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
              <input
                type="checkbox"
                className="mr-2 rounded focus:ring-[#18181b]"
                {...register("rememberMe")}
              />
              Remember Me
            </label>
            <button
              onClick={() => router.push("/forgot-password")}
              className="text-sm text-[#18181b] dark:text-gray-300 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full custom-glass text-black dark:text-zinc-200 hover:bg-zinc-950 hover:text-white"
          >
            Login
          </Button>
        </form>

        {/* Sign-Up Button */}
        <div className="text-start mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Don&apos;t have an account?
            <button
              onClick={() => router.push("/pages/authentication/registration")}
              className="text-[#18181b] dark:text-gray-300 hover:underline"
            >
               Registration
            </button>
          </p>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login Options */}
        <div className="grid grid-cols-2 justify-center items-center gap-4">
          {/* Google Login */}
          <GoogleAuth></GoogleAuth>

          {/* Facebook Login */}
          <FaceBookAuth></FaceBookAuth>
        </div>
      </div>
    
  );
}
