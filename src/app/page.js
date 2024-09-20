import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Banner from "../components/home/Banner";
import BookShowWithCategory from "@/components/Books/BookShowWithCategory";
import FeaturedCommunityMembers from "@/components/home/FeaturedCommunityMembers";
import ButterflyAdvertisement from "@/components/home/ButterflyAdvertisement";
export default function Home() {
  return (
    <>
      <div className="section">
      <Banner/>
      <FeaturedCommunityMembers/>
      <BookShowWithCategory/>
      <ButterflyAdvertisement/>
      </div>
    </>
  );
}
