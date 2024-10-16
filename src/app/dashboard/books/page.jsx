"use client";
import Link from "next/link";
import BooksTable from "./BooksTable";
import { CiFilter } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";

const Page = () => {
  const axiosSecure = useAxiosSecure();
  const [getCurrentPage, setGetCurrentPage] = useState(1);

  const {
    data: responseData = {},
    isLoading,
    isError,
    refetch,
  } = useQuery(["storeBooks", getCurrentPage], async () => {
    const response = await axiosSecure.get(
      `/store_books?page=${getCurrentPage}&limit=${10}`
    );
    return response.data;
  });

  const books = responseData?.storeBooks || [];
  const totalBooks = responseData?.totalBooks || 0;
  const numberOfPages = Math.ceil(totalBooks / 10);
  const pages = [...Array(numberOfPages).keys()];

  return (
    <div className="p-4">
      <div className="w-full flex justify-between items-center mb-6">
        <h4 className="font-bold text-2xl text-gray-700">Books</h4>
      </div>

      <div className="w-full mb-4 flex justify-between items-center">
        <Link href="/dashboard/books/add">
          <Button className="px-6">Add Book</Button>
        </Link>
        <CiFilter className="text-2xl text-gray-600 cursor-pointer" />
      </div>

      <BooksTable
        books={books}
        isLoading={isLoading}
        isError={isError}
        refetch={refetch}
      />
      {totalBooks > 10 ? (
        <div className="w-full flex justify-center items-center my-2">
          {/* Previous Button */}
          <button
            onClick={() => setGetCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={getCurrentPage === 1}
            className="text-white w-[80px] dark:text-black bg-black dark:bg-white p-1 px-3 rounded-tl-md rounded-bl-md border"
          >
            Previous
          </button>

          {/* Page Numbers */}
          {pages.map((page) => (
            <button
              key={page}
              className={`p-1 px-2 border ${
                getCurrentPage === page + 1
                  ? "!bg-black dark:!bg-white text-white dark:text-black"
                  : "bg-white dark:bg-black text-black dark:text-white"
              }`}
              onClick={() => setGetCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setGetCurrentPage((prev) => Math.min(prev + 1, numberOfPages))
            }
            disabled={getCurrentPage === numberOfPages}
            className="text-white w-[80px] dark:text-black bg-black dark:bg-white p-1 px-3 rounded-tr-md rounded-br-md border"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Page;
