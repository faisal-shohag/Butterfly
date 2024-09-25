"use client"
const Heading = ({title, icon}) => {
    return (
        <div className="flex text-slate-600 my-3 items-center gap-2 text-xl font-semibold">
            {icon} <div className="">{title}</div>
        </div>
    );
};

export default Heading;