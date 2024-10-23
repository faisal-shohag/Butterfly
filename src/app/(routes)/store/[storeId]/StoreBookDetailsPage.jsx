"use client"
import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';

const StoreBookDetailsPage = ({ bookId }) => {
  const axiosSecure = useAxiosSecure();

  const { data: storeBook, isLoading, isError } = useQuery({
    queryKey: ['storeBook', bookId],
    queryFn: async () => {
      const response = await axiosSecure.get(`/store_books/${bookId}`);
      return response.data.storeBook;
    }
  });

  if (isLoading) {
    return (
      <Card className="w-full max-w-3xl mx-auto mt-8">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-full mt-4" />
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          There was an error loading the book details. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className=" grid grid-cols-4 lg:grid-cols-5  lg:gap-2 gap-5 font-kalpurush  mx-auto mt-8 custom-glass rounded-xl">
        <div className='col-span-1'>
            <Image height={280} width={220} alt='book' src={storeBook.cover}/>
        </div>
        <div className='col-span-3 lg:grid-cols-4'>
            <div className='font-semibold text-2xl'>{storeBook.title}</div>
            <div className=''>Writer: {storeBook.author}</div>
            <div className=''>Published: {new Date(storeBook.publishedDate).toLocaleDateString()}</div>
            <div className=''>Language: {storeBook.language}</div>
            <div className='mt-2 flex gap-5 items-center'>
     {
        storeBook.discount > 0 ? <Button variant='outline' className='font-semibold text-muted-foreground text-sm flex gap-1 w-full'>Buy 
        <strike>{storeBook.price} tk</strike>
        <span className='text-red-500'>{storeBook.price - (storeBook.price*(storeBook.discount/100)).toFixed(2)} tk</span>
      </Button> : <Button variant='outline' className='w-full font-semibold text-red-500 text-sm'>
       Buy {storeBook.price} tk
      </Button>
      }
      <Button className="w-full flex gap-1 items-center" variant="outline"><span>Buy with  {storeBook.coin}</span> <Image height={15} width={15} src='/bcoin.png' alt='coin'/></Button>
      
     </div>
            <div className='custom-glass rounded-xl mt-2'>{storeBook.description}</div>
       
          
        </div>

      

    
      
    </div>
  );
};

export default StoreBookDetailsPage;