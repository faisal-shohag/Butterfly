"use server";

import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Link from "next/link";
import { TbCoinBitcoinFilled } from "react-icons/tb";

const ExchangeBanner = () => {
  return (
    <div className="relative custom-glass-2 dark:bg-zinc-900 bg-white w-full h-[250px] overflow-hidden rounded-lg shadow-xl mb-8 flex justify-center items-center flex-col">
      <BackgroundLines className="-z-10 dark:bg-zinc-900 absolute" />

     <div className="px-10 text-center w-full">
     <TextGenerateEffect
        className="absolute top-5 lg:text-2xl md:text-xl text-md  shimmer"
        words={`Create book with Generative AI in less than 30 seconds.`}
      />
     </div>

      <div className="z-10 absolute lg:text-4xl text-2xl md:text-4xl font-extrabold font-kalpurush">
        <FlipWords words={["Exchange", "Share", "Request"]} />
        <span className="text-slate-500">Books to get coins.</span>
        <div className="text-center lg:text-xl md:text-xl text-sm font-semibold">
          Use them to buy book from store!
        </div>
      </div>

      <Link href={"/add"}>
        {" "}
        <div className="mt-36 g-card absolute -bottom-20 px-5 py-2 font-semibold ">
          Create Exchange
        </div>
      </Link>

      <div className="absolute right-0 bottom-0 w-20 h-20 z-10">
        <TbCoinBitcoinFilled className="shimmer" size={70} />
      </div>
      <div className="absolute -left-14 -top-2">
        <Image height={100} width={100} src="/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default ExchangeBanner;
