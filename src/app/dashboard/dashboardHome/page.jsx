"use server";
import HiveAndExchangeChart from "./HiveAndExchangeChart";
import TopCards from "./TopCards";
import { IoNotificationsCircle } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import UpdateDataTable from "./UpdateDataTable";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-2">
        <h4 className="font-bold text-gray-500">Deshboard</h4>
        <IoNotificationsCircle className="text-2xl cursor-pointer" />
      </div>
      <TopCards />
      <HiveAndExchangeChart />

      <div className="w-full">
        <div className="w-full flex justify-between items-center ">
          <h5 className="font-bold">Update Info:</h5>
          <FiFilter />
        </div>
        <UpdateDataTable />
      </div>
    </div>
  );
};

export default page;
