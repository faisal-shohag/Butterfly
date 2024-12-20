"use client";
import Loading from "@/components/common/Loading";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import ExchangesRequestTable from "./ExchangesRequestTable";
import RequestHandlingTable from "./RequestHandleingTable";

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

  console.log(responseData?.data);

  if (status === "loading" || isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p className="text-red-500">Failed to load exchange requests.</p>;
  }

  if (!session) {
    return <p>Please log in to manage exchange requests.</p>;
  }

  // if (responseData?.data.length === 0) {
  //   return (
  //     <div className="flex justify-center items-center h-[calc(100vh-200px)]">
  //       <h1 className="text-xl sm:text-3xl text-gray-500 font-bold text-center">
  //         You don't have any exchange request
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full p-4">
      <div className="w-full flex justify-center items-center mb-6">
        <h4 className="font-bold text-2xl text-gray-700 dark:text-white text-center">
          Manage Exchange Requests
        </h4>
      </div>

      <RequestHandlingTable />
      {/* <ExchangesRequestTable request={responseData?.data || []} /> */}
    </div>
  );
}
