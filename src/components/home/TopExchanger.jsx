"use client"
import React, { useRef, useState, useEffect } from 'react';
import { RiSwap2Fill } from "react-icons/ri";
import { MdOutlineSwapCalls } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "../common/Heading";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TopExchanger = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <div className="relative">
            <Heading icon={<RiSwap2Fill />} title={"Latest Exchanges"}/>
            <div className="flex items-center">
            <div 
                    onClick={() => scroll('left')} 
                    disabled={!canScrollLeft}
                    className="absolute left-2 z-10 bg-opacity-50 hover:bg-opacity-75 rounded-full h-8 w-8 custom-glass-2 flex items-center justify-center text-gray-700"
                >
                    <ChevronLeft size="20"/>
                </div>
                <div 
                    ref=
                    {scrollContainerRef}
                    className="rounded-xl flex gap-3 custom-glass px-5 py-2 overflow-x-auto overflow-y-hidden w-full"
                    onScroll={checkScroll}
                >
                    {Array.from({length: 5}).map((_, i) => (
                        <div key={i} className="flex items-center gap-2 custom-glass rounded-xl flex-shrink-0">
                            <div className="flex flex-col items-center text-sm font-semibold">
                                <Avatar>
                                    <AvatarImage src="https://i.postimg.cc/GmY0ZXtx/image.png"/>
                                </Avatar>
                                <div>Haiyan</div>
                            </div>
                            <div className="text-2xl text-green-600">
                                <MdOutlineSwapCalls />
                            </div>
                            <div className="flex flex-col items-center text-sm font-semibold">
                                <Avatar>
                                    <AvatarImage src="https://i.postimg.cc/5tqhtjwH/image.png"/>
                                </Avatar>
                                <div>Jabir</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div 
                    onClick={() => scroll('right')} 
                    disabled={!canScrollRight}
                    className="absolute right-2 z-10 bg-opacity-50 hover:bg-opacity-75 rounded-full h-8 w-8 custom-glass-2 flex items-center justify-center text-gray-700"
                >
                    <ChevronRight size="20"/>
                </div>
            </div>
        </div>
    );
};

export default TopExchanger;