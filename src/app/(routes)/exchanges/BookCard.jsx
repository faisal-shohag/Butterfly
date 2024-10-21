"use client"
import { Plus, Repeat } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import ExchangeLikeButton from "./ExchangeLikeButton";
import RequestButton from "./RequestButton";

const BookCard = ({ book, userId }) => {
    return (
        <div className=" custom-glass-2 rounded-md p-3">
        <div>
        <Link href={`/exchanges/${book.id}`}>  
                <div className="flex items-center justify-center gap-1">
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
        </div>
            <div className="flex mt-4 items-center gap-1">
                <Avatar>
                    <AvatarImage src={book.user.image} />
                    <AvatarFallback className="font-bold">
                        {book.user.name.charAt(0)}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-semibold text-sm truncate">{book.user.name}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="line-clamp-1">{book.genre}</span> <Repeat size="12"/> 
                        <span className="line-clamp-1">
                        {book.lookingFor.genre}</span>
                    </p>
                </div>
            </div>
            <Separator className="my-2"/>
            <div className="flex justify-between">
                <ExchangeLikeButton book={book} userId={userId}/>
                <RequestButton book={book} userId={userId}/>
                {/* <Button
                    variant="outline"
                    className="flex items-center gap-2"
                >
                    <Plus size={16}/> Request {book.likes || 0}
                </Button> */}
            </div>
        </div>
    );
};

export default BookCard;