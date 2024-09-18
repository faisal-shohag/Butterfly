import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Banner from "./components/home/Banner";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <Navbar/>
      <Banner/>
     <Footer/>
      
    </div>
  );
}
