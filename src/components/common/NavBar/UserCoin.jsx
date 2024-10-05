import React from 'react';
import { TbCoinBitcoinFilled } from "react-icons/tb";
import { Loader } from 'lucide-react';
import { useCoins } from '@/hooks/useCoins';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import formatTimeAgo from '@/app/(routes)/forum/TimeAgo';
import { AiFillThunderbolt } from "react-icons/ai";

const UserCoin = ({ user }) => {
    const { totalCoins, isLoading, error, coins } = useCoins(user.id);

    const CoinDisplay = () => (
        <>
        <div className="shadow-md rounded-lg py-1 px-2 flex items-center gap-5 shimmer bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 border-2 border-purple-300 pl-7 relative">
        <div className='absolute -left-5 z-10 -top-2 text-pink-100 '><AiFillThunderbolt size={50} className=''/></div>
           

            <div className="text-sm font-semibold text-white">BC</div>
            <div className="flex items-center gap-2 bg-white rounded-xl dark:bg-zinc-900">
                <div><TbCoinBitcoinFilled className="shimmer" size={20}/></div>
                <div className="text-sm font-bold pr-2">
                    {isLoading ? <Loader size={15} className='animate-spin'/> : totalCoins}
                </div>
            </div>
        </div>
        </>
    );

    if (error) return <div>Error: {error.message}</div>;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='cursor-pointer' asChild>
                <div>
                    <CoinDisplay />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="font-semibold">Your Butterfly Coins</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {coins && coins.map((coin) => (
                    <DropdownMenuItem key={coin.id} className="text-sm">
                       <div className='flex items-center gap-3'>
                        <div><TbCoinBitcoinFilled size={30} className='shimmer'/></div>
                        <div className='text-sm'>
                            <div className='font-semibold'>{coin.reason}</div>
                            <div className='text-xs'>{formatTimeAgo(coin.createdAt)}</div>
                        </div>

                       </div>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserCoin;