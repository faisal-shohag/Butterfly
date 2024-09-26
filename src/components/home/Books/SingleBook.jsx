"use client"
import Image from 'next/image';
import React from 'react';
import { MdOutlineSwapCalls } from 'react-icons/md';

const SingleBook = ({book}) => {
    const {title,author,publishedYear,publisher,description,cover,genre,lookingFor,} = book
    const {cover:lookingCover,genre:lookingGenre,title:lookingTitle, author:lookingAuthor,description:lookingDescription } = lookingFor
    return (
        <div className='border p-2 rounded-md shadow-md group'>
           <div className=' flex gap-2 justify-center items-center mt-3'>
           <Image src= {cover} alt="image" width={60} height={60} className=' mb-3 md:mb-0 h-20 w-20 rounded-full group-hover:scale-105'/>
           <div className="text-3xl text-green-600">
                                <MdOutlineSwapCalls />
                            </div>
           <Image src= {lookingCover} alt="image" width={60} height={60} className=' mb-3 md:mb-0 h-20 w-20 rounded-full group-hover:scale-105'/>
           </div>
           <div className='mt-3'>
            <h2 className="font-bold text-sm">{title}</h2>
            <p className='opacity-90 text-sm'>Author : {author}</p>
            <p className='opacity-90 text-sm'>Publisher : {publisher}</p>
            <p className='opacity-90 text-sm'>Published Year : {publishedYear}</p>
            {/* <div className="divider border"></div> */}
            <h2 className="font-bold text-sm"> Want to Exchange :</h2>
            {/* <div className="divider border"></div> */}
            <p className='font-bold text-sm'>{lookingTitle}</p>
            <p className='opacity-90 text-sm'>Author : {lookingAuthor}</p>
            <p className='opacity-90 text-sm'>Genre :  <span>{lookingGenre}</span></p>
            <button className='my-1 px-4 py-1 w-full border border-gray-300 rounded-md hover:shadow-md text-sm font-bold  '>Exchange</button>
           </div>

        </div>
    );
};

export default SingleBook;