"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const CoinModal = ({
  title = "Modal Title",
  description = "Modal Description",
  children,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog className="h-[400px]" open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex justify-center w-full items-center flex-col gap-10 font-kalpurush">
        <div className=" text-3xl font-bold">Congratulations!!!</div>
        
          <div className="shimmer">
            <Image height={200} width={200} src={"/bcoin.png"} alt="coin" />
          </div>
          <div className=" text-3xl font-bold">You got Butterfly coins!</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoinModal;
