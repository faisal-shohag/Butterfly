import React from 'react';

import { Button } from "@/components/ui/button";
import Image from 'next/image';

const StoreBookCard = ({ book }) => {
  return (
    <div className="w-full max-w-sm custom-glass rounded-xl relative cursor-pointer">
       {
        book.discount > 0 ?  <div className='absolute -top-4 -left-4'>
        <div className='bg-red-500 text-center text-xs flex justify-center items-center h-[50px] w-[50px] text-white px-2 py-1 rounded-full shadow-2xl'>{book.discount}% off</div>
        </div>: null
       }

      <div>
        <div className='flex justify-center w-full'>
        <Image height={150} width={100} src={book.cover} alt={book.title} className="border h-[150px] mb-4" />
        </div>
        <div className='font-semibold text-sm line-clamp-1'>{book.title}</div>
        <div className='font-semibold text-sm text-muted-foreground line-clamp-1'>{book.author}</div>
      </div>
     <div className='mt-2'>
     {
        book.discount > 0 ? <Button variant='outline' className='font-semibold text-muted-foreground text-sm flex gap-1 w-full'>Buy 
        <strike>{book.price} tk</strike>
        <span className='text-red-500'>{book.price - (book.price*(book.discount/100)).toFixed(2)} tk</span>
      </Button> : <Button variant='outline' className='w-full font-semibold text-red-500 text-sm'>
       Buy {book.price} tk
      </Button>
      }
      <Button className="w-full mt-1 flex gap-1" variant="outline"><span>Buy with  {book.coin}</span> <Image height={15} width={15} src='/bcoin.png' alt='coin'/></Button>
      
     </div>

    
    </div>
  );
};

export default StoreBookCard;