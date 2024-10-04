"use server";

import { TbCoinBitcoinFilled } from "react-icons/tb";
import Heading from "../common/Heading";
import UserAvatar from "../common/UserAvatar";

const getMostCoinedUser = async () => {
    try {
      const topCoinGainers = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/most-coined-users`).then(res => res.json());
     
      return topCoinGainers;
    } catch (error) {
      console.log(error);
    }
  }

const MostCoinedUserCard = async () => {
  const top_coin_gainers = await getMostCoinedUser() || [];
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
