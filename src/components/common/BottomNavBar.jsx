"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";
import { MdOutlineHive } from "react-icons/md";
import { MdHive } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { RiExchange2Line } from "react-icons/ri";
import { RiExchange2Fill } from "react-icons/ri";
import { PiButterfly } from "react-icons/pi";
import { PiButterflyFill } from "react-icons/pi";

const BottomNavBar = () => {
  const currentPath = usePathname();

  return (
    <nav className="fixed drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] custom-glass-2 pt-1 w-full sidebar bottom-0 z-50 bg-white pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-between gap-1 px-2 text-sm'>
          <Link href="/" className={`w-[80px] rounded-2xl dark:border-zinc-800 nav-item flex flex-col justify-center items-center gap-1 py-2 shadow-1  ${currentPath === '/' ? 'bg-gray-200 dark:bg-zinc-950 font-bold shadow-4xl' : ''}`}>
         { currentPath === '/' ? <GoHomeFill size={20}/> : <Home size={20} />}
            <span className="text-sm ">Home</span>
          </Link>
          
          <Link href="/exchanges" className={`w-[80px] rounded-2xl dark:border-zinc-800 nav-item flex flex-col justify-center items-center gap-1 py-2 shadow-1 font-semibold ${currentPath === '/exchanges' ? 'bg-gray-200 dark:bg-zinc-950 font-bold shadow-4xl' : ''}`}>
           { currentPath === '/exchanges' ? <RiExchange2Fill size={20}/> : <RiExchange2Line size={20} />}
            <span className="text-sm">Exchanges</span>
          </Link>
          
          <Link href="/store" className={`w-[80px] rounded-2xl dark:border-zinc-800 nav-item flex flex-col justify-center items-center gap-1 py-2 shadow-1 font-semibold ${currentPath === '/store' ? 'bg-gray-200 dark:bg-zinc-950 font-bold shadow-4xl' : ''}`}>
          { currentPath === '/store' ? <PiButterflyFill size={20}/> : <PiButterfly size={20} />}
            <span className="text-sm">Store</span>
          </Link>
          
          <Link href="/forum" className={`w-[80px] rounded-2xl dark:border-zinc-800 nav-item flex flex-col justify-center items-center gap-1 py-2 shadow-1 font-semibold ${currentPath === '/forum' ? 'bg-gray-200 dark:bg-zinc-950 font-bold shadow-4xl' : ''}`}>
           { currentPath === '/forum' ? <MdHive size={20}/> : <MdOutlineHive size={20} />}
            <span className="text-sm">Hive</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;