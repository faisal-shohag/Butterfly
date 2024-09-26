import Banner from "../components/home/Banner";
import BookShowWithCategory from "@/components/Books/BookShowWithCategory";
import FeaturedCommunityMembers from "@/components/home/FeaturedCommunityMembers";
import ButterflyAdvertisement from "@/components/home/ButterflyAdvertisement";
import TopExchanger from "@/components/home/TopExchanger";
import Users from "@/components/home/Users/Users";
import Books from "@/components/home/Books/Books";
export default function Home() {
  return (
    <>
      <div className="">
      {/* <Banner/> */}
      <TopExchanger/>
      {/* User Data  */}
      <Users></Users>
      {/* All Book */}
      <Books></Books>
      
      <FeaturedCommunityMembers/>
      {/* <BookShowWithCategory/> */}
      <ButterflyAdvertisement/>
      </div>
    </>
  );
}
