"use client";

import { signOut, useSession } from "next-auth/react";
import { ModeToggle } from "../ThemeToggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../UserAvatar";
import { TbCoinBitcoinFilled } from "react-icons/tb";
import UserCoin from "./UserCoin";
const Usersection = () => {
  const session = useSession();
  const user = session.data?.user;
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
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Sign out
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
        <ModeToggle />
      </div>
    </>
  );
};

export default Usersection;
