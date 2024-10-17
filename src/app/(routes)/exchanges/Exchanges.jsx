"use client"
import React, { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import BookCard from '@/app/(routes)/exchanges/BookCard'
import Loading from '@/components/common/Loading';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Exchanges = ({userId}) => {
    const axiosSecure = useAxiosSecure();
    const { ref, inView } = useInView();
    const [isReady, setIsReady] = useState(false);
    const [category, setCategory] = useState('all');
    const [sortBy, setSortBy] = useState('latest');

    const fetchBooks = async ({ pageParam = 1 }) => {
        const response = await axiosSecure.get(`/all_books/${userId}?page=${pageParam}&limit=10&category=${category}&sortBy=${sortBy}`);
        return response.data;
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        refetch
    } = useInfiniteQuery(['all_books', category, sortBy], fetchBooks, {
        getNextPageParam: (lastPage) => 
            lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined,
        enabled: isReady,
    });

    useEffect(() => {
        setIsReady(true);
    }, []);

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

    useEffect(() => {
        if (isReady) {
            refetch();
        }
    }, [category, sortBy, isReady, refetch]);

    if (!isReady || isLoading) return <Loading/>;
    if (isError) return <div>Error fetching books</div>;

    const allBooks = data?.pages.flatMap(page => page.books) || [];

    return (
        <div className="container mx-auto px-4">
            <div className="flex mb-4 space-x-4">
                <Select onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="fiction">Fiction</SelectItem>
                        <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="Self-Help">Self-Help</SelectItem>
                        <SelectItem value="Poetry">Poetry</SelectItem>
                        <SelectItem value="Adventure">Adventure</SelectItem>
                        <SelectItem value="Attention">Attention</SelectItem>
                        {/* Add more categories as needed */}
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setSortBy(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="latest">Latest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                        <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {allBooks.length > 0 ? (
                    allBooks.map((book) => (
                        <BookCard key={book.id} book={book} userId={userId} />
                    ))                      
                ) : (
                    <div>No books available.</div>
                )}
            </div>
            <div ref={ref}>
                {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                    ? 'Load More'
                    : <div className="text-center font-semibold text-slate-500 mt-5">You are at the end!</div>}
            </div>
        </div>
    );
};

export default Exchanges;