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

import toast from "react-hot-toast"; 


const ReportsTable = ({reports, session}) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  

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

 

  return (
    <div className="my-6">
      <Table>
       
        <TableHeader>
          <TableRow>

         
            <TableHead >Report ID</TableHead>
            <TableHead>Reported By</TableHead>
            <TableHead>Reported To</TableHead>
            <TableHead >Reporting Time</TableHead>
            <TableHead>Reported Message</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports?.reports.map((report) => (
            <TableRow key={report.id}>
             
              <TableCell className="text-center">{report.id}</TableCell>
    
              <TableCell>{report.user.name}</TableCell>
              <TableCell ><ReportDialogue text={report.post.content} /></TableCell>
              <TableCell>{new Date(report.createdAt).toUTCString()}</TableCell>
              <TableCell>
                <ReportDialogue text={report.text} />
              </TableCell>
              <TableCell>
             
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