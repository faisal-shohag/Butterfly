"use server";

import Link from "next/link";
import BooksTable from "./BooksTable";
import { CiFilter } from "react-icons/ci";

const Page = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center mb-4">
        <h4 className="font-bold text-xl text-gray-600">Books</h4>
      </div>
      <div className="w-full mb-1 flex justify-between items-center p-1">
        <Link
          href={"/dashboard/books/add"}
          className="p-1  px-5 bg-black rounded font-medium text-white border-0 outline-0 dark:text-white dark:bg-gray-100"
        >
          Add Book
        </Link>
        <CiFilter />
      </div>
      <BooksTable />
    </div>
  );
};

export default Page;
