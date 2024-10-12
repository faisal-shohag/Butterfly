import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import UserAvatar from "@/components/common/UserAvatar";
import { Separator } from "@/components/ui/separator";
import { SendHorizonal } from "lucide-react";
import CommentCard from "./CommentCard";

const CommentSection = ({ postId, user, axiosSecure }) => {
  const [newComment, setNewComment] = useState("");
  const [page, setPage] = useState(1);
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

  const loadMoreComments = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const loadPreviousComments = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (isLoading)
    return (
      <div className="mt-2">
        <Separator />
        <div className="px-10 mt-2 font-semibold">Loading comments...</div>
      </div>
    );
  if (error) return <div>Error loading comments: {error.message}</div>;

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
            <CommentCard
              key={comment.id}
              comment={comment}
              user={user}
              postId={postId}
              axiosSecure={axiosSecure}
              onDeleteComment={handleDeleteComment}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">You are at the end!</div>
      )}

      <div className="flex justify-between text-sm">
        {data?.currentPage > 1 && (
          <div
            onClick={loadPreviousComments}
            className="mt-2 underline font-semibold cursor-pointer"
          >
            Load New Comments
          </div>
        )}

        {data?.currentPage < data?.totalPages && (
          <div
            onClick={loadMoreComments}
            className="mt-2 underline font-semibold cursor-pointer"
          >
            Load Old Comments
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;