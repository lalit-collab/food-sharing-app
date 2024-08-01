'use client'
import About from "@/Components/About";
import Contact from "@/Components/Contact";
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
      <About />
      <Foodlist />
      <Contact />
      <Footer />
    </>
  );
}
