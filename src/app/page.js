import Navbar from "./components/common/Navbar";

import Banner from "./components/home/Banner";
import Link from "next/link";
import Footer from "./pages/footer/Footer";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Navbar/>
      <Banner/>
     
      
      <div className="border p-6 flex items-center gap-5">
        <Link href="/pages/login">Login</Link>
        <Link href="/pages/registration">Registration</Link>
      </div>
      <Footer></Footer>
    </div>
  );
}
