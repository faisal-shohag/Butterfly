import { Button } from "@/components/ui/button";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

export default function PurchasedTable({ purchased }) {
  // Function to safely format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <TableHeader>
          <TableRow>
            <TableHead className="p-3">#</TableHead>
            <TableHead className="p-3">Image</TableHead>
            <TableHead className="p-3">Books</TableHead>
            <TableHead className="p-3">Category</TableHead>
            <TableHead className="p-3">Price</TableHead>
            <TableHead className="p-3">Discount</TableHead>
            <TableHead className="p-3 text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {purchased.map((item, idx) => (
            <TableRow
              key={item.id}
              className="hover:bg-zinc-50 dark:hover:bg-zinc-700"
            >
              {/* Index Number */}
              <TableCell>{idx + 1}</TableCell>

              {/* Book Cover Image */}
              <TableCell className="p-1">
                <img
                  src={
                    item?.book?.cover ||
                    "https://i.postimg.cc/44FccD29/cover-default-item.jpg"
                  }
                  alt="Book Cover"
                  className="w-[50px] h-[75px] object-cover"
                />
              </TableCell>

              {/* Book Title and Author */}
              <TableCell>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                    {item?.book?.title}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    by {item?.book?.author || "Unknown Author"}
                  </p>
                </div>
              </TableCell>

              {/* Category and Language */}
              <TableCell>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  {item?.book?.category || "Unknown Category"}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {item?.book?.language || "Unknown Language"}
                </p>
              </TableCell>

              {/* Price and Coin Information */}
              <TableCell>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  ৳ {item?.book?.price} or {item?.book?.coin} coins
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Purchased Date: {formatDate(item?.purchaseDate)}
                </p>
              </TableCell>

              {/* Discount Information */}
              <TableCell>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
                  {item?.book?.discount
                    ? `${item?.book?.discount}% off`
                    : "No discount"}
                </p>
              </TableCell>

              {/* Action: Read Button */}
              <TableCell className="text-sm text-center">
                <Link
                  href={item?.book?.pdfURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="px-3">
                    Read
                  </Button>
                </Link>
              </TableCell>

              {/* Action: Download Button */}
              <TableCell className="text-sm text-center">
                <Link href={item?.book?.pdfURL} download>
                  <Button className="px-3">Download</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
    </div>
  );
}
