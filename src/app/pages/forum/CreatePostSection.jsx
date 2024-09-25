"use client"
import React from "react";
import  { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Textarea } from "@/components/ui/textarea";
import { Image, SendHorizonal, X } from "lucide-react";
import ImageN from "next/image";

export default function CreatePostSection() {
  const [postContent, setPostContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handlePostSubmit = () => {
    if (postContent.trim()) {
      console.log(postContent);
      setPostContent("");
      setIsModalVisible(true);
      setTimeout(() => setIsModalVisible(false), 2000);
    }
  };

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
                required
                onChange={(e) => setPostContent(e.target.value)}
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
                   onClick={handlePostSubmit}
                  className={`px-2 py-2 rounded-full transition-colors duration-200 ease-in-out bg-black text-white dark:bg-zinc-700`}
                >
                   
                    <SendHorizonal size={15} />
                </button>
              </div>
              
            </div>           
          </div>
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-gray-300 dark:bg-zinc-900 p-6 rounded-lg shadow-lg text-center w-60 h-28">
            <h2 className="text-lg font-bold text-green-500">Post Successful!</h2>
            <button
              onClick={() => setIsModalVisible(false)}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
