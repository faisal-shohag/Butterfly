"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import GoogleAuth from "../Social/GoogleAuth";
import FaceBookAuth from "../Social/FaceBookAuth";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login functionality here
  };

  return (
    <div className="w-full relative blurBg flex justify-center items-center">
      <div className="w-full mx-auto p-10 sm:px-10 px-5 rounded-lg  blurBg">
        {/* Title */}
        <h2 className="text-2xl sm:font-3xl font-semibold text-center mb-6 text-gray-700">
          Welcome
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full relative">
              <label className="block mb-2 text-gray-600 text-sm font-medium">
                First Name*
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your first name"
                {...register("firstName", { required: "First Name required" })}
              />
              {errors.firstName && (
                <p className="text-red-600 mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div className="w-full relative">
              <label className="block mb-2 text-gray-600 text-sm font-medium">
                Last Name*
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 rounded-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last Name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-600 mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="w-full relative">
            <label className="block mb-2 text-gray-600 text-sm font-medium">
              Email*
            </label>
            <input
              type="email"
              className="w-full bg-gray-100 rounded-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="w-full relative">
            <label className="block mb-2 text-gray-600 text-sm font-medium">
              Password*
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-full  text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:text-gray-900"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters",
                },
                validate: {
                  upperCase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must have at least one uppercase letter",
                  lowerCase: (value) =>
                    /[a-z]/.test(value) ||
                    "Password must have at least one small letter",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
            <label className="flex items-center text-gray-600 text-sm">
              <input
                type="checkbox"
                className="mr-2 rounded focus:ring-orange-500"
                {...register("rememberMe")}
              />
              Remember Me
            </label>
            <button
              onClick={() => router.push("/forgot-password")}
              className="text-sm text-orange-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-orange-600 text-white  hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Sign Up
          </button>
        </form>

        {/* Sign-Up Button */}
        <div className="text-start mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/pages/authentication/login")}
              className="text-orange-600 hover:underline"
            >
              Login
            </button>
          </p>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login Options */}
        <div className="flex justify-center items-center gap-4">
          {/* Google Login */}
          <GoogleAuth></GoogleAuth>

          {/* Facebook Login */}
          <FaceBookAuth></FaceBookAuth>
        </div>
      </div>
    </div>
  );
}
