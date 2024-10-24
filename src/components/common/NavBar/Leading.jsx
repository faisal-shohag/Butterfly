"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchField from "./Search";
import { MobileSideBar } from "./MobileSideBar";
const Leading = () => {
  const currentPath = usePathname();
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="flex gap-2 items-center">

       <div className="lg:hidden md:hidden block">
       <MobileSideBar/>
       </div>
        <Link
          href="/"
          className="flex-shrink-0 shimmer flex items-center gap-2 font-bold text-xl"
        >
          <Image
            width={60}
            height={60}
            src="/logo.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Butterfly logo"
            className="h-8 w-auto"
          />
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500">
            {currentPath == "/forum" ? (
              "Hive"
            ) : (
              <div>
                <div>Butterfly</div>
                <div className="text-xs -mt-2">Let your book fly!</div>
              </div>
            )}
          </div>
        </Link>
        </div>
        <SearchField/>
      </div>
    </>
  );
};

export default Leading;
