import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import NextTopLoader from "nextjs-toploader";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import BottomNavBar from "@/components/common/BottomNavBar";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});


export const metadata = {
  title: "Butterfly | Let your book fly!",
  description: "A book exchange app. Share your books with other.",
};



export default async function RootLayout({ children }) {
  return (
    <html lang="en">
        <SessionProvider>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-100 dark:bg-zinc-950`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NextTopLoader color="#F83859" />
          <ReactQueryProvider>
            <Toaster />
            <Navbar />
            <div className="section">{children}</div>
            <div className="lg:hidden md:block block">
              <BottomNavBar />
            </div>
            <Footer />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
      </SessionProvider>
    </html>
  );
}
