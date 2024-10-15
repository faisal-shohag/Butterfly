
import { useMutation, useQueryClient } from 'react-query';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ThumbsUp,
  MessageCircle,
  MoreVertical,
  Trash2,
  Loader2,
  Flag,
} from "lucide-react";
import { HiCheckBadge } from "react-icons/hi2";
import { toast } from 'react-hot-toast';
import formatTimeAgo from "./TimeAgo";
import CustomRenderer from "@/components/common/CustomRenderer";
import { useState } from 'react';

const CommentCard = ({ comment, user, postId, axiosSecure, onDeleteComment }) => {
  const [isLikeLoading, setIsLikeLoading] = useState(false);
  const queryClient = useQueryClient();

  const toggleLikeMutation = useMutation(
    async () => {
      setIsLikeLoading(true);
      const response = await axiosSecure.post(
        `/comments/${comment.id}/toggle-like`,
        {
          userId: user.id,
        }
      );
      return response.data;
    },
    {
      onMutate: async () => {
        await queryClient.cancelQueries(["comments", postId]);
        const previousData = queryClient.getQueryData(["comments", postId]);
        queryClient.setQueryData(["comments", postId], (oldData) => {
          if (!oldData || !oldData.comments) {
            return oldData;
          }
          return {
            ...oldData,
            comments: oldData.comments.map((c) =>
              c.id === comment.id
                ? {
                    ...c,
                    isLiked: !c.isLiked,
                    likeCount: c.isLiked ? c.likeCount - 1 : c.likeCount + 1,
                  }
                : c
            ),
          };
        });
        return { previousData };
      },
      onError: (error, variables, context) => {
        queryClient.setQueryData(["comments", postId], context.previousData);
        setIsLikeLoading(false);
        toast.error("Failed to like the comment. Please try again.");
      },
      onSuccess: (data) => {
        setIsLikeLoading(false);
        queryClient.setQueryData(["comments", postId], (oldData) => {
          if (!oldData || !oldData.comments) {
            return oldData;
          }
          return {
            ...oldData,
            comments: oldData.comments.map((c) =>
              c.id === comment.id
                ? {
                    ...c,
                    likeCount: data.likesCount,
                    isLiked: data.liked,
                  }
                : c
            ),
          };
        });
      },
      onSettled: () => {
        queryClient.invalidateQueries(["comments", postId]);
      },
    }
  );

  const handleLikeComment = () => {
    toggleLikeMutation.mutate();
  };

  const handleViewReplies = () => {
    // Implement logic to view replies
    console.log(`View replies for comment ${comment.id}`);
  };

  return (
    <div className="p-2 rounded-xl flex items-start gap-2">
      <div className="">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.author.image} />
          <AvatarFallback className="text-white bg-black font-semibold border-2 border-zinc-300 dark:border-zinc-800">
            {comment.author.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="w-full">
        <div className="text-sm w-full rounded-xl px-3 py-2 dark:bg-zinc-950 bg-gray-100 relative">
          <div className="absolute right-0 top-0">
            {comment.author.id === user?.id && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreVertical className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => onDeleteComment(comment.id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Flag className="mr-2 h-4 w-4" />
                    <span>Report</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <div className="font-semibold text-xs mb-1 flex items-center gap-1">
            {comment.author.name} {comment.author.role === "admin" && <HiCheckBadge className="text-green-500" size={17}/>}
          </div>
          <span className="font-kalpurush">
            <CustomRenderer content={comment.content} />
          </span>
        </div>

        <div className="ml-1 text-xs flex items-center gap-3">
          <div className="text-gray-500">
            {formatTimeAgo(comment.createdAt)}
          </div>
          <button
            onClick={handleLikeComment}
            disabled={isLikeLoading}
            className={`${
              comment.isLiked
                ? "text-green-500 font-bold"
                : "hover:text-black dark:hover:text-white"
            } flex items-center`}
          >
            <div className="flex items-center">
              {isLikeLoading ? (
                <Loader2 className="h-4 w-4 mr-1 animate-spin" />
              ) : (
                <ThumbsUp className="h-4 w-4 mr-1" />
              )}
              <div className="pt-1">Like {comment.likeCount > 0 && `(${comment.likeCount})`}</div>
            </div>
          </button>
          {comment.replyCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleViewReplies}
              className="hover:text-black dark:hover:text-white border rounded-full"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              View {comment.replyCount}{" "}
              {comment.replyCount === 1 ? "reply" : "replies"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;