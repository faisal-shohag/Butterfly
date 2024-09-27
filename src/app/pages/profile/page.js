"use server";
import ProfileHead from "./ProfileHead";
import ProfileTabs from "./ProfileTabs";
const Profile = async () => {
  
  return (
    <div className="mx-auto mt-[-20px]">
     
      <ProfileHead/>
      <ProfileTabs/>



    </div>
  );
};

export default Profile;
