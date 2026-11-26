import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import HeritageSection from "@/components/HeritageSection";
import SignatureSection from "@/components/SignatureSection";
import AmaanSection from "@/components/AmaanSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <JourneySection />
      <HeritageSection />
      <SignatureSection />
      <AmaanSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
