"use client";
import Lottie from "react-lottie-player";
import coinNormal from "@/lottie/coin-normal.json";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
        <div className="flex justify-center w-full items-center flex-col font-kalpurush">
        <div className="absolute top-20 text-3xl font-bold shimmer">Congratulations!!!</div>
        <div className="absolute bottom-20 text-3xl font-bold shimmer">You got Butterfly coin!</div>
          <div className="">
            <Lottie
              loop
              animationData={coinNormal}
              play
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CoinModal;
