import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Button } from "@/components/ui/button";
import { Plus, Loader2, Check } from "lucide-react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RequestButton = ({ book, userId }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [localIsRequested, setLocalIsRequested] = useState(book.isRequested);
  const [localRequestCount, setLocalRequestCount] = useState(book.requestCount || 0);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleRequest = async () => {
    setIsLoading(true);
    const response = await axiosSecure.post("/toggle-book-request", {
      userId,
      bookId: book.id,
      message,
      requestTo: book.user.id,
    });
    setIsLoading(false);
    return response.data;
  };

  const mutation = useMutation(toggleRequest, {
    onMutate: () => {
        setLocalIsRequested(!localIsRequested);
        setLocalRequestCount(localIsRequested ? localRequestCount - 1 : localRequestCount + 1);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["all_books"], (oldData) => {
        if (!oldData) return oldData;
        return oldData.map((b) => {
          if (b.id === book.id) {
            return {
              ...b,
              isRequested: data.requested,
              requestCount: data.requestCount,
            };
          }
          return b;
        });
      });
      setIsModalOpen(false);
      setMessage("");
    },
    onError: () => {
        setLocalIsRequested(!localIsRequested);
        setLocalRequestCount(localIsRequested ? localRequestCount + 1 : localRequestCount - 1);
    },
  });

  const handleRequestClick = () => {
    if (localIsRequested) {
      // If already requested, just toggle without opening modal
      mutation.mutate();
    } else {
      // If not requested, open the modal
      setIsModalOpen(true);
    }
  };

  const handleConfirmRequest = () => {
    mutation.mutate();
    setIsModalOpen(false);
  };



  return (
    <>
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={handleRequestClick}
        disabled={isLoading ||  book.user.id === userId || localIsRequested}
      >
        {isLoading ? (
          <Loader2 className="animate-spin" size={16} />
        ) : localIsRequested ? (
          <Check size={16} />
        ) : (
          <Plus size={16} />
        )}
        {localIsRequested ? "Requested" : "Request"} ({localRequestCount})
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Book Exchange</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Message
              </Label>
              <Input
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="col-span-3"
                placeholder="Enter your request message (optional)"
              />
            </div>
          </div>
          <Button dos onClick={handleConfirmRequest} disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="animate-spin mr-2" size={16} />
            ) : null}
            Confirm Request
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RequestButton;