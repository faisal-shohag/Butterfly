"use client"

import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const MyBooks = ({user}) => {
    const axiosSecure = useAxiosSecure();
  
    const [page, setPage] = useState(1);
    const limit = 8; // Books per page

    const { data: booksData, isLoading, isError, error } = useQuery(
        ['purchasedBooks', page],
        async () => {
            const response = await axiosSecure.get(`/purchasedBooks/${user?.id}?page=${page}&limit=${limit}`);
            return response.data;
        },
        {
            enabled: !!user?.id,
        }
    );

    if (isLoading) {
        return (
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
                <Loader2 className="animate-spin" size={40} />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
                <p className="text-red-500">Error: {error.message}</p>
            </div>
        );
    }

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (page < booksData?.pagination?.totalPages) {
            setPage(prev => prev + 1);
        }
    };

    return (
        <div className="container mx-auto px-4">
           
            {booksData?.data?.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        You haven't purchased any books yet.
                    </p>
                    <Link href="/books">
                        <Button className="mt-4">
                            Browse Books
                        </Button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {booksData?.data?.map((purchasedBook) => (
                            <Card key={purchasedBook.id} className="flex flex-col h-full dark:bg-zinc-900">
                                <CardHeader>
                                    <div className="relative h-48 w-full mb-4">
                                        <Image
                                            src={purchasedBook.book.cover || "/placeholder-book.jpg"}
                                            alt={purchasedBook.book.title}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                    <CardTitle className="line-clamp-1">{purchasedBook.book.title}</CardTitle>
                                    <CardDescription className="line-clamp-1">
                                        by {purchasedBook.book.author}
                                    </CardDescription>
                                </CardHeader>
                                
                                <CardFooter className="mt-auto">
                                    <Link 
                                        href={`${purchasedBook.book.pdfURL}`} 
                                        className="w-full"
                                    >
                                        <Button className="w-full flex items-center gap-2">
                                            <BookOpen size={18} />
                                            Read Now
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* Pagination */}
                    {booksData?.pagination?.totalPages > 1 && (
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <Button
                                variant="outline"
                                onClick={handlePreviousPage}
                                disabled={page === 1}
                                className="flex items-center gap-2"
                            >
                                <ChevronLeft size={18} /> Previous
                            </Button>
                            <span className="text-sm">
                                Page {page} of {booksData?.pagination?.totalPages}
                            </span>
                            <Button
                                variant="outline"
                                onClick={handleNextPage}
                                disabled={page === booksData?.pagination?.totalPages}
                                className="flex items-center gap-2"
                            >
                                Next <ChevronRight size={18} />
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default MyBooks;