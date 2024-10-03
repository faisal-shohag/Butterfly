"use server";

import SuggestionsPeople from "./SuggestionsPeople";
import UserProfile from "./UserProfile";

const Profile = () => {
  return (
    <div className="mx-auto container p-3 grid grid-cols-1 sm:grid-cols-6 gap-3 mt-[-20px]">
      {/* Main profile section */}
      <UserProfile />

      {/* Suggestions people */}
      <SuggestionsPeople />
    </div>
  );
};

export default Profile;
