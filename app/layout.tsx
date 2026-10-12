import type { Metadata } from "next";
import {Inter, Syne } from "next/font/google";
import { Navbar } from "./../components/ui/navbar";
import Footer from "./Footer/Footer";
import "./globals.css";
import Bg from "@/components/ui/bg";

export const metadata: Metadata = {
  title: "Hanaa Ragab - Front-End Developer",
  description: "Portfolio of Hanaa Ragab, a frontend developer specializing in creating responsive and accessible web experiences.",
};

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="  bg-[#faf8f5] ">
        <Bg/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
