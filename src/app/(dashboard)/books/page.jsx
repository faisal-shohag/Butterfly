"use server";

import BooksTable from "./BooksTable";

const Page = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center mb-4">
        <h4 className="font-bold text-xl text-gray-600">Books</h4>
      </div>
      <BooksTable />
    </div>
  );
};

export default Page;
