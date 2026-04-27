import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bespokeYellowGoldTourmalineBangle from "@/assets/bespoke-yellow-gold-tourmaline-bangle.jpeg";

type BespokeItem = {
  src: string;
  name: string;
  desc: string;
};

const bespokeItems: BespokeItem[] = [
  {
    src: bespokeYellowGoldTourmalineBangle,
    name: "Yellow Gold bangle with Tourmalines",
    desc: "A bespoke yellow gold bangle featuring vivid tourmalines, designed as a refined one-of-a-kind statement piece.",
  },
];

const BespokeGallery = () => {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <h1 className="font-display text-4xl md:text-6xl text-gray-900 tracking-wide">
              Bespoke Gallery
            </h1>
            <div className="divider-gold w-24 mx-auto mt-5 mb-8" />
            <p className="font-accent text-lg md:text-2xl text-gray-700 leading-relaxed">
              A curated showcase of custom-made jewellery, created to celebrate
              individuality, craftsmanship, and exceptional gemstones.
            </p>
            <p className="mt-5 text-sm md:text-base text-gray-500 leading-relaxed">
              Each bespoke piece is thoughtfully designed to bring together
              personal style, fine materials, and timeless elegance. This gallery
              highlights unique commissions and special creations from Laksana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {bespokeItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className={`group bg-white border border-gray-100 shadow-sm overflow-hidden transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item.src)}
                  className="block w-full text-left"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </button>

                <div className="p-5 md:p-6 border-t border-gray-100">
                  <h2 className="font-display text-xl md:text-2xl text-gray-900 mb-2">
                    {item.name}
                  </h2>
                  <p className="font-accent text-sm md:text-base text-gray-600 tracking-wide leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-sm md:text-base tracking-wide"
            >
              Close
            </button>
            <img
              src={selectedImage}
              alt="Bespoke preview"
              className="w-full max-h-[85vh] object-contain bg-white"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default BespokeGallery;