import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import StoreBookCard from './StoreBookCard';

const StoreList = () => {
  const axiosSecure = useAxiosSecure();
  const { ref, inView } = useInView();

  const fetchBooks = async ({ pageParam = 1 }) => {
    const response = await axiosSecure.get(`/store_books?page=${pageParam}&limit=10`);
    return response.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery('storeBooks', fetchBooks, {
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Book Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {data.pages.map((page) =>
          page.storeBooks.map((book) => (
            <StoreBookCard key={book.id} book={book} />
          ))
        )}
      </div>
      <div ref={ref} className="py-4 text-center">
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'No more books'}
      </div>
    </div>
  );
};

export default StoreList;