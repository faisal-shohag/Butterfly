"use client"

import Image from 'next/image';
import { Book } from 'lucide-react';
import Lottie from 'react-lottie-player';
import butterflyHandAnimation from '@/lottie/butterfly-hand.json';

const ButterflyAdvertisement = () => {
  return (
    <div className="relative text-white py-5 flex flex-col items-center justify-center text-center w-full rounded-xl shadow-2xl border bg-cover bg-center" style={{backgroundImage: "url('https://i.postimg.cc/d19ndy1C/image.png')"}}>
  
      
      <div className="right-0 top-0 absolute h-[80px] shadow-2xl flex justify-center items-center  w-[80px] rounded-full">
        <Image alt="Butterfly logo" height="70" width="70" className="h-[70px] p-2" src="https://i.postimg.cc/nrSMfQDf/image.png"/>
      </div>

      <div className="absolute top-[-50px] w-32 h-32 z-10">
        <Lottie
          loop
          animationData={butterflyHandAnimation}
          play
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      <div className="text-center font-black text-2xl mb-2 mt-10">Let you book fly!</div>
      <div className="text-center text-sm">Exchange books and expand your literary horizons!</div>
      <div className="text-xl mt-2">Discover new stories and share your favorites with our community!</div>
      <button className="bg-[#8000ff] text-white font-bold py-2 px-4 rounded mt-4 flex items-center gap-2">
        <Book/> Start Exchanging
      </button>
    </div>
  );
};

export default ButterflyAdvertisement;