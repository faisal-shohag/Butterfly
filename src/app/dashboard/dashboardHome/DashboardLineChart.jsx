"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Skeleton } from "@/components/ui/skeleton";

export const description = "A simple area chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export function DashboardLineChart() {
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
  if (error) return <p>Failed to load cards. Please try again later.</p>;

  const chartData = [
    { total: "start", desktop: 0 },
    { total: "Books", desktop: total?.totalBooks || 0 },
    { total: "Posts", desktop: total?.totalPosts || 0 },
    { total: "Store Books", desktop: total?.totalStoreBooks || 0 },
    { total: "Users", desktop: total?.totalUsers || 0 },
  ];

  return (
    <div className="w-full h-[280px]">
      <Card className="w-full max-h-full">
        <CardHeader>
          <CardTitle>Total Information Chart</CardTitle>
          <CardDescription>
            {/* Showing total visitors for the last 6 months */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <div className="w-full h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{
                    top: 10,
                    right: 12,
                    bottom: 0,
                    left: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="total"
                    tickLine={true}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 5)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                {/* Trending up by 5.2% this month */}
                <TrendingUp className="h-4 w-4" />
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
