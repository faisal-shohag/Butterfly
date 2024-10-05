"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export default function EditNameAndPassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password && data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match!",
      });
      return;
    }
    // If form is valid, submit data or move to the next step
    setShowCurrentPassword(true);
  };

  const watchFields = watch([
    "name",
    "username",
    "password",
    "confirmPassword",
  ]);

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
                value="hafazrobiussani@gmail.com"
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
            <div className="w-full">
              <label className="block text-sm font-medium mt-3 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="w-full rounded px-3 p-2 border outline-0"
                {...register("password")}
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium mt-3 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your new password"
                className="w-full rounded px-3 p-2 border outline-0"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Conditionally render the Next button */}
            {watchFields.some((value) => value) && (
              <div className="mt-4">
                <Button className="bg-black text-white px-10">Next</Button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="w-full">
              <label className="block text-sm font-medium mt-3 mb-2">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Enter your current password"
                className="w-full rounded px-3 p-2 border outline-0"
                {...register("currentPassword", { required: true })}
              />
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
