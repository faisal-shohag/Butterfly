"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Dummy data for books
const books = [
  {
    name: "The Great Gatsby",
    writer: "F. Scott Fitzgerald",
    publication: "Scribner",
    year: 1925,
  },
  {
    name: "To Kill a Mockingbird",
    writer: "Harper Lee",
    publication: "J.B. Lippincott & Co.",
    year: 1960,
  },
  {
    name: "1984",
    writer: "George Orwell",
    publication: "Secker & Warburg",
    year: 1949,
  },
  {
    name: "Pride and Prejudice",
    writer: "Jane Austen",
    publication: "T. Egerton",
    year: 1813,
  },
  {
    name: "The Catcher in the Rye",
    writer: "J.D. Salinger",
    publication: "Little, Brown and Company",
    year: 1951,
  },
  {
    name: "Moby-Dick",
    writer: "Herman Melville",
    publication: "Harper & Brothers",
    year: 1851,
  },
  {
    name: "War and Peace",
    writer: "Leo Tolstoy",
    publication: "The Russian Messenger",
    year: 1869,
  },
];

export function BookTable() {
  return (
    <div className="w-full px-2 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>Book Name</TableHead>
            <TableHead>Writer Name</TableHead>
            <TableHead>Publication</TableHead>
            <TableHead>Publishing Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{book.name}</TableCell>
              <TableCell>{book.writer}</TableCell>
              <TableCell>{book.publication}</TableCell>
              <TableCell>{book.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BookTable;
