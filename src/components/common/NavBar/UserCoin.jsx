import { Loader } from 'lucide-react';
import { useCoins } from '@/hooks/useCoins';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import formatTimeAgo from '@/app/(routes)/forum/TimeAgo';

import Image from 'next/image';

const UserCoin = ({ user }) => {
    const { remainingCoins, isLoading, error, coins } = useCoins(user.id);

    const CoinDisplay = () => (
        <>
        <div className="shadow-md rounded-lg py-1 px-2 flex items-center gap-5 shimmer bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 border-2 border-purple-300 pl-7 relative">

            <div className="text-sm font-semibold text-white">BC</div>
            <div className="flex items-center gap-2 bg-white rounded-xl dark:bg-zinc-900">
                <div className='pl-1'><Image height={15} width={15} src={"/bcoin.png"} alt='coin'/></div>
                <div className="text-sm font-bold pr-2">
                    {isLoading ? <Loader size={15} className='animate-spin'/> : remainingCoins}
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
                <DropdownMenuLabel className="font-semibold">
                    Recent Butterfly Coins</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {coins && coins.map((coin) => (
                    <DropdownMenuItem key={coin.id} className="text-sm">
                       <div className='flex items-center gap-3'>
                       <div className='pl-1 relative'>
                        {/* <div className='text-xs font-bold absolute -top-2 right-0 custom-glass-3 rounded px-1'>
                            x{coin.value}
                        </div> */}
                        <Image height={35} width={35} src={"/bcoin.png"} alt='coin'/></div>
                        <div className='text-sm'>
                            <div className='font-semibold'>{coin.reason}(x{coin.value})</div>
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