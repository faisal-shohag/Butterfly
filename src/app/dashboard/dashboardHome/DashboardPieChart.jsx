"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Skeleton } from "@/components/ui/skeleton";

export const description = "A simple interactive pie chart";

const COLORS = ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9"];

export function DashboardPieChart() {
  const axiosSecure = useAxiosSecure();
  const {
    data: total,
    isLoading,
    error,
  } = useQuery("total", async () => {
    const res = await axiosSecure.get("/total-count");
    return res.data;
  });

  if (isLoading) return <Skeleton className="h-[280px] w-full rounded-xl" />;
  if (error) return <p>Failed to load chart. Please try again later.</p>;

  const chartData = [
    { name: "Books", value: total?.totalBooks || 0 },
    { name: "Posts", value: total?.totalPosts || 0 },
    { name: "Store Books", value: total?.totalStoreBooks || 0 },
    { name: "Users", value: total?.totalUsers || 0 },
  ];

  return (
    <div className="w-full h-[280px]">
      <Card className="w-full max-h-full">
        <CardHeader>
          <CardTitle>Total Information Pie Chart</CardTitle>
          <CardDescription>
            {/* Interactive pie chart showing total counts of various categories */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                {/* Trending data */}
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                {/* January - June 2024 */}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
