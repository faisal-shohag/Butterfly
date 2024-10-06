"use client"

import { useQueryClient } from 'react-query';
import UserAvatar from "@/components/common/UserAvatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSuggestedUsers } from '@/hooks/useSuggestedUsers';
import { useFollowToggle } from '@/hooks/useFollowToggle';
import { useFollowingStatus } from '@/hooks/useFollowingStatus';

const WhoToFollow = ({ currentUser }) => {
    const { data: suggestedUsers, isLoading, isError } = useSuggestedUsers(currentUser.id);
  
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching suggested users</div>;
  
    return (
      <div className="space-y-5 rounded-2xl bg-card dark:bg-zinc-900 p-5 shadow-sm">
        <div className="text-xl font-bold">Who to follow</div>
        {suggestedUsers?.map((user) => (
          <UserToFollowItem 
            key={user.id} 
            user={user} 
            currentUserId={currentUser.id}
          />
        ))}
      </div>
    );
  };
  

  const UserToFollowItem = ({ user, currentUserId }) => {
    const { data: isFollowing, isLoading: isLoadingStatus } = useFollowingStatus(currentUserId, user.id);
    const followToggleMutation = useFollowToggle(currentUserId);
  
    const handleFollowToggle = async () => {
      await followToggleMutation.mutateAsync(user.id);
    };
  
    return (
      <div className="flex items-center justify-between gap-3">
        <Link href={`/users/${user.username}`} className="flex items-center gap-3">
          <UserAvatar image={user.image} name={user.name} />
          <div>
            <div className="line-clamp-1 text-sm break-all font-semibold hover:underline">
              {user.name}
            </div>
            <div className="line-clamp-1 text-xs break-all text-muted-foreground hover:underline">
              @{user.username}
            </div>
          </div>
        </Link>
        <Button 
        className={`${isFollowing ? 'bg-red-500' : ''}`}
          onClick={handleFollowToggle} 
          disabled={followToggleMutation.isLoading || isLoadingStatus}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </Button>
      </div>
    );
  };

export default WhoToFollow;