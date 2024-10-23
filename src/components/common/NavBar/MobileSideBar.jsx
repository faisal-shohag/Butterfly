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
import { AlignLeft } from "lucide-react"
import Image from "next/image"

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

        <SheetFooter className="text-zinc-400 text-center">
         Butterfly &copy; 2024
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

