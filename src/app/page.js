import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Banner from "./components/home/Banner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <Navbar/>
      <Banner/>
     <Footer/>
      
      <div className="border p-6 flex items-center gap-5">
        <Link href="/pages/login">Login</Link>
        <Link href="/pages/registration">Registration</Link>
      </div>
    </div>
  );
}
