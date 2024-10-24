"use server";
import { auth } from "@/auth";

import PostSection from "./PostSection";
import UserProfile from "./UserProfile";
import UserSubInformation from "./UserSubInformation";

const Profile = async () => {
  // Fetch logged-in user information
  const {user} = await auth();

  return (
    <div className="mx-auto container p-3 grid grid-cols-1 sm:grid-cols-6 gap-3 mt-[-20px]">
      {/* Main profile section */}
      <div className="w-full col-span-1 sm:col-span-4">
        {/* Pass userInfo to UserProfile component */}
        <UserProfile user={user} />
        <div className="block w-full mt-3 sm:hidden">
          <UserSubInformation userId={user.id} isOwnProfile={true}/>
        </div>
        <PostSection />
      </div>

      {/* User additional information */}
      <div className="w-full font-kalpurush col-span-1 sm:col-span-2  hidden sm:block">
        <UserSubInformation  userId={user.id} isOwnProfile={true}/>
      </div>
      
    </div>
  );
};

export default Profile;
