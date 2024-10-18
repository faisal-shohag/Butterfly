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


const ReportDialogue = ({text}) => {
    return (
        <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <p className="hover:underline cursor-pointer">{text.slice(0, 20)}...</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader> */}
       
          
          <div className="">
           
          

            <p className="text-sm">{text}</p>
          </div>
        
        
      </DialogContent>
    </Dialog>
    );
};

export default ReportDialogue;