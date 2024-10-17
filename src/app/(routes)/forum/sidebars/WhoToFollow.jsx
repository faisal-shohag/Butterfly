"use client";

import { useQueryClient } from "react-query";
import UserAvatar from "@/components/common/UserAvatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSuggestedUsers } from "@/hooks/useSuggestedUsers";
import { useFollowToggle } from "@/hooks/useFollowToggle";
import { useFollowingStatus } from "@/hooks/useFollowingStatus";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const WhoToFollow = ({ currentUser }) => {
  const {
    data: suggestedUsers,
    isLoading,
    isError,
  } = useSuggestedUsers(currentUser.id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching suggested users</div>;

  return (
    <div className="rounded-xl max-w-2xl mb-5 mx-auto bg-card dark:bg-zinc-900 p-5 shadow-sm">
      <div className="text-xl font-bold mb-2">Who to follow</div>
      <div>
        {/* <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {suggestedUsers?.map((user) => (
              <CarouselItem
                key={user.id}
                className="md:basis-1/3 basis-1/3 lg:basis-1/3"
              >
                <UserToFollowItem user={user} currentUserId={currentUser.id} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}

        {suggestedUsers?.map((user) => (
          <UserToFollowItem 
            key={user.id} 
            user={user} 
            currentUserId={currentUser.id}
          />
        ))}
      </div>
    </div>
  );
};

const UserToFollowItem = ({ user, currentUserId }) => {
  const { data: isFollowing, isLoading: isLoadingStatus } = useFollowingStatus(
    currentUserId,
    user.id
  );
  const followToggleMutation = useFollowToggle(currentUserId);

  const handleFollowToggle = async () => {
    await followToggleMutation.mutateAsync(user.id);
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <div
      
        className="flex items-center gap-3"
      >
        <UserAvatar image={user.image} name={user.name} />
        <div>
          <Link href={`/users/${user.username}`} className="line-clamp-1 text-sm break-all font-semibold hover:underline">
            {user.name}
          </Link>
          <button
           size="sm"
        className={`text-sm font-bold hover:underline ${isFollowing ? 'text-red-500' : ''}`}
          onClick={handleFollowToggle} 
          disabled={followToggleMutation.isLoading || isLoadingStatus}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </button>
        </div>
      </div>
     
    </div>
  );
};

export default WhoToFollow;
