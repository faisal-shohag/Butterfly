"use client";
import { useState } from "react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loading from "@/components/common/Loading";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

export default function BooksTable({ books, isLoading, isError, refetch }) {
  const [callAlter, setCallert] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const axiosSecure = useAxiosSecure();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Failed to load books. Please try again later.</div>;
  }

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleDelete = (id) => {
    axiosSecure
      .delete(`/store_books/${id}`)
      .then(() => {
        toast.success("Book deleted successfully!");
        refetch();
        setCallert(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error("Error deleting the book:", error);
      });
  };

  return (
    <table className="w-full text-left table-auto border-collapse">
      <Toaster />
      <thead className="bg-zinc-200 dark:bg-zinc-800">
        <tr>
          <th className="p-3 max-w-1/6 font-semibold text-zinc-700 dark:text-zinc-300">
            Image
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-zinc-700 dark:text-zinc-300">
            Book Name
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-zinc-700 dark:text-zinc-300">
            Writer Name
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-zinc-700 dark:text-zinc-300">
            Category
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-zinc-700 dark:text-zinc-300">
            Language
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-zinc-700 dark:text-zinc-300">
            Price
          </th>
          <th className="p-3 max-w-1/6 font-semibold text-center text-zinc-700 dark:text-zinc-300">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-700">
        {books.map((book) => (
          <tr key={book.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-700">
            <div
              className={`w-full h-screen ${callAlter ? "block" : "hidden"} fixed top-0 left-0 flex justify-center z-50 bg-[#0000003b] items-center`}
            >
              <div className="bg-white dark:bg-zinc-800 p-5 flex flex-col justify-center items-center gap-5 rounded-md">
                <h3 className="font-bold text-zinc-700 dark:text-zinc-300">
                  Are you sure you want to delete?
                </h3>
                <div className="flex justify-center items-center gap-4">
                  <Button
                    onClick={() => setCallert(false)}
                    variant="outline"
                    className="px-10"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleDelete(book.id)}
                    className="px-10"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
            <td className="p-1 flex justify-center">
              <img
                src={
                  book?.cover ||
                  "https://i.postimg.cc/44FccD29/cover-default-book.jpg"
                }
                alt=""
                className="w-[50px]"
              />
            </td>
            <td className="p-3 max-w-1/6 text-sm font-medium text-zinc-900 dark:text-zinc-200">
              {book.title}
            </td>
            <td className="p-3 max-w-1/6 text-sm text-zinc-500 dark:text-zinc-400">
              {book?.author}
            </td>
            <td className="p-3 !max-w-1/6 text-sm text-zinc-500 dark:text-zinc-400">
              {book?.category}
            </td>
            <td className="p-3 max-w-1/6 text-sm text-zinc-500 dark:text-zinc-400">
              {book?.language}
            </td>
            <td className="p-3 max-w-1/6 text-sm text-red-500 dark:text-red-400">
              ৳{book?.price}
            </td>
            <td className="text-sm max-w-1/6 relative cursor-pointer">
              <div
                className="flex justify-center items-center"
                onClick={() => toggleMenu(book.id)}
              >
                <BsThreeDotsVertical className="text-zinc-600 dark:text-zinc-300" />
              </div>
              {openMenuId === book.id && (
                <div className="absolute top-2/3 mt-2 right-1/2 border w-40 flex flex-col p-2 rounded-lg bg-white dark:bg-zinc-800 shadow-lg z-10">
                  <Link
                    href={`/dashboard/books/details/${book.id}`}
                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/dashboard/books/Edit/${book.id}`}
                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    className="p-2 bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 text-red-600 dark:text-red-400 rounded"
                    onClick={() => setCallert(true)}
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
