"use client";
import { useSession, signOut } from "next-auth/react";
import { IoSearch } from "react-icons/io5";
import DashboardNav from "./DashboardNav";
import { Loader2Icon } from "lucide-react";
import { ModeToggle } from "@/components/common/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/common/UserAvatar";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { useState } from "react";

const Layout = ({ children }) => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [responsiveNav, setResponsiveNav] = useState(false);

  const handleNav = () => {
    setResponsiveNav((prev) => !prev); // Toggle nav state
  };

  return (
    <div className="w-full relative min-h-screen dark:bg-zinc-950 bg-slate-100 p-2 grid grid-cols-1 md:grid-cols-12 lg:grid-cols-10">
      <DashboardNav responsiveNav={responsiveNav} handleNav={handleNav} />
      <div className="w-full custom-glass mb-1 rounded-md col-span-1 md:col-span-11 lg:col-span-8 h-screen">
        <div className="flex gap-3 border-b mb-1 pb-2 justify-between items-center h-[50px]">
          <h3 className="font-bold text-xl flex justify-center items-center gap-1">
            Admin{" "}
            <span className="text-gray-600 dark:text-gray-200 hidden sm:block">
              Dashboard
            </span>
          </h3>
          <div className="relative hidden md:block">
            <IoSearch className="absolute top-2 left-2" />
            <input
              type="search"
              className="w-[320px] shadow  outline-0  p-1 pl-[30px] px-3 rounded"
              placeholder="Search here"
            />
          </div>
          <div className="flex items-center gap-5">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="relative rounded-full"
                  >
                    <UserAvatar image={user.image} name={user.name} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="!z-20 shadow-md !bg-white p-3 rounded-md"
                >
                  <DropdownMenuLabel>
                    <h3 className="font-bold -mb-2">{user.name}</h3>
                    {user.username && (
                      <span className="text-xs text-green-500">
                        @{user.username}
                      </span>
                    )}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/profile">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <Link href="/settings">
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem onClick={() => signOut()}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                {status === "loading" ? (
                  <div className="animate-spin">
                    <Loader2Icon size={13} />
                  </div>
                ) : (
                  <Link href="/api/auth/signin">
                    <Button>Sign In</Button>
                  </Link>
                )}
              </>
            )}
            <ModeToggle />
            <button
              onClick={handleNav}
              className="p-1 rounded border block md:hidden top-2 right-2"
            >
              <VscThreeBars className="text-xl" />
            </button>
          </div>
        </div>
        <div className="w-full  h-[calc(100%-80px)] overflow-y-auto">
          {children}
        </div>
        <div className="w-full flex justify-center items-center h-[30px] border-t">
          <small>copy &copy; {new Date().getFullYear()} community in:</small>
        </div>
      </div>
    </div>
  );
};

export default Layout;
