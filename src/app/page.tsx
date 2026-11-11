import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SpecialOffers from "@/components/SpecialOffers";
import DeseryNaCieplo from "@/components/DeseryNaCieplo";
import HolidaySpecials from "@/components/HolidaySpecials";
import Menu from "@/components/Menu";
import TortySection from "@/components/TortySection";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main className="bg-[#FAF7F2]">
        <Hero />
        <SpecialOffers />
        <DeseryNaCieplo />
        <HolidaySpecials />
        <Menu />
        <TortySection />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
