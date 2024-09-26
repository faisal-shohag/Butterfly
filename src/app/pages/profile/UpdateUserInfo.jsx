"use client";
import { useForm } from "react-hook-form";

export default function UpdateUserInfo() {
  // Initialize react-hook-form with register, handleSubmit, and formState for error handling
  const {
    register,
    handleSubmit, // This will be used to handle form submission
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    // You can process the form data here (e.g., send it to an API)
    console.log("Form Submitted Data: ", data);
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="w-full pb-2 flex justify-between border-dashed border-b-2">
        <h3 className="font-bold">Update User Informetion</h3>
      </div>

      {/* Form Section */}
      <div className="w-full mt-2">
        {/* Call handleSubmit when the form is submitted */}
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Field */}
          <div className="w-full">
            <label className="text-gray-500 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Update your name"
              {...register("name", {
                required: "Name is required", // Validation rule for name
              })}
            />
            {errors.name && ( // Error handling for name field
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="w-full mt-4">
            <label className="text-gray-500 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Update your email"
              {...register("email", {
                required: "Email is required", // Validation rule for email
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Invalid email format", // Pattern validation
                },
              })}
            />
            {errors.email && ( // Error handling for email field
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="w-full mt-4">
            <label className="text-gray-500 font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Update your password"
              {...register("password", {
                required: "Password is required", // Validation rule for password
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters long", // Length validation
                },
              })}
            />
            {errors.password && ( // Error handling for password field
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full mt-4">
            <button
              type="submit"
              className="custom-glass px-4 w-[150px] font-bold !bg-gray-900 !dark:bg-gray-100 !text-gray-200 !dark:text-gray-900 !py-1 rounded-md"
            >
              Update Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
