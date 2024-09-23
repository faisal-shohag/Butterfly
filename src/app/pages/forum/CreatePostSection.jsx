import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";
import { Image, SendHorizonal, X } from "lucide-react";
import ImageN from "next/image";

export default function CreatePostSection() {
  return (
    <div className="w-full p-3 custom-glass flex justify-center items-center gap-2 rounded-md shadow-md">
     <div className="flex items-start w-full gap-4 font-kalpurush">
            <ImageN 
              src='https://i.postimg.cc/GmY0ZXtx/image.png' 
              alt='avatar'
              width={40} 
              height={40}
              className="w-10 h-10 rounded-full object-cover border-2 border-zinc-400"
            />
            <div className="flex-grow relative rounded-xl border-2 shadow-sm pb-5 dark:bg-zinc-900">
              <Textarea 
                placeholder="Whats on you mind?" 
                className="w-full h-[50px] p-3 rounded-lg transition-colors duration-200 ease-in-out border-0 focus:border-0 focus:outline-none dark:bg-zinc-900 dark:border-zinc-800 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <div className="absolute right-3  bottom-2 flex items-center justify-center gap-2">
                <label className="px-2 py-2 bg-gray-200 rounded-sm shadow-sm cursor-pointer dark:bg-gray-800">
                  <Image size={18}/>
                  <input
                    type="file"
                    multiple
              
                    className="hidden"
                    accept="image/*"
                  />
                </label>
                <button
                  
                  className={`px-2 py-2 rounded-full transition-colors duration-200 ease-in-out bg-black text-white dark:bg-zinc-700`}
                >
            
                    <SendHorizonal size={15} />
                </button>
              </div>
            </div>
          </div>
    </div>
  );
}
