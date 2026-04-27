import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: luxeEase,
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
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
            viewport={{ once: true, amount: 0.08 }}
          >
            <p className="font-accent text-sm tracking-[0.4em] uppercase text-gray-400 mb-4">
              Custom Creations
            </p>

            <h1 className="font-display text-4xl md:text-6xl text-gray-900 tracking-wide">
              Bespoke Gallery
            </h1>

            <motion.div
              className="divider-gold w-24 mx-auto mt-5 mb-8"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.85, ease: luxeEase }}
              style={{ transformOrigin: "center" }}
            />

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
            viewport={{ once: true, amount: 0.08 }}
          >
            {bespokeItems.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                variants={cardVariant}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="group luxury-card gem-glow-green bg-white border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item.src)}
                  className="block w-full text-left"
                >
                  <div className="luxury-image-wrap">
                    <img
                      src={item.src}
                      alt={item.name}
                      loading="lazy"
                      className="bespoke-float w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="luxe-light-sweep" />
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.45, ease: luxeEase }}
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default BespokeGallery;