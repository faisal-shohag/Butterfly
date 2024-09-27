"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiSolidWidget } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { GiCircleClaws } from "react-icons/gi";
import { Home, Repeat } from "lucide-react";
import { TbButterfly } from "react-icons/tb";
import { MdOutlineHive } from "react-icons/md";
const BottomNavBar = () => {
  const currentPath = usePathname();

  return (
    <nav className="fixed drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] dark:bg-slate-800 pt-1 w-full sidebar bottom-0 z-50 bg-white pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-between gap-1 px-2'>
          <Link href="/" className={`w-[80px] rounded-2xl dark:border-zinc-800 nav-item flex flex-col justify-center items-center gap-1 py-2 shadow-1 font-semibold ${currentPath === '/' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
          <Home size={20} />
            <span className="text-sm">Home</span>
          </Link>
          
          <Link href="/pages/exchanges" className={`w-[80px] rounded-2xl dark:border-zinc-800 nav-item flex flex-col justify-center items-center gap-1 py-2 shadow-1 font-semibold ${currentPath === '/pages/exchanges' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
          <Repeat size={20} />
            <span className="text-sm">Exchanges</span>
          </Link>
          
          <Link href="/pages/store" className={`w-[80px] rounded-2xl dark:border-zinc-800 nav-item flex flex-col justify-center items-center gap-1 py-2 shadow-1 font-semibold ${currentPath === '/pages/store' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
          <TbButterfly size={20} />
            <span className="text-sm">Store</span>
          </Link>
          
          <Link href="/pages/forum" className={`w-[80px] rounded-2xl dark:border-zinc-800 nav-item flex flex-col justify-center items-center gap-1 py-2 shadow-1 font-semibold ${currentPath === '/pages/forum' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
          <MdOutlineHive size={20} />
            <span className="text-sm">Hive</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;