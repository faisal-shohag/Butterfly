import React from "react";
import { IoDocumentText, IoPeople } from "react-icons/io5"; // Icons from react-icons

export default function HivePostRepostCards() {
  // Dummy data for radial progress
  const hivePostProgress = 60; // Represents 60%
  const hiveUserProgress = 45; // Represents 45%
  const repostProgress = 80; // Represents 80%

  // Function to calculate stroke-dashoffset for radial progress
  const calcStrokeDashOffset = (progress) => {
    const radius = 30; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    return circumference - (progress / 100) * circumference;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
      {/* Total Hive Posts Card */}
      <div className="p-3 border shadow-md rounded-lg hover:shadow-lg transition-transform bg-gradient-to-r from-blue-500 to-indigo-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Total Hive Posts</h2>
          <IoDocumentText className="text-3xl text-white" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-white">600</h2>
            <p className="text-gray-200">Progress: {hivePostProgress}%</p>
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
                strokeDashoffset={calcStrokeDashOffset(hivePostProgress)}
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

      {/* Total Hive Post Users Card */}
      <div className="p-3 border shadow-md rounded-lg hover:shadow-lg transition-transform bg-gradient-to-r from-green-500 to-teal-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Total Hive Post Users
          </h2>
          <IoPeople className="text-3xl text-white" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-white">100</h2>
            <p className="text-gray-200">Progress: {hiveUserProgress}%</p>
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
                strokeDashoffset={calcStrokeDashOffset(hiveUserProgress)}
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

      {/* Total Reposts Card */}
      <div className="p-3 border shadow-md rounded-lg hover:shadow-lg transition-transform bg-gradient-to-r from-pink-500 to-red-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Total Reposts</h2>
          <IoDocumentText className="text-3xl text-white" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-white">80</h2>
            <p className="text-gray-200">Progress: {repostProgress}%</p>
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
                strokeDashoffset={calcStrokeDashOffset(repostProgress)}
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
