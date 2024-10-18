import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const ReportModal = ({ isOpen, onClose, onSubmit, itemType, itemId, userId }) => {
  const [reportText, setReportText] = useState("");
  const axiosSecure = useAxiosSecure();

  const reportMutation = useMutation(
    async ({ itemId, itemType, text }) => {
      const response = await axiosSecure.post("/reports", {
        itemId,
        itemType,
        text,
        userId
      });
      return response.data;
    },
    {
      onSuccess: () => {
        toast.success("Report submitted successfully");
        onClose();
        setReportText("");
      },
      onError: (error) => {
        console.error("Error submitting report:", error);
        toast.error("Failed to submit report. Please try again.");
      },
    }
  );

  const handleSubmit = async () => {
    if (!reportText.trim()) {
      toast.error("Please enter a reason for reporting.");
      return;
    }
    await reportMutation.mutate({ itemId, itemType, text: reportText });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report {itemType}</DialogTitle>
          <DialogDescription>
            Please provide a reason for reporting this {itemType}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="items-center gap-4">
            <Label htmlFor="report-reason" className="text-right">
              Reason
            </Label>
            <Textarea
              id="report-reason"
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogTrigger asChild>
          <Button onClick={handleSubmit} disabled={reportMutation.isLoading}>
            Submit Report
          </Button>
        </DialogTrigger>
      </DialogContent>
    </Dialog>
  );
};

export default ReportModal;