import Header from "./components/Header";
import Hero from "./components/Hero";
import ClubNetworkBlock from "./components/ClubNetworkBlock";
import Advisory from "./components/Advisory";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-clip bg-page">
      <Header />
      <Hero />
      <ClubNetworkBlock />
      <Advisory />
      <Contact />
      <Footer />
    </main>
  );
}
