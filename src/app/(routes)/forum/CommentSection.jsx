"use client";
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import UserAvatar from "@/components/common/UserAvatar";
import formatTimeAgo from "./TimeAgo";
import CustomRenderer from "@/components/common/CustomRenderer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  ThumbsUp,
  MessageCircle,
  MoreVertical,
  Trash2,
  Loader2,
  SendHorizonal,
  Flag,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiCheckBadge } from "react-icons/hi2";

const CommentSection = ({ postId, user, axiosSecure }) => {
  const [newComment, setNewComment] = useState("");
  const [page, setPage] = useState(1);
  const [likeLoading, setLikeLoading] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery(
    ["comments", postId, page],
    () => fetchComments(postId, page),
    {
      keepPreviousData: true,
    }
  );

  const fetchComments = async (postId, page) => {
    const response = await axiosSecure.get(
      `/posts/${postId}/${user.id}/comments?page=${page}&limit=3`
    );
    return response.data;
  };

  const createCommentMutation = useMutation(
    async (commentData) => {
      toast.loading("Adding comment...", { id: "createComment" });
      const response = await axiosSecure.post(
        `/posts/${postId}/comments`,
        commentData
      );
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", postId]);
        setNewComment("");
        toast.success("Comment added successfully!", { id: "createComment" });
      },
      onError: (error) => {
        console.error("Error creating comment:", error);
        toast.error("Failed to add comment. Please try again.", {
          id: "createComment",
        });
      },
    }
  );

  const toggleLikeMutation = useMutation(
    async (commentId) => {
      commentId = commentId.commentId;
      setLikeLoading(true);
      const response = await axiosSecure.post(
        `/comments/${commentId}/toggle-like`,
        {
          userId: user.id,
        }
      );
      setLikeLoading(false);
      return { ...response.data, commentId };
    },
    {
      onMutate: async ({ commentId }) => {
        await queryClient.cancelQueries(["comments", postId]);
        const previousData = queryClient.getQueryData(["comments", postId]);
        queryClient.setQueryData(["comments", postId], (oldData) => {
          if (!oldData || !oldData.comments) {
            return oldData;
          }
          return {
            ...oldData,
            comments: oldData.comments.map((comment) =>
              comment.id === commentId
                ? {
                    ...comment,
                    isLiked: !comment.isLiked,
                    likeCount: comment.isLiked
                      ? comment.likeCount - 1
                      : comment.likeCount + 1,
                  }
                : comment
            ),
          };
        });
        return { previousData };
      },
      onError: (error, variables, context) => {
        queryClient.setQueryData(["comments", postId], context.previousData);
        setLikeLoading(false);
        toast.error("Failed to like the comment. Please try again.");
      },
      onSuccess: (data) => {
        setLikeLoading(false);
        queryClient.setQueryData(["comments", postId], (oldData) => {
          if (!oldData || !oldData.comments) {
            return oldData;
          }
          return {
            ...oldData,
            comments: oldData.comments.map((comment) =>
              comment.id === data.commentId
                ? {
                    ...comment,
                    likeCount: data.likesCount,
                    isLiked: data.liked,
                  }
                : comment
            ),
          };
        });
      },
      onSettled: () => {
        queryClient.invalidateQueries(["comments", postId]);
      },
    }
  );

  const deleteCommentMutation = useMutation(
    async (commentId) => {
      toast.loading("Deleting comment...", { id: "delete-comment" });
      await axiosSecure.delete(`/comments/${commentId}/${user.id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", postId]);
        toast.success("Comment deleted successfully!", {
          id: "delete-comment",
        });
      },
      onError: (error) => {
        console.error("Error deleting comment:", error);
        toast.error("Failed to delete the comment. Please try again.", {
          id: "delete-comment",
        });
      },
    }
  );

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    createCommentMutation.mutate({
      content: newComment,
      userId: user.id,
      images: [],
    });
  };

  const handleDeleteComment = (commentId) => {
    deleteCommentMutation.mutate(commentId);
  };

  const handleLikeComment = (commentId) => {
    toggleLikeMutation.mutate({ commentId });
  };

  const loadMoreComments = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const loadPreviousComments = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleViewReplies = (commentId) => {
    // Implement logic to view replies
    console.log(`View replies for comment ${commentId}`);
    // This could open a modal or expand a section to show replies
  };

  if (isLoading)
    return (
      <div className="mt-2">
        <Separator />
        <div className="px-10 mt-2 font-semibold">Loading comments...</div>
      </div>
    );
  if (error) return <div>Error loading comments: {error.message}</div>;

  console.log(data);

  return (
    <div className="mt-4 p-4 border-t">
      <form onSubmit={handleSubmitComment} className="mb-4">
        <div className="flex items-start space-x-4">
          <UserAvatar image={user.image} name={user.name} />
          <div className="flex-grow relative">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              required
              className="w-full p-2 border rounded-xl"
            />
            <button
              type="submit"
              className="mt-2 shadow-xl border flex items-center justify-center absolute right-2 bottom-2 bg-black text-white rounded-full px-1 py-1 dark:bg-zinc-800"
            >
              <SendHorizonal size={20} />
            </button>
          </div>
        </div>
      </form>

      {data?.comments && data.comments.length > 0 ? (
        <div className="">
          {data.comments.map((comment) => (
            <div
              key={comment.id}
              className="p-2 rounded-xl flex items-start gap-2"
            >
              {/* avatar */}
              <div className="">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.author.image} />
                    <AvatarFallback className="text-white bg-black font-semibold border-2 border-zinc-300 dark:border-zinc-800">
                      {comment.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="w-full">
                {/* comment */}

                <div className="text-sm  w-full rounded-xl px-3 py-2 dark:bg-zinc-950 bg-gray-100 relative">
                  <div className="absolute right-0 top-0">
                    {/* dropdown menu */}
                    {comment.author.id === user?.id && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreVertical className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleDeleteComment(comment.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Flag className="mr-2 h-4 w-4" />
                            <span>Report</span>
                            {/* TODO */}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>

                  <div className="font-semibold text-xs mb-1 flex items-center gap-1">
                    {comment.author.name} {comment.author.role ==="admin" && <HiCheckBadge className="text-green-500" size={17}/>}
                  </div>
                  <span className="font-kalpurush">
                    {" "}
                    <CustomRenderer content={comment.content} />
                  </span>
                </div>

                {/* buttons */}
                <div className="ml-1 text-xs flex items-center gap-3">
                  <div className="text-gray-500">
                    {formatTimeAgo(comment.createdAt)}
                  </div>
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    disabled={toggleLikeMutation.isLoading}
                    className={`${
                      comment.isLiked
                        ? "text-green-500  font-bold"
                        : "hover:text-black dark:hover:text-white"
                    }  flex items-center`}
                  >
                    <div className="flex  items-center">
                    {likeLoading ? (
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
                      onClick={() => handleViewReplies(comment.id)}
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
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">You are at the end!</div>
      )}

      <div className="flex  justify-between text-sm">
        {data?.currentPage > 1 && (
          <div
            onClick={loadPreviousComments}
            className=" mt-2 underline font-semibold cursor-pointer"
          >
            Load New Comments
          </div>
        )}

        {data?.currentPage < data?.totalPages && (
          <div
            onClick={loadMoreComments}
            className=" mt-2 underline font-semibold cursor-pointer"
          >
            Load Old Comments
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
