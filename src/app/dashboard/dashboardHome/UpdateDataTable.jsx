"use client";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import BooksTable from "../books/BooksTable";
import { SkeletonTable } from "./Skeleton";

export default function UpdateDataTable() {
  // Dummy book exchange data
  const axiosSecure = useAxiosSecure();
  const {
    data: responseData = {},
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["storeBooks"],
    async () => {
      const response = await axiosSecure.get(
        `/store_books?page=${1}&limit=${7}`
      );
      return response.data;
    },
    { keepPreviousData: true }
  );

  if (isLoading) return <SkeletonTable/>;
  if (isError) return <p>Failed to load books. Please try again later.</p>;

  const books = responseData?.storeBooks || [];
  return (
    <div className="overflow-x-auto mt-1">
       <BooksTable books={books} refetch={refetch} />
    </div>
  );
}
