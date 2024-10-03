import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
  } from "@/components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { Button } from "@/components/ui/button";
  import { MessageSquare, Share2, MoreVertical, Trash2, Sparkles,  Bookmark } from "lucide-react";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";;
import { PiHandsClappingFill } from "react-icons/pi";
import formatTimeAgo from "../forum/TimeAgo";
import ImageDisplay from "../forum/ImageDisplay";
import CustomRenderer from "@/components/common/CustomRenderer";
import { Separator } from "@/components/ui/separator";

const UserPostCard = ({ post, user, handleLikeClick, handleDeletePost, handleShare }) => {
  return (
    <Card key={post.id} className="mb-4 max-w-2xl mx-auto dark:bg-[#141414]">
      <CardHeader className="flex flex-row justify-between items-start">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src={post.author.image} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{post.author.name}</h3>
            <p className="text-xs flex items-center gap-3 text-gray-500">
              {formatTimeAgo(post.createdAt)}
              {post.type === "ai" && (
                <div className="flex gap-3 items-center">
                  <span>•</span>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full "></div>
                    <div className="relative px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-white bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold text-xs flex gap-1 items-center">
                      <Sparkles size={13} /> AI Generated
                    </div>
                  </div>
                </div>
              )}
            </p>
          </div>
        </div>
        {post.author.id === user?.id && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleDeletePost(post.id)}>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </CardHeader>
      <CardContent className="p-0 mt-[-10px]">
        <div className="px-6 font-kalpurush">
          <CustomRenderer content={post.content} />
        </div>
        <ImageDisplay images={post.images} />
      </CardContent>
      <Separator className="mt-3" />
      <CardFooter className="flex justify-between mt-2">
        <div className="flex items-center gap-5">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleLikeClick(post.id)}
            disabled={post.isLiked}
            className={`${
              post.isLiked
                ? "text-white bg-green-500 font-bold hover:text-white"
                : "hover:text-black dark:hover:text-white"
            } border rounded-full  hover:bg-transparent `}
          >
            <PiHandsClappingFill className="mr-2 h-4 w-4" /> {post.likeCount || ""}
          </Button>
          <Button className="border rounded-full" variant="ghost" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" /> {post.commentCount || ""} Comments
          </Button>
          <Button
            onClick={() => handleShare(post, post.id)}
            className="border rounded-full"
            variant="ghost"
            size="sm"
          >
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
        <Button className="border rounded-full" variant="ghost" size="sm">
          <Bookmark className="mr-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserPostCard;
