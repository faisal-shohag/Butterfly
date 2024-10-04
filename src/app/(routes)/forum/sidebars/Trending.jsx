import { auth } from "@/auth";
import UserAvatar from "@/components/common/UserAvatar";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";


export default function TrendsSidebar ({className}) {
    return (
        <div className={className}>
            <Suspense fallback={<Loader2 className="mx-auto animate-spin"/>}>
          <WhoToFollow/>
          <TrendingTopics/>
          </Suspense>
        </div>
    )
}




async function WhoToFollow () {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
    const { user } = await auth();
    let usersToFollow = []
    try {
      usersToFollow = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/suggested-to-follow-users/${user?.id}`).then(res => res.json());
    } catch (error) {
      console.error('Error fetching who to follow users:', error);
      throw new Error('Failed to fetch latest exchange posts', error);
    }

  
    return  <div className="space-y-5 rounded-2xl bg-card dark:bg-zinc-900 p-5 shadow-sm">
    <div className="text-xl font-bold">Who to follow</div>
    {usersToFollow.map((u) => (
      <div key={u.id} className="flex items-center justify-between gap-3">
        <Link
          href={`/users/${u.name}`}
          className="flex items-center gap-3"
        >
         <UserAvatar image={u.image} name={u.name}/>
          <div>
            <div className="line-clamp-1 text-sm break-all font-semibold hover:underline">
              {u.name}
            </div>
            <div className="line-clamp-1 text-xs break-all text-muted-foreground hover:underline">
          @{u.username}
            </div>
          </div>
        </Link>
        <Button>Follow</Button>
      </div>
    ))}
  </div>
}

const getTrendingTopics =  async () => {
      const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/trending-topics`).then(res => res.json())
      return result.map((row) => ({
        hashtag: row.hashtag,
        count: Number(row.count),
      }));
    }


export function formatNumber(num) {
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