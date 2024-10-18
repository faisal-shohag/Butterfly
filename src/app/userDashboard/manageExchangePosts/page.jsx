"use client";
import Link from "next/link";
import { CiFilter } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Loading from "@/components/common/Loading";
import { useSession } from "next-auth/react";
import ExchangeTable from "./ExchangeTable";

const Page = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setEveryPageItem] = useState(2);
  const {data: session} = useSession()
  console.log(session?.user.id)
  const {
    data: responseData = {},
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["myBooks", currentPage, itemsPerPage],
    async () => {
      const response = await axiosSecure.get(
        `/my-books/bcada802-e67b-4ff9-93d2-239133678954?page=${currentPage}&limit=${itemsPerPage}`
      );
      return response.data;
    },
    { keepPreviousData: true }
  );

  const myBooks = responseData?.books || [];
  const totalBooks = responseData?.totalBooks || 0;
  const numberOfPages = Math.ceil(totalBooks / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  console.log(myBooks)
  const handleItemParPage = (e) => {
    const value = parseInt(e.target.value);
    setEveryPageItem(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    refetch();
  }, [itemsPerPage]);

  if (isError) {
    return <div>Failed to load books. Please try again later.</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 my-6">
      <div className="flex justify-between items-center my-5 px-6">
        <h3 className="text-center">Total: {myBooks.length} Exchange Posts</h3>
        <h3 className="text-2xl font-bold text-center">Manage Exchange Posts</h3>
        <div className="flex gap-1 justify-end items-center mr-4 text-sm font-medium">
          <p className="px-2 py-1">Show:</p>
          <select
            onChange={handleItemParPage}
            value={itemsPerPage}
            className="border px-2 py-1"
          >
            <option value="2">2</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
          </select>
        </div>
      </div>

      <ExchangeTable books={myBooks} refetch={refetch} />
      {totalBooks == itemsPerPage || totalBooks < itemsPerPage ? null : (
        <div className="w-full flex gap-2 justify-center items-center my-6">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="!px-3 p-1 rounded-md border bg-none cursor-pointer"
          >
            <IoIosArrowBack />
          </Button>

          {pages.map((page) => (
            <Button
              variant="outline"
              key={page}
              className={`p-1 px-3 border ${
                currentPage === page + 1
                  ? "!bg-black dark:!bg-white text-white dark:text-black"
                  : "bg-white dark:bg-black text-black dark:text-white"
              }`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, numberOfPages))
            }
            disabled={currentPage === numberOfPages}
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