import Navbar from "@/components/Navbar";
import GemsSection from "@/components/GemsSection";
import JewellerySection from "@/components/JewellerySection";
import Footer from "@/components/Footer";

const Collection = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <GemsSection />
        <JewellerySection />
      </div>
      <Footer />
    </main>
  );
};

export default Collection;
