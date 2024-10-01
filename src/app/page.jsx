import Banner from "../components/home/Banner";
import FeaturedCommunityMembers from "@/components/home/FeaturedCommunityMembers";
import ButterflyAdvertisement from "@/components/home/ButterflyAdvertisement";
export default function Home() {
  return (
    <>
      <div className="">
      <Banner/>
      <FeaturedCommunityMembers/>
      {/* <BookShowWithCategory/> */}
      <ButterflyAdvertisement/>
      </div>
    </>
  );
}
