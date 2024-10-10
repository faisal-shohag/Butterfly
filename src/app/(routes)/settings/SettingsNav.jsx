import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaUserEdit, FaKey, FaLink, FaInfoCircle } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";

export default function SettingsNav({ HandleNav }) {
  return (
    // Container for the entire settings navigation panel
    <div className="w-full p-2 rounded-xl bg-white dark:bg-zinc-900 shadow-md">
      {/* Avatar Section */}
      <div className="p-5 sm:flex hidden  justify-center items-center">
        {/* User avatar with border styling */}
        <Avatar className="h-[130px] w-[130px] border-[3px] border-white dark:border-gray-800">
          {/* Avatar image for the user profile */}
          <AvatarImage
            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
            alt="user profile"
          />
        </Avatar>
      </div>

      {/* User Name and Username Section */}
      <div className="sm:flex hidden  justify-center items-center flex-col">
        <h2 className="text-2xl font-bold text-center">Robius Sani</h2>
        <span className="text-center text-gray-600 mx-auto">@robiussani</span>
      </div>

      {/* Settings Options Section */}
      <div className="w-full rounded p-1 flex sm:flex-col gap-1 bg-gray-100 dark:bg-zinc-800 sm:mt-3">
        {/* Button for Editing Profile Information */}
        {/* <button
          onClick={() => HandleNav("profile")}
          className="w-full text-left p-2 rounded bg-white dark:bg-zinc-900 text-sm font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-zinc-700"
        >
          <FaUserEdit /> Edit Profile
        </button> */}

        {/* Button for Changing Username and Password */}
        <button
          onClick={() => HandleNav("nameAndPassword")}
          className="w-full text-left p-2 rounded bg-white dark:bg-zinc-900 text-sm font-medium flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-200 dark:hover:bg-zinc-700"
        >
          <FaKey className="text-xl sm:text-sm" />{" "}
          <p className="hidden sm:block">Name and Password</p>
        </button>

        {/* Button for Managing Social Links */}
        <button
          onClick={() => HandleNav("ContactInfo")}
          className="w-full text-left p-2 rounded bg-white dark:bg-zinc-900 text-sm font-medium flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-200 dark:hover:bg-zinc-700"
        >
          <RiContactsBook2Fill className="text-xl sm:text-sm" />{" "}
          <p className="hidden sm:block">Contact Info</p>
        </button>

        {/* Button for Managing Social Links */}
        <button
          onClick={() => HandleNav("SocialLinks")}
          className="w-full text-left p-2 rounded bg-white dark:bg-zinc-900 text-sm font-medium flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-200 dark:hover:bg-zinc-700"
        >
          <FaLink className="text-xl sm:text-sm" />{" "}
          <p className="hidden sm:block">Social Links</p>
        </button>

        {/* Button for Updating Introduction Info */}
        <button
          onClick={() => HandleNav("IntroductionInfo")}
          className="w-full text-left p-2 rounded bg-white dark:bg-zinc-900 text-sm font-medium flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-200 dark:hover:bg-zinc-700"
        >
          <FaInfoCircle className="text-xl sm:text-sm" />{" "}
          <p className="hidden sm:block">Introduction Info</p>
        </button>
      </div>
    </div>
  );
}
