"use client";
import { useState } from "react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loading from "@/components/common/Loading";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

// Import ShadCN components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Adjust based on your file structure

export default function ExchangeTable({ books, refetch }) {
  const [callAlert, setCallAlert] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const axiosSecure = useAxiosSecure();

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleDelete = (id) => {
    axiosSecure
      .delete(`/store_books/${id}`)
      .then(() => {
        toast.success("Book deleted successfully!");
        refetch();
        setCallAlert(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        console.error("Error deleting the book:", error);
      });
  };

  return (
    <div className="w-full">
      <Toaster />
      <Table className="w-full" >
        <TableHeader>
          <TableRow>
            <TableHead className="px-3 ">ID</TableHead>
            <TableHead className="px-3 w-[150px]">Image (My Book)</TableHead>
            <TableHead className="px-3 w-[250px]">Title (My Book)</TableHead>
           
            <TableHead className="px-3">Genre (My Book)</TableHead>
            <TableHead className="px-3 w-[200px]">Image (Looking For)</TableHead>
            <TableHead className="px-3 w-[250px]">Title (Lookign For)</TableHead>
            <TableHead className="px-3 w-[150px]">Genre (Looking For)</TableHead>
            <TableHead className="px-3 w-[50px]">Likes</TableHead>
            <TableHead className="px-3 w-[50px]">Requests</TableHead>
            
            <TableHead className="p-3 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book, idx) => (
            <TableRow
              key={book.id}
              className="hover:bg-zinc-50 dark:hover:bg-zinc-700"
            >
              <TableCell>{idx + 1}</TableCell>
              {/* Image */}
              <TableCell className="p-1">
                <img
                  src={
                    book?.cover ||
                    "https://i.postimg.cc/44FccD29/cover-default-book.jpg"
                  }
                  alt="Book Cover"
                  className="w-[50px]"
                />
              </TableCell>

              {/* Book Name */}
              <TableCell>
                <div className="">
                  <p className=" max-w-1/6 text-sm font-medium text-zinc-900 dark:text-zinc-200">
                    {book.title}
                  </p>
                  <p className=" max-w-1/6 text-sm text-zinc-500 dark:text-zinc-400">
                    by {book?.author}
                  </p>
                </div>
              </TableCell>

              {/* Genre Name */}
              <TableCell>
                <p className=" max-w-1/6 text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  {book?.genre}
                </p>
                
              </TableCell>
{/* Image */}
<TableCell className="p-1">
                <img
                  src={
                    book?.lookingFor?.cover ||
                    "https://i.postimg.cc/44FccD29/cover-default-book.jpg"
                  }
                  alt="Book Cover"
                  className="w-[50px]"
                />
              </TableCell>

               {/* Book Name */}
               <TableCell>
                <div className="">
                  <p className="  text-sm font-medium text-zinc-900 dark:text-zinc-200">
                    {book.lookingFor.title}
                  </p>
                  <p className="  text-sm text-zinc-500 dark:text-zinc-400">
                    by {book?.lookingFor.author}
                  </p>
                </div>
              </TableCell>

                {/* Genre Name */}
                <TableCell>
                <p className="  text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  {book?.lookingFor.genre}
                </p>
                
              </TableCell>
              {/* Category */}
              <TableCell>
                <p className="  text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  {book?.likeCount} 
                </p>
                
              </TableCell>

              {/* Price */}
              <TableCell className="p-3 text-sm text-red-500 dark:text-red-400">
                {book?.requestCount}
              </TableCell>

              {/* Action */}
              <TableCell className="text-sm text-center relative">
                <div
                  className="flex justify-center items-center cursor-pointer"
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {callAlert && (
        <div className="w-full h-screen fixed top-0 left-0 flex justify-center z-50 bg-[#0000003b] items-center">
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
                onClick={() => handleDelete(openMenuId)}
                className="px-10"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
