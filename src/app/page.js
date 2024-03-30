"use client";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import ScrollAnimation from "../components/ScrollAnimation";
import Features from "../components/features/Features";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen flex-col items-center justify-between sm:px-6 lg:px-24 pt-24">
        <Hero />
        <ScrollAnimation
          titleComponent={
            <>
              <h1 className="text-2xl md:text-4xl font-RobotoMono text-white">
                Discover a new way to chat.
                Decentralized and Preserved Permaweb
                <br />
                <span className="text-4xl md:text-[6rem] mt-1 leading-none text-[#95A4FC] font-bold">
                  WeaveChat
                </span>
              </h1>
            </>
          }
        />
        <Features />
      </div>
      <Footer />
    </>
  );
}
