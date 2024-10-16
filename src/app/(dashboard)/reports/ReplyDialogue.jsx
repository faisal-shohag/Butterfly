"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ReplyDialogue = ({createReplyMutation, id, userId, report}) => {
  const [text, setText] = useState("")
  
  const handleReply = ()=>{

    const replyData = {
      text,
      userId,
      report
    }

    if (!text.trim()) {
      alert("Reply cannot be empty");
      return;
    }
    createReplyMutation.mutate({ replyData, id });
    console.log(replyData)
    setText("")
  }
    return (
        <Dialog>
      <DialogTrigger asChild>
        <Button >Reply</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reply the Report</DialogTitle>
          <DialogDescription>
             Click sent when you're done.
          </DialogDescription>
        </DialogHeader>
       
         
          <div className="">
            {/* <Input id=""  className="" /> */}
            <Textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="Write your reply..."/>
          </div>
       
        <DialogFooter>
          <Button onClick={handleReply}  type="submit">Sent Reply</Button>
        </DialogFooter>
       
      </DialogContent>
    </Dialog>
    );
};

export default ReplyDialogue;