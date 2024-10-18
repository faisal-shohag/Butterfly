import { useQuery, useMutation, useQueryClient } from 'react-query';
import useAxiosSecure from './useAxiosSecure';


const fetchUserCoins = async (userId) => {
    const axiosSecure = useAxiosSecure()
  const { data } = await axiosSecure.get(`/my-coins/${userId}`);
  return data.data;
};

export const useCoins = (userId) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure()

  const { data: coins, isLoading, error } = useQuery(
    ['userCoins', userId],
    () => fetchUserCoins(userId),
    {
      enabled: !!userId,
    }
  );

  const addCoin = useMutation(
    (coinData) => axiosSecure.post('/add-coin', coinData),
    {
      onSuccess: () => {
        // Invalidate and refetch the userCoins query
        queryClient.invalidateQueries(['userCoins', userId]);
      },
    }
  );

  const refetchCoins = () => {
    queryClient.invalidateQueries(['userCoins', userId]);
  };

//   console.log(coins)

  const totalCoins = coins ? coins.totalCoins : 0;
  const remainingCoins = coins ? coins.remainingCoins : 0;
  const recentCoins = coins ? coins.recentCoins : [];


  return {
    coins: recentCoins,
    totalCoins,
    remainingCoins,
    isLoading,
    error,
    addCoin: addCoin.mutate,
    refetchCoins,
  };
};