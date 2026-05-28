import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SpecialOffers from "@/components/SpecialOffers";
import DeseryNaCieplo from "@/components/DeseryNaCieplo";
import Menu from "@/components/Menu";
import TortySection from "@/components/TortySection";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SpecialOffers />
        <DeseryNaCieplo />
        <Menu />
        <TortySection />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
