"use client";
import { useForm } from "react-hook-form"; // Import react-hook-form for form management and validation

export default function UpdateAddress() {
  // useForm hook for form validation and submission handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Updated Address:", data);
    // Perform update logic here (e.g., API call to update address)
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="w-full pb-2 flex justify-between border-dashed border-b-2">
        <h3 className="font-bold">Update Address</h3>
      </div>

      {/* Form Section */}
      <div className="w-full mt-2">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Street Address Field */}
          <div className="w-full mb-4">
            <label className="text-gray-500 font-medium">Street Address</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Enter your street address"
              {...register("streetAddress", {
                required: "Street address is required", // Validation rule for street address
              })}
            />
            {errors.streetAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.streetAddress.message}
              </p>
            )}
          </div>

          <div className="w-full grid grid-cols-2 gap-5">
            {/* Holding Number Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">
                Holding Number
              </label>
              <input
                type="text"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your holding number"
                {...register("holdingNumber", {
                  required: "Holding number is required", // Validation rule for holding number
                })}
              />
              {errors.holdingNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.holdingNumber.message}
                </p>
              )}
            </div>

            {/* Postal Code Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">Postal Code</label>
              <input
                type="text"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your postal code"
                {...register("postalCode", {
                  required: "Postal code is required", // Validation rule for postal code
                  pattern: {
                    value: /^[0-9]{4,6}$/, // Validate for 4-6 digit postal code
                    message: "Please enter a valid postal code",
                  },
                })}
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.postalCode.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Town Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">Town</label>
              <input
                type="text"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your town"
                {...register("town", {
                  required: "Town is required", // Validation rule for town
                })}
              />
              {errors.town && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.town.message}
                </p>
              )}
            </div>

            {/* District Field */}
            <div className="w-full mb-4">
              <label className="text-gray-500 font-medium">District</label>
              <input
                type="text"
                className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                placeholder="Enter your district"
                {...register("district", {
                  required: "District is required", // Validation rule for district
                })}
              />
              {errors.district && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.district.message}
                </p>
              )}
            </div>
          </div>

          {/* Country Field */}
          <div className="w-full mb-4">
            <label className="text-gray-500 font-medium">Country</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Enter your country"
              {...register("country", {
                required: "Country is required", // Validation rule for country
              })}
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full mt-4">
            <button
              type="submit"
              className="custom-glass px-4 w-[170px] font-bold !bg-gray-900 !dark:bg-gray-100 !text-gray-200 !dark:text-gray-900 !py-1 rounded-md"
            >
              Update Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
