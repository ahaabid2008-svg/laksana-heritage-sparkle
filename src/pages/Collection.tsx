import Navbar from "@/components/Navbar";
import CollectionNav from "@/components/CollectionNav";
import GemsSection from "@/components/GemsSection";
import JewellerySection from "@/components/JewellerySection";
import InclusionsSection from "@/components/InclusionsSection";
import Footer from "@/components/Footer";

const Collection = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <CollectionNav />
        <GemsSection />
        <JewellerySection />
        <InclusionsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Collection;
