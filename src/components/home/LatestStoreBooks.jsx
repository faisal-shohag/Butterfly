"use client";

import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { GiBookshelf } from "react-icons/gi";
import Heading from "../common/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import StoreBookCard from '@/app/(routes)/store/StoreBookCard';

const LatestStoreBooks = () => {
    const axiosSecure = useAxiosSecure();

    const { data: latestStoreBooks, isLoading, isError } = useQuery({
        queryKey: ['latestStoreBooks'],
        queryFn: async () => {
            const response = await axiosSecure.get('/latest_store_books');
            return response.data.latestStoreBooks;
        },
        staleTime: 300000, // 5 minutes
        refetchOnWindowFocus: false,
    });

    // Loading skeleton
    if (isLoading) {
        return (
            <div className="w-full p-4">
                <Carousel className="w-full">
                    <CarouselContent>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                                <div className="p-1">
                                    <div className="flex flex-col space-y-3">
                                        <Skeleton className="h-[200px] w-full rounded-xl" />
                                        <Skeleton className="h-4 w-3/4" />
                                        <Skeleton className="h-4 w-1/2" />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        );
    }

    // Error state
    if (isError) {
        return (
            <Alert variant="destructive" className="m-4">
                <AlertDescription>
                    Error fetching latest store books. Please try again later.
                </AlertDescription>
            </Alert>
        );
    }

    // No books found
    if (!latestStoreBooks?.length) {
        return (
            <Alert className="m-4">
                <AlertDescription>
                    No latest store books available at the moment.
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <div className="w-full mt-4 custom-glass rounded-xl bg-blue-500">
            <Heading icon={<GiBookshelf />} title="Latest Store Books" link="/store" />
            <Carousel opts={{
              align: "start",
              loop: true,
            }} className="w-full">
                <CarouselContent>
                    {latestStoreBooks.map((book) => (
                        <CarouselItem key={book.id} className="md:basis-1/3 lg:basis-1/4 basis-1/2">
                            <div className="p-1">
                                <StoreBookCard book={book} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0" />
                <CarouselNext className="absolute right-0" />
            </Carousel>
        </div>
    );
};

export default LatestStoreBooks;
