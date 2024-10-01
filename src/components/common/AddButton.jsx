"use client"
import { Plus } from "lucide-react";
import Link from "next/link";

const AddButton = ({link, title}) => {
    return (
        <div>
            <Link className="flex items-center gap-2 font-semibold text-sm mx-2 custom-glass-3  px-2 py-1 rounded-md text-slate-100 bg-green-500" href={link}><Plus size={19}/>{title}</Link>
        </div>
    );
};

export default AddButton;