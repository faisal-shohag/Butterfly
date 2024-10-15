"use client";
import { useState } from "react";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function BooksTable() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const books = [
    {
      id: 1,
      bookname: "The Alchemist",
      writername: "Paulo Coelho",
      price: 12.99,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
    {
      id: 2,
      bookname: "To Kill a Mockingbird",
      writername: "Harper Lee",
      price: 14.99,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
    {
      id: 3,
      bookname: "1984",
      writername: "George Orwell",
      price: 9.99,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
    {
      id: 4,
      bookname: "Pride and Prejudice",
      writername: "Jane Austen",
      price: 11.49,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
    {
      id: 5,
      bookname: "The Catcher in the Rye",
      writername: "J.D. Salinger",
      price: 10.99,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
    {
      id: 6,
      bookname: "The Great Gatsby",
      writername: "F. Scott Fitzgerald",
      price: 13.99,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
    {
      id: 7,
      bookname: "Moby Dick",
      writername: "Herman Melville",
      price: 15.99,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
    {
      id: 8,
      bookname: "War and Peace",
      writername: "Leo Tolstoy",
      price: 18.99,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
    {
      id: 9,
      bookname: "Crime and Punishment",
      writername: "Fyodor Dostoevsky",
      price: 16.49,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
    {
      id: 10,
      bookname: "The Hobbit",
      writername: "J.R.R. Tolkien",
      price: 12.49,
      image: "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890",
    },
  ];

  return (
    <table className="w-full text-left table-auto  border-collapse">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 font-semibold text-gray-700">Image</th>
          <th className="p-3 font-semibold text-gray-700">Book Name</th>
          <th className="p-3 font-semibold text-gray-700">Writer Name</th>
          <th className="p-3 font-semibold text-gray-700">Price</th>
          <th className="p-3 font-semibold text-center text-gray-700">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {books.map((book) => (
          <tr key={book.id} className="hover:bg-gray-50">
            <td className="p-1 flex justify-center">
              <img
                src={book.image}
                alt={book.bookname}
                className="w-10 h-auto rounded"
              />
            </td>
            <td className="p-3 text-sm font-medium text-gray-900">
              {book.bookname}
            </td>
            <td className="p-3 text-sm text-gray-500">{book.writername}</td>
            <td className="p-3 text-sm text-red-500">${book.price}</td>
            <td className="text-sm relative cursor-pointer">
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
                  <Link href={""} className="p-2 hover:bg-gray-100 rounded">
                    Delete
                  </Link>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
