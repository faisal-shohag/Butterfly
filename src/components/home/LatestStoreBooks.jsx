"use client"

import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { GiBookshelf } from "react-icons/gi";
import Heading from "../common/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import StoreBookCard from '@/app/(routes)/store/StoreBookCard';


const LatestStoreBooks = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data: latestStoreBooks, isLoading, isError } = useQuery(
        'latestStoreBooks',
        async () => {
            const response = await axiosSecure.get('/latest_store_books');
            return response.data.latestStoreBooks;
        },
        {
            refetchOnWindowFocus: false,
            staleTime: 300000, // 5 minutes
        }
    );

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching latest store books</div>;

    return (
        <div className="mb-10 custom-glass rounded-xl overflow-hidden">
            <Heading icon={<GiBookshelf />} title={"Latest Store Books"} />
            <div className="flex justify-center">
                {latestStoreBooks && latestStoreBooks.length > 0 && (
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {latestStoreBooks.map((book) => (
                                <CarouselItem key={book.id} className="md:basis-1/6 basis-1/3 lg:basis-1/8">
                                    <StoreBookCard book={book} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default LatestStoreBooks;