"use server";
import PostSection from "@/app/(routes)/profile/PostSection";
import UserProfile from "@/app/(routes)/profile/UserProfile";
import { auth } from "@/auth";
import React from "react";

const page = async () => {
  const {user} = await auth();
  return (
    <div className="mx-auto container p-3 grid grid-cols-1 sm:grid-cols-4 gap-3 mt-[-20px]">
      {/* Main profile section */}
      <div className="w-full col-span-1 sm:col-span-4">
        {/* Pass userInfo to UserProfile  component */}
        <UserProfile user={user} />
        <PostSection />
      </div>
    </div>
  );
};

export default page;
