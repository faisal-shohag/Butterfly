import React from "react";
import { IoSwapVertical, IoPerson, IoPeople } from "react-icons/io5"; // Icons from react-icons

export default function ExchangeAndPostReportCards() {
  // Dummy data for radial progress
  const exchangePostsProgress = 80; // Example progress for exchange posts
  const usersProgress = 60; // Example progress for exchange post users
  const groupUsersProgress = 70; // Example progress for group exchange users

  // Function to calculate stroke-dashoffset for radial progress
  const calcStrokeDashOffset = (progress) => {
    const radius = 30; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    return circumference - (progress / 100) * circumference;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7">
      {/* Total Exchange Posts Card */}
      <div className="p-3 border shadow-md rounded-lg hover:shadow-lg transition-transform bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Total Exchange Posts</h2>
          <IoSwapVertical className="text-3xl text-white" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-center text-white">200</h2>
            <p className="text-center text-gray-200">
              Posts Progress: {exchangePostsProgress}%
            </p>
          </div>
          <div className="flex justify-center items-center pt-4">
            <svg className="w-20 h-20">
              <circle
                className="text-gray-300"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className="text-white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="188.4" // 2 * PI * 30 (circumference)
                strokeDashoffset={calcStrokeDashOffset(exchangePostsProgress)}
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Exchange Post Users Card */}
      <div className="p-3 border shadow-md rounded-lg hover:shadow-lg transition-transform bg-gradient-to-r from-green-500 to-teal-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Total Exchange Post Users
          </h2>
          <IoPerson className="text-3xl text-white" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-center text-white">100</h2>
            <p className="text-center text-gray-200">
              Users Progress: {usersProgress}%
            </p>
          </div>
          <div className="flex justify-center items-center pt-4">
            <svg className="w-20 h-20">
              <circle
                className="text-gray-300"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className="text-white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="188.4"
                strokeDashoffset={calcStrokeDashOffset(usersProgress)}
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Group Exchange Users Card (Additional Card) */}
      <div className="p-3 border shadow-md rounded-lg hover:shadow-lg transition-transform bg-gradient-to-r from-blue-500 to-indigo-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Group Exchange Users</h2>
          <IoPeople className="text-3xl text-white" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-center text-white">50</h2>
            <p className="text-center text-gray-200">
              Group Users Progress: {groupUsersProgress}%
            </p>
          </div>
          <div className="flex justify-center items-center pt-4">
            <svg className="w-20 h-20">
              <circle
                className="text-gray-300"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className="text-white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="188.4"
                strokeDashoffset={calcStrokeDashOffset(groupUsersProgress)}
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
