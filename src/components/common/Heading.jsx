"use client"

import Link from "next/link";

const Heading = ({title, icon, link}) => {
    return (
        <div className="flex text-slate-600 my-3 justify-between items-center text-xl font-semibold">
          <div className="flex items-center gap-2">
             {icon} <div className="">{title}</div>
        </div>
       {link &&  <Link href={link}><div className="flex items-center gap-2 underline">
             See all
        </div></Link>}
        </div>
    );
};

export default Heading;