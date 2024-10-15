"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Camera, Flag, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function UserProfile({ user }) {

  return (
    <div className="w-full rounded-md bg-white dark:bg-zinc-900 shadow-md overflow-hidden">
      <div className="h-[170px] flex justify-center items-center">
        <Image
          height={200}
          width={900}
          src="https://i.postimg.cc/05wQx63s/image.png"
          alt="cover image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" flex -mt-[65px] justify-center items-center sm:justify-start px-5">
        <div className="relative">
         <Avatar className="h-[100px] w-[100px] border-2">
          <AvatarImage src={user.image}></AvatarImage>
          <AvatarFallback className="bg-zinc-950 text-red-500 text-bold text-xl">
            <span className="text-white text-6xl">{user.name.charAt(0).toUpperCase()}</span>
          </AvatarFallback>
         </Avatar>
          <div className="custom-glass-2 absolute right-0 bottom-3 px-1 py-1 rounded-full overflow-hidden cursor-pointer">
            <Camera size={15} className="" />
          </div>
        </div>
      </div>

      <div className="px-3 py-3">
        <div>
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            {user.name}
          </div>
          <div className="text-sm">{user.email}</div>
        </div>

        <div className="flex gap-5 font-semibold text-sm mt-2">
          <div>2 Followers</div>
          <div>4 Following</div>
        </div>

        <div className="mt-2 flex gap-3">
          <Button className="dark:bg-zinc-950 dark:text-white"><Plus size={20} className="mr-2"/> Follow</Button>
          <Button className="dark:bg-zinc-950 dark:text-white"><Flag size={20} className="mr-2"/> Report</Button>
        </div>
      </div>
    </div>
  );
}
