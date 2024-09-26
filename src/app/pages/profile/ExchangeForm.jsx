"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ExchangeForm() {
  const [callNext, setCallNext] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    // Generating the formatted data
    const formattedData = {
      id: 4, // This should ideally be dynamic, depending on your system
      title: data.title,
      isbn: data.isbn,
      publishedYear: data.publishedYear,
      publisher: data.publisher,
      description: data.description,
      cover: data.cover,
      genre: data.genre,
      userId: "65463587632165465563",
      author: data.author,
      lookingFor: {
        cover: data.lookingCover,
        genre: data.lookingGenre,
        title: data.lookingTitle,
        author: data.lookingAuthor,
        description: data.opinion, // Assuming this is the "description" of the book you're looking for
      },
    };
    console.log("Formatted Data:", formattedData);
    reset(); // Resetting the form after submission
  };

  return (
    <div className="w-full p-5">
      <h1 className="text-2xl font-bold text-center text-gray-600 mb-5">
        Fill the form to exchange a book
      </h1>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Author */}
          <div className="w-full">
            <label className="text-gray-500 font-medium">Author*</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
              placeholder="Add Author"
              {...register("author", { required: "Author is required" })}
            />
            {errors.author && (
              <p className="text-red-500 text-sm mt-1">
                {errors.author.message}
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

          {/* Description */}
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

          {callNext ? null : (
            <div className="flex justify-end col-span-1 sm:col-span-2">
              {/* Call Next Button */}
              <button
                type="button"
                className="custom-glass px-4 w-[120px] font-bold !bg-gray-900 !dark:bg-gray-100 !text-gray-200 !dark:text-gray-900 !py-1 rounded-md"
                onClick={() => setCallNext(true)}
              >
                Next
              </button>
            </div>
          )}

          {/* Looking For Section */}
          {callNext ? (
            <div className="w-full col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Looking Title */}
              <div className="w-full">
                <label className="text-gray-500 font-medium">
                  Looking For Title*
                </label>
                <input
                  type="text"
                  className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                  placeholder="Looking for Title"
                  {...register("lookingTitle", {
                    required: "Looking for Title is required",
                  })}
                />
                {errors.lookingTitle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lookingTitle.message}
                  </p>
                )}
              </div>

              {/* Looking Cover URL */}
              <div className="w-full">
                <label className="text-gray-500 font-medium">
                  Looking For Cover URL*
                </label>
                <input
                  type="text"
                  className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                  placeholder="Looking for Cover URL"
                  {...register("lookingCover", {
                    required: "Looking for Cover URL is required",
                  })}
                />
                {errors.lookingCover && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lookingCover.message}
                  </p>
                )}
              </div>

              {/* Looking Genre */}
              <div className="w-full">
                <label className="text-gray-500 font-medium">
                  Looking For Genre*
                </label>
                <input
                  type="text"
                  className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                  placeholder="Looking for Genre"
                  {...register("lookingGenre", {
                    required: "Looking for Genre is required",
                  })}
                />
                {errors.lookingGenre && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lookingGenre.message}
                  </p>
                )}
              </div>

              {/* Looking Author */}
              <div className="w-full">
                <label className="text-gray-500 font-medium">
                  Looking For Author*
                </label>
                <input
                  type="text"
                  className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                  placeholder="Looking for Author"
                  {...register("lookingAuthor", {
                    required: "Looking for Author is required",
                  })}
                />
                {errors.lookingAuthor && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lookingAuthor.message}
                  </p>
                )}
              </div>

              {/* Opinion */}
              <div className="w-full col-span-1 sm:col-span-2">
                <label className="text-gray-500 font-medium">Opinion*</label>
                <textarea
                  className="w-full mt-1 rounded-md py-1 px-3 border outline-0"
                  placeholder="Opinion"
                  {...register("opinion", { required: "Opinion is required" })}
                />
                {errors.opinion && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.opinion.message}
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
          ) : null}
        </div>
      </form>
    </div>
  );
}
