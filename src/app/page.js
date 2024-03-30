"use client";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen flex-col items-center justify-between px-24 pt-24">
        <Hero />
        <ScrollAnimation
          titleComponent={
            <>
              <h1 className="text-2xl md:text-4xl font-RobotoMono text-white">
                Address Consumer Issues With
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-[#95A4FC] font-bold">
                  WeaveChat
                </span>
              </h1>
            </>
          }
        />
      </div>
      <Footer />
    </>
  );
}
