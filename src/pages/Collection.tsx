import Navbar from "@/components/Navbar";
import GemsSection from "@/components/GemsSection";
import JewellerySection from "@/components/JewellerySection";
import InclusionsSection from "@/components/InclusionsSection";
import Footer from "@/components/Footer";

const Collection = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <GemsSection />
        <JewellerySection />
        <InclusionsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Collection;
