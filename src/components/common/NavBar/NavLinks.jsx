"use client"

import { Home, Repeat } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineHive } from "react-icons/md";
import { TbButterfly } from "react-icons/tb";

const NavLinks =  () => {
    const currentPath = usePathname();
    return (
        <div className="hidden lg:block md:hidden">
        <div className="flex  gap-10 items-center text-slate-600">
          <Link
            className={`${
              currentPath === "/" && "g-card px-2 py-1 font-semibold"
            } flex items-center gap-1`}
            href="/"
          >
            <Home size={20} /> Home
          </Link>

          <Link
            className={`${
              currentPath == "/exchanges" &&
              "g-card px-2 py-1 font-semibold"
            } flex items-center gap-1`}
            href="/exchanges"
          >
            <Repeat size={20} />
            Exchanges
          </Link>

          <Link
            className={`${
              currentPath == "/store" &&
              "g-card px-2 py-1 font-semibold"
            } flex items-center gap-1`}
            href="/store"
          >
            <TbButterfly size={20} />
            Butterfly Store
          </Link>

          <Link
            className={`${
              currentPath == "/forum" &&
              "g-card px-2 py-1 font-semibold"
            } flex items-center gap-1`}
            href="/forum"
          >
            <MdOutlineHive size={20} /> Hive
          </Link>
        </div>
      </div>
    );
};

export default NavLinks;