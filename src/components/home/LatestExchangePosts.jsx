"use client"

import { useQuery } from 'react-query';
import { GiCardExchange } from "react-icons/gi";
import Heading from "../common/Heading";
import Link from "next/link";
import Image from "next/image";
import { Heart, Plus, Repeat } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useSession } from "next-auth/react";
import ExchangeLikeButton from '@/app/(routes)/exchanges/ExchangeLikeButton';
import RequestButton from '@/app/(routes)/exchanges/RequestButton';

const LatestExchangePosts = () => {
    const axiosSecure = useAxiosSecure();
    const { data: session } = useSession();
    const userId = session?.user?.id;

    const { data: booksData, isLoading, isError } = useQuery(
        ['latestBooks', userId],
        async () => {
            const response = await axiosSecure.get(`/latest-books/${userId || undefined}`);
            return response.data.books;
        },
        {
            refetchOnWindowFocus: false,
            staleTime: 300000, // 5 minutes
        }
    );

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching latest books</div>;

    return (
        <div className="mb-10 custom-glass rounded-xl overflow-hidden">
            <Heading icon={<GiCardExchange />} title={"Latest Exchange Posts"} link="/exchanges"/>
            <div className="flex justify-center">
                {booksData && booksData.length > 0 && (
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {booksData.map((book) => (
                                <CarouselItem key={book.id} className="md:basis-1/4 basis-1/3 lg:basis-1/5">
                                    <div className="flex-shrink-0 space-y-1 custom-glass-2 rounded-xl p-3">
                                        <Link href={`/exchanges/${book.id}`}>  
                                            <div className="flex mb-4 items-center justify-center gap-1">
                                                <Image
                                                    height={200}
                                                    width={200}
                                                    src={book.cover}
                                                    alt={book.title}
                                                    className="lg:h-32 md:h-32 h-44 object-contain rounded"
                                                />
                                                <div className="text-green-600">
                                                    <Repeat size={20}/>
                                                </div>
                                                <Image
                                                    height={200}
                                                    width={200}
                                                    src={book.lookingFor.cover}
                                                    alt={book.lookingFor.title}
                                                    className="lg:h-32 md:h-32 h-44 object-contain rounded"
                                                />
                                            </div>
                                        </Link>
                                        <div className="flex mt-5 items-center gap-1">
                                            <Avatar>
                                                <AvatarImage src={book.user.image} />
                                                <AvatarFallback className="font-bold">
                                                    {book.user.name.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h3 className="font-semibold text-sm truncate">{book.user.name}</h3>
                                                <div className="text-xs text-gray-500 flex items-center gap-2 line-clamp-1">
                                                    {book.genre.toUpperCase()} <Repeat size="12"/> {book.lookingFor.genre.toUpperCase()}
                                                </div>
                                            </div>
                                        </div>
                                        <Separator className="my-4"/>
                                        <div className="flex text-sm justify-between">
                                            <ExchangeLikeButton book={book} userId={userId}/>
                                            <RequestButton book={book} userId={userId}/>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default LatestExchangePosts;