import SuggestionsPeopleCard from "./SuggestionsPeopleCard";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SuggestionsPeople() {
  // Create an array of 7 elements to map over
  const peopleArray = Array.from({ length: 7 });

  return (
    <div className="w-full col-span-1 sm:col-span-2">
      <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            People You May Know
          </h3>
          <button className="text-blue-500 hover:underline text-sm">
            See All
          </button>
        </div>
        <div className="p-4 space-y-3">
          {/* Map over the array and render the SuggestionsPeopleCard 7 times */}
          {peopleArray.map((_, index) => (
            <SuggestionsPeopleCard key={index} />
          ))}
        </div>
        <div className="w-full flex cursor-pointer text-blue-500 justify-center items-center gap-2 p-2">
            <h4 className="font-bold">See All </h4> <MdKeyboardArrowDown className="font-bold"/>
        </div>
      </div>
    </div>
  );
}
