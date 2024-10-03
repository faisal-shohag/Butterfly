import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { Loader2 } from "lucide-react";
import { unstable_cache } from "next/cache";
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
    const { user } = await auth();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    if(!user) return null;


    // console.log(user)
    
    // const usersToFollow= []
    const usersToFollow = await prisma.user.findMany({
        where: {
            NOT: {
                id: user.id
            }
        },
        take: 3,
        select: {
            id: true,
            name: true,
            image: true,
            username: true,
        }
    })

    // console.log(usersToFollow)



    return  <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm">
    <div className="text-xl font-bold">Who to follow</div>
    {usersToFollow.map((u) => (
      <div key={u.id} className="flex items-center justify-between gap-3">
        <Link
          href={`/users/${u.name}`}
          className="flex items-center gap-3"
        >
      <Avatar>
                <AvatarImage
                  src={u.image}
                  alt={u.name}
                />
                <AvatarFallback>
                  {u.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
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

const getTrendingTopics = unstable_cache(
    async () => {
      const result = await prisma.$queryRaw`
              SELECT LOWER(unnest(regexp_matches(content, '#[[:alnum:]_]+', 'g'))) AS hashtag, COUNT(*) AS count
              FROM "Post"
              GROUP BY hashtag
              ORDER BY count DESC, hashtag ASC
              LIMIT 5
          `;
  
      return result.map((row) => ({
        hashtag: row.hashtag,
        count: Number(row.count),
      }));
    },
    ["trending_topics"],
    {
      revalidate: 10*60,
    },
  );


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
    // console.log(trendingTopics);
     return (
    <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm mt-10">
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