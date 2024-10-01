
import Link from "next/link";
import { GiButterflyFlower } from "react-icons/gi";

const NothingHere = ({title, link, buttonText}) => {
    return (
        <div className="flex gap-3 my-5 flex-col justify-center items-center ">
           <div>
           <GiButterflyFlower size={50}/>
           </div>
           <div className="text-xl text-slate-500">{title}</div>
           <Link href={link}><div className=" px-3 py-1 bg-white dark:bg-zinc-800 rounded-xl g-card">{buttonText}</div></Link>
        </div>
    );
};

export default NothingHere;