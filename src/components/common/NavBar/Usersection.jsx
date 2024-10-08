
"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2Icon, LogOutIcon, Moon, Settings, Sun, UserCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../UserAvatar";
import UserCoin from "./UserCoin";
import { useTheme } from "next-themes";
const Usersection = () => {
    const { theme, setTheme } = useTheme()
  const session = useSession();
  const user = session.data?.user;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
      <div className="ml-4 flex items-center md:ml-6 gap-5">
        {user && <UserCoin user={user} />}

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className=" relative rounded-full"
              >
                <UserAvatar image={user.image} name={user.name} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="">
                <div> {user.name}</div>
                <span className="text-xs text-green-500">
                  @{user?.username}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"/profile"}>
                <DropdownMenuItem><UserCircle size={15} className="mr-2"/> Profile</DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={toggleTheme}>
              <Sun size={15} className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2" />
              <Moon size={15} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2" />
              
              Theme</DropdownMenuItem>
              {/* <DropdownMenuItem><Moon size={15} className='mr-2'/> Dark Mode</DropdownMenuItem> */}
              {/* <DropdownMenuItem><Settings size={15} className="mr-2"/> Settings</DropdownMenuItem> */}
              <DropdownMenuItem className="text-red-500" onClick={() => signOut()}>
                <LogOutIcon size={15} className="mr-2"/> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            {session.status === "loading" ? (
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
      </div>
    </>
  );
};

export default Usersection;
