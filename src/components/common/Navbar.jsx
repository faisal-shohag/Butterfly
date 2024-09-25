"use client"
import { useEffect, useState } from "react";
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
import { Home, Repeat } from "lucide-react";
import { TbButterfly } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { userNav } from "./userNav"; 
import { signOut } from "@/app/pages/authentication/login/action";
// import { useAuth } from "@/providers/authProvider";
const Navbar = () => {
  const currentPath = usePathname();
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await userNav();
      setUser(userData); 
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    await signOut(); 
  };

  console.log(user)
  return (
    <nav className="bg-background border-b mb-5 custom-glass-2  py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex-shrink-0 flex items-center gap-2 font-bold text-xl"
              >
                <Image
                  width={50}
                  height={50}
                  src="https://i.postimg.cc/nrSMfQDf/image.png"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Butterfly logo"
                  className="h-8 w-auto"
                />
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-pink-500 to-red-500">
                  Butterfly
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block md:block">
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
                  currentPath == "/pages/exchanges" &&
                  "g-card px-2 py-1 font-semibold"
                } flex items-center gap-1`}
                href="/pages/exchanges"
              >
                <Repeat size={20} />
                Exchanges
              </Link>

              <Link
                className={`${
                  currentPath == "/pages/store" &&
                  "g-card px-2 py-1 font-semibold"
                } flex items-center gap-1`}
                href="/pages/store"
              >
                <TbButterfly size={20} />
                Butterfly Store
              </Link>

              <Link
                className={`${
                  currentPath == "/pages/forum" &&
                  "g-card px-2 py-1 font-semibold"
                } flex items-center gap-1`}
                href="/pages/forum"
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
                        <AvatarImage src="https://i.postimg.cc/GmY0ZXtx/image.png" />
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>{user.user_metadata.full_name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={"/pages/profile"}>
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <p>Not logged in</p>
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
