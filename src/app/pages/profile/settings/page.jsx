"use client";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaUserCog, FaRegAddressBook } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import UpdateUserInfo from "./UpdateUserInfo";
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";
import UpdateAdditionalInfo from "./UpdateAdditionalInfo";
import UpdateAddress from "./UpdateAddress";

export default function Page() {
  // State to manage which form section is currently active
  const [callSettingsForm, setCallSettingsForm] = useState("Profile");

  return (
    <div className="w-full">
      <div className="container mx-auto px-2">
        <div className="w-full -mt-[20px]">
          {/* Header background with a profile image */}
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
            {/* Profile image */}
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
        </div>

        {/* Settings Header */}
        <div className="w-full border my-3 rounded-md custom-glass flex justify-center items-center p-2">
          <h3 className="font-bold opacity-70">Settings</h3>
        </div>

        {/* Main section with Sidebar for different settings */}
        <div className="w-full flex flex-col sm:flex-row gap-3">
          {/* Sidebar with buttons to switch between forms */}
          <div className="w-full sm:w-[250px] mb-3 flex sm:flex-col gap-3">
            {/* Profile button */}
            <button
              onClick={() => setCallSettingsForm("Profile")}
              className="w-full custom-glass flex justify-center items-center gap-1 rounded-md py-1 font-bold opacity-70 "
            >
              <CgProfile />
              <p className="hidden sm:block">Profile</p>
            </button>

            {/* User Info button */}
            <button
              onClick={() => setCallSettingsForm("UserInfo")}
              className="w-full custom-glass flex justify-center items-center gap-1 rounded-md py-1 font-bold opacity-70 "
            >
              <FaUserCog />
              <p className="hidden sm:block">User Info</p>
            </button>

            {/* Additional Info button */}
            <button
              onClick={() => setCallSettingsForm("AdditionalInfo")}
              className="w-full custom-glass flex justify-center items-center gap-1 rounded-md py-1 font-bold opacity-70 "
            >
              <IoMdInformationCircleOutline />
              <p className="hidden sm:block">Additional Info</p>
            </button>

            {/* Address button */}
            <button
              onClick={() => setCallSettingsForm("Address")}
              className="w-full custom-glass flex justify-center items-center gap-1 rounded-md py-1 font-bold opacity-70 "
            >
              <FaRegAddressBook />
              <p className="hidden sm:block">Address</p>
            </button>
          </div>

          {/* Main content area where forms are displayed based on the selected option */}
          <div className="w-full  mb-3 p-3 rounded-md">
            <div className="w-full custom-glass">
              {/* Conditional rendering based on the selected settings option */}
              {callSettingsForm === "Profile" && <UpdateProfile />}
              {callSettingsForm === "UserInfo" && <UpdateUserInfo />}
              {callSettingsForm === "AdditionalInfo" && (
                <UpdateAdditionalInfo />
              )}
              {callSettingsForm === "Address" && <UpdateAddress />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
