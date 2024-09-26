"use client";

import Image from "next/image";
import ExchangeForm from "./ExchangeForm";
import { useState } from "react";
import AddBookForm from "./AddBookForm";
import AboutUSer from "./AboutUSer";
import UsersPosts from "./UsersPosts";
import Settings from "./Settings";

const Profile = () => {
  // useState hook to handle the current selected option (user, book, exchange)
  const [callOptions, setCallOptions] = useState("user");

  return (
    <div className="mx-auto mt-[-20px]">
      {/* Banner section with profile information */}
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
        {/* Profile image with border and rounded corners */}
        <div className="absolute bottom-[-70px] left-[10px] border-4 rounded-full dark:border-zinc-900 border-white">
          <Image
            src="https://i.postimg.cc/5tqhtjwH/image.png"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* User name and email below the profile picture */}
        <div className="absolute left-32 -bottom-16">
          <div className="text-2xl font-bold">Jabir Ibn Haiyan</div>
          <div className="font-semibold">jabir.haiyan@gmail.com</div>
        </div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-2">
        {/* Navigation buttons to switch between sections (About User, Add Book, Exchanges) */}
        <div className="custom-glass flex flex-wrap justify-center items-center sm:justify-start w-full p-2 mb-3 rounded-md">
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
          <button
            onClick={() => setCallOptions("settings")}
            className="custom-glass px-4 font-bold text-gray-600 dark:text-gray-200 border !py-1 mr-2 rounded-md"
          >
            Settings
          </button>
        </div>

        {/* Display the section based on the current selected option */}
        <div className="custom-glass w-full p-2 rounded-md">
          {callOptions === "user" && <AboutUSer />}{" "}
          {/* Show About User section */}
          {callOptions === "book" && <AddBookForm />} {/* Show Add Book form */}
          {callOptions === "exchange" && <ExchangeForm />}{" "}
          {callOptions === "settings" && <Settings />}{" "}
          {/* Show Exchanges form */}
        </div>
      </div>

      {/* User's posts displayed below */}
      <UsersPosts />
    </div>
  );
};

export default Profile;
