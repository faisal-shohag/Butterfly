"use client";
import { useState } from "react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useQuery } from "react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loading from "@/components/common/Loading";

export default function BooksTable() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const axiosSecure = useAxiosSecure();

  const {
    data: books = [],
    isLoading,
    isError,
  } = useQuery(["storeBooks"], async () => {
    const response = await axiosSecure.get("/store_books");
    return response.data;
  });

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  //   // Add delete functionality
  // const handleDelete = (id) => {
  //   // Confirm and delete logic goes here
  //   console.log(`Delete book with id: ${id}`);
  // };

  // Display loading and error states
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Failed to load books. Please try again later.</div>;
  }

  return (
    <table className="w-full text-left table-auto border-collapse">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 max-w-1/6 font-semibold text-gray-700">Image</th>
          <th className="p-3 max-w-1/6 font-semibold text-gray-700">
            Book Name
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-gray-700">
            Writer Name
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-gray-700">
            Category
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-gray-700">
            Language
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-gray-700">Price</th>
          <th className="p-3 max-w-1/6 font-semibold text-center text-gray-700">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {books.storeBooks.map((book) => (
          <tr key={book.id} className="hover:bg-gray-50">
            <td className="p-1 flex justify-center">
              <img
                src={book?.cover}
                alt={book.title}
                className="w-10 h-auto rounded"
              />
            </td>
            <td className="p-3 max-w-1/6 text-sm font-medium text-gray-900">
              {book.title}
            </td>
            <td className="p-3 max-w-1/6 text-sm text-gray-500">
              {book?.author}
            </td>
            <td className="p-3 !max-w-1/6 text-sm text-gray-500">
              {book?.category}
            </td>
            <td className="p-3 max-w-1/6 text-sm text-gray-500">
              {book?.language}
            </td>
            <td className="p-3 max-w-1/6 text-sm text-red-500">
              ৳{book?.price}
            </td>
            <td className="text-sm max-w-1/6 relative cursor-pointer">
              <div
                className="flex justify-center items-center"
                onClick={() => toggleMenu(book.id)}
              >
                <BsThreeDotsVertical />
              </div>
              {openMenuId === book.id && (
                <div className="absolute top-2/3 mt-2 right-1/2 border w-40 flex flex-col p-2 rounded-lg bg-white shadow-lg z-10">
                  <Link
                    href={`/dashboard/books/details/${book.id}`}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/dashboard/books/Edit/${book.id}`}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    className="p-2 hover:bg-gray-100 rounded"
                    // onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
