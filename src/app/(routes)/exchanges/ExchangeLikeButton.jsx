"use client";
import { useMutation, useQueryClient } from "react-query";
import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useState } from "react";

const ExchangeLikeButton = ({ book, userId }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  // console.log(book)
  const toggleLike = async () => {
    setIsLoading(true);
    const response = await axiosSecure.post("/toggle-book-like", {
      userId,
      bookId: book.id,
    });
    setIsLoading(false);
    return response.data;
  };

  const mutation = useMutation(toggleLike, {
    onSuccess: () => {
      queryClient.invalidateQueries("all_books");
    },
  });

  const handleLikeClick = () => {
    mutation.mutate();
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2"
      onClick={handleLikeClick}
      disabled={mutation.isLoading}
    >
      {isLoading ? <div className="animate-spin"><Loader2/></div> : <Heart className="text-red-500" size={16} fill={book.isLiked ? "red" : "none"} />}
      {book.likeCount || 0}
    </Button>
  );
};

export default ExchangeLikeButton;
