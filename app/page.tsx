import Header from "./components/Header";
import Hero from "./components/Hero";
import LightRay from "./components/LightRay";
import TwoSides from "./components/TwoSides";
import Network from "./components/Network";
import Advisory from "./components/Advisory";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-page">
      <LightRay />
      <Header />
      <Hero />
      <TwoSides />

      <Network />
      <Advisory />
      <Contact />
      <Footer />
    </main>
  );
}
