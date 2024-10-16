"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ReplyDialogue from "./ReplyDialogue";
import ReportDialogue from "./ReportDialogue";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast"; // Assuming you are using react-hot-toast

const ReportsTable = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const {  data:session } = useSession(); // Extract session from useSession()
 console.log(session)
  const { data: reports, isLoading, error } = useQuery("reports", async () => {
    const response = await axiosSecure.get("/reports");
    return response.data;
  });

  // Mutation for replying to reports
  const createReplyMutation = useMutation(
    async ({ replyData, id }) => {
      toast.loading("Adding comment...", { id: "createReply" });
      const response = await axiosSecure.post(`/reportReply/${id}`, replyData);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("reports");
        toast.success("Replied to the report successfully!", { id: "createReply" });
      },
      onError: (error) => {
        console.error("Error replying to the report:", error);
        toast.error("Failed to reply. Please try again.", { id: "createReply" });
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-6">
      <Table>
        <TableCaption>A list of recent reports.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Report ID</TableHead>
            <TableHead>Reported By</TableHead>
            <TableHead>Report At</TableHead>
            <TableHead>Report Message</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports?.reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">{report.id}</TableCell>
              <TableCell>{report.user.name}</TableCell>
              <TableCell>{new Date(report.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <ReportDialogue text={report.text} />
              </TableCell>
              <TableCell>
                {/* Pass createReplyMutation, report id, and userId */}
                <ReplyDialogue
                  id={report.id}
                  createReplyMutation={createReplyMutation}
                  userId={session?.user?.id}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReportsTable;
