"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Share2,
  MoreVertical,
  Trash2,
  Sparkles,
  Bookmark,
  Flag,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { PiHandsClappingFill } from "react-icons/pi";
import { HiCheckBadge } from "react-icons/hi2";
import { toast } from "react-hot-toast";

import formatTimeAgo from "./TimeAgo";
import ImageDisplay from "./ImageDisplay";
import CustomRenderer from "@/components/common/CustomRenderer";
import UserAvatar from "@/components/common/UserAvatar";
import CommentSection from "./CommentSection";
import HiveUserAvatar from "./HiveUserAvatar";
import ReportModal from "@/components/common/ReportModal";

const PostCard = ({ post, user, axiosSecure }) => {
  const [showComments, setShowComments] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  
  
  const queryClient = useQueryClient();

  const toggleLikeMutation = useMutation(
    async (postId) => {
      const response = await axiosSecure.post(`/posts/${postId}/toggle-like`, {
        userId: user?.id,
      });
      return response.data;
    },
    {
      onSuccess: (data, postId) => {
        queryClient.setQueryData("posts", (oldData) => {
          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              posts: page.posts.map((p) =>
                p.id === postId
                  ? { ...p, likeCount: data.likeCount, isLiked: data.liked }
                  : p
              ),
            })),
          };
        });
      },
    }
  );

  const deletePostMutation = useMutation(
    async (postId) => {
      toast.loading("Deleting post...", { id: "deletePost" });
      await axiosSecure.delete(`/posts/${postId}/${user?.id}`);
      return postId;
    },
    {
      onSuccess: (deletedPostId) => {
        queryClient.setQueryData("posts", (oldData) => {
          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              posts: page.posts.filter((p) => p.id !== deletedPostId),
            })),
          };
        });
        toast.success("Post deleted successfully", { id: "deletePost" });
      },
      onError: (error) => {
        console.error("Error deleting post:", error);
        toast.error("Failed to delete post. Please try again.");
      },
    }
  );

  const handleLikeClick = async (postId) => {
    await toggleLikeMutation.mutate(postId);
  };

  const handleDeletePost = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePostMutation.mutate(postId);
    }
  };

  const handleShare = async (post, id) => {
    const postUrl = `${window.location.origin}/posts/${id}`;
    const shareData = {
      title: `${post.author.full_name}'s post on Britto`,
      text:
        post.content.length > 100
          ? post.content.substring(0, 97) + "..."
          : post.content,
      url: postUrl,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast.success("Post shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
        fallbackShare(postUrl);
      }
    } else {
      fallbackShare(postUrl);
    }
  };

  const fallbackShare = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy link. Please try again.");
      });
  };

  const handleReportSubmit = async (reportData) => {
    // This function can be used to perform any additional actions after report submission
    // For now, we'll just close the modal as the ReportModal component handles the API call
    setIsReportModalOpen(false);
  };
   

  return (
    <div
      className={`${post.type === "ai" ? "" : ""} bg-card mb-4 max-w-2xl mx-auto rounded-xl dark:bg-[#141414] py-6 border shadow-xl`}
    >
      <div className="flex flex-row justify-between items-start px-5">
        <div className="flex items-center space-x-2">
          {(post.author.id === user?.id) ? <UserAvatar image={post.author.image} name={post.author.name} /> : <HiveUserAvatar user={post.author} currentUserId={user.id}/>}
          <div>
            <h3 className="font-semibold flex items-center gap-1">{post.author.name} {post.author.role ==="admin" && <HiCheckBadge className="text-green-500" size={20}/>}</h3>
            <p className="text-xs flex items-center gap-3 text-gray-500">
              {formatTimeAgo(post.createdAt)}
              {post.type === "ai" && (
                <div className="flex gap-3 items-center">
                  <span>•</span>
                  <div className="flex justify-between items-center">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full "></div>
                      <div className="relative px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-white bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold text-xs flex gap-1 items-center">
                        <Sparkles size={13} /> AI Generated
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </p>
          </div>
        </div>
        {post.author.id === user?.id ? (
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
        ):   (<DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setIsReportModalOpen(true)}>
            <Flag className="mr-2 h-4 w-4" />
            <span>Report</span>
            {/* TODO */}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )}
      </div>
      <div className="p-0 mt-2">
        <div className="px-6 font-kalpurush">
          <CustomRenderer content={post.content} />
        </div>
        <ImageDisplay images={post.images} />
      </div>
      <Separator className="mt-3" />
      <div className="flex justify-between mt-2 px-5">
        <div className="flex items-center gap-5">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleLikeClick(post.id)}
            disabled={toggleLikeMutation.isLoading}
            className={`${
              post.isLiked
                ? "text-white bg-green-500 font-bold hover:text-white"
                : "hover:text-black dark:hover:text-white"
            } border rounded-full hover:bg-green-500`}
          >
            <PiHandsClappingFill className="mr-2 h-4 w-4" />{" "}
            {post.likeCount || ""}
          </Button>
          <Button
            className="border rounded-full"
            variant="ghost"
            size="sm"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare className="mr-2 h-4 w-4" /> {post.commentCount || ""}{" "}
            Comments
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
        <Button
          onClick={() => handleShare(post, post.id)}
          className="border rounded-full flex justify-center"
          variant="ghost"
          size="sm"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      {showComments && (
        <CommentSection
          postId={post.id}
          user={user}
          axiosSecure={axiosSecure}
        />
      )}


<ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmit={handleReportSubmit}
        itemType="post"
        itemId={post.id}
        userId={user?.id}
      />
    </div>
  );
};

export default PostCard;
