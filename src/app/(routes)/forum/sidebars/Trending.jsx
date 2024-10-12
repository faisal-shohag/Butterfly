"use server"

import { auth } from "@/auth";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import WhoToFollow from "./WhoToFollow";


export default async function TrendsSidebar  ({className}) {
      const {user} = await auth();
    return (
        <div className={className}>
            <Suspense fallback={<Loader2 className="mx-auto animate-spin"/>}>
          {/* <WhoToFollow currentUser={user}/> */}
          <TrendingTopics/>
          </Suspense>
        </div>
    )
}






const getTrendingTopics =  async () => {
      const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/trending-topics`).then(res => res.json())
      return result.map((row) => ({
        hashtag: row.hashtag,
        count: Number(row.count),
      }));
    }


export async function formatNumber(num) {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + "B";
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + "M";
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + "K";
    } else {
        return num.toString();
    }
}

const TrendingTopics = async () => {
    const trendingTopics = await getTrendingTopics();
     return (
    <div className="space-y-5 rounded-2xl bg-card dark:bg-zinc-900 p-5 shadow-sm mt-10">
      <div className="text-xl font-bold">Trending topics</div>
      {trendingTopics.map(({ hashtag, count }) => {
        const title = hashtag;

        return (
          <Link key={title} href={`/hashtag/${title}`} className="block">
            <div
              className="line-clamp-1 break-all font-semibold hover:underline"
              title={hashtag}
            >
              {hashtag}
            </div>
            <div className="text-sm text-muted-foreground">
              {formatNumber(count)} {count === 1 ? "post" : "posts"}
            </div>
          </Link>
        );
      })}
    </div>
  );
}