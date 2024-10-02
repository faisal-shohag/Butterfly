"use server"

import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";
import PopularPostCard from "./PopularPostCard";
import Heading from "../common/Heading";
import { MdOutlineHive } from "react-icons/md";

const getPopularPosts = unstable_cache(async () => {
    try {
        const popularPosts = await prisma.post.findMany({
            orderBy: {
                likes: {
                    _count: "desc",
                },
            },
            take: 5,
            include: {
                author: true,
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                    },
                },
                images: true,
            },
        });
        console.log("cache popular posts...")

        return popularPosts; 
    } catch (error) {
        console.log(error);
    }
}, ["getPopularPosts"], { revalidate: 2*60*60 }); // Caches the result for 60 seconds

const PopularPosts = async () => {
    let posts = await getPopularPosts(); 
    posts = posts ? posts : [];

    return (
        <div className="mb-10 custom-glass rounded-xl">

            <Heading icon={<MdOutlineHive />} title={'Popular from HIVE'}/>
        
         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
         {posts?.map((post) => (
           <PopularPostCard key={post.id} post={post}/>
          ))}
         </div>
        </div>
    );
};

export default PopularPosts;
