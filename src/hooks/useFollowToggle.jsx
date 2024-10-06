import { useMutation, useQueryClient } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useFollowToggle = (userId) => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
  
    return useMutation(
      async (targetUserId) => {
        const { data } = await axiosSecure.post(`/toggle-follow/${targetUserId}`, { user: { id: userId } });
        return data;
      },
      {
        onSuccess: (data, targetUserId) => {
          // Invalidate and refetch only the followingStatus
          queryClient.invalidateQueries(['followingStatus', userId, targetUserId]);
        },
      }
    );
  };