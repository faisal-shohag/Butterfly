import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"; // Assuming your table component import path from shadcnui

export default function ExchangesRequestTable({ request }) {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  // Helper function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Will return 'YYYY-MM-DD' format
  };

  return (
    <div className="w-full">
      <Toaster />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-3">#</TableHead>
            <TableHead className="p-3 col-span-2">Requester’s Book</TableHead>
            <TableHead className="p-3 col-span-2">Looking For</TableHead>
            <TableHead className="p-3">Status</TableHead>
            <TableHead className="p-3">Message</TableHead>
            <TableHead className="p-3 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {request.map((item, idx) => (
            <TableRow
              key={item.id}
              className="hover:bg-zinc-50 dark:hover:bg-zinc-700"
            >
              <TableCell>{idx + 1}</TableCell>

              {/* Requester’s Book */}
              <TableCell className="p-1 col-span-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={
                      item?.book?.cover ||
                      "https://i.postimg.cc/44FccD29/cover-default-item.jpg"
                    }
                    alt="Requester’s Book Cover"
                    className="w-[50px]"
                  />
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                      {item?.book?.title}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      by {item?.book?.author}
                    </p>
                  </div>
                </div>
              </TableCell>

              {/* Looking For */}
              <TableCell className="p-1 col-span-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={
                      item?.book?.lookingFor?.cover ||
                      "https://i.postimg.cc/44FccD29/cover-default-item.jpg"
                    }
                    alt="Looking For Book Cover"
                    className="w-[50px]"
                  />
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                      {item?.book?.lookingFor?.title}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      by {item?.book?.lookingFor?.author}
                    </p>
                  </div>
                </div>
              </TableCell>

              {/* Status */}
              <TableCell>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  {item?.status}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {formatDate(item?.updatedAt)}
                </p>
              </TableCell>

              {/* Message */}
              <TableCell className="p-3 text-sm text-zinc-500 dark:text-zinc-400">
                {item?.message}
              </TableCell>

              {/* Action */}
              <TableCell className="text-sm text-center relative">
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={() => toggleMenu(item.id)}
                >
                  <BsThreeDotsVertical className="text-zinc-600 dark:text-zinc-300" />
                </div>
                {openMenuId === item.id && (
                  <div className="absolute top-2/3 mt-2 right-1/2 border w-40 flex flex-col p-2 rounded-lg bg-white dark:bg-zinc-800 shadow-lg z-10">
                    <Link
                      href={`#`}
                      className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded"
                    >
                      Details
                    </Link>
                    <Link
                      href={`#`}
                      className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded"
                    >
                      Edit
                    </Link>
                    <button className="p-2 bg-zinc-100 dark:bg-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-600 text-red-600 dark:text-red-400 rounded">
                      Delete
                    </button>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
