"use server"
import { unstable_cache } from "next/cache";
import { GiCardExchange } from "react-icons/gi";
import Heading from "../common/Heading";
import Link from "next/link";
import Image from "next/image";
import { Heart, Plus, Repeat } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
const getLatestExchangePosts = unstable_cache(async () => {
    const books = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/latest-books/${undefined}`).then(res => res.json());
  
    return books
}, ["latest-exchange-posts"], {revalidate: 5*60})


const LatestExchangePosts = async () => {
    let {books} = await getLatestExchangePosts();
    books = books? books: []
    return (
        <div className="mb-10">
               <Heading icon={<GiCardExchange />} title={"Latest Exchange Posts"} />
               <div className="flex justify-center lg:px-0 md:px-0 px-5">
            {books &&
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {   books?.map((book) => (
                    <div key={book.id}  className="flex-shrink-0  space-y-1 custom-glass-2 rounded-xl p-3">
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
                      <p className="text-xs text-gray-500 flex items-center gap-2">
                          {book.genre.toUpperCase()} <Repeat size="12"/> {book.lookingFor.genre.toUpperCase()}
                      </p>
                    
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
                  ))}
              </div>
            }
        </div>
        </div>
    );
};

export default LatestExchangePosts;