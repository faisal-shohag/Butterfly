import React from "react";
import postimage from "@/_images/postimage.jpg";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { VscShare } from "react-icons/vsc";
import { FaLink } from "react-icons/fa6";
import { RiShareForward2Fill } from "react-icons/ri";
import { MdOutlineAddReaction } from "react-icons/md";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

export default function PostCard() {
  return (
    <div className="w-full custom-glass rounded-xl shadow-md">
      <div className="w-full flex px-4 py-2 dark:border-gray-700 justify-between items-center">
        <div className="flex gap-2">
          <Avatar><AvatarImage src="https://i.postimg.cc/5tqhtjwH/image.png" /></Avatar>
          <div className="flex flex-col">
            <strong className="dark:text-gray-200">FANTASTIC SIX</strong>
            <small className="text-gray-600 dark:text-gray-400">
              Book name
            </small>
          </div>
        </div>
        <BsThreeDots className="dark:text-gray-300" />
      </div>
      {/* ---------------- post part ----------------  */}
      <div className="w-full pt-3 px-3 border-b dark:border-gray-700">
        <p className="dark:text-gray-300">
          I recently finished reading &quot;The Art of Learning&quot; by Josh Waitzkin,
          and I must say it’s a captivating read. The book takes you through
          Waitzkin’s journey as a chess prodigy and martial artist, offering
          deep insights into the process of learning and mastery.
        </p>
        <div className="w-full p-2">
          <Image src={postimage} alt="post image" className="w-full" />
        </div>
        <div className="w-full p-2 flex justify-between items-center dark:text-gray-300">
          <div className="flex justify-center items-center gap-1">
            <SlLike /> <span>250</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <AiOutlineComment /> <span>50</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <VscShare /> <span>17</span>
          </div>
          <div className="flex justify-center items-center gap-1">1/7/2024</div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center p-2">
        <div className="flex justify-center items-center gap-2">
        <Avatar><AvatarImage src="https://i.postimg.cc/GmY0ZXtx/image.png" /></Avatar>
          <form className="flex justify-center items-center">
            <Input
              type="text"
              placeholder="Write a comment..."
              className="max-w-[130px] sm:min-w-[300px] p-1 px-2 border bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 rounded-full"
            />
            <Button
            size="icon"
              type="submit"
              className=" ml-3 rounded-full  flex justify-center items-center outline-0"
            >
              <SendHorizonal size={18} className="text-2xl" />
            </Button>
          </form>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="p-[6px] rounded-full border outline-0 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 flex justify-center items-center">
            <FaLink className="text-xl dark:text-gray-300" />
          </button>
          <button className="p-[6px] rounded-full border outline-0 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 flex justify-center items-center">
            <RiShareForward2Fill className="text-xl dark:text-gray-300" />
          </button>
          <button className="p-[6px] rounded-full border outline-0 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 flex justify-center items-center">
            <MdOutlineAddReaction className="text-xl dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
