import { ThemeProvider } from "@/providers/theme-provider";
import {Poppins} from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
export const metadata = {
  title: "Butterfly | Let your book fly!",
  description: "A book exchange app. Share your books with other.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
        <div className="section">
        <Navbar/>
        {children}
        </div>
      <Footer/>
       
        </ThemeProvider>
      </body>
    </html>
  );
}
