"use client";
import { useState } from "react";
// import Chart from "@/components/Chart";
import { IoNotificationsCircle } from "react-icons/io5";
import HivePostRepostCards from "./HivePostRepostCards";
import ReportsTable from "./ReportsTable";
import { RxCross1 } from "react-icons/rx";

const page = () => {
  // const name = "Total Hive Posts";
  // const amount = "Total Hive Post Users";
  const [callMessageBox, setCallMessageBox] = useState(false);

  const handleMessageBox = (data) => {
    setCallMessageBox(data);
  };

  return (
    <div className="w-full relative flex gap-3">
      <div className="w-full">
        <div className="w-full flex justify-between items-center mb-4">
          <h4 className="font-bold text-xl text-gray-600">Hive Posts Report</h4>
          <IoNotificationsCircle className="text-3xl cursor-pointer text-gray-500 hover:text-blue-500 transition-colors" />
        </div>

        <HivePostRepostCards />
        {/* <Chart total={600} number={100} name={name} amount={amount}></Chart> */}
        <ReportsTable handleMessageBox={handleMessageBox} />
      </div>
      <div
        className={`w-full transition delay-150 absolute top-1 z-50  ${callMessageBox ? "right-1" : "-right-[100%]"} min-h-screen  md:w-[420px]`}
      >
        <div className="w-full border bg-white rounded h-[calc(100vh-80px)]">
          <div className="w-full flex justify-between items-center border-b p-2">
            <h3 className="font-bold text-xl">user name</h3>
            <RxCross1
              className="p-1 text-2xl cursor-pointer rounded-full border"
              onClick={() => setCallMessageBox(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
