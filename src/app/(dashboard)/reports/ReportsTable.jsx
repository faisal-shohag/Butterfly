"use client";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "react-query";
import ReplyDialogue from "./ReplyDialogue";
 
  
//   const invoices = [
//     {
//       invoice: "INV001",
//       paymentStatus: "Paid",
//       totalAmount: "$250.00",
//       paymentMethod: "Credit Card",
//     },
//     {
//       invoice: "INV002",
//       paymentStatus: "Pending",
//       totalAmount: "$150.00",
//       paymentMethod: "PayPal",
//     },
//     {
//       invoice: "INV003",
//       paymentStatus: "Unpaid",
//       totalAmount: "$350.00",
//       paymentMethod: "Bank Transfer",
//     },
//     {
//       invoice: "INV004",
//       paymentStatus: "Paid",
//       totalAmount: "$450.00",
//       paymentMethod: "Credit Card",
//     },
//     {
//       invoice: "INV005",
//       paymentStatus: "Paid",
//       totalAmount: "$550.00",
//       paymentMethod: "PayPal",
//     },
//     {
//       invoice: "INV006",
//       paymentStatus: "Pending",
//       totalAmount: "$200.00",
//       paymentMethod: "Bank Transfer",
//     },
//     {
//       invoice: "INV007",
//       paymentStatus: "Unpaid",
//       totalAmount: "$300.00",
//       paymentMethod: "Credit Card",
//     },
//   ]
   

 
const ReportsTable = () => {

    const axiosSecure = useAxiosSecure()
    const {
        data: reports,
        isLoading,
        error,
      } = useQuery("reports", async () => {
        const response = await axiosSecure.get("/reports");
        return response.data;
      });
    
      console.log(reports)

      if(isLoading){
        return <div>Loading...</div>
      }
    return (
        <div className="my-6">
           <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Report ID</TableHead>
          <TableHead>Report At</TableHead>
          <TableHead>Report Message</TableHead>
          <TableHead >Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports?.reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium ">{report.id}</TableCell>
            <TableCell>{new Date(report.createdAt).toLocaleDateString()}</TableCell>
            <TableCell>{report.text}</TableCell>
            <TableCell>
                <ReplyDialogue/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        
      </TableFooter>
    </Table> 
        </div>
    );
};

export default ReportsTable;