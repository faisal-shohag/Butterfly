"use server";

import { TbCoinBitcoinFilled } from "react-icons/tb";
import Heading from "../common/Heading";
import { unstable_cache } from "next/cache";
import UserAvatar from "../common/UserAvatar";
import prisma from "@/lib/prisma";

const getMostCoinedUser = unstable_cache(
  async () => {
    try {
      const topCoinGainers = await prisma.user.findMany({
        include: {
          _count: {
            select: {
              coins: true,
            },
          },
        },
        orderBy: {
          coins: {
            _count: "desc",
          },
        },
        take: 5,
      });
      return topCoinGainers;
    } catch (error) {
      console.log(error);
    }
  },
  ["most-coined-users"],
  { revalidate: 10 }
);

const MostCoinedUserCard = async () => {
  let top_coin_gainers = await getMostCoinedUser();
  top_coin_gainers = top_coin_gainers ? top_coin_gainers: []
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-5">
      {top_coin_gainers.map((user, index) => (
        <div
          key={index}
          className="flex custom-glass rounded-xl items-center gap-2"
        >
          <UserAvatar height={150} width={150} image={user.image} name={user.name} />
          <div>
            <h3 className="font-medium  line-clamp-1 text-sm">{user.name}</h3>
            <div>
              {/* <div className="text-xs">@{user.username}</div> */}
              <div className="text-sm text-gray-500 flex items-center justify-between font-bold border rounded-xl max-w-12 pr-2 dark:bg-zinc-950">
                <TbCoinBitcoinFilled size={20} className="shimmer" />{" "}
                {user._count.coins}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const MostCoinedUser = async () => {
  await getMostCoinedUser();
  return (
    <div className="mb-10">
      <Heading icon={<TbCoinBitcoinFilled />} title={"Rich Exchangers"} />
      <MostCoinedUserCard />
    </div>
  );
};

export default MostCoinedUser;
