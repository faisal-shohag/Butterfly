import React from "react";
import {
  FaHome,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLink,
  FaUserFriends,
  FaBook,
} from "react-icons/fa"; // Updated icons

export default function UserProfile() {
  return (
    <div className="w-full col-span-1 sm:col-span-2">
      <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <div className="text-center">
          {/* Profile Icon with Text */}
          <p className="text-3xl text-gray-700 dark:text-gray-300 mb-2">📚📖</p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            বইয়ের মাঝে নতুন দিগন্ত উন্মোচন, প্রতিটি পাতায় একটি নতুন গল্প।
          </p>
        </div>

        <div className="mt-4">
          {/* Work and Education */}
          <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <FaHome className="mr-2" />
              <span>Book Enthusiast at Book Exchange Hub</span>
            </div>
            <div className="flex items-center">
              <FaHome className="mr-2" />
              <span>
                Studied Literature at Dhaka University - ঢাকা বিশ্ববিদ্যালয়
              </span>
            </div>
            <div className="flex items-center">
              <FaHome className="mr-2" />
              <span>Completed Book Exchange Workshops</span>
            </div>
          </div>

          {/* Location, Relationship, and Following */}
          <div className="mt-4 flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Lives in Dhaka</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>From Chittagong, Bangladesh</span>
            </div>
            <div className="flex items-center">
              <FaUserFriends className="mr-2" />
              <span>In a relationship</span>
            </div>
            <div className="flex items-center">
              <FaUserFriends className="mr-2" />
              <span>Followed by 150 book lovers</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-4 flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>hafizrobiussani@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span>+8801617688805</span>
            </div>
            <div className="flex items-center">
              <FaLink className="mr-2" />
              <span>bookexchangehub.com</span>
            </div>
          </div>

          {/* Books Exchanged */}
          <div className="mt-4 flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
            <h3 className="text-lg font-semibold">Books Exchanged:</h3>
            <div className="flex items-center">
              <FaBook className="mr-2" />
              <span>The Alchemist</span>
            </div>
            <div className="flex items-center">
              <FaBook className="mr-2" />
              <span>To Kill a Mockingbird</span>
            </div>
            <div className="flex items-center">
              <FaBook className="mr-2" />
              <span>Pride and Prejudice</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
