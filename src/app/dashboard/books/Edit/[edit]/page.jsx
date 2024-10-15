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
    <div className="w-full flex justify-center items-center gap-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="custom-glass w-full rounded-md  p-5 space-y-4"
      >
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
          {/* Genre Field */}
          <div>
            <label htmlFor="genre">Genre</label>
            <Input
              id="genre"
              {...register("genre", { required: true })}
              placeholder="Enter genre"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
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

          {/* ISBN Field */}
          <div>
            <label htmlFor="isbn">ISBN</label>
            <Input
              id="isbn"
              {...register("isbn", { required: true })}
              placeholder="Enter ISBN"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Published Year Field */}
          <div>
            <label htmlFor="publishedYear">Published Year</label>
            <Input
              id="publishedYear"
              {...register("publishedYear", { required: true })}
              placeholder="Enter published year"
              className="w-full"
            />
          </div>

          {/* Publisher Field */}
          <div>
            <label htmlFor="publisher">Publisher</label>
            <Input
              id="publisher"
              {...register("publisher", { required: true })}
              placeholder="Enter publisher"
              className="w-full"
            />
          </div>
        </div>

        {/* Cover URL Field */}
        <div>
          <label htmlFor="coverUrl">Cover URL</label>
          <Input
            id="coverUrl"
            {...register("coverUrl", { required: true })}
            placeholder="Enter cover image URL"
            className="w-full"
          />
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
