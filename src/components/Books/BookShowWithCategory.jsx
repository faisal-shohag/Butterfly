"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Demo data
const categories = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography'];
const books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', image: 'https://i.postimg.cc/v8h06HyR/image.png' },
  { id: 2, title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Science', image: 'https://i.postimg.cc/bNv30cYZ/image.png' },
  { id: 3, title: '1776', author: 'David McCullough', category: 'History', image: 'https://i.postimg.cc/3x416Xv7/image.png' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Fiction', image: 'https://i.postimg.cc/1zDHRyBj/image.png' },
  { id: 5, title: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot', category: 'Non-Fiction', image: 'https://i.postimg.cc/ydBTk2rY/image.png' },
  { id: 6, title: 'Steve Jobs', author: 'Walter Isaacson', category: 'Biography', image: 'https://i.postimg.cc/Zn5FLpSG/image.png' },
  // Add more books as needed
];

const BookShowWithCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('title');

    const filteredBooks = books.filter(book => 
        (selectedCategory === 'All' || book.category === selectedCategory) &&
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
         book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    ).sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Discover Books</h1>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <Input 
                    placeholder="Search books or authors" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="md:w-1/3"
                />
                <Select onValueChange={setSortBy} defaultValue={sortBy}>
                    <SelectTrigger className="md:w-1/4">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="title">Title</SelectItem>
                        <SelectItem value="author">Author</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Categories */}
            <Tabs defaultValue="All" className="mb-8">
                <TabsList className="mb-4">
                    <TabsTrigger value="All" onClick={() => setSelectedCategory('All')}>All</TabsTrigger>
                    {categories.map(category => (
                        <TabsTrigger key={category} value={category} onClick={() => setSelectedCategory(category)}>
                            {category}
                        </TabsTrigger>
                    ))}
                </TabsList>
                
                {/* Books Grid */}
                <TabsContent value={selectedCategory} className="mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredBooks.map(book => (
                            <Card key={book.id} className="flex flex-col">
                                <CardHeader>
                                    <div className="relative w-full h-48 mb-4">
                                        <Image 
                                            src={book.image} 
                                            alt={book.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg"
                                        />
                                    </div>
                                    <CardTitle>{book.title}</CardTitle>
                                    <CardDescription>{book.author}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <Badge>{book.category}</Badge>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Exchange</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default BookShowWithCategory;