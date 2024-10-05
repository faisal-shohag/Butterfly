"use client";
import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineCastConnected } from "react-icons/md";
import { PiUserCirclePlus, PiCameraRotateFill } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

export default function UserProfile({ userInfo }) {
  const [coverImage, setCoverImage] = useState(
    "https://miro.medium.com/v2/resize:fit:851/0*4GpVgZhCyslzZC3y.jpg"
  );
  const [profileImage, setProfileImage] = useState(
    "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
  );

  // Handle cover image upload
  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle profile image upload
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full rounded-md bg-white dark:bg-zinc-900 shadow-md overflow-hidden">
      {/* Cover image */}
      <div className="h-[170px] flex justify-center items-center">
        <Avatar className="min-w-full relative min-h-full rounded-none">
          <AvatarImage
            src={coverImage}
            alt="profile cover photo"
            className="rounded-none min-w-full h-auto"
          />
          <span
            className="absolute bottom-1 bg-gray-900 right-1 p-1 rounded-full border cursor-pointer"
            onClick={() => document.getElementById("coverInput").click()}
          >
            <input
              type="file"
              id="coverInput"
              hidden
              accept="image/*"
              onChange={handleCoverImageChange}
            />
            <PiCameraRotateFill className="text-xl text-gray-100" />
          </span>
        </Avatar>
      </div>

      {/* Profile image */}
      <div className="w-full flex -mt-[65px] justify-center items-center sm:justify-start px-8">
        <span className="relative">
          <Avatar className="h-[130px] w-[130px] border-[3px] border-white dark:border-gray-800">
            <AvatarImage src={profileImage} alt="user profile" />
          </Avatar>
          <span
            className="absolute bottom-2 bg-gray-900 right-1 p-1 rounded-full border cursor-pointer"
            onClick={() => document.getElementById("profileInput").click()}
          >
            <input
              type="file"
              id="profileInput"
              hidden
              accept="image/*"
              onChange={handleProfileImageChange}
            />
            <PiCameraRotateFill className="text-xl text-gray-100" />
          </span>
        </span>
      </div>

      {/* Content box */}
      <div className="w-full p-3">
        <div className="flex flex-col md:flex-row pl-8 justify-between items-start">
          {/* Name and info section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {userInfo.name}{" "}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{userInfo.email}</p>
            <div className="flex items-center my-2 gap-3">
              <small className="text-gray-700 dark:text-gray-300">
                New York, America
              </small>
              <small className="text-black border border-black px-3 rounded cursor-pointer dark:text-white dark:border-white">
                Contact
              </small>
            </div>
            <div className="flex items-center gap-5">
              {/* Followers and connections info */}
              <div className="flex items-end gap-1">
                <h3 className="font-bold text-xl text-black dark:text-white">
                  3550
                </h3>{" "}
                <small className="text-gray-700 dark:text-gray-300">
                  followers
                </small>
              </div>
              <div className="flex items-end gap-1">
                <h3 className="font-bold text-xl text-black dark:text-white">
                  500+
                </h3>{" "}
                <small className="text-gray-700 dark:text-gray-300">
                  connections
                </small>
              </div>
            </div>
          </div>

          {/* Social contact section */}
          <div className="flex flex-col mr-5 gap-1">
            <h4 className="font-bold text-gray-700 dark:text-gray-300">
              Social Contact
            </h4>
            <hr className="border-gray-300 dark:border-gray-700" />
            {/* Facebook */}
            <a className="flex items-center cursor-pointer gap-2">
              <FaFacebookSquare className="text-xl text-blue-600" />
              <strong className="text-gray-600 dark:text-gray-400">
                Facebook
              </strong>
            </a>
            {/* LinkedIn */}
            <a className="flex items-center cursor-pointer gap-2">
              <FaLinkedin className="text-xl text-blue-600" />
              <strong className="text-gray-600 dark:text-gray-400">
                LinkedIn
              </strong>
            </a>
            {/* Twitter */}
            <a className="flex items-center cursor-pointer gap-2">
              <FaTwitter className="text-xl text-blue-500" />
              <strong className="text-gray-600 dark:text-gray-400">
                Twitter
              </strong>
            </a>
            {/* Instagram */}
            <a className="flex items-center cursor-pointer gap-2">
              <FaInstagram className="text-xl text-pink-500" />
              <strong className="text-gray-600 dark:text-gray-400">
                Instagram
              </strong>
            </a>
          </div>
        </div>

        {/* Action buttons */}
        <div className="w-full flex justify-center sm:justify-start pl-8 gap-2 items-center">
          {/* Black button */}
          <Button className="bg-black text-white dark:bg-gray-800 dark:text-gray-300">
            <MdOutlineCastConnected className="font-medium mr-2" /> Follow
          </Button>
          <Button className="bg-black text-white dark:bg-gray-800 dark:text-gray-300">
            <PiUserCirclePlus className="font-medium mr-2" /> Connection
          </Button>

          {/* Button with border-only */}
          <Button
            variant="outline"
            className="text-black border-black dark:text-white dark:border-white"
          >
            <BsThreeDots className="font-medium mr-2" /> More
          </Button>
        </div>
      </div>
    </div>
  );
}
