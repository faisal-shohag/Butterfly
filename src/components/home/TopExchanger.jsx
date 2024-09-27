"use client";
import React, { useRef, useState, useEffect } from "react";
import { RiSwap2Fill } from "react-icons/ri";
import { MdOutlineSwapCalls } from "react-icons/md";
import Heading from "../common/Heading";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ChevronLeft, ChevronRight, Repeat } from "lucide-react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import AddButton from "../common/AddButton";
import BookCard from "../Books/BookCard";
import SeeAll from "../common/SeeAll";

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
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
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
  console.log(books);
  return (
    <div className="relative">
      <div className="flex justify-between items-center"><Heading icon={<RiSwap2Fill />} title={"Exchange Now"} />
      <SeeAll link='/pages/exchanges' title={'Add Books'}/></div>
      <div className="flex items-center">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="absolute left-2 z-10 bg-opacity-50 hover:bg-opacity-75 rounded-full h-8 w-8 custom-glass-2 flex items-center justify-center text-gray-700"
        >
          <ChevronLeft size="20" />
        </button>
        { books &&
        <div
          ref={scrollContainerRef}
          className="rounded-xl flex gap-3 custom-glass px-10 py-2 overflow-x-auto overflow-y-hidden w-full"
          onScroll={checkScroll}
        >
          {isLoading ? (
            // Loading skeletons
            Array(10)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex-shrink-0 w-48 space-y-2">
                  <Skeleton className="h-64 w-full rounded" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))
          ) : error ? (
            <div className="text-red-500">
              Error loading books: {error.message}
            </div>
          ) : (
            // Render books
        
           <BookCard books={books} />
          )}
        </div>}
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
