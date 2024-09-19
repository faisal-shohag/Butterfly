import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Banner from "../components/home/Banner";
import BookShowWithCategory from "@/components/Books/BookShowWithCategory";
export default function Home() {
  return (
    <>
      <div className="section">
     
      <Banner/>
      <BookShowWithCategory/>
      </div>
  
    </>
  );
}
