"use server"

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


const getLatestExchangePosts = async () => {
    try {
      const books = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/latest-books/${undefined}`).then(res => res.json());
      return books
    } catch (error) {
      console.error('Error fetching latest exchange posts:', error);
      throw new Error('Failed to fetch latest exchange posts', error);
    }
}


const LatestExchangePosts = async () => {
    let {books} = await getLatestExchangePosts();
    books = books? books: []
    return (
        <div className="mb-10 custom-glass rounded-xl overflow-hidden">
               <Heading icon={<GiCardExchange />} title={"Latest Exchange Posts"} />
               <div className="flex justify-center">
            {books &&
            
              // <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              <Carousel
              opts={{
                align: "start",
                loop: true,
              }}

             
              
              >
                 <CarouselContent>
                {   books?.map((book) => (
                  <CarouselItem key={book.id} className="md:basis-1/4 basis-1/3 lg:basis-1/5">
                    <div  className="flex-shrink-0  space-y-1 custom-glass-2 rounded-xl p-3">
                    <Link  href={`/exchanges/${book.id}`}>  
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
                     <div
                      className="flex items-center gap-2 custom-glass-2 rounded-xl px-2"
                      >
                        <Heart className="text-red-600" size={16}/>
                        <span className="font-semibold"> {book.likeCount || 0}</span>
                      </div>

                      <div
                      className="flex items-center gap-2 custom-glass-2 rounded-xl px-2"
                      >
                        <Plus size={16}/> Request <span className="font-semibold">{book.likes || 0}</span>
                      </div>
                     </div>
                    </div>
                    </CarouselItem>
                  ))}
                  </CarouselContent>
              </Carousel>
              // </div>

            }
        </div>
        </div>
    );
};

export default LatestExchangePosts;