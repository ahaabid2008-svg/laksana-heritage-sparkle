import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";

import InclusionsSection from "@/components/InclusionsSection";
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
      
      <JewellerySection />
      <InclusionsSection />
      <VideosSection />
      <GemologistSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
