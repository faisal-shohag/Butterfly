"use client"
import Image from "next/image";
import siteMap from "../../../../public/sitemapBg.jpg"
const SiteMap = () => {
    return (
        <div className="px-6">
           <div className="relative h-[250px] ">
      <Image
        src={siteMap}
        alt="Sitemap Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-90"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl">Butterfly Sitemap</h1>
      </div>
    </div>
        </div>
    );
};

export default SiteMap;