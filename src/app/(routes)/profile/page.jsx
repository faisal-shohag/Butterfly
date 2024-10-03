"use server";

import UserProfile from "./UserProfile";

const Profile = () => {
  return (
    <div className="mx-auto container p-3 grid grid-cols-1 sm:grid-cols-6 gap-3 mt-[-20px]">
      {/* Main profile section */}
      <UserProfile />

      {/* Placeholder for additional content or ads */}
      <div className="w-full col-span-1 sm:col-span-2">
      <div className="w-full  bg-white dark:bg-gray-900 shadow-md rounded-md">
        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 p-3">People may you know</h3><hr />
        <div className="p-3"></div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
