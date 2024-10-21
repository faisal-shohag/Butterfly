"use client"

const SitemapList = ({children}) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3  mb-6 flex flex-col gap-2">
            {children}
        </div>
    );
};

export default SitemapList;