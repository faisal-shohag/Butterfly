"use server";

import PostSection from "./PostSection";
import UserProfile from "./UserProfile";
import UserSubInformetion from "./UserSubInformetion";

const Profile = () => {
  return (
    <div className="mx-auto container p-3 grid grid-cols-1 sm:grid-cols-6 gap-3 mt-[-20px]">
      {/* Main profile section */}

      <div className="w-full col-span-1 sm:col-span-4">
        <UserProfile />
        <PostSection />
      </div>

      {/* user info */}
      <UserSubInformetion />
    </div>
  );
};

export default Profile;
