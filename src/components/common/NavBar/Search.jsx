"use client"

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useInfiniteQuery } from 'react-query';
import { useIntersection } from '@mantine/hooks';
import Link from 'next/link';

const SearchField = () => {
    const [open, setOpen] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [isActiveTyping, setIsActiveTyping] = useState(true);

  const searchSuggestions = [
    "Search books(Dopamin Detox, Atomic Habit)",
    "Search books from store",
    "Search By Book Name, Author, Description",
  ];

  useEffect(() => {
    const text = searchSuggestions[placeholderIndex];
    let timer;

    if (isTyping) {
      if (currentText.length < text.length) {
        setIsActiveTyping(true);
        timer = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, 100);
      } else {
        setIsActiveTyping(false);
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentText.length === 0) {
        setPlaceholderIndex((prev) => (prev + 1) % searchSuggestions.length);
        setIsTyping(true);
        setIsActiveTyping(true);
      } else {
        setIsActiveTyping(true);
        timer = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length - 1));
        }, 50);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isTyping, placeholderIndex, searchSuggestions]);

  return (
    <>
    <div className="lg:block md:block hidden w-[300px]">
      <div className="flex items-center" onClick={() => setOpen(true)}>
        <Search className="absolute ml-3 text-slate-400" size={20} />
        <Input
          type="text"
          className="rounded-full pl-10"
          placeholder={`${currentText}${isActiveTyping ? '|' : ''}`}
        />
      </div>
     
    </div>
    <SearchModal open={open} onOpenChange={setOpen} /></>
  );
};

const SearchResults = ({ type, results }) => {
    if (!results?.length) return (
      <div className="text-center py-10 text-gray-500">
        No results found
      </div>
    );
  
    return (
      <div className=" p-2 ">
        {results.map((item) => (
        <Link key={item.id} href={`${type=="storebooks" ? `/store/${item.id}` :   `/exchanges/${item.id}`}`}>
          <div  className="grid mb-3 cursor-pointer grid-cols-8 custom-glass-2 rounded-xl w-full gap-2">
            <div className="h-[100px] col-span-1 w-[80px] relative overflow-hidden rounded-md">
              <img
                src={item.cover || "/api/placeholder/200/300"}
                alt={item.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </div>
            <div className=" col-span-7 py-1 px-2">
              <h3 className="font-medium text-sm truncate">{item.title}</h3>
              <p className="text-xs text-gray-500 truncate">{item.author}</p>
              {type === 'storebooks' && (
                <p className="text-xs font-semibold">
                  {item.price === 0 ? 'Free' : `🟡 ${item.coin}`}
                </p>
              )}
              <div className='line-clamp-2 text-xs'>
              {item.description}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    );
  };

  

// Search Modal Component
const SearchModal = ({ open, onOpenChange }) => {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('books');
    const lastElementRef = useRef(null);
  
    const { ref, entry } = useIntersection({
      root: lastElementRef.current,
      threshold: 1,
    });
  
    const fetchSearchResults = async ({ pageParam = 1 }) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/search?query=${query}&type=${type}&page=${pageParam}&limit=12`
      );
      return response.json();
    };
  
    const {
      data,
      fetchNextPage,
      hasNextPage,
      isLoading,
      isFetchingNextPage,
    } = useInfiniteQuery(
      ['search', query, type],
      fetchSearchResults,
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.hasMore) {
            return pages.length + 1;
          }
          return undefined;
        },
        enabled: query.length > 0,
      }
    );
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (query.trim()) {
        // The query will automatically run due to the dependency array in useInfiniteQuery
      }
    };
  
    // Load more when last element is visible
    useEffect(() => {
      if (entry?.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    }, [entry, fetchNextPage, hasNextPage]);
  
    const allResults = data?.pages.flatMap(page => page.books) || [];
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
            <DialogDescription></DialogDescription>
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Search Books</DialogTitle>
              {/* <Button
                variant="ghost"
                className="h-8 w-8 p-0"
                onClick={() => onOpenChange(false)}
              >
                <X size={20} />
              </Button> */}
            </div>
          </DialogHeader>
  
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <Input
                  type="text"
                  className="pl-10"
                  placeholder="Search by title, author, or description..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <Button type="submit">Search</Button>
            </div>
  
            <RadioGroup
              value={type}
              onValueChange={setType}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="books" id="books" />
                <Label htmlFor="books">Exchange Books</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="storebooks" id="storebooks" />
                <Label htmlFor="storebooks">Store Books</Label>
              </div>
            </RadioGroup>
          </form>
  
          <div className="flex-1 overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
              </div>
            ) : (
              <>
                <SearchResults type={type} results={allResults} />
                <div ref={ref} className="py-4">
                  {isFetchingNextPage && (
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default SearchField;