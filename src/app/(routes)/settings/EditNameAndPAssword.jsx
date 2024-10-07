"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSession } from "next-auth/react";

export default function EditNameAndPassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setError,
  } = useForm();

  const { data: session, status } = useSession();
  const userInfo = session?.user || {};

  const onSubmit = (data) => {
    const previousPassword = userInfo.password;

    setError("currentPassword", {
      type: "manual",
      message: "Current password is incorrect!",
    });

    // if (data.currentPassword !== previousPassword) {
    //   setError("currentPassword", {
    //     type: "manual",
    //     message: "Current password is incorrect!",
    //   });
    //   return;
    // }

    // Check if the new password and confirm password match
    if (data.password && data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match!",
      });
      return;
    }

    // Update user data by retaining old values if no new input is provided
    const updatedData = {
      coverPhoto: userInfo.coverPhoto,
      image: userInfo.image,
      role: userInfo.role,
      name: data.name || userInfo.name,
      username: data.username || userInfo.username,
      password: data.password || previousPassword, // Keep old password if no new one is set
    };

    // Simulate submission
    console.log("Updated Data: ", updatedData);

    reset(); // Reset the form after successful submission
    setShowCurrentPassword(false); // Optionally reset current password view
  };

  const watchFields = watch([
    "name",
    "username",
    "password",
    "confirmPassword",
  ]);

  // Handle loading and no-session states
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session || !userInfo) {
    return <p>User is not logged in.</p>;
  }

  return (
    <div className="w-full p-4 sm:p-7 md:p-10">
      <h2 className="text-center sm:text-left text-2xl font-bold">
        Update Your Name and Password
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!showCurrentPassword ? (
          <>
            <div className="w-full">
              <label className="block text-sm font-medium mt-3 mb-2">
                Email <small>(You cannot change your email)</small>
              </label>
              <input
                type="text"
                value={userInfo.email}
                disabled
                className="w-full rounded px-3 p-2 border bg-gray-100 dark:bg-zinc-800 outline-0"
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mt-3 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your new name"
                className="w-full rounded px-3 p-2 border outline-0"
                {...register("name")}
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mt-3 mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your new username"
                className="w-full rounded px-3 p-2 border outline-0"
                {...register("username")}
              />
            </div>

            <div className="w-full relative">
              <label className="block text-sm font-medium mt-3 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your new password"
                className="w-full rounded px-3 p-2 border outline-0"
                {...register("password")}
              />
              <button
                type="button"
                className="absolute right-2 top-[50px] transform -translate-y-1/2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="w-full relative">
              <label className="block text-sm font-medium mt-3 mb-2">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your new password"
                className="w-full rounded px-3 p-2 border outline-0"
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="absolute right-2 top-[50px] transform -translate-y-1/2"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Conditionally render the Next button */}
            {watchFields.some((value) => value) && (
              <div className="mt-4">
                <Button
                  onClick={() => setShowCurrentPassword(true)}
                  type="button"
                  className="bg-black text-white px-10"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="w-full relative">
              <label className="block text-sm font-medium mt-3 mb-2">
                Current Password
              </label>
              <input
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter your current password"
                className="w-full rounded px-3 p-2 border outline-0"
                {...register("currentPassword", { required: true })}
              />
              <button
                type="button"
                className="absolute right-2 top-[50px] transform -translate-y-1/2"
                onClick={() => setShowOldPassword((prev) => !prev)}
              >
                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.currentPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>

            <div className="mt-4">
              <Button type="submit" className="bg-black text-white px-10">
                Update
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
