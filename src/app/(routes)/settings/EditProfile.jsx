"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"; // Shadcn UI button

export default function EditProfile() {
  const { register, handleSubmit, watch } = useForm();
  const [coverUrl, setCoverUrl] = useState(
    "https://miro.medium.com/v2/resize:fit:851/0*4GpVgZhCyslzZC3y.jpg"
  );
  const [profileUrl, setProfileUrl] = useState(
    "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
  );

  // Watch for changes in form inputs
  const watchCoverUrl = watch("coverUrl");
  const watchProfileUrl = watch("profileUrl");

  const onSubmit = (data) => {
    if (data.coverUrl) {
      setCoverUrl(data.coverUrl);
    }
    if (data.profileUrl) {
      setProfileUrl(data.profileUrl);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      {/* Cover image */}
      <div className="h-[170px] flex justify-center items-center">
        <Avatar className="min-w-full min-h-full rounded-none">
          <AvatarImage
            src={watchCoverUrl || coverUrl} // Use the state if no new input
            alt="profile cover photo"
            className="rounded-none border"
          />
        </Avatar>
      </div>

      {/* Profile image */}
      <div className="w-full flex -mt-[65px] justify-center items-center sm:justify-start px-8">
        <Avatar className="h-[130px] w-[130px] border-[3px] border-white dark:border-zinc-800">
          <AvatarImage
            src={watchProfileUrl || profileUrl}
            alt="user profile"
            className="border"
          />
        </Avatar>
      </div>

      <div className="p-4">
        {/* Cover URL input */}
        <label htmlFor="coverUrl" className="block text-sm font-medium mt-3">
          Enter Your Cover URL
        </label>
        <input
          type="url"
          id="coverUrl"
          placeholder="Enter Your Cover URL"
          className="w-full border rounded px-3 p-1 mt-1 outline-0"
          {...register("coverUrl")}
        />

        {/* Profile URL input */}
        <label htmlFor="profileUrl" className="block text-sm font-medium mt-3">
          Enter Your Profile URL
        </label>
        <input
          type="url"
          id="profileUrl"
          placeholder="Enter Your Profile URL"
          className="w-full border rounded px-3 p-1 mt-1 outline-0"
          {...register("profileUrl")}
        />

        {/* Submit button */}
        <Button type="submit" className="mt-4 bg-black text-white">
          Update Profile
        </Button>
      </div>
    </form>
  );
}
