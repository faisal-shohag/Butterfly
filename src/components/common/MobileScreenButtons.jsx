import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";

export default function MobileScreenButtons() {
  return (
    <div className="w-[40px] md:hidden h-[96px] fixed bottom-20 right-3 grid grid-cols-1 gap-4">
      <Link
        href={"#"}
        className="w-full h-full cursor-pointer rounded-full shadow-md bg-zinc-900 flex text-white justify-center items-center dark:bg-gray-200 dark:text-gray-600"
      >
        {/* <FaPlus /> */}
        <FiSearch className="text-xl" />
      </Link>
      <Link
        href={"/add"}
        className="w-full h-full cursor-pointer rounded-full shadow-md bg-zinc-900 text-white flex justify-center items-center dark:bg-gray-200 dark:text-gray-600"
      >
        <LuPlus className="text-2xl" />
      </Link>
    </div>
  );
}
