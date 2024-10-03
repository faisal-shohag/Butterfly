"use client"
import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Image from 'next/image';
import { FaBookMedical } from "react-icons/fa";

import { FaBookmark, FaShare } from 'react-icons/fa6';
import Loading from '@/components/common/Loading';

const BookDetails = ({ params }) => {
  const { exchangeId: id } = params;
  const axiosSecure = useAxiosSecure();

  const fetchBookDetails = async () => {
    const response = await axiosSecure.get(`/books/${id}`);
    return response.data;
  };

  const { data: book, isLoading, isError } = useQuery(['book', id], fetchBookDetails);

  if (isLoading) return <Loading/>;
  if (isError) return <div className="text-center py-10 text-red-500">Error fetching book details</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className=" custom-glass-2 rounded-lg overflow-hidden">
    <div className="absolute right-0 flex mx-5 gap-3  items-center">
    <div className=" mt-2 custom-glass-3 px-5 py-2 rounded-lg font-semibold text-sm cursor-pointer hover:bg-zinc-900 hover:dark:bg-zinc-700 hover:text-white flex items-center gap-1 "><FaBookMedical/> Request</div>

    <div className=" mt-2 custom-glass-3 px-5 py-2 rounded-lg font-semibold text-sm cursor-pointer hover:bg-zinc-900 hover:dark:bg-zinc-700 hover:text-white flex items-center gap-1"><FaShare/> Share</div>

    <div className=" mt-2 custom-glass-3 px-5 py-2 rounded-lg font-semibold text-sm cursor-pointer hover:bg-zinc-900 hover:dark:bg-zinc-700 hover:text-white flex items-center gap-1"><FaBookmark/> Save</div>

    </div>
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-zinc-200 dark:bg-zinc-950">
            <Image
              src={book.cover}
              alt={book.title}
              width={400}
              height={450}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{book.genre}</div>
            <h1 className="mt-1 text-4xl font-bold text-slate-500">{book.title}</h1>
            <p className="mt-2 text-gray-600">by {book.author}</p>
            <p className="mt-2 text-gray-500">Published by {book.publisher} in {book.publishedYear}</p>
            <p className="mt-2 text-gray-500">ISBN: {book.isbn}</p>
            <p className="mt-4 text-gray-500">{book.description}</p>

            {book.samplePhotos && book.samplePhotos.length > 0 && (
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-gray-900">Sample Photos</h2>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {book.samplePhotos.map((photo, index) => (
                    <Image
                      key={index}
                      src={photo}
                      alt={`Sample photo ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 custom-glass-2 rounded-xl px-5 py-3">
              <h2 className="text-2xl font-semibold text-slate-500">The book I want</h2>
              <div className="mt-4 flex items-center">
                <Image
                  src={book.lookingFor.cover}
                  alt={book.lookingFor.title}
                  width={100}
                  height={150}
                  className="h-32 w-24 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{book.lookingFor.title}</h3>
                  <p className="text-gray-600">by {book.lookingFor.author}</p>
                  <p className="text-gray-500">{book.lookingFor.genre}</p>
                  <p className="mt-2 text-sm text-gray-500">{book.lookingFor.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-slate-500">Book Owner</h2>
              <div className="mt-4 flex items-center">
                <Image
                  src={book.user.avatar_url}
                  alt={book.user.full_name}
                  width={50}
                  height={50}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{book.user.full_name}</h3>
                  <p className="text-gray-600">{book.user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;