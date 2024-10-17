import { Button } from "@/components/ui/button";
import React from "react";

export default function StoreBookCard({ book }) {
  return (
    <div className=" sm:w-full h-full rounded-md custom-glass flex flex-col justify-between items-center gap-1 border max-w-[170px]">
      <small className="px-2 p-[1px] absolute top-2 right-2 rounded bg-black dark:bg-white dark:text-black text-white">
        ৳ {book?.price}
      </small>
      <img
        src={
          book?.cover || "https://i.postimg.cc/44FccD29/cover-default-book.jpg"
        }
        alt="Book Cover"
        className="max-w-[75%] h-[160px] mx-auto"
      />
      <h3 className="text-center font-medium text-gray-700 dark:text-gray-300">
        {book?.title}
      </h3>
      <small className="text-green-500">Product in stock</small>
      <div className="w-full  gap-2">
        <Button variant="outline" className="w-full">
          See Details
        </Button>
      </div>
    </div>
  );
}
