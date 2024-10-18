"use server";
import Chart from "@/components/Chart";
import React from "react";
import { IoNotificationsCircle } from "react-icons/io5";
import OrderReportsCards from "./OrderReportsCards";

const page = () => {
  const name = "Total Order";
  const amount = "Total Revenue";

  return (
    <div>
      <div className="w-full flex justify-between items-center mb-4">
        <h4 className="font-bold text-xl text-gray-600">Orders Report</h4>
        <IoNotificationsCircle className="text-3xl cursor-pointer text-gray-500 hover:text-blue-500 transition-colors" />
      </div>

      <OrderReportsCards />
      <Chart total={300} number={500} name={name} amount={amount}></Chart>
    </div>
  );
};

export default page;
