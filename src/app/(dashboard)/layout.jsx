"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname for active route check
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

const Layout = ({ children }) => {
  const pathname = usePathname(); // Get current path using usePathname

  const isActive = (path) => pathname === path; // Function to check if route is active

  const menuItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <Home className="h-4 w-4" />,
    },
    {
      href: "/manageUsers",
      label: "Manage users",
      icon: <Users className="h-4 w-4" />,
    },
    { href: "/books", label: "Books", icon: <Package className="h-4 w-4" /> },
    {
      href: "/ordersReport",
      label: "Orders Report",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    // {
    //   href: "/exchangesPostReport",
    //   label: "Exchanges Post Report",
    //   icon: <LineChart className="h-4 w-4" />,
    // },
    {
      href: "/hivePostReport",
      label: "Post Reports",
      icon: <Package2 className="h-4 w-4" />,
    },
    {
      href: "/messages",
      label: "Messages",
      icon: <Bell className="h-4 w-4" />,
    },
    {
      href: "/userProfile",
      label: "Profile",
      icon: <CircleUser className="h-4 w-4" />,
    },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <div className="">
              <div className="flex items-center gap-5">
                <Link
                  href="/dashboard"
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
                    <div>
                      <div>Butterfly</div>
                      <div className="text-xs -mt-2">Let your book fly!</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {menuItems.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                    isActive(href)
                      ? "bg-muted bg-zinc-800 hover:bg-zinc-700 text-white !hover:text-gray-100 "
                      : "text-muted-foreground"
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                {menuItems.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 transition-all ${
                      isActive(href)
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="p-2">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
