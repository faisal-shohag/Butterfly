import Link from "next/link";
import SitemapList from "./SitemapList";


const SitemapRoutes = () => {
    return (
        <div className="w-full">
            <SitemapList>
           <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">TVs</Link>
                        <Link href="#">Accessories</Link>
           </SitemapList>
        </div>
    );
};

export default SitemapRoutes;