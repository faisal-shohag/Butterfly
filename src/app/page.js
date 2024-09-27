import Banner from "../components/home/Banner";
import BookShowWithCategory from "@/components/Books/BookShowWithCategory";
import FeaturedCommunityMembers from "@/components/home/FeaturedCommunityMembers";
import ButterflyAdvertisement from "@/components/home/ButterflyAdvertisement";
import TopExchanger from "@/components/home/TopExchanger";
export default function Home() {
  return (
    <>
      <div className="">
      <Banner/>
      <TopExchanger/>
      <FeaturedCommunityMembers/>
      {/* <BookShowWithCategory/> */}
      <ButterflyAdvertisement/>
      </div>
    </>
  );
}
