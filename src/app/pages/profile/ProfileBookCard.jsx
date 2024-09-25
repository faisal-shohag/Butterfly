import Image from "next/image";
import book from "../../../_images/book.webp"; // Importing a sample book image
import { TiPen } from "react-icons/ti"; // Icon for the writer
import { MdOutlinePublish } from "react-icons/md"; // Icon for publisher
import { IoIosCalendar } from "react-icons/io"; // Icon for calendar (year)

export default function ProfileBookCard() {
  return (
    <div className="w-full p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg custom-glass">
      {/* Flex container for book image and information */}
      <div className="w-full flex  justify-center gap-4 items-center">
        {/* Book Image */}
        <div className="w-full md:w-1/3 h-[120px] rounded-md overflow-hidden">
          <Image
            src={book}
            alt="Book cover of the profile book"
            className="h-full w-auto mx-auto object-cover" // Ensures the image covers its container proportionally
          />
        </div>

        {/* Book Info Section */}
        <div className="w-full md:w-2/3 space-y-2">
          {/* Book Name */}
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
            Book Name
          </h3>

          {/* Writer Name */}
          <p className="opacity-70 flex items-center gap-1 text-sm">
            <TiPen className="text-lg" /> Writer Name
          </p>

          {/* Publisher and Year */}
          <div className="w-full flex justify-between items-center text-sm">
            {/* Publisher Info */}
            <small className="flex items-center gap-1 opacity-70">
              <MdOutlinePublish className="text-lg" />
              Publisher
            </small>

            {/* Year of Publication */}
            <small className="flex items-center gap-1 opacity-70">
              <IoIosCalendar className="text-lg" />
              2024
            </small>
          </div>
        </div>
      </div>

      {/* Details Button */}
      <div className="w-full flex justify-end mt-3">
        <button className="px-4 py-1 w-[120px] font-bold bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-md shadow-lg transition-transform transform hover:scale-105">
          Details
        </button>
      </div>
    </div>
  );
}
