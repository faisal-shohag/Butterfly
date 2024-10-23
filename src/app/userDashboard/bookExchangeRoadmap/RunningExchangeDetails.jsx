"use client";
import { useState } from "react";
import {
  FaBookOpen,
  FaArrowRight,
  FaWarehouse,
  FaCheckCircle,
  FaSpinner,
  FaHome,
  FaTruck,
  FaShippingFast,
} from "react-icons/fa";
import Style from "./Roadmap.module.css";
import Image from "next/image";

export default function RunningExchangeDetails() {
  const [userReceived, setUserReceived] = useState(true);
  const [exchangerReceived, setExchangerReceived] = useState(true);
  const [UserProcessing, setUserProcessing] = useState(false);
  const [exchangerProcessing, setExchangerProcessing] = useState(false);
  const [UserReceivedHQ, setUserReceivedHQ] = useState(false);
  const [ExchangerReceivedHQ, setExchangerReceivedHQ] = useState(false);

  return (
    <div className="w-full py-4 mb-5">
      <div className="custom-glass py-4 mb-4 rounded-md">
        <h1 className="text-3xl text-center font-bold">
          Running Exchangeing Details
        </h1>
      </div>
      <div className="grid grid-cols-2 px-2 gap-4 sm:gap-6">
        {/* User's book exchange steps */}
        <div className="w-full grid grid-cols-1">
          <div className="flex gap-3 sm:gap-4 items-center relative">
            {/* Icon inside a circular shape */}
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaBookOpen className="text-zinc-600 dark:text-white text-sm sm:text-base" />
            </div>
            <div className="p-1 sm:p-2 py-2 relative sm:py-3 border-l border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute top-0 -left-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Received
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                You have received the book from the user.
              </p>
              {/* Icons to represent done or processing */}
              <div className="flex items-center space-x-2">
                {userReceived ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {userReceived ? "Done" : "Processing"}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 items-center relative">
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaArrowRight className="text-zinc-600 dark:text-white text-sm sm:text-base" />
            </div>
            <div className="p-1 relative sm:p-2 py-2 sm:py-3 border-l border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute top-0 -left-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Processing
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The book is being processed to send to headquarters.
              </p>
              <div className="flex items-center space-x-2">
                {UserProcessing ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {UserProcessing ? "Done" : "Processing"}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 items-center relative">
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaWarehouse className="text-zinc-600 dark:text-white text-sm sm:text-base" />
            </div>
            <div className="p-1 relative border-b sm:p-2 py-2 sm:py-3 border-l border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute top-0 -left-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Received HQ
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The book has been received at the headquarters.
              </p>
              <div className="flex items-center space-x-2">
                {UserReceivedHQ ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {UserReceivedHQ ? "Done" : "Processing"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Exchanger's book exchange steps */}
        <div className="w-full grid grid-cols-1">
          <div className="flex gap-3 sm:gap-4 items-center relative">
            <div className="p-1 sm:p-2 py-2 sm:py-3 relative border-r border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute top-0 -right-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Received
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The exchanger has received the book from you.
              </p>
              <div className="flex items-center space-x-2">
                {exchangerReceived ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {exchangerReceived ? "Done" : "Processing"}
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaBookOpen className="text-zinc-600 dark:text-white text-sm sm:text-base" />
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 items-center relative">
            <div className="p-1 relative sm:p-2 py-2 sm:py-3 border-r border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute top-0 -right-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Processing
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The book is on its way to the exchanger's headquarters.
              </p>
              <div className="flex items-center space-x-2">
                {exchangerProcessing ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {exchangerProcessing ? "Done" : "Processing"}
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaArrowRight className="text-zinc-600 rotate-180 dark:text-white text-sm sm:text-base" />
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 items-center relative">
            <div className="p-1 relative border-b sm:p-2 py-2 sm:py-3 border-r border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute top-0 -right-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Received HQ
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The book has been received at the exchanger's headquarters.
              </p>
              <div className="flex items-center space-x-2">
                {ExchangerReceivedHQ ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button
                  className="text-sm text-blue-500"
                  onClick={() => setReceivedHQ(!receivedHQ)}
                >
                  {ExchangerReceivedHQ ? "Done" : "Processing"}
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaWarehouse className="text-zinc-600 dark:text-white text-sm sm:text-base" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 px-2 gap-4 sm:gap-6">
        <div className="w-full h-5 border-r"></div>
        <div className="w-full h-5 border-l"></div>
      </div>
      {/* ---- water pot ---------  */}
      <div className=" grid grid-cols-3">
        <div className="flex justify-center items-center">
          <Image
            src="https://i.postimg.cc/k5t6N5HR/images.jpg"
            alt="book image"
            width={200}
            height={300}
            className="h-[100px] w-[60px] max-w-full object-cover md:w-[120px] md:h-[200px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[110px] md:w-[210px] h-[110px] md:h-[210px] border-2 rounded-full flex justify-center items-center">
            <div className="w-[100px] md:w-[200px] h-[100px] md:h-[200px] relative rounded-full overflow-hidden border bg-[#8a8a8a62]">
              <div className={Style.DropLine}>
                <span className={Style.DropWater}></span>
              </div>
              <div
                className={`w-full h-full absolute -left-[1px] top-[0%] ${Style.waterLayer} rounded-full overflow-hidden border  bg-[#6969695b]`}
              >
                <div className={Style.water}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="https://i.postimg.cc/pL1Vcv8f/81ntjoq-R5-SL-AC-UF894-1000-QL80.jpg"
            alt="book image"
            width={200}
            height={300}
            className="h-[100px] w-[60px] max-w-full object-cover md:w-[120px] md:h-[200px]"
          />
        </div>
      </div>
      {/* -------- exchangeing ending ------------------  */}
      <div className="grid grid-cols-2 px-2 gap-4 sm:gap-6">
        <div className="w-full h-5 border-r"></div>
        <div className="w-full h-5 border-l"></div>
      </div>

      <div className="grid grid-cols-2 px-2 gap-4 sm:gap-6">
        {/* User's book exchange steps */}
        <div className="w-full grid grid-cols-1">
          <div className="flex gap-3 sm:gap-4 items-center relative">
            {/* Icon inside a circular shape */}
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaShippingFast className="text-zinc-600 dark:text-white text-sm sm:text-base" />
            </div>
            <div className="p-1 border-t sm:p-2 py-2 relative sm:py-3 border-l border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute bottom-0 -left-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Book Sent
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                You have sent the book to the headquarters.
              </p>
              {/* Icons to represent done or processing */}
              <div className="flex items-center space-x-2">
                {userReceived ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {userReceived ? "Done" : "Processing"}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 items-center relative">
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaTruck className="text-zinc-600 dark:text-white text-sm sm:text-base" />
            </div>
            <div className="p-1 relative sm:p-2 py-2 sm:py-3 border-l border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute bottom-0 -left-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                In Transit
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The book is being transported to the headquarters.
              </p>
              <div className="flex items-center space-x-2">
                {UserProcessing ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {UserProcessing ? "Done" : "Processing"}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 items-center relative">
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaHome className="text-zinc-600 dark:text-white text-sm sm:text-base" />
            </div>
            <div className="p-1 relative sm:p-2 py-2 sm:py-3 border-l border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute bottom-0 -left-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Received HQ
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The book has been received at the headquarters.
              </p>
              <div className="flex items-center space-x-2">
                {UserReceivedHQ ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {UserReceivedHQ ? "Done" : "Processing"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Exchanger's book exchange steps */}
        <div className="w-full grid grid-cols-1">
          <div className="flex gap-3  sm:gap-4 items-center relative">
            <div className="p-1 sm:p-2 border-t py-2 sm:py-3 relative border-r border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute bottom-0  -right-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Book Sent
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The exchanger has sent the book to the headquarters.
              </p>
              <div className="flex items-center space-x-2">
                {exchangerReceived ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {exchangerReceived ? "Done" : "Processing"}
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaShippingFast className="text-zinc-600 dark:text-white text-sm sm:text-base" />
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 items-center relative">
            <div className="p-1 relative sm:p-2 py-2 sm:py-3 border-r border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute bottom-0 -right-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                In Transit
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The book is on its way to the exchanger's headquarters.
              </p>
              <div className="flex items-center space-x-2">
                {exchangerProcessing ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {exchangerProcessing ? "Done" : "Processing"}
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaTruck className="text-zinc-600  dark:text-white text-sm sm:text-base" />
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 items-center relative">
            <div className="p-1 relative sm:p-2 py-2 sm:py-3 border-r border-zinc-300 dark:border-zinc-600 w-full">
              <div className="absolute bottom-0 -right-[10px] w-[20px] rounded-full h-[20px] bg-black dark:bg-white"></div>
              <h2 className="font-bold text-zinc-800 dark:text-white text-sm sm:text-base">
                Received HQ
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm">
                The book has been received at the exchanger's headquarters.
              </p>
              <div className="flex items-center space-x-2">
                {ExchangerReceivedHQ ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaSpinner className="animate-spin text-yellow-500" />
                )}
                <button className="text-sm text-blue-500">
                  {ExchangerReceivedHQ ? "Done" : "Processing"}
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full">
              <FaHome className="text-zinc-600  dark:text-white text-sm sm:text-base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
