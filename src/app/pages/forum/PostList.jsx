"use client"

import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, Share2, MoreVertical, Trash2, Sparkles, RefreshCw, Archive } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import formatTimeAgo from "./TimeAgo";
import ImageDisplay from "./ImageDisplay";
import { toast } from "react-hot-toast";
import { Separator } from "@/components/ui/separator";
import CustomRenderer from "@/components/common/CustomRenderer";
import { PiHandsClappingFill } from "react-icons/pi";
import { useState } from "react";
// import CommentListOnPosts from "./CommentListOnPosts";
import Loading from "@/components/common/Loading";
import PostLoading from "./PostLoading";
import { useAuth } from "@/providers/authProvider";

const PostList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const LIMIT = 3;
  const { user } = useAuth();

  const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await axiosSecure.get(
      `/allposts/${user.id}?page=${pageParam}&limit=${LIMIT}`
    );
    return response.data;
  };

  const { data, fetchNextPage, hasNextPage, isLoading, isError, error, refetch } =
    useInfiniteQuery("posts", fetchPosts, {
      getNextPageParam: (lastPage) => {
        if (lastPage.currentPage < lastPage.totalPages) {
          return lastPage.currentPage + 1;
        }
        return undefined;
      },
    });

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
              posts: page.posts.map((post) =>
                post.id === postId
                  ? { ...post, likeCount: data.likeCount, isLiked: data.liked }
                  : post
              ),
            })),
          };
        });
      },
    }
  );

  // const toggleCommentLikeMutation = useMutation(
  //   async ({ postId, commentId }) => {
  //     const response = await axiosSecure.post(`/comments/${commentId}/toggle-like`, { userId: user?.id });
  //     return { ...response.data, postId, commentId };
  //   },
  //   {
  //     onSuccess: (data) => {
  //       queryClient.setQueryData("posts", (oldData) => {
  //         return {
  //           ...oldData,
  //           pages: oldData.pages.map((page) => ({
  //             ...page,
  //             posts: page.posts.map((post) =>
  //               post.id === data.postId
  //                 ? {
  //                     ...post,
  //                     mostLikedComment: post.mostLikedComment && post.mostLikedComment.id === data.commentId
  //                       ? {
  //                           ...post.mostLikedComment,
  //                           likeCount: data.likeCount,
  //                           isLiked: data.liked,
  //                         }
  //                       : post.mostLikedComment,
  //                   }
  //                 : post
  //             ),
  //           })),
  //         };
  //       });
  //     },
  //   }
  // );

  // const handleCommentLikeClick = async (postId, commentId) => {
  //   await toggleCommentLikeMutation.mutate({ postId, commentId });
  // };



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
              posts: page.posts.filter((post) => post.id !== deletedPostId),
            })),
          };
        });
        toast.success("Post deleted successfully", {id: "deletePost"});
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

  if (isLoading || isRefreshing) return <PostLoading />;
  if (isError) return <div>Error: {error.message}</div>;

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  // console.log(posts);

  //share
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
  // console.log(posts);

  const handleRefresh = () => {
    setIsRefreshing(true);
    refetch().then(() => {
      setIsRefreshing(false);
      // toast.success("Posts refreshed!");
    }).catch((error) => {
      setIsRefreshing(false);
      // toast.error("Failed to refresh posts. Please try again.");
      console.error("Refresh error:", error);
    });
  };



  

  return (
    <div className=" ">
    <div className="flex justify-end lg:px-[280px] mb-2 px-2 gap-3">
    <Button
          onClick={handleRefresh}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 mt-2"
        >
          <Archive className="h-4 w-4" />
          Saved Posts
        </Button>
        <Button
          onClick={handleRefresh}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 mt-2"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Loading/>}
      endMessage={<div className="text-center font-bold text-slate-500">No more Post</div>}
    >
      {posts.map((post) => (
        <Card
          key={post.id}
          className={`${
            post.type === "ai" ? "" : ""
          } mb-4 font-kalpurush max-w-3xl mx-auto dark:bg-[#141414]`}
        >
          <CardHeader className="flex flex-row justify-between items-start">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src={post.author.avatar_url}
                  alt={post.author.full_name}
                />
                <AvatarFallback>
                  {post.author.full_name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{post.author.full_name}</h3>
                <p className="text-xs flex items-center gap-3 text-gray-500">
                  {formatTimeAgo(post.createdAt)}
                  {post.type === "ai" ? (
                  <div className="flex gap-3 items-center">
                      <span>•</span>
                      <div className="flex justify-between items-center">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full "></div>
                          <div className="relative px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-white bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold text-xs flex gap-1 items-center">
                          <Sparkles size={13}/>  AI Generated
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
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
          <CardContent className="p-0">
            <div className="px-6 text-sm">
              <CustomRenderer content={post.content} />
            </div>
         
              <ImageDisplay images={post.images} />
            
          </CardContent>
          <Separator className="mt-3" />
            
        
             <CardFooter className="flex justify-between mt-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleLikeClick(post.id)}
              disabled={toggleLikeMutation.isLoading}
              className={`${
                post.isLiked
                  ? "text-green-500 font-bold hover:text-green-500"
                  : "hover:text-black dark:hover:text-white"
              } border rounded-full  hover:bg-transparent `}
            >
              <PiHandsClappingFill className="mr-2 h-4 w-4" />{" "}
              {post.likeCount || ""}
            </Button>
          
              <Button className="border rounded-full" variant="ghost" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />{" "}
                {post.commentCount || ""} Comments
              </Button>
        
            <Button
              onClick={() => handleShare(post, post.id)}
              className="border rounded-full"
              variant="ghost"
              size="sm"
            >
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </CardFooter>
          {/* <Separator className="-mt-4" /> */}
          {/* <Separator className="-mt-4" />
          <CommentListOnPosts postId={post.id}/> */}
        </Card>
      ))}
    </InfiniteScroll>
    </div>
  );
};

export default PostList;