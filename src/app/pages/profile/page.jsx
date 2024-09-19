import React from 'react';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { GrMap } from 'react-icons/gr';
import { RiEdit2Line } from 'react-icons/ri';
import profile from "../../../../assets/pj.jpg"
import bgImage from "../../../../assets/image.avif"
const Profile = () => {
  return (
    <div >
      <div className="relative p-6 rounded-lg shadow-lg h-40">
{/* Background Image */}
<div className="absolute inset-0 z-0">
        <Image
          src={bgImage} 
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      </div>
      

      {/* Profile Section */}
      <div className=" grid grid-cols-3 items-center gap-4 z-10 bg-white p-6 rounded-lg shadow-lg">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-[#e1a381] overflow-hidden">
            <Image
              src={profile}  
              alt="Profile Picture"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          {/* User Name */}
          <h1 className="mt-4 text-lg font-semibold text-gray-700">
            Priyasha Sathyangani
          </h1>

          {/* Edit Profile Link */}
          <p className="text-sm text-blue-500 cursor-pointer flex items-center mt-2">
            <span>Edit profile</span>
            <RiEdit2Line className="ml-1" />
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col gap-2 text-gray-700">
          <div className="flex items-center gap-2">
            <MdEmail className="text-xl" />
            <p>anasahammad@gmail.com</p>
          </div>

          <div className="flex items-center gap-2">
            <FaPhone className="text-xl" />
            <p>01726431083</p>
          </div>
        </div>

        {/* Location Information Section */}
        <div className="flex flex-col gap-2 text-gray-700">
          <div className="flex gap-2 items-start">
            <GrMap className="text-xl" />
            <div>
              <p>Dhaka, Bangladesh</p>
              <p>Dhaka District</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
