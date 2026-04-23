import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TwoSides from "./components/TwoSides";
import Network from "./components/Network";
import Advisory from "./components/Advisory";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-page">
      <Header />
      <Hero />
      <TwoSides />
      <div
        className="pointer-events-none relative h-0 select-none"
        aria-hidden
      >
        {/*<Image*/}
        {/*  src="/figma/coin-float.svg"*/}
        {/*  alt=""*/}
        {/*  width={602}*/}
        {/*  height={494}*/}
        {/*  className="coin-float absolute right-[-4%] top-[-90px] w-[340px] opacity-80 sm:w-[460px] sm:top-[-110px] md:w-[560px] md:top-[-130px] lg:w-[620px] lg:top-[-150px]"*/}
        {/*/>*/}
      </div>
      <Network />
      <Advisory />
      <Contact />
      <Footer />
    </main>
  );
}
