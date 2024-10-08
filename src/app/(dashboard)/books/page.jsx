'use server'
import React from 'react';

const page = () => {

    const books = [
        {
            "id": 1,
            "bookname": "The Alchemist",
            "writername": "Paulo Coelho",
            "price": 12.99,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        },
        {
            "id": 2,
            "bookname": "To Kill a Mockingbird",
            "writername": "Harper Lee",
            "price": 14.99,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        },
        {
            "id": 3,
            "bookname": "1984",
            "writername": "George Orwell",
            "price": 9.99,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        },
        {
            "id": 4,
            "bookname": "Pride and Prejudice",
            "writername": "Jane Austen",
            "price": 11.49,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        },
        {
            "id": 5,
            "bookname": "The Catcher in the Rye",
            "writername": "J.D. Salinger",
            "price": 10.99,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        },
        {
            "id": 6,
            "bookname": "The Great Gatsby",
            "writername": "F. Scott Fitzgerald",
            "price": 13.99,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        },
        {
            "id": 7,
            "bookname": "Moby Dick",
            "writername": "Herman Melville",
            "price": 15.99,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        },
        {
            "id": 8,
            "bookname": "War and Peace",
            "writername": "Leo Tolstoy",
            "price": 18.99,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        },
        {
            "id": 9,
            "bookname": "Crime and Punishment",
            "writername": "Fyodor Dostoevsky",
            "price": 16.49,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        },
        {
            "id": 10,
            "bookname": "The Hobbit",
            "writername": "J.R.R. Tolkien",
            "price": 12.49,
            "image": "https://ik.imagekit.io/masudur/book.webp?updatedAt=1727267354890"
        }
    ]


    return (
        <div>
            <div>
                <h3 className="text-2xl font-bold text-center p-3 border shadow-md rounded-sm">All Stored Books</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                {
                    books.map(book => <div key={book.id} className='rounded-md p-3 border hover:scale-105 shadow-md'>
                        <div className='flex justify-center items-center bg-pink-200 rounded-md'>
                        <img src={book.image} alt="" className='w-28' />
                        </div>
                        <div className='flex justify-between items-center'>
                        <div>
                        <p className='font-bold'>{book.bookname}</p>
                        <p className='opacity-80'>{book.writername}</p>
                        </div>
                        <p className='font-bold text-red-500'>${book.price}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;