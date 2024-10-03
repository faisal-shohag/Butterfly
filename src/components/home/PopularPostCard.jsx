"use server"

import formatTimeAgo from "@/app/(routes)/forum/TimeAgo";
import UserAvatar from "../common/UserAvatar";
import { FaHeart } from "react-icons/fa6";
import { MdModeComment } from "react-icons/md";
import { Separator } from "../ui/separator";
import Link from "next/link";

const PopularPostCard = ({post}) => {
    return (
       
        <div className=" p-5 bg-card  rounded-xl shadow-xl">
            <div className="flex items-center gap-3">
                <UserAvatar image={post.author.image} name={post.author.name}/>
                <div className="flex flex-col items-start">
                    <div className="font-semibold">{post.author.name}</div>
                    <div className="text-xs">{formatTimeAgo(post.createdAt)}</div>
                </div>
            </div>
            <div className="text-left line-clamp-3 text-sm font-kalpurush mt-3">
              {post.content}
            </div>
            
            <Separator className="mt-4"/>
          <Link href={'/forum'}><div className="flex gap-5 mt-4 text-sm">
                <div className="flex items-center gap-2 font-semibold"><FaHeart className="text-red-500" size={18}/> {post._count.likes}</div>
                <div className="flex items-center gap-2 font-semibold"><MdModeComment className="text-green-500" size={18}/> {post._count.comments}</div>
                
            </div></Link>  
        </div>
       
    );
};

export default PopularPostCard;