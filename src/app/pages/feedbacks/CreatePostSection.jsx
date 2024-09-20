import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

export default function CreatePostSection() {
  return (
    <div className="w-full p-3 bg-white flex justify-center items-center gap-2 rounded-md shadow-md">
      <div className="w-full relative">
        <IoIosSearch className="absolute top-2 text-xl left-1 " />
        <input
          type="search"
          className="w-full border outline-none p-1 pl-6 rounded-md"
          placeholder="Search about you book"
        />
      </div>
      <button className="p-1 border min-w-[120px] rounded-md cursor-pointer bg-gray-900 text-white font-medium flex justify-center items-center gap-1">
        <FaPlus />
        Create Post
      </button>
    </div>
  );
}
