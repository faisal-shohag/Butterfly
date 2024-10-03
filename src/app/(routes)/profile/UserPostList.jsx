'use client';
import { useQuery } from "react-query";
import UserPostCard from "./UserPostCard";
import PostLoading from "../forum/PostLoading";
import useAxiosSecure from "@/hooks/useAxiosSecure";

export default function UserPostList({ user }) {
  const axiosSecure = useAxiosSecure();
  
  const { data, isLoading, isError, error } = useQuery("posts", async () => {
    const response = await axiosSecure.get("/posts");
    console.log(response.data);  // Check the response structure in the console
    return response.data;
  });

  // Adjust this based on the actual structure of `data`
  const posts = data?.posts?.slice(0, 4) || [];  // Example: if the posts are nested in `data.posts`

  const handleLikeClick = async (postId) => {
    try {
      const response = await axiosSecure.post(`/posts/${postId}/toggle-like`, {
        userId: user?.id,
      });
  
      const data = response.data;
  
      // Optimistically update the like count and like status
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
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };
  

  const handleDeletePost = async (postId) => {
    try {
      toast.loading("Deleting post...", { id: "deletePost" });
  
      // Delete the post
      await axiosSecure.delete(`/posts/${postId}/${user?.id}`);
  
      // Optimistically update the query data to remove the deleted post
      queryClient.setQueryData("posts", (oldData) => {
        return {
          ...oldData,
          pages: oldData.pages.map((page) => ({
            ...page,
            posts: page.posts.filter((post) => post.id !== postId),
          })),
        };
      });
  
      toast.success("Post deleted successfully", { id: "deletePost" });
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete post. Please try again.", { id: "deletePost" });
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
  
    // Check if the browser supports the Web Share API and can share the given data
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success("Post shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
        fallbackShare(postUrl); // Fallback in case of error
      }
    } else {
      // Fallback for browsers that do not support Web Share API
      fallbackShare(postUrl);
    }
  };
  
  // Fallback sharing method (e.g., copying the URL to the clipboard or opening in new tab)
  const fallbackShare = (postUrl) => {
    navigator.clipboard.writeText(postUrl).then(() => {
      toast.info("Post URL copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy URL:", err);
      window.open(postUrl, "_blank"); // Open the post in a new tab if clipboard API fails
    });
  };
  

  if (isLoading) return <PostLoading />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {posts.map((post) => (
        <UserPostCard
          key={post.id}
          post={post}
          user={user}
          handleLikeClick={handleLikeClick}
          handleDeletePost={handleDeletePost}
          handleShare={handleShare}
        />
      ))}
    </div>
  );
}
