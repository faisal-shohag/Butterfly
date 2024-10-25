"use client";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loading from "@/components/common/Loading";
import UserBookCard from "./UserBookCard";

export default function UserBookExchanges({ userId }) {
  const axiosSecure = useAxiosSecure();
  const { ref, inView } = useInView();
  const [isReady, setIsReady] = useState(false);

  const fetchBooks = async ({ pageParam = 1 }) => {
    const response = await axiosSecure.get(
      `/my-books/${userId}?page=${pageParam}&limit=10`
    );
    return response.data;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery("all_books", fetchBooks, {
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages
        ? lastPage.currentPage + 1
        : undefined,
    enabled: isReady,
  });

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (!isReady || isLoading) return <Loading />;
  if (isError) return <div>Error fetching books</div>;

  return (
    <div className="w-full flex flex-col p-4">
      <div className="flex flex-col">
        {data && data.pages ? (
          data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.books && page.books.length > 0 ? (
                <UserBookCard books={page.books} userId={userId} />
              ) : (
                <div>No books found on this page.</div>
              )}
            </React.Fragment>
          ))
        ) : (
          <div>No books available.</div>
        )}
      </div>
      <div ref={ref} className="text-center mt-5">
        {isFetchingNextPage ? (
          "Loading more..."
        ) : hasNextPage ? (
          <button
            onClick={fetchNextPage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Load More
          </button>
        ) : (
          <div className="font-semibold text-slate-500">
            You are at the end!
          </div>
        )}
      </div>
    </div>
  );
}
