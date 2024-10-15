"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "react-query";

export default function Page() {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: (data) => axiosSecure.post("/add_store_books", data),
    onSuccess: () => {
      reset();
      toast.success("Book added successfully!");
    },
    onError: (error) => {
      console.error(error);
      toast.error(`Error: ${error.response?.data.message || error.message}`);
    },
  });

  const onSubmit = (data) => {
    const bookData = {
      title: data.title,
      description: data.description,
      author: data.author,
      publications: data.publications || null,
      publishedDate: data.publishedDate
        ? new Date(data.publishedDate).toISOString()
        : null,
      price: parseFloat(data.price) || 0,
      coin: parseInt(data.coin) || 0,
      discount: parseFloat(data.discount) || 0,
      category: data.category,
      language: data.language,
      cover: data.cover || null,
      pdfURL: data.pdfURL || null,
    };

    console.log(bookData);
    mutation.mutate(bookData);
  };

  return (
    <div className="w-full">
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="custom-glass w-full rounded-md p-5 space-y-4"
      >
        <h1 className="text-center font-bold text-xl text-gray-600 dark:text-gray-300">
          Add Store Book
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Title Field */}
          <div>
            <label htmlFor="title">Title</label>
            <Input
              id="title"
              {...register("title", { required: "Title is required" })}
              placeholder="Enter book title"
              className="w-full"
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>

          {/* Author Field */}
          <div>
            <label htmlFor="author">Author</label>
            <Input
              id="author"
              {...register("author", { required: "Author is required" })}
              placeholder="Enter author name"
              className="w-full"
            />
            {errors.author && (
              <span className="text-red-500">{errors.author.message}</span>
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Publications Field */}
          <div>
            <label htmlFor="publications">Publications</label>
            <Input
              id="publications"
              {...register("publications")}
              placeholder="Enter publication details"
              className="w-full"
            />
          </div>

          {/* Language Field */}
          <div>
            <label htmlFor="language">Language</label>
            <Input
              id="language"
              {...register("language", { required: "Language is required" })}
              placeholder="Enter language"
              className="w-full"
            />
            {errors.language && (
              <span className="text-red-500">{errors.language.message}</span>
            )}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Cover URL Field */}
          <div>
            <label htmlFor="cover">Cover URL</label>
            <Input
              id="cover"
              {...register("cover")}
              placeholder="Enter cover image URL"
              className="w-full"
            />
          </div>

          {/* PDF URL Field */}
          <div>
            <label htmlFor="pdfURL">PDF URL</label>
            <Input
              id="pdfURL"
              {...register("pdfURL")}
              placeholder="Enter PDF URL"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Category Field */}
          <div>
            <label htmlFor="category">Category</label>
            <Input
              id="category"
              {...register("category", { required: "Category is required" })}
              placeholder="Enter category"
              className="w-full"
            />
            {errors.category && (
              <span className="text-red-500">{errors.category.message}</span>
            )}
          </div>

          {/* Published Date Field */}
          <div>
            <label htmlFor="publishedDate">Published Date</label>
            <Input
              id="publishedDate"
              type="date"
              {...register("publishedDate")}
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Price Field */}
          <div>
            <label htmlFor="price">Price</label>
            <Input
              id="price"
              type="number"
              step="0.01"
              {...register("price", { required: "Price is required" })}
              placeholder="Enter price"
              className="w-full"
              defaultValue={0}
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </div>

          {/* Coin Field */}
          <div>
            <label htmlFor="coin">Coin</label>
            <Input
              id="coin"
              type="number"
              {...register("coin", { required: "Coin is required" })}
              placeholder="Enter coin value"
              className="w-full"
              defaultValue={0}
            />
            {errors.coin && (
              <span className="text-red-500">{errors.coin.message}</span>
            )}
          </div>

          {/* Discount Field */}
          <div>
            <label htmlFor="discount">Discount (%)</label>
            <Input
              id="discount"
              type="number"
              step="0.01"
              {...register("discount", { required: "Discount is required" })}
              placeholder="Enter discount"
              className="w-full"
              defaultValue={0}
            />
            {errors.discount && (
              <span className="text-red-500">{errors.discount.message}</span>
            )}
          </div>
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Enter description"
            className="w-full"
            rows={4}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 px-10 bg-black text-white p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
