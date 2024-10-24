"use client"
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { SearchModal } from "./NavBar/Search";
import { useState } from "react";

export default function MobileScreenButtons() {
  const [open, setOpen] = useState(false);
  return (
    
    <div className="w-[50px] md:hidden h-[96px] fixed bottom-28 right-5 grid grid-cols-1 gap-4">
      <div
      onClick={() => setOpen(true)}
        className="w-full h-[50px] cursor-pointer rounded-full shadow-md bg-zinc-900 flex text-white justify-center items-center dark:bg-gray-200 dark:text-gray-600"
      >
        {/* <FaPlus /> */}
        <FiSearch className="text-xl" />
      </div>
      <Link
        href={"/add"}
        className="w-full h-[50px] cursor-pointer rounded-full shadow-md bg-zinc-900 text-white flex justify-center items-center dark:bg-gray-200 dark:text-gray-600"
      >
        <LuPlus className="text-2xl" />
      </Link>
      <SearchModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
