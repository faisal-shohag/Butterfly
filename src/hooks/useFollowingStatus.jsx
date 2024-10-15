import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';

export const useFollowingStatus = (currentUserId, targetUserId) => {
  const axiosSecure = useAxiosSecure();

  return useQuery(['followingStatus', currentUserId, targetUserId], async () => {
    const { data } = await axiosSecure.get(`/following-status/${currentUserId}/${targetUserId}`);
    return data.isFollowing;
  });
};