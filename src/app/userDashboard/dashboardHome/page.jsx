"use server";

import { IoNotificationsCircle } from "react-icons/io5";
import UserTopCards from "./UserTopCards";
import UserActivityCart from "./UserActivityChart";


const page = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-2">
        <h4 className="font-bold text-gray-500">Dashboard</h4>
        <IoNotificationsCircle className="text-2xl cursor-pointer" />
      </div>
      <UserTopCards />
      <UserActivityCart />

      
    </div>
  );
};

export default page;
