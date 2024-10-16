"use server";

import { SiApachehive } from "react-icons/si";
import Heading from "../common/Heading";
import UserAvatar from "../common/UserAvatar";
import { MdHive } from "react-icons/md";

const getMostPostUser = async () => {
    try {
      const topPostUser = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/hive-hunters`).then(res => res.json());
      return topPostUser;
    } catch (error) {
      console.log(error);
    }
  };

const HiveHuntersCard = async () => {
  let top_post_users = await getMostPostUser();
  top_post_users = top_post_users ? top_post_users : [];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-5">
      {top_post_users.map((user, index) => (
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
                <MdHive size={20} className="shimmer" />{" "}
                {user._count.posts}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const HiveHunters = async () => {
  await getMostPostUser();
  return (
    <div className="mb-10">
      <Heading icon={<SiApachehive />} title={"Hive Hunters"} />
      <HiveHuntersCard />
    </div>
  );
};

export default HiveHunters;
