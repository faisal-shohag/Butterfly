"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
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
      <div className="w-full mx-auto p-10 sm:px-10 px-5  blurBg bg-white dark:bg-gray-800">
        {/* Title */}
        <h2 className="text-2xl sm:font-3xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-200">
          Welcome
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full relative">
              <label className="block mb-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
                First Name*
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#18181b]"
                placeholder="Enter your first name"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-600 mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div className="w-full relative">
              <label className="block mb-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
                Last Name*
              </label>
              <input
                type="text"
                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#18181b]"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last Name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-600 mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="w-full relative">
            <label className="block mb-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
              Email*
            </label>
            <input
              type="email"
              className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#18181b]"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="w-full relative">
            <label className="block mb-2 text-gray-600 dark:text-gray-300 text-sm font-medium">
              Password*
            </label>
            <input
              type="password"
              className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#18181b]"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                validate: {
                  upperCase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must have at least one uppercase letter",
                  lowerCase: (value) =>
                    /[a-z]/.test(value) ||
                    "Password must have at least one lowercase letter",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
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
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-[#18181b] text-white hover:bg-[#333335] focus:outline-none focus:ring-2 focus:ring-[#18181b]"
          >
            Registration
          </button>
        </form>

        {/* Already Have an Account */}
        <div className="text-start mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/pages/authentication/login")}
              className="text-[#18181b] dark:text-gray-300 hover:underline"
            >
              Login
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
        <div className="flex justify-center items-center gap-4">
          <GoogleAuth />
          <FaceBookAuth />
        </div>
      </div>
    </div>
  );
}
