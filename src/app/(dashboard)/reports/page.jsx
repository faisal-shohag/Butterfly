"use server";
import React from "react";
import Chart from "@/components/Chart";
import { IoNotificationsCircle } from "react-icons/io5";
import ReportsTable from "./ReportsTable";
import ReportsCards from "./Reports";

const page = () => {
  const name = "Total Hive Posts";
  const amount = "Total Hive Post Users";

  return (
    <div>
      <div className="w-full flex justify-between items-center mb-4">
        <h4 className="font-bold text-xl text-gray-600">Hive Posts Report</h4>
        <IoNotificationsCircle className="text-3xl cursor-pointer text-gray-500 hover:text-blue-500 transition-colors" />
      </div>

      <ReportsCards/>
      {/* <Chart total={600} number={100} name={name} amount={amount}></Chart> */}

      <ReportsTable/>
    </div>
  );
};

export default page;
