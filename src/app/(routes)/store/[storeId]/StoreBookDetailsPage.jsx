"use client"
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, BookCheck, LanguagesIcon, SquarePen, Star, StarHalf } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import CustomRenderer from "@/components/common/CustomRenderer";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserAvatar from "@/components/common/UserAvatar";
import BuyWithCoinButton from "../BuyWithCoinButton";
import { useCoins } from "@/hooks/useCoins";
import toast from "react-hot-toast";
import CoinModal from "@/components/common/CoinModal";

const StoreBookDetailsPage = ({ bookId, userId }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const {addCoin} = useCoins(userId)


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const {
    data: storeBook,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["storeBook", bookId],
    queryFn: async () => {
      const response = await axiosSecure.get(`/store_books-with-reviews/${bookId}`);
      return response.data.storeBook;
    },
  });

  const addReviewMutation = useMutation({
    mutationFn: async (reviewData) => {
      const response = await axiosSecure.post('/store_books/reviews', reviewData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["storeBook", bookId]);
      setReviewText("");
      setRating("");
      toast.success("Review added successfully!")
      setIsModalOpen(true)
      addCoin({
        type: 'silver',
        reason: 'For adding review',
        value: 20,
        userId: user.id,
      })
    },
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewText || !rating) return;

    addReviewMutation.mutate({
      bookId,
      userId,
      rating: parseFloat(rating),
      review: reviewText,
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    return stars;
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-3xl mx-auto mt-8">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-full mt-4" />
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          There was an error loading the book details. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  const averageRating = storeBook.reviews.length
    ? (storeBook.reviews.reduce((acc, review) => acc + review.rating, 0) / storeBook.reviews.length).toFixed(1)
    : 0;

    

  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-5 lg:gap-2 gap-5 font-kalpurush mx-auto mt-8 custom-glass-2 p-5 rounded-xl">
      <CoinModal isOpen={isModalOpen}
        onClose={closeModal}/>
        <div className="col-span-1">
          <Image height={280} width={220} alt="book" src={storeBook.cover} />
        </div>
        <div className="col-span-3 lg:grid-cols-4">
          <div className="font-semibold text-2xl">{storeBook.title}</div>
          <div className="flex items-center gap-1 mt-1">
            <SquarePen size={17}/> Writer: {storeBook.author}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <BookCheck size={17}/> Published: {new Date(storeBook.publishedDate).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <LanguagesIcon size={17}/> Language: {storeBook.language}
          </div>
          <div className="mt-2 flex flex-col w-[180px] gap-1 ">
            {storeBook.discount > 0 ? (
              <Button
                variant="outline"
                className="font-semibold text-muted-foreground text-sm flex gap-1 w-full"
              >
                Buy
                <strike>{storeBook.price} tk</strike>
                <span className="text-red-500">
                  {(storeBook.price - (storeBook.price * (storeBook.discount / 100))).toFixed(2)} tk
                </span>
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full font-semibold text-red-500 text-sm"
              >
                Buy {storeBook.price} tk
              </Button>
            )}
            <BuyWithCoinButton book={storeBook} />
          </div>
          <div className="mt-5">
            <CustomRenderer content={storeBook.description} />
          </div>
        </div>
      </div>

      <div className="font-kalpurush mx-auto mt-5 custom-glass-2 p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">Reviews{storeBook.reviews.length > 0 && <span>({storeBook.reviews.length})</span>}</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {renderStars(parseFloat(averageRating))}
            </div>
            <span className="text-lg">({averageRating})</span>
          </div>
        </div>

        <form onSubmit={handleSubmitReview} className="mt-4 space-y-4">
          <div className="flex flex-col gap-2">
            <Select value={rating} onValueChange={setRating}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((value) => (
                  <SelectItem key={value} value={value.toString()}>
                    {value} {value === 1 ? 'Star' : 'Stars'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="min-h-[100px]"
            />
            <Button 
              type="submit" 
              disabled={!rating || !reviewText || addReviewMutation.isLoading}
              className="w-full md:w-auto"
            >
              {addReviewMutation.isLoading ? 'Submitting...' : 'Submit Review'}
            </Button>
          </div>
        </form>

        <div className="mt-6 space-y-4">
          {storeBook.reviews.map((review) => (
            <Card key={review.id} className="bg-background/50">
              <CardContent className="pt-4">
              <div className="flex gap-2">
                <UserAvatar image={review.user.image} name={review.user.name}/>
              <div>
                <div className="font-semibold text-sl">{review.user.name}</div>
              <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              </div>
                <p className="text-sm">{review.review}</p>
              </CardContent>
            </Card>
          ))}
          {storeBook.reviews.length === 0 && (
            <p className="text-center text-muted-foreground">No reviews yet. Be the first to review!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreBookDetailsPage;