import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GemsSection from "@/components/GemsSection";
import JewellerySection from "@/components/JewellerySection";

const Collection = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    let attempts = 0;

    const scrollToSection = () => {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        const navbarOffset = 95;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - navbarOffset,
          behavior: "smooth",
        });

        return;
      }

      attempts += 1;

      if (attempts < 20) {
        window.setTimeout(scrollToSection, 150);
      }
    };

    window.setTimeout(scrollToSection, 250);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        <GemsSection />
        <JewellerySection />
      </main>

      <Footer />
    </>
  );
};

export default Collection;