"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export default function Page() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
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
              {...register("title", { required: true })}
              placeholder="Enter book title"
              className="w-full"
            />
          </div>

          {/* Author Field */}
          <div>
            <label htmlFor="author">Author</label>
            <Input
              id="author"
              {...register("author", { required: true })}
              placeholder="Enter author name"
              className="w-full"
            />
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
              {...register("language", { required: true })}
              placeholder="Enter language"
              className="w-full"
            />
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
            <label htmlFor="pdfUrl">PDF URL</label>
            <Input
              id="pdfUrl"
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
              {...register("category", { required: true })}
              placeholder="Enter category"
              className="w-full"
            />
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
              {...register("price", { required: true })}
              placeholder="Enter price"
              className="w-full"
              defaultValue={0}
            />
          </div>

          {/* Coin Field */}
          <div>
            <label htmlFor="coin">Coin</label>
            <Input
              id="coin"
              type="number"
              {...register("coin", { required: true })}
              placeholder="Enter coin value"
              className="w-full"
              defaultValue={0}
            />
          </div>

          {/* Discount Field */}
          <div>
            <label htmlFor="discount">Discount (%)</label>
            <Input
              id="discount"
              type="number"
              step="0.01"
              {...register("discount", { required: true })}
              placeholder="Enter discount"
              className="w-full"
              defaultValue={0}
            />
          </div>
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            {...register("description", { required: true })}
            placeholder="Enter description"
            className="w-full"
            rows={4}
          />
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
