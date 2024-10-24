"use client"

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from 'react-query';
import { Skeleton } from "@/components/ui/skeleton";
import StoreBookCard from "./StoreBookCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Heading from "@/components/common/Heading";
import { TrendingUp } from "lucide-react";

const TrendingBooks = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data: trendingBooks, isLoading, error } = useQuery({
        queryKey: ['trendingBooks'],
        queryFn: async () => {
            const response = await axiosSecure.get('/trending-books');
            return response.data.data;
        }
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
    if (error) {
        return (
            <Alert variant="destructive" className="m-4">
                <AlertDescription>
                    Failed to load trending books. Please try again later.
                </AlertDescription>
            </Alert>
        );
    }

    // No books found
    if (!trendingBooks?.length) {
        return (
            <Alert className="m-4">
                <AlertDescription>
                    No trending books available at the moment.
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <div className="w-full mt-4 custom-glass rounded-xl bg-red-500">
        <Heading icon={<TrendingUp/>} title="Trending Right Now"/>
            <Carousel opts={{
          align: "start",
          loop: true,
        }} className="w-full">
                <CarouselContent>
                    {trendingBooks.map((book) => (
                        <CarouselItem key={book.id} className="md:basis-1/3 lg:basis-1/4 basis-1/2">
                            <div className="p-1">
                                <StoreBookCard book={book} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0"/>
                <CarouselNext className="absolute right-0"/>
            </Carousel>
        </div>
    );
};

export default TrendingBooks;