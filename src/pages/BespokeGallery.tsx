import { useState } from "react";
import { motion, type Variants } from "framer-motion";
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

const luxeEase = [0.22, 1, 0.36, 1] as const;

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: luxeEase,
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: luxeEase,
    },
  },
};

const BespokeGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
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
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {bespokeItems.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                variants={cardVariant}
                className="group bg-white border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item.src)}
                  className="block w-full text-left"
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={item.src}
                      alt={item.name}
                      className="w-full aspect-square object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <span className="pointer-events-none absolute inset-0 shimmer-gold" />
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
              </motion.div>
            ))}
          </motion.div>
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