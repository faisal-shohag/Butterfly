"use client";
import Loading from "@/components/common/Loading";
import { Button } from "@/components/ui/button";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { useQuery } from "react-query";

export default function Page() {
  const axiosSecure = useAxiosSecure();
  const params = useParams();
  const id = params?.details;

  const {
    data: book = {},
    isLoading,
    isError,
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

  const detailsbook = book.storeBook;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Failed to load book. Please try again later.</div>;
  }

  // Format date
  const formattedDate = new Date(
    detailsbook?.publishedDate
  ).toLocaleDateString();

  return (
    <div className="w-full custom-glass rounded-md">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center">
        <div className="min-w-[200px] pr-2">
          {/* <Image
            src={detailsbook?.cover}
            alt="Book cover image"
            width={200} 
            height={300} 
            className="w-[200px] h-auto rounded"
          /> */}
          <img
            src={
              book?.cover ||
              "https://i.postimg.cc/44FccD29/cover-default-book.jpg"
            }
            alt=""
            className="w-[200px] h-auto rounded"
          />
        </div>
        <div className="w-full pl-2 border-l">
          <p className="uppercase text-blue-500">{detailsbook?.title}</p>
          <h1 className="text-4xl font-bold text-gray-500 my-2">
            {detailsbook?.title}
          </h1>
          <div className="flex flex-col gap-1 mb-2">
            <p className="text-gray-500">by Sir Arthur {detailsbook?.author}</p>
            <p className="text-gray-500">
              Published by {detailsbook?.publications} Publishing Company in{" "}
              {formattedDate}
            </p>
            <p className="text-gray-500">
              This book is {detailsbook?.language} version
            </p>
            <p className="text-gray-500">
              Anyone can get this book for {detailsbook?.price} taka, and there
              is a {detailsbook?.discount}% discount, or purchase with{" "}
              {detailsbook?.coin} coins.
            </p>
          </div>
          <p className="text-gray-500">{detailsbook?.description}</p>

          <div className="mt-5 flex justify-between items-center">
            <span></span>
            <div className="flex justify-center flex-wrap items-center gap-3">
              <a href={detailsbook?.pdfURL} target="blank">
                <Button>Book Pdf</Button>
              </a>
              <Link href={"/dashboard/books"} className="font-medium">
                <Button>See All</Button>
              </Link>
              <Link
                href={`/dashboard/books/Edit/${detailsbook?.id}`}
                className="font-medium"
              >
                <Button>Edit</Button>
              </Link>
              <Link href={"/dashboard/books/add"} className="font-medium">
                <Button>Add New</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
