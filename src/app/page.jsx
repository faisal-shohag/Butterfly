import Banner from "../components/home/Banner";
import PopularPosts from "@/components/home/PopularPosts";
import MostCoinedUser from "@/components/home/MostCoinedUser";
import HiveHunters from "@/components/home/HiveHunters";
import LatestExchangePosts from "@/components/home/LatestExchangePosts";
import LatestStoreBooks from "@/components/home/LatestStoreBooks";
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
      <div className="section">
      <Banner bannerContent={bannerContent} className="h-[400px]"/>
      <LatestStoreBooks/>
      <MostCoinedUser/>
      <LatestExchangePosts/>
      <HiveHunters/>
      <PopularPosts/>
    
     
      </div>
    </>
  );
}
