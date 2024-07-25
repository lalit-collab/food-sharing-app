'use client'
import Foodlist from "@/Components/Foodlist";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Foodlist />
      <Footer />
    </>
  );
}
