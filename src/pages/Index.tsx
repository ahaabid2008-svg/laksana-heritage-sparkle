import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import AmaanSection from "@/components/AmaanSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BespokeGallery from "@/components/BespokeGallery";
const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HeritageSection />
      <AmaanSection />
      <BespokeGallery />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
