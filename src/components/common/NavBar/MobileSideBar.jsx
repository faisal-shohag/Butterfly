"use client"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignLeft, CircleHelp, Cookie, GlobeLock, Home, InfoIcon, Mail, ReceiptText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MdOutlineHive } from "react-icons/md"
import { PiButterfly } from "react-icons/pi"
import { RiExchange2Line } from "react-icons/ri"

export function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="custom-glass-2" size="icon" variant="outline"><AlignLeft/></Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex flex-col items-center">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            Butterfly

          </SheetTitle>
          <SheetDescription>
           Let your book fly!
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-8"/>
        <div className="font-semibold">Main Menu</div>

        <div className=" flex flex-col gap-3 mt-3">
          <Link href="/" className="flex gap-3 items-center">
          <Home size={20} /> <div>Home</div>
          </Link>

          <Link href="/exchanges" className="flex gap-3 items-center">
          <RiExchange2Line size={20} /> <div>Exchanges</div>
          </Link>

          <Link href="/store" className="flex gap-3 items-center">
          <PiButterfly size={20} /> <div>Store</div>
          </Link>

          <Link href="/hive" className="flex gap-3 items-center">
          <MdOutlineHive size={20} /> <div>Hive</div>
          </Link>

          <div className="font-semibold">Other Links</div>
          <Link href="/about" className="flex gap-3 items-center">
           <InfoIcon size={20}/> <div>About us</div>
          </Link>

          <Link href="/faq" className="flex gap-3 items-center">
           <CircleHelp size={20} /> <div>FAQ</div>
          </Link>

          <Link href="/contact" className="flex gap-3 items-center">
           <Mail size={20} /> <div>Contact us</div>
          </Link>

          <div className="font-semibold">Legal</div>
          <Link href="/terms" className="flex gap-3 items-center">
           <ReceiptText size={20} /> <div>Terms of service</div>
          </Link>

          <Link href="/privacy" className="flex gap-3 items-center">
           <GlobeLock size={20} /> <div>Privacy Policy</div>
          </Link>

          <Link href="/privacy" className="flex gap-3 items-center">
           <Cookie size={20} /> <div>Cookie Policy</div>
          </Link>

        </div>

        <div className="text-zinc-400 text-center text-xs mt-5 absolute bottom-4">
        &copy; Butterfly 2024 | All rights are reserved
        </div>
      </SheetContent>
    </Sheet>
  )
}

