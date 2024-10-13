"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Leading = () => {
  const currentPath = usePathname();
  return (
    <>
      <div className="flex items-center gap-5">
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
        <div className="lg:block md:block hidden">
          <div className="flex items-center ">
            <Search className="absolute ml-3 text-slate-400" size={20} />
            <Input
              type="text"
              className="rounded-full pl-10"
              placeholder="Search books"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leading;
