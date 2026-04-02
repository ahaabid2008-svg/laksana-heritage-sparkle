import Navbar from "@/components/Navbar";
import CollectionNav from "@/components/CollectionNav";
import GemsSection from "@/components/GemsSection";
import JewellerySection from "@/components/JewellerySection";
import Footer from "@/components/Footer";

const Collection = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <CollectionNav />
        <GemsSection />
        <div className="bg-charcoal py-10 px-6">
          <div className="max-w-3xl mx-auto border border-cream/20 rounded-sm p-6 text-center">
            <p className="font-accent text-sm md:text-base text-cream/70 leading-relaxed tracking-wide">
              Kindly contact us directly for any specific size or color requirements for any gemstones.
            </p>
          </div>
        </div>
        <JewellerySection />
      </div>
      <Footer />
    </main>
  );
};

export default Collection;
