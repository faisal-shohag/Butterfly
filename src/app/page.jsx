import Banner from "../components/home/Banner";
import ButterflyAdvertisement from "@/components/home/ButterflyAdvertisement";
import PopularPosts from "@/components/home/PopularPosts";
import MostCoinedUser from "@/components/home/MostCoinedUser";
import HiveHunters from "@/components/home/HiveHunters";
import LatestExchangePosts from "@/components/home/LatestExchangePosts";
export default function Home() {
  const bannerContent = [
    {
      image: "https://i.postimg.cc/5ySTXwmD/fd1ab28a4493ff7baf37b11a08b18159.jpg",
      title: "Discover New Worlds",
      description: "Exchange books and broaden your horizons"
    },
    {
      image: "https://i.postimg.cc/y8dtN33r/image.png",
      title: "Connect Through Stories",
      description: "Join our community of book lovers"
    },
    {
      image: "https://i.postimg.cc/vTh2YGYs/image.png",
      title: "Sustainable Reading",
      description: "Give books a new life through exchange"
    }
  ];

  return (
    <>
      <div className="">
      <Banner bannerContent={bannerContent} className="h-[400px]"/>
      <MostCoinedUser/>
      <LatestExchangePosts/>
      <HiveHunters/>
      <PopularPosts/>
    
     
      </div>
    </>
  );
}
