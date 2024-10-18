"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { PiBookOpenTextThin, PiFileImageThin, PiStorefrontThin, PiUsersLight } from "react-icons/pi";

export default function TopCards() {

  const axiosSecure = useAxiosSecure();
  const {
    data: total,
    isLoading,
    error,
  } = useQuery("total", async () => {
    const res = await axiosSecure.get("/total-count");
    return res.data;
  });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error loading ...</p>;

  const cardData = [
    {
      id: 1,
      title: "Total Books",
      icon: <PiBookOpenTextThin size={24} />,
      totalCounts: total?.totalBooks || 0, 
    },
    {
      id: 2,
      title: "Total Posts",
      icon: <PiFileImageThin size={24} />,
      totalCounts: total?.totalPosts || 0,
    },
    {
      id: 3,
      title: "Total Store Books",
      icon: <PiStorefrontThin size={24} />,
      totalCounts: total?.totalStoreBooks || 0,
    },
    {
      id: 4,
      title: "Total Users",
      icon: <PiUsersLight size={24} />,
      totalCounts: total?.totalUsers || 0,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {cardData.map(item => (
        <Card key={item.id}>
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
