import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Picky",
  description: "Best of K-Beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen`}>
        <Navbar/>
        <Categories/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
