"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const bannerContent = [
  {
    image: "https://i.postimg.cc/5ySTXwmD/fd1ab28a4493ff7baf37b11a08b18159.jpg",
    title: "Discover New Worlds",
    description: "Exchange books and broaden your horizons"
  },
  {
    image: "https://i.postimg.cc/y8dtN33r/image.png",
    title: "Connect Through Stories",
    description: "Join our community of book lovers"
  },
  {
    image: "https://i.postimg.cc/vTh2YGYs/image.png",
    title: "Sustainable Reading",
    description: "Give books a new life through exchange"
  }
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrent(current === bannerContent.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrent(current === 0 ? bannerContent.length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl mb-8">
      {bannerContent.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === current 
              ? 'opacity-100 translate-x-0' 
              : index < current || (current === 0 && index === bannerContent.length - 1)
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            
            priority
            className={`transition-transform duration-1000 ease-in-out ${
              index === current ? 'scale-100' : 'scale-110'
            }`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 delay-300 ${
                index === current ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}>
                {slide.title}
              </h2>
              <p className={`text-xl mb-8 transition-all duration-1000 delay-500 ${
                index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {slide.description}
              </p>
              <Button 
                size="lg" 
              >
                Exchange Now
              </Button>
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default Banner;
