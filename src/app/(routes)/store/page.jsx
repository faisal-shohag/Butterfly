"use client";
import Image from "next/image";
import Snowfall from "react-snowfall";
import StoreList from "./StoreList";

const Special = () => {
  return (
    <div className="section">
       <div className="w-full flex justify-center custom-glass-2 rounded-xl overflow-hidden">
       <Image className="object-cover" src='/store-banner.png' height={400} width={1000} alt="banner"/>
       </div>
       <Snowfall style={{zIndex: '99999'}} />
      
     <StoreList/>
   
    </div>
  );
};

export default Special;
