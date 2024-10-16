"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "next/navigation";

export default function Page() {
  const axiosSecure = useAxiosSecure();
  const params = useParams();
  const id = params?.edit;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Mutation for updating the book
  const mutation = useMutation({
    mutationFn: (data) => axiosSecure.put(`/store_books/${id}`, data),
    onSuccess: () => {
      reset();
      toast.success("Book updated successfully!");
      refetch();
    },
    onError: (error) => {
      console.error(error);
      toast.error(`Error: ${error.response?.data.message || error.message}`);
    },
  });

  // Query to fetch the current book details
  const {
    data: Editbook = {},
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["EditBook", id],
    async () => {
      const response = await axiosSecure.get(`/store_books/${id}`);
      return response.data;
    },
    {
      enabled: !!id,
    }
  );

  const onSubmit = (data) => {
    const bookData = {
      title: data.title || Editbook.storeBook?.title,
      description: data.description || Editbook.storeBook?.description,
      author: data.author || Editbook.storeBook?.author,
      publications: data.publications || Editbook.storeBook?.publications,
      publishedDate: data.publishedDate
        ? new Date(data.publishedDate).toISOString()
        : Editbook.storeBook?.publishedDate,
      price: parseFloat(data.price) || Editbook.storeBook?.price,
      coin: parseInt(data.coin) || Editbook.storeBook?.coin,
      discount: parseFloat(data.discount) || Editbook.storeBook?.discount,
      category: data.category || Editbook.storeBook?.category,
      language: data.language || Editbook.storeBook?.language,
      cover: data.cover || Editbook.storeBook?.cover,
      pdfURL: data.pdfURL || Editbook.storeBook?.pdfURL,
    };

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
          Edit Store Book
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="title">Title</label>
            <Input
              id="title"
              {...register("title")}
              placeholder={Editbook.storeBook?.title || "Enter book title"}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Input
              id="author"
              {...register("author")}
              placeholder={Editbook.storeBook?.author || "Enter author name"}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="publications">Publications</label>
            <Input
              id="publications"
              {...register("publications")}
              placeholder={
                Editbook.storeBook?.publications || "Enter publication details"
              }
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="language">Language</label>
            <Input
              id="language"
              {...register("language")}
              placeholder={Editbook.storeBook?.language || "Enter language"}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cover">Cover URL</label>
            <Input
              id="cover"
              {...register("cover")}
              placeholder={Editbook.storeBook?.cover || "Enter cover image URL"}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="pdfURL">PDF URL</label>
            <Input
              id="pdfURL"
              {...register("pdfURL")}
              placeholder={Editbook.storeBook?.pdfURL || "Enter PDF URL"}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="category">Category</label>
            <Input
              id="category"
              {...register("category")}
              placeholder={Editbook.storeBook?.category || "Enter category"}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="publishedDate">Published Date</label>
            <Input
              id="publishedDate"
              type="date"
              {...register("publishedDate")}
              defaultValue={
                Editbook.storeBook?.publishedDate
                  ? new Date(Editbook.storeBook.publishedDate)
                      .toISOString()
                      .slice(0, 10)
                  : ""
              }
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label htmlFor="price">Price</label>
            <Input
              id="price"
              type="number"
              step="0.01"
              {...register("price")}
              placeholder={Editbook.storeBook?.price || "Enter price"}
              defaultValue={Editbook.storeBook?.price || 0}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="coin">Coin</label>
            <Input
              id="coin"
              type="number"
              {...register("coin")}
              placeholder={Editbook.storeBook?.coin || "Enter coin value"}
              defaultValue={Editbook.storeBook?.coin || 0}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="discount">Discount (%)</label>
            <Input
              id="discount"
              type="number"
              step="0.01"
              {...register("discount")}
              placeholder={Editbook.storeBook?.discount || "Enter discount"}
              defaultValue={Editbook.storeBook?.discount || 0}
              className="w-full"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder={Editbook.storeBook?.description || "Enter description"}
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
