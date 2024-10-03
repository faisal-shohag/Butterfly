"use server";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div className="mx-auto container p-3 grid grid-cols-1 sm:grid-cols-6 gap-3 mt-[-20px]">
      <div className="w-full col-span-1 sm:col-span-4">
        <div className="w-full rounded-md bg-white overflow-hidden">
          {/* cover image  */}
          <div className="h-[170px] flex justify-center items-center">
            <Avatar className="min-w-full min-h-full rounded-none">
              <AvatarImage
                src="https://miro.medium.com/v2/resize:fit:851/0*4GpVgZhCyslzZC3y.jpg"
                alt="profile cover photo"
                className="rounded-none" // Ensures the image is not rounded
              />
            </Avatar>
          </div>
          {/* profile image  */}
          <div className="w-full flex -mt-[65px] justify-center items-center sm:justify-start px-8">
          <Avatar className="h-[130px] w-[130px]  border-[3px] border-white">
                  <AvatarImage src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png' alt='user profile' />
                </Avatar>
          </div>
          {/* content-box  */}
          <div className="w-full p-3 ">
            <div className="flex flex-col justify-between items-start">
              {/* name contant  */}
              <p>there will add some text</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full col-span-1 sm:col-span-2 bg-white p-5 rounded-md"></div>
    </div>
  );
};

export default Profile;
