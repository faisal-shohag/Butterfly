"use server";
import Chart from "@/components/Chart";
import React from "react";
import { IoNotificationsCircle } from "react-icons/io5";
import ExchangeAndPostReportCards from "./ExchangeAndPostReportCards";

const page = () => {
  const name = "Total Exchange posts";
  const amount = "Total Exchange Post Users";

  return (
    <div>
      <div className="w-full flex justify-between items-center mb-4">
        <h4 className="font-bold text-xl text-gray-600">
          Exchanges Posts Report
        </h4>
        <IoNotificationsCircle className="text-3xl cursor-pointer text-gray-500 hover:text-blue-500 transition-colors" />
      </div>

      <ExchangeAndPostReportCards />
      <Chart total={200} number={140} name={name} amount={amount}></Chart>
    </div>
  );
};

export default page;
