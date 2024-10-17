"use client";
import Loading from "@/components/common/Loading";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import StoreBookCard from "./StoreBookCard";

export default function StoreBooks() {
  const axiosSecure = useAxiosSecure();
  const [getCurrentPage, setGetCurrentPage] = useState(1);
  const [everyPageItem, setEveryPageItem] = useState(20);

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

  //   const handleItemParPage = (e) => {
  //     const value = parseInt(e.target.value);
  //     setEveryPageItem(value);
  //     setGetCurrentPage(1);
  //   };

  useEffect(() => {
    refetch();
  }, [everyPageItem]);

  if (isError) {
    return <div>Failed to load books. Please try again later.</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 flex-wrap justify-around items-center">
        {books.map((book, idx) => (
          <StoreBookCard book={book} key={idx} />
        ))}
      </div>
    </div>
  );
}
