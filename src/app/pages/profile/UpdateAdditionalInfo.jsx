"use client";
import { useForm } from "react-hook-form"; // Import react-hook-form for form management and validation

export default function UpdateAdditionalInfo() {
  // useForm hook for form validation and submission handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Updated Additional Information:", data);
    // Perform update logic here (e.g., API call to update additional information)
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="w-full pb-2 flex justify-between border-dashed border-b-2">
        <h3 className="font-bold">Update Additional Information</h3>
      </div>

      {/* Form Section */}
      <div className="w-full mt-2">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full grid grid-cols-2 gap-5">
            {/* Age Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">Age</label>
              <input
                type="number"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your age"
                {...register("age", {
                  required: "Age is required", // Validation rule for age
                  min: {
                    value: 1,
                    message: "Age must be at least 1", // Minimum age limit
                  },
                  max: {
                    value: 150,
                    message: "Please enter a valid age", // Maximum age limit
                  },
                })}
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.age.message}
                </p>
              )}
            </div>

            {/* Gender Field (Dropdown) */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">Gender</label>
              <select
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                {...register("gender", {
                  required: "Gender is required", // Validation rule for gender
                })}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Mobile Number Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">Mobile Number</label>
              <input
                type="tel"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your mobile number"
                {...register("mobile", {
                  required: "Mobile number is required", // Validation rule for mobile number
                  pattern: {
                    value: /^[0-9]{10,15}$/, // Validation for 10-15 digit numbers
                    message: "Please enter a valid mobile number",
                  },
                })}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">
                Is This Number Have Whatsapp?
              </label>
              <select
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                {...register("whatsapp", {
                  required: "whatsapp is required", // Validation rule for whatsapp
                })}
              >
                <option value="">Select whatsapp</option>
                <option value="Male">Yes</option>
                <option value="Female">No</option>
              </select>
              {errors.whatsapp && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.whatsapp.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* School Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">
                School (optional)
              </label>
              <input
                type="text"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your school name"
                {...register("school")}
              />
            </div>

            {/* College or Office Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">
                College/Office (optional)
              </label>
              <input
                type="text"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your college or office name"
                {...register("collegeOrOffice")}
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Facebook Profile Link Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">
                Facebook Profile Link (optional )
              </label>
              <input
                type="url"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your Facebook profile link"
                {...register("facebookProfile")}
              />
            </div>

            {/* Website Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">
                Website (optional)
              </label>
              <input
                type="url"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your website link"
                {...register("website")}
              />
            </div>
          </div>

          {/* Hobbies Field */}
          <div className="w-full mb-4">
            <label className="text-gray-500 font-medium">Hobbies</label>
            <textarea
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Enter your hobbies"
              {...register("hobbies")}
            />
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
