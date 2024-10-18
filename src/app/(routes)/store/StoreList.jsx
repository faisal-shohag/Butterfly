import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import StoreBookCard from './StoreBookCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StoreListSkeleton from './SekeletonList';

const StoreList = () => {
  const axiosSecure = useAxiosSecure();
  const { ref, inView } = useInView();
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const fetchBooks = async ({ pageParam = 1 }) => {
    const response = await axiosSecure.get('/store_books_with_categories_and_filter', {
      params: {
        page: pageParam,
        limit: 10,
        category,
        sortBy,
      }
    });
    return response.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery(['storeBooks', category, sortBy], fetchBooks, {
    getNextPageParam: (lastPage) =>
      lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined,
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  React.useEffect(() => {
    refetch();
  }, [category, sortBy, refetch]);

  if (status === 'loading') return <StoreListSkeleton/>;
  if (status === 'error') return <div>Error: {error.message}</div>;

  const categories = data?.pages[0]?.categories || [];

  return (
    <div className="container mx-auto px-4 mt-10">
      <h4 className='font-semibold mb-3'>All Books</h4>
      <div className="flex space-x-4 mb-6">
        <Select onValueChange={setCategory} value={category}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSortBy} value={sortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="most_discounted">Most Discounted</SelectItem>
            <SelectItem value="lowest_price">Lowest Price</SelectItem>
            <SelectItem value="highest_price">Highest Price</SelectItem>
          </SelectContent>
        </Select>
      </div>
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