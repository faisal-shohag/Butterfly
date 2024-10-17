"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FaBook, FaUsers, FaRegEnvelope, FaFileImage, FaStore  } from "react-icons/fa";
import { useQuery } from "react-query";

export default function TopCards() {
  
  const axiosSecure = useAxiosSecure();
  const {
    data: total,
    isLoading,
    error,
    refetch
  } = useQuery("total", async () => {
    const res = await axiosSecure.get("/total-count");
    return res.data;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading ...</p>;
  refetch()

  const cardData = [
    {
      id: 1, 
      title: "Total Books",
      icon: <FaBook size={28} />,
      totalCounts: total.totalBooks,
      iconBg: "bg-green-500 dark:bg-green-600",
    },
    {
      id: 2,
      title: "Total Posts",
      icon:  <FaFileImage size={28}/>,
      totalCounts: total.totalPosts,
      iconBg: "bg-blue-500 dark:bg-blue-600",
    },
    {
      id: 3,
      title: "Total Store Books",
      icon:  <FaStore  size={28} />,
      totalCounts: total.totalStoreBooks,
      iconBg: "bg-purple-600 dark:bg-purple-600",
    },
    {
      id: 1,
      title: "Total Users",
      icon: <FaUsers size={28} />,
      totalCounts: total.totalUsers,
      iconBg: "bg-pink-500 dark:bg-pink-600",
    },
  ]

  // cardData.map(item => console.log(item))
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {cardData.map(item => (
                <Card key={item.id} x-chunk="dashboard-01-chunk-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-lg font-medium">
                            {item.title}
                        </CardTitle>
                        <div className="h-4 w-4 text-muted-foreground">
                            {item.icon}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+{item.totalCounts}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
  );
}

