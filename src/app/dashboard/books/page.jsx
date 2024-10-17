"use client";
import Link from "next/link";
import BooksTable from "./BooksTable";
import { CiFilter } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Loading from "@/components/common/Loading";

const Page = () => {
  const axiosSecure = useAxiosSecure();
  const [getCurrentPage, setGetCurrentPage] = useState(1);
  const [everyPageItem, setEveryPageItem] = useState(5);

  const {
    data: responseData = {},
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["storeBooks", getCurrentPage, everyPageItem],
    async () => {
      const response = await axiosSecure.get(
        `/store_books?page=${getCurrentPage}&limit=${everyPageItem}`
      );
      return response.data;
    },
    { keepPreviousData: true }
  );

  const books = responseData?.storeBooks || [];
  const totalBooks = responseData?.totalBooks || 0;
  const numberOfPages = Math.ceil(totalBooks / everyPageItem);
  const pages = [...Array(numberOfPages).keys()];

  const handleItemParPage = (e) => {
    const value = parseInt(e.target.value);
    setEveryPageItem(value);
    setGetCurrentPage(1);
  };

  useEffect(() => {
    refetch();
  }, [everyPageItem]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <div className="w-full flex justify-center sm:-mb-6 items-center mb-6">
        <h4 className="font-bold text-2xl text-gray-700 dark:text-white text-center">
          Manage Store Books
        </h4>
      </div>

      <div className="w-full mb-4 flex justify-between items-center">
        <Link href="/dashboard/books/add">
          <Button className="px-6">Add Book</Button>
        </Link>
        <div className="flex gap-1 justify-end items-center mr-4 text-sm font-medium">
          <p className="px-2 py-1">Show:</p>
          <select
            onChange={handleItemParPage}
            value={everyPageItem}
            className="border rounded-md px-2 py-1"
          >
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>

      <BooksTable
        books={books}
        isLoading={isLoading}
        isError={isError}
        refetch={refetch}
      />
      {totalBooks == everyPageItem || totalBooks < everyPageItem ? null : (
        <div className="w-full flex gap-2 justify-center items-center my-2">
          <Button
            variant="outline"
            onClick={() => setGetCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={getCurrentPage === 1}
            className="!px-3 p-1 rounded-md border bg-none cursor-pointer"
          >
            <IoIosArrowBack />
          </Button>

          {pages.map((page) => (
            <Button
              variant="outline"
              key={page}
              className={`p-1 px-2 border ${
                getCurrentPage === page + 1
                  ? "!bg-black dark:!bg-white text-white dark:text-black"
                  : "bg-white dark:bg-black text-black dark:text-white"
              }`}
              onClick={() => setGetCurrentPage(page + 1)}
            >
              {page + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() =>
              setGetCurrentPage((prev) => Math.min(prev + 1, numberOfPages))
            }
            disabled={getCurrentPage === numberOfPages}
            className="!px-3 p-1 rounded-md border bg-none cursor-pointer"
          >
            <IoIosArrowForward />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;
