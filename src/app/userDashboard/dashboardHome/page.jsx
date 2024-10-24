"use server";

import UserTopCards from "./UserTopCards";
import UserDashboardChart from "./UserDashboardChart";
import CalenderComponent from "./CalenderComponent";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-2">
        <h4 className="font-bold text-gray-500">Dashboard</h4>
        {/* <IoNotificationsCircle className="text-2xl cursor-pointer" /> */}
      </div>
      <UserTopCards />
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
        <div className="w-full col-span-2">
          <UserDashboardChart />
        </div>
        <div className="w-full">
          <CalenderComponent />
        </div>
      </div>
    </div>
  );
};

export default page;
