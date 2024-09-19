"use client"

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";
import { Search, User, Menu, User2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
    return (
        <nav className="bg-background border-b mb-5 shadow-lg rounded-full px-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image width={50} height={50} src="https://i.postimg.cc/nrSMfQDf/image.png" alt="Butterfly logo" className="h-8 w-auto"/>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link href="/pages/community" className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium">Community</Link>
                                <Link href="/pages/authentication/login" className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                                <Link href="/pages/authentication/registration" className="text-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium">Registration</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 gap-5">
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="text" placeholder="Search" className="pl-8 w-[200px]" />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="icon" variant="ghost" className="ml-3 relative rounded-full">
                                        <User2  size={20}/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Sign out</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <ModeToggle />
                        </div>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                <SheetDescription>
                                    Navigate through our site
                                </SheetDescription>
                            </SheetHeader>
                            <div className="mt-4 space-y-4">
                                <Link href="/" className="block text-foreground hover:text-accent-foreground">Home</Link>
                                <Link href="/about" className="block text-foreground hover:text-accent-foreground">About</Link>
                                <Link href="/services" className="block text-foreground hover:text-accent-foreground">Services</Link>
                                <Link href="/contact" className="block text-foreground hover:text-accent-foreground">Contact</Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;