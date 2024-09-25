"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddBookForm() {
  const [callNext, setCallNext] = useState(false);
  // Use react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-full p-5">
      <h1 className="text-2xl font-bold text-center text-gray-600 mb-5">
        Add a book on your profile
      </h1>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Title */}
          <div className="w-full">
            <label className="text-gray-500 font-medium">Title*</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Add Title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* ISBN */}
          <div className="w-full">
            <label className="text-gray-500 font-medium">ISBN*</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="ISBN"
              {...register("isbn", { required: "ISBN is required" })}
            />
            {errors.isbn && (
              <p className="text-red-500 text-sm mt-1">{errors.isbn.message}</p>
            )}
          </div>

          {/* Published Year */}
          <div className="w-full">
            <label className="text-gray-500 font-medium">Published Year*</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Published Year"
              {...register("publishedYear", {
                required: "Published Year is required",
              })}
            />
            {errors.publishedYear && (
              <p className="text-red-500 text-sm mt-1">
                {errors.publishedYear.message}
              </p>
            )}
          </div>

          {/* Publisher */}
          <div className="w-full">
            <label className="text-gray-500 font-medium">Publisher*</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Publisher"
              {...register("publisher", { required: "Publisher is required" })}
            />
            {errors.publisher && (
              <p className="text-red-500 text-sm mt-1">
                {errors.publisher.message}
              </p>
            )}
          </div>

          {/* Cover URL */}
          <div className="w-full">
            <label className="text-gray-500 font-medium">Cover URL*</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Cover URL"
              {...register("cover", { required: "Cover URL is required" })}
            />
            {errors.cover && (
              <p className="text-red-500 text-sm mt-1">
                {errors.cover.message}
              </p>
            )}
          </div>

          {/* Genre */}
          <div className="w-full">
            <label className="text-gray-500 font-medium">Genre*</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Genre"
              {...register("genre", { required: "Genre is required" })}
            />
            {errors.genre && (
              <p className="text-red-500 text-sm mt-1">
                {errors.genre.message}
              </p>
            )}
          </div>

          <div className="w-full col-span-1 sm:col-span-2">
            <label className="text-gray-500 font-medium">Description*</label>
            <textarea
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Short description"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full col-span-1 sm:col-span-2 flex justify-between items-center">
            <button
              type="submit"
              className="custom-glass px-4 w-[120px] font-bold !bg-gray-900 !dark:bg-gray-100 !text-gray-200 !dark:text-gray-900 !py-1 rounded-md"
            >
              Submit
            </button>
            <button
              type="reset"
              className="custom-glass px-4 w-[120px] font-bold !bg-gray-900 !dark:bg-gray-100 !text-gray-200 !dark:text-gray-900 !py-1 rounded-md"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
