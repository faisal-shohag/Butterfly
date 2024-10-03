import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CiSquarePlus } from "react-icons/ci";

export default function SuggestionsPeopleCard() {
  return (
    <div className="w-full  flex justify-between rounded-md shadow-md dark:bg-gray-800 p-1 gap-1 items-center">
            <div className=" flex justify-start items-center gap-2">
            <Avatar className="w-[50px] h-[50px]">
              <AvatarImage
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="profile cover photo"
                className="rounded-none"
              />
            </Avatar>
            <div className="flex flex-col">
                <h3 className="text-gray-700 dark:text-gray-300 font-bold">Ahmed Shadi</h3>
                <small className="text-gray-700 dark:text-gray-300">CEO of popular publications</small>
            </div>
            </div>

<CiSquarePlus  className="text-2xl font-bold cursor-pointer"/>
            </div>
  )
}
