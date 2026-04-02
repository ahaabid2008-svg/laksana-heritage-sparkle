import Navbar from "@/components/Navbar";
import InclusionsSection from "@/components/InclusionsSection";
import Footer from "@/components/Footer";

const Inclusions = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <InclusionsSection />
      </div>
      <Footer />
    </main>
  );
};

export default Inclusions;
