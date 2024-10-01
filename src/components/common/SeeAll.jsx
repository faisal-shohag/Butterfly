import Link from "next/link";

const SeeAll = ({link}) => {
    return (
        <Link href={link}>
            <div className="text-sm font-semibold text-slate-500 underline mx-3">See All</div>
        </Link>
    );
};

export default SeeAll;