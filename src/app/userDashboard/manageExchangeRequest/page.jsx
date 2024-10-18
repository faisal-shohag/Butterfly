"use client";
import Loading from "@/components/common/Loading";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import ExchangesRequestTable from "./ExchangesRequestTable";

export default function Page() {
  const axiosSecure = useAxiosSecure();
  const { data: session, status } = useSession();

  const id = session?.user?.id;

  const {
    data: responseData = {},
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["ExchangesRequests", id],
    async () => {
      const response = await axiosSecure.get(`/my-requests/${id}`);
      return response.data;
    },
    {
      enabled: !!id,
      keepPreviousData: true,
    }
  );

  if (status === "loading" || isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p className="text-red-500">Failed to load exchange requests.</p>;
  }

  if (!session) {
    return <p>Please log in to manage exchange requests.</p>;
  }

  return (
    <div className="w-full p-4">
      <div className="w-full flex justify-center items-center mb-6">
        <h4 className="font-bold text-2xl text-gray-700 dark:text-white text-center">
          Manage Exchange Requests
        </h4>
      </div>

      <ExchangesRequestTable request={responseData?.data || []} />
    </div>
  );
}
