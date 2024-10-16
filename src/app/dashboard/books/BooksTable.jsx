"use client";
import { useState } from "react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useQuery } from "react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

export default function BooksTable() {
  const [callAlter, setCallert] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const axiosSecure = useAxiosSecure();

  const {
    data: books = [],
    isLoading,
    isError,
    refetch,
  } = useQuery(["storeBooks"], async () => {
    const response = await axiosSecure.get("/store_books");
    return response.data;
  });

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

  // Display loading and error states
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Failed to load books. Please try again later.</div>;
  }

  return (
    <table className="w-full text-left table-auto border-collapse">
      <Toaster />
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
            <div
              className={`w-full h-screen ${callAlter ? "block" : "hidden"} fixed top-0 left-0 flex justify-center z-50 bg-[#0000003b] items-center`}
            >
              <div className="bg-white p-5 flex flex-col justify-center items-center gap-5 rounded-md">
                <h3 className="font-bold text-gray-700">
                  Are You Want to delete?
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
              {/* <Image
                src={
                  book?.cover ||
                  "https://i.postimg.cc/44FccD29/cover-default-book.jpg"
                }
                width={20}
                height={50}
                alt={book?.title || "Missing Book Title"}
                className="w-10 h-auto rounded"
              /> */}
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
                    className="p-2 bg-gray-100 hover:bg-gray-200 text-red-600 rounded"
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
