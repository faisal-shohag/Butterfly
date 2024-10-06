"use client";
import { useFollowingStatus } from "@/hooks/useFollowingStatus";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFollowToggle } from "@/hooks/useFollowToggle";
import UserAvatar from "@/components/common/UserAvatar";
import { useState } from "react";
const HiveUserAvatar = ({ user, currentUserId }) => {
    const [follow, setFollow] = useState(0)

  const { data: isFollowing, isLoading: isLoadingStatus } = useFollowingStatus(
    currentUserId,
    user.id
  );
  const followToggleMutation = useFollowToggle(currentUserId);

  const handleFollowToggle = async () => {
    setFollow(isFollowing ? 0 : 1)
    await followToggleMutation.mutateAsync(user.id);
  };

  return (
    <div>
      <Popover >
        <PopoverTrigger asChild>
          <Avatar className={`shadow-xl border-2 rounded-full`}>
            <AvatarImage src={user.image} alt={user.name}></AvatarImage>
            <AvatarFallback
              className={` bg-zinc-950 text-white text-bold text-xl`}
            >
              <span className="text-white">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <div className="flex gap-2">
            <UserAvatar image={user.image} name={user.name} />
            <div className="">
              {/* <span className="text-sm font-semibold">{user.name}</span> */}
              <span className="text-xs font-semibold">
                @{user.username}
              </span>
              <div className="flex items-center">
                <span className="text-xs text-muted-foreground">
                  {user._count.followers + follow} Followers
                </span>
              </div>
              <button
                className={`${isFollowing ? "text-red-500" : ""} text-sm font-semibold`}
                onClick={handleFollowToggle}
                disabled={followToggleMutation.isLoading || isLoadingStatus}
              > 
                {isFollowing ? `${followToggleMutation.isLoading ? "Unfollowing...": "Unfollow"}` : `${followToggleMutation.isLoading ? "Following...": "Follow"}`}
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HiveUserAvatar;
