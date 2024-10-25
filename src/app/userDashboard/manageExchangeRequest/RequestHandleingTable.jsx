"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

export default function RequestHandlingTable() {
  const [books] = useState([
    {
      id: 1,
      myBook: {
        image: "https://i.postimg.cc/Vv13ZPpz/b1.png",
        title: "To kill a moc..",
        author: "Harper Lee",
      },
      exchangeBook: {
        image: "https://i.postimg.cc/VNX0Q2DJ/images.jpg",
        title: "1984",
        author: "George Orwell",
      },
      date: "2024-10-25",
      status: "Accepted",
    },
    {
      id: 2,
      myBook: {
        image:
          "https://i.postimg.cc/QMyB750r/71r-Duj-Vy-VWL-AC-UF350-350-QL50.jpg",
        title: "Educated",
        author: "Tara Westover",
      },
      exchangeBook: {
        image:
          "https://i.postimg.cc/pL1Vcv8f/81ntjoq-R5-SL-AC-UF894-1000-QL80.jpg",
        title: "Automatic Habits",
        author: "James clear",
      },
      date: "2024-10-24",
      status: "Pending",
    },
  ]);

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-3">Book</TableHead>
            <TableHead className="px-3">Information</TableHead>
            <TableHead className="px-3">Exchange Book</TableHead>
            <TableHead className="px-3">Information</TableHead>
            <TableHead className="px-3">Status </TableHead>
            <TableHead className="px-3 text-center">Status Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              {/* My Book Image */}
              <TableCell className="p-1">
                <img
                  src={book.myBook.image}
                  alt="My Book Cover"
                  className="w-[50px] h-[70px] object-cover rounded"
                />
              </TableCell>

              {/* My Book Title & Author */}
              <TableCell>
                <p className="text-sm font-semibold">{book.myBook.title}</p>
                <p className="text-xs text-gray-500">by {book.myBook.author}</p>
              </TableCell>

              {/* Exchange Book Image */}
              <TableCell className="p-1">
                <img
                  src={book.exchangeBook.image}
                  alt="Exchange Book Cover"
                  className="w-[50px] h-[70px] object-cover rounded"
                />
              </TableCell>

              {/* Exchange Book Title & Author */}
              <TableCell>
                <p className="text-sm font-semibold">
                  {book.exchangeBook.title}
                </p>
                <p className="text-xs text-gray-500">
                  by {book.exchangeBook.author}
                </p>
              </TableCell>

              {/* Date */}
              <TableCell className="text-sm">
                <p className="text-xs text-gray-500">{book.date}</p>
                <p className="text-xs text-gray-500">{book.status}</p>
              </TableCell>

              {/* Status / Action */}
              <TableCell className="text-center">
                {book.status === "Accepted" ? (
                  <Link href={"/userDashboard/bookExchangeRoadmap"}>
                    <Button size="sm">Details</Button>
                  </Link>
                ) : (
                  <span className="text-yellow-500 font-semibold">
                    Not accepted
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
