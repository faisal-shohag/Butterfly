import Image from "next/image";
import book from "../../../_images/book.webp";
import { TiPen } from "react-icons/ti";
import { MdOutlinePublish } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";

export default function ProfileBookCard() {
  return (
    <div className="w-full p-3 border rounded-md custom-glass">
      <div className="w-full flex justify-center gap-1 items-center">
        <div className="w-1/3 h-[100px] rounded-md overflow-hidden">
          <Image src={book} alt="book image " className="h-full mx-auto" />
        </div>
        <div className="w-2/3 ">
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
            Book Name
          </h3>
          <p className="opacity-70 flex justify-start items-center gap-1">
            <TiPen /> writer name
          </p>
          <div className="w-full flex justify-between items-center">
            <small className="flex opacity-70 justify-center gap-1 items-center">
              <MdOutlinePublish />
              Publisher
            </small>
            <small className="flex  opacity-70 justify-center gap-1 items-center">
              <IoIosCalendar />
              2024
            </small>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="custom-glass px-4 w-[120px] font-bold !bg-gray-900 !dark:bg-gray-100 !text-gray-200 !dark:text-gray-900 !py-1 rounded-md">
          Details
        </button>
      </div>
    </div>
  );
}
