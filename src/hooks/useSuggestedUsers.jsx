import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';

export const useSuggestedUsers = (userId, limit = 3) => {
  const axiosSecure = useAxiosSecure();

  return useQuery(['suggestedUsers', userId], async () => {
    const { data } = await axiosSecure.get('/suggested-users', {
      params: { userId, limit },
    });
    return data;
  });
};