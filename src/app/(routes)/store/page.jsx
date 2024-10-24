"use client";
import Image from "next/image";
import Snowfall from "react-snowfall";
import StoreList from "./StoreList";
import TrendingBooks from "./TrendingBooks";
import PopularBooks from "./PopularBooks";

const Special = () => {
  return (
    <div className="section flex flex-col items">
       <div className="w-full flex justify-center custom-glass-2 rounded-xl overflow-hidden">
       <Image className="object-cover" src='/store-banner.png' height={400} width={1000} alt="banner"/>
       </div>
       <Snowfall style={{zIndex: '99999'}} />

       <TrendingBooks/>

       <PopularBooks/>
      
     <StoreList/>
   
    </div>
  );
};

export default Special;
