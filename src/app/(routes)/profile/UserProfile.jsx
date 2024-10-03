import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"; // Import Button from shadcn UI
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineCastConnected } from "react-icons/md";
import { PiUserCirclePlus } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

export default function UserProfile() {
  return (
    <div className="w-full rounded-md bg-white dark:bg-gray-900 shadow-md overflow-hidden">
      {/* Cover image */}
      <div className="h-[170px] flex justify-center items-center">
        <Avatar className="min-w-full min-h-full rounded-none">
          <AvatarImage
            src="https://miro.medium.com/v2/resize:fit:851/0*4GpVgZhCyslzZC3y.jpg"
            alt="profile cover photo"
            className="rounded-none"
          />
        </Avatar>
      </div>

      {/* Profile image */}
      <div className="w-full flex -mt-[65px] justify-center items-center sm:justify-start px-8">
        <Avatar className="h-[130px] w-[130px] border-[3px] border-white">
          <AvatarImage
            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
            alt="user profile"
          />
        </Avatar>
      </div>

      {/* Content box */}
      <div className="w-full p-3">
        <div className="flex flex-col md:flex-row pl-8 justify-between items-start">
          {/* Name and info section */}
          <div>
            <h2 className="text-2xl font-bold">Alison Jonson</h2>
            <p className="text-gray-700 dark:text-gray-300">jonson@butterfly.com</p>
            <div className="flex items-center my-2 gap-3">
              <small className="text-gray-700 dark:text-gray-300">New York, America</small>
              <small className="text-black border border-black px-3 rounded cursor-pointer">Contact</small>
            </div>
            <div className="flex items-center gap-5">
              {/* Followers and connections info */}
              <div className="flex items-end gap-1">
                <h3 className="font-bold text-xl text-black">3550</h3>{" "}
                <small className="text-gray-700 dark:text-gray-300">followers</small>
              </div>
              <div className="flex items-end gap-1">
                <h3 className="font-bold text-xl text-black">500+</h3>{" "}
                <small className="text-gray-700 dark:text-gray-300">connections</small>
              </div>
            </div>
          </div>

          {/* Social contact section */}
          <div className="flex flex-col mr-5 gap-1">
            <h4 className="font-bold text-gray-700 dark:text-gray-300">Social Contact</h4>
            <hr />
            {/* Facebook */}
            <a className="flex items-center cursor-pointer gap-2">
              <FaFacebookSquare className="text-xl text-blue-600" />
              <strong className="text-gray-600 dark:text-gray-400">Facebook</strong>
            </a>
            {/* LinkedIn */}
            <a className="flex items-center cursor-pointer gap-2">
              <FaLinkedin className="text-xl text-blue-600" />
              <strong className="text-gray-600 dark:text-gray-400">LinkedIn</strong>
            </a>
            {/* Twitter */}
            <a className="flex items-center cursor-pointer gap-2">
              <FaTwitter className="text-xl text-blue-500" />
              <strong className="text-gray-600 dark:text-gray-400">Twitter</strong>
            </a>
            {/* Instagram */}
            <a className="flex items-center cursor-pointer gap-2">
              <FaInstagram className="text-xl text-pink-500" />
              <strong className="text-gray-600 dark:text-gray-400">Instagram</strong>
            </a>
          </div>
        </div>

        {/* Action buttons */}
        <div className="w-full flex justify-center sm:justify-start pl-8 gap-2 items-center">
          {/* Black button */}
          <Button className="bg-black text-white">
            <MdOutlineCastConnected className="font-medium mr-2" /> Follow
          </Button>
          <Button className="bg-black text-white">
            <PiUserCirclePlus className="font-medium mr-2" /> Connection
          </Button>

          {/* Button with border-only */}
          <Button variant="outline" className="text-black border-black">
          <BsThreeDots className="font-medium mr-2" /> More
          </Button>

         
        </div>
      </div>
    </div>
  );
}
