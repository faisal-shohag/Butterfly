import Banner from "../components/home/Banner";
import ButterflyAdvertisement from "@/components/home/ButterflyAdvertisement";
import PopularPosts from "@/components/home/PopularPosts";
import MostCoinedUser from "@/components/home/MostCoinedUser";
import HiveHunters from "@/components/home/HiveHunters";
import LatestExchangePosts from "@/components/home/LatestExchangePosts";
export default function Home() {
  return (
    <>
      <div className="section">
        <Banner />
        <MostCoinedUser />
        <LatestExchangePosts />
        <HiveHunters />
        <PopularPosts />
      </div>
    </>
  );
}
