"use client";
import Image from "next/image";
import {
  FaTachometerAlt,
  FaUsers,
  FaBook,
  FaChartLine,
  FaExchangeAlt,
  FaHive,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

export default function DashboardNav({ handleNav, responsiveNav }) {
  const currentPath = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { href: "/manageUsers", label: "Manage users", icon: <FaUsers /> },
    { href: "/books", label: "Books", icon: <FaBook /> },
    { href: "/ordersReport", label: "Orders Report", icon: <FaChartLine /> },
    {
      href: "/exchangesPostReport",
      label: "Exchanges Post Report",
      icon: <FaExchangeAlt />,
    },
    { href: "/reports", label: "Reports", icon: <FaHive /> },
    { href: "/messages", label: "Messages", icon: <FaEnvelope /> },
    { href: "/userProfile", label: "Profile", icon: <FaUser /> },
  ];

  return (
    <div
      className={`w-full transition-all z-10 absolute ${
        responsiveNav ? "left-1" : "-left-[100%]"
      }  top-2 md:static lg:col-span-2 pr-2`}
    >
      <div className="w-full relative custom-glass rounded-md border h-screen shadow-md">
        <button
          onClick={handleNav} // Toggle the nav
          className="p-1 rounded absolute border block md:hidden top-2 right-2"
        >
          <RxCross2 className="text-xl" />
        </button>
        <div className="w-full my-5 flex gap-2 justify-center items-center">
          <Image
            width={60}
            height={60}
            src="/logo.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Butterfly logo"
            className="h-8 w-auto"
          />
          <div className="bg-clip-text font-bold block md:hidden lg:block text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500">
            <div>
              <div>Butterfly</div>
              <div className="text-xs -mt-2">Let your book fly!</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full pt-3 pb-2 max-h-[calc(100%-125px)] overflow-y-auto flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full p-1 px-3 rounded-md !text-left bg-transparent border-0 font-medium flex items-center gap-2 ${
                currentPath === item.href
                  ? "!bg-gray-700 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.icon}{" "}
              <span className="block md:hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
        <Button
          onClick={() => signOut()}
          variant="destructive"
          className="w-[calc(100%-24px)] absolute dark:bg-gray-950 bottom-3 bg-gray-200 hover:bg-gray-300 text-red-500 p-1 px-3 rounded-md font-medium flex items-center gap-2"
        >
          <IoMdLogOut />{" "}
          <span className="block md:hidden lg:block">Log Out</span>
        </Button>
      </div>
    </div>
  );
}
