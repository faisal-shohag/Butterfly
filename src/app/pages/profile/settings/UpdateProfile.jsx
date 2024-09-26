import React from "react";
import { useForm } from "react-hook-form"; // Assuming you're using react-hook-form

export default function UpdateProfile() {
  // useForm hook to manage form states and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Updated Data:", data);
    // Perform update logic here (e.g., API call to update profile)
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="w-full pb-2 flex justify-between border-dashed border-b-2">
        <h3 className="font-bold">Update User Profile</h3>
      </div>

      {/* Form Section */}
      <div className="w-full mt-2">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Profile Image URL Field */}
          <div className="w-full mb-4">
            <label className="text-gray-500 font-medium">
              Profile Image URL
            </label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Enter your profile image URL"
              {...register("profileImageUrl", {
                required: "Profile Image URL is required", // Validation rule for profile image
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/, // Validate URL format
                  message: "Please enter a valid URL",
                },
              })}
            />
            {errors.profileImageUrl && (
              <p className="text-red-500 text-sm mt-1">
                {errors.profileImageUrl.message}
              </p>
            )}
          </div>

          {/* Cover Image URL Field */}
          <div className="w-full mb-4">
            <label className="text-gray-500 font-medium">Cover Image URL</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Enter your cover image URL"
              {...register("coverImageUrl", {
                required: "Cover Image URL is required", // Validation rule for cover image
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/, // Validate URL format
                  message: "Please enter a valid URL",
                },
              })}
            />
            {errors.coverImageUrl && (
              <p className="text-red-500 text-sm mt-1">
                {errors.coverImageUrl.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full mt-4">
            <button
              type="submit"
              className="custom-glass px-4 w-[150px] font-bold !bg-gray-900 !dark:bg-gray-100 !text-gray-200 !dark:text-gray-900 !py-1 rounded-md"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
