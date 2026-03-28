import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import GemsSection from "@/components/GemsSection";
import JewellerySection from "@/components/JewellerySection";
import VideosSection from "@/components/VideosSection";
import GemologistSection from "@/components/GemologistSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HeritageSection />
      <GemsSection />
      <JewellerySection />
      <GemologistSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
