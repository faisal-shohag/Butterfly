"use client"
import { Repeat } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const BookCard = ({books}) => {

    return (
        <>
            {books &&
              <div className="flex gap-5 items-center">
                {   books?.map((book) => (
                   <Link key={book.id} href={`/pages/exchanges/${book.id}`}>  <div  className="flex-shrink-0 w-56 space-y-1 custom-glass-2 rounded-xl p-3">
                     <div className="flex items-center justify-center gap-1">
      
                     <Image
                        height={200}
                        width={200}
                        src={book.cover}
                        alt={book.title}
                        className="h-32 object-contain rounded"
                      />
                      <div className="text-green-600">
                      <Repeat size={20}/>
                      </div>
                        <Image
                        height={200}
                        width={200}
                        src={book.lookingFor.cover}
                        alt={book.lookingFor.title}
                        className="h-32 object-contain rounded"
                      />
                     </div>
                     <div className="flex items-center gap-1">
                      <Avatar>
                          <AvatarImage src={book.user.avatar_url} />
                      </Avatar>
                      <div>
                      <h3 className="font-semibold text-sm truncate">{book.user.full_name}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-2">
                          {book.genre} <Repeat size="12"/> {book.lookingFor.genre}
                      </p>
                      
                      </div>
                     </div>
                    </div></Link>
                  ))}
              </div>
            }
        </>
    );
};

export default BookCard;