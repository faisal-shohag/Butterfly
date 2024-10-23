import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
// import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen p-5 flex justify-center items-center fixed z-[99999] bg-gray-100 dark:bg-zinc-900 top-0 ">
      <div className="max-w-[1000px]">
        <div className="flex flex-col justify-center items-center">
          <Image
            width={260}
            height={260}
            src="/logo.png"
            alt="Butterfly logo"
            className="h-[100px] w-auto"
          />
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500">
            <div>
              <h1 className="text-center font-bold text-5xl">Butterfly</h1>
              <div className=" -mt-2 text-xl">Let your book fly!</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-5 gap-5">
            {/* <TbError404 className="text-5xl -my-7 sm:text-[70px]" /> */}
            <h2 className="text-[70px] -my-10 font-bold">404</h2>
            <h3 className="text-center text-xl font-bold text-gray-500">
              Request page does not exist!
            </h3>
            <Link
              href={"/"}
              className="p-[6px] hover:bg-zinc-800 px-3 rounded-md bg-zinc-900 text-white dark:bg-gray-100 dark:hover:bg-gray-200 font-medium dark:text-zinc-900 flex justify-center items-center gap-3"
            >
              <IoHomeOutline /> Go Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
