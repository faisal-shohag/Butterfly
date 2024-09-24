"use client";

import Image from "next/image";
import ExchangeForm from "./ExchangeForm";
import { useState } from "react";
import AddBookForm from "./AddBookForm";
import AboutUSer from "./AboutUSer";

const Profile = () => {
  const [callOptions, setCallOptions] = useState("user");

  return (
    <div className="mx-auto mt-[-20px]">
      <div
        style={{
          backgroundImage: "url('https://i.postimg.cc/05wQx63s/image.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
        className="custom-glass-2 h-32 relative mb-28"
      >
        <div className="absolute bottom-[-70px] left-[10px] border-4 rounded-full dark:border-zinc-900 border-white">
          <Image
            src="https://i.postimg.cc/5tqhtjwH/image.png"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="absolute left-32 -bottom-16">
          <div className="text-2xl font-bold">Jabir Ibn Haiyan</div>
          <div className="font-semibold">jabir.haiyan@gmail.com</div>
        </div>
      </div>
      <div className="container mx-auto px-2">
        <div className="custom-glass flex w-full p-2 mb-3 rounded-md">
          <button
            onClick={() => setCallOptions("user")}
            className="custom-glass px-4 font-bold text-gray-600 dark:text-gray-200 border !py-1 mr-2 rounded-md"
          >
            About User
          </button>
          <button
            onClick={() => setCallOptions("book")}
            className="custom-glass px-4 font-bold text-gray-600 dark:text-gray-200 border !py-1 mr-2 rounded-md"
          >
            Add Book
          </button>
          <button
            onClick={() => setCallOptions("exchange")}
            className="custom-glass px-4 font-bold text-gray-600 dark:text-gray-200 border !py-1 mr-2 rounded-md"
          >
            Exchanges
          </button>
        </div>
        <div className="custom-glass w-full p-2 rounded-md">
          {callOptions === "user" && <AboutUSer />}
          {callOptions === "book" && <AddBookForm />}
          {callOptions === "exchange" && <ExchangeForm />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
