"use client"
import Image from "next/image";
import sitemapImage from "../../../../public/sitemapBg.jpg"
const SiteMapBanner = () => {
    return (
        <div className="relative h-[250px] ">
      <Image
        src={sitemapImage}
        alt="Sitemap Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-90"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl">Butterfly Sitemap</h1>
      </div>
    </div>
    );
};

export default SiteMapBanner;