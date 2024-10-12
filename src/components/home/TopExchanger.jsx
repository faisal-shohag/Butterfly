"use client";
import React, { useRef, useState, useEffect } from "react";
import { RiSwap2Fill } from "react-icons/ri";
import { MdOutlineSwapCalls } from "react-icons/md";
import Heading from "../common/Heading";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Skeleton } from "@/components/ui/skeleton";
import BookCard from "../Books/BookCard";

const TopExchanger = () => {
  const axiosSecure = useAxiosSecure();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const {
    data: books,
    isLoading,
    error,
  } = useQuery("books", async () => {
    const response = await axiosSecure.get("/books");
    return response.data;
  });

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [books]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="relative">
      <Heading icon={<RiSwap2Fill />} title={"Latest Exchanges"} />
      <div className="flex items-center">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="absolute left-2 z-10 bg-opacity-50 hover:bg-opacity-75 rounded-full h-8 w-8 custom-glass-2 flex items-center justify-center text-gray-700"
        >
          <ChevronLeft size="20" />
        </button>

        <div
          ref={scrollContainerRef}
          className="rounded-xl flex gap-3 custom-glass px-5 py-2 overflow-x-auto overflow-y-hidden w-full"
          onScroll={checkScroll}
        >
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="w-40 h-60" />
            ))
          ) : error ? (
            <div className="text-red-500">Error loading books: {error.message}</div>
          ) : (
            books.map((book, i) => (
              <div
                key={i}
                className="flex items-center gap-2 custom-glass rounded-xl flex-shrink-0"
              >
                <div className="flex flex-col items-center text-sm font-semibold">
                  <Avatar>
                    <AvatarImage src="https://i.postimg.cc/GmY0ZXtx/image.png" />
                  </Avatar>
                  <div>{book.user1}</div>
                </div>
                <div className="text-2xl text-green-600">
                  <MdOutlineSwapCalls />
                </div>
                <div className="flex flex-col items-center text-sm font-semibold">
                  <Avatar>
                    <AvatarImage src="https://i.postimg.cc/5tqhtjwH/image.png" />
                  </Avatar>
                  <div>{book.user2}</div>
                </div>
              </div>
            ))
          )}
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="absolute right-2 z-10 bg-opacity-50 hover:bg-opacity-75 rounded-full h-8 w-8 custom-glass-2 flex items-center justify-center text-gray-700"
        >
          <ChevronRight size="20" />
        </button>
      </div>
    </div>
  );
};

export default TopExchanger;
