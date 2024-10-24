"use server";
import TopCards from "./TopCards";
import UpdateDataTable from "./UpdateDataTable";
import { DashboardLineChart } from "./DashboardLineChart";
import { DashboardPieChart } from "./DashboardPieChart";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-2">
        <h4 className="font-bold text-gray-500">Deshboard</h4>
        {/* <IoNotificationsCircle className="text-2xl cursor-pointer" /> */}
      </div>
      <TopCards />
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
        <div className="w-full col-span-1 sm:col-span-2">
          <DashboardLineChart />
        </div>
        <div className="w-full">
          <DashboardPieChart />
        </div>
      </div>

      <div className="w-full">
        <h5 className="font-bold">Store Books</h5>
        <UpdateDataTable />
      </div>
    </div>
  );
};

export default page;
