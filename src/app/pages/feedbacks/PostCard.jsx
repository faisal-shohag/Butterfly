import React from "react";
import user from "@/_images/user.jpg";
import postimage from "@/_images/postimage.jpg";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { VscShare } from "react-icons/vsc";
import { IoIosSend } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { RiShareForward2Fill } from "react-icons/ri";
import { MdOutlineAddReaction } from "react-icons/md";

export default function PostCard() {
  return (
    <div className="w-full  bg-white rounded-md shadow-md">
      <div className="w-full flex p-3 border-b justify-between items-center">
        {/* ------ profile part ------  */}
        <div className="flex gap-2">
          <Image
            src={user}
            alt="user profile"
            className="w-[45px] h-[45px] rounded-full"
          ></Image>
          <div className="flex flex-col">
            <strong>@User-name</strong>
            <small className="text-gray-600">Book name</small>
          </div>
        </div>
        <BsThreeDots />
      </div>
      {/* ---------------- post part ----------------  */}
      <div className="w-full pt-3 px-3 border-b">
        <p>
          I recently finished reading "The Art of Learning" by Josh Waitzkin,
          and I must say it’s a captivating read. The book takes you through
          Waitzkin’s journey as a chess prodigy and martial artist, offering
          deep insights into the process of learning and mastery.
        </p>
        <div className="w-full p-2">
          <Image src={postimage} alt="post image" className="w-full" />
        </div>
        <div className="w-full p-2 flex justify-between items-center">
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
          <Image
            src={user}
            alt="user image "
            className="w-[30px] h-[30px] rounded-full "
          />
          <form className="flex justify-center items-center">
            <input
              type="text"
              placeholder="write a comment"
              className="w-[300px] p-1 px-2 border bg-gray-100 rounded-full"
            />
            <button
              type="submit"
              className="bg-gray-100 ml-2 border rounded-full p-1  flex justify-center items-center outline-0"
            >
              <IoIosSend className="text-blue-600 text-2xl" />
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="p-2 rounded-full border outline-0 bg-gray-100 flex justify-center items-center">
            <FaLink className="text-xl" />
          </button>
          <button className="p-2 rounded-full border outline-0 bg-gray-100 flex justify-center items-center">
            <RiShareForward2Fill className="text-xl" />
          </button>
          <button className="p-2 rounded-full border outline-0 bg-gray-100 flex justify-center items-center">
            <MdOutlineAddReaction className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
