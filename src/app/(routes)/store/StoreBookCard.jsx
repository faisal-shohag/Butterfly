import React from "react";

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import BuyWithCoinButton from './BuyWithCoinButton';

const StoreBookCard = ({ book }) => {
  return (
    <div className="w-full max-w-sm custom-glass rounded-xl relative cursor-pointer font-kalpurush">
      {book.discount > 0 ? (
        <div className="absolute -top-0 -left-0 z-[9999]">
          <div className="bg-red-500 text-center text-xs flex justify-center items-center h-[50px] w-[50px] text-white px-2 py-1 rounded-full shadow-2xl">
            {book.discount}% off
          </div>
        </div>
      ) : null}

      <Link href={`/store/${book.id}`}><div>
        <div className='flex justify-center w-full'>
        <Image height={150} width={100} src={book.cover} alt={book.title} className="border h-[150px] mb-4" />
        </div>
        <div className="line-clamp-1 text-center">{book.title}</div>
      </div>
      </Link>
     <div className='mt-2'>
     {
        book.discount > 0 ? <Button variant='outline' className='font-semibold text-muted-foreground text-sm flex gap-1 w-full'>Buy 
        <strike>{book.price} tk</strike>
        <span className='text-red-500'>{book.price - (book.price*(book.discount/100)).toFixed(2)} tk</span>
      </Button> : <Button variant='outline' className='w-full font-semibold text-red-500 text-sm'>
       Buy {book.price} tk
      </Button>
      }
      <BuyWithCoinButton book={book}/>
     </div>

    
    </div>
  );
};

export default StoreBookCard;
