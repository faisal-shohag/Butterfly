"use client"
import React, { useEffect, useState } from 'react';
import SingleBook from './SingleBook';

const Books = () => {

    const [allBooks, setAllBooks] = useState([]);
    useEffect(()=>{
        fetch('https://butterfly-backend.vercel.app/books')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    },[])
 
    return (
        <div>
            <h3 className="text-xl font-medium opacity-75 my-3">Exchange Your Book</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 border shadow-lg rounded-md'>
            {
            allBooks.length? 
               
            allBooks.map(book => <SingleBook key={book.id} book={book}></SingleBook>)
                
                : 'No data  available'
            }
        </div>
        </div>
    );
 };

export default Books;