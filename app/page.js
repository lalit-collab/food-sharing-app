'use client'
import Foodlist from "@/Components/Foodlist";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <>
    <ToastContainer />
      <Navbar />
      <Hero />
      
      <Foodlist />
      <Footer />
    </>
  );
}
