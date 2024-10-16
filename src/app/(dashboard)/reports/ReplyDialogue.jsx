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

const ReplyDialogue = () => {
    return (
        <Dialog>
      <DialogTrigger asChild>
        <Button>Reply</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reply the Report</DialogTitle>
          <DialogDescription>
             Click sent when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="">
         
          <div className="">
            {/* <Input id=""  className="" /> */}
            <Textarea/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Sent Reply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    );
};

export default ReplyDialogue;