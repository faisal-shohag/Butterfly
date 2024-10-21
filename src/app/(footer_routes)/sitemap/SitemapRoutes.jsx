import Link from "next/link";
import SitemapList from "./SitemapList";


const SitemapRoutes = () => {
    return (
        <div className="w-full px-40 my-16">
            <SitemapList>
           <h3 className="text-[20px] italic font-bold mb-2 text-[#0A2B34] ">Get to know us</h3>
           <hr className="h-[2px] w-1/2 bg-[#0A2B34] "></hr>

                <ul className="mt-6 list-disc pl-6">
                    <li>
                        <Link href={"/contact"}>Contact us</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About us</Link>
                    </li>
                    </ul>        
                        
           </SitemapList>
        </div>
    );
};

export default SitemapRoutes;