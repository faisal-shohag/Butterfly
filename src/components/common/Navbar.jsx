"use client"
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "../ui/avatar";
import { MdOutlineHive } from "react-icons/md";
import { Home, Loader2Icon, LoaderIcon, Repeat, Search } from "lucide-react";
import { TbButterfly } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const currentPath = usePathname();
  const session = useSession()
  const user = session.data?.user
  // console.log(user)
return (
    <nav className="bg-background border-b mb-5 custom-glass-2  py-3 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="">
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
                  {currentPath == "/forum" ? "Hive" : "Butterfly"}
                </div>
              </Link>
              <div className="flex items-center">
                <Search className="absolute ml-3 text-slate-400" size={20} />
                <Input type="text" className="rounded-full pl-10" placeholder="Search books"/>
              </div>
            </div>
          </div>
          
        

          <div className="hidden lg:block md:hidden">
            <div className="flex  gap-10 items-center text-slate-600">
              <Link
                className={`${
                  currentPath == "/" && "g-card px-2 py-1 font-semibold"
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

          <div className="">
            <div className="ml-4 flex items-center md:ml-6 gap-5">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className=" relative rounded-full"
                    >
                      <Avatar>
                        <AvatarImage src={user.image === null ? 'https://i.postimg.cc/bY39DvGm/image.png': user.image} />
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={"/profile"}>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>signOut()}>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
           {  session.status === "loading" ? <div className="animate-spin"><Loader2Icon size={13}/></div> :   <Link href="/api/auth/signin">
                  <Button>Sign In</Button>
                </Link>}
                </>
              )}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
