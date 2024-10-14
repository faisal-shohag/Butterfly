"use client"
import React, { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import BookCard from '@/app/(routes)/exchanges/BookCard'
import Loading from '@/components/common/Loading';

const Exchanges = ({userId}) => {
    const axiosSecure = useAxiosSecure();
    const { ref, inView } = useInView();
    const [isReady, setIsReady] = useState(false);

    const fetchBooks = async ({ pageParam = 1 }) => {
        const response = await axiosSecure.get(`/all_books/${userId}?page=${pageParam}&limit=10`);
        return response.data;
    };
    

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError
    } = useInfiniteQuery('all_books', fetchBooks, {
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

    if (!isReady || isLoading) return <Loading/>;
    if (isError) return <div>Error fetching books</div>;

    // Flatten all books from all pages
    const allBooks = data?.pages.flatMap(page => page.books) || [];

    return (
        <div className="container mx-auto px-4">
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