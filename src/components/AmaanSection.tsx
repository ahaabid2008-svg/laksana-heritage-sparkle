import amaanMicroscope from "@/assets/amaan-microscope.jpeg";
import amaanGemstone from "@/assets/amaan-gemstone.jpeg";
import giaCertificate from "@/assets/gia-certificate.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow, ImageReveal, Reveal, RevealText, ScrollWords } from "@/components/motion/Reveal";

const AmaanSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rightY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const certRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: certP } = useScroll({ target: certRef, offset: ["start end", "center center"] });
  const certRotate = useTransform(certP, [0, 1], [-8, 0]);
  const certScale = useTransform(certP, [0, 1], [0.82, 1]);
  const certOpacity = useTransform(certP, [0, 0.5], [0, 1]);

  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <div className="md:col-span-7">
            <Eyebrow label="The Fourth Generation" className="mb-8" />
            <RevealText as="h2" className="font-accent font-light text-6xl md:text-[8.5rem] text-cream leading-none tracking-tight" text="Gemologist" />
          </div>
          <Reveal className="md:col-span-5" delay={0.2}>
            <p className="font-accent text-lg md:text-xl text-cream/55 leading-relaxed">
              Amaan Hussain — GIA Graduate Gemologist — brings the highest standards of gemological education to a
              lifetime of family tradition.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="grid grid-cols-2 gap-4 md:gap-10 mb-24 md:mb-36">
          <motion.div style={{ y: leftY }}>
            <ImageReveal
              src={amaanGemstone}
              alt="Amaan Hussain examining a gemstone at LAKSANA"
              className="aspect-[4/5] w-full"
              direction="left"
            />
          </motion.div>
          <motion.div style={{ y: rightY }} className="md:mt-24">
            <ImageReveal
              src={amaanMicroscope}
              alt="Amaan Hussain using a GIA microscope for gemstone analysis"
              className="aspect-[4/5] w-full"
              direction="right"
              delay={0.15}
            />
          </motion.div>
        </div>

        <div ref={certRef} className="max-w-3xl mx-auto mb-24 md:mb-36 [perspective:1200px]">
          <motion.div
            style={{ rotateX: certRotate, scale: certScale, opacity: certOpacity }}
            className="relative overflow-hidden border border-[hsl(var(--gold)/0.25)] shadow-[0_40px_120px_-30px_hsl(43_72%_55%/0.25)]"
            data-cursor="view"
          >
            <img src={giaCertificate} alt="GIA Graduate Gemologist diploma awarded to Amaan Hussain" className="w-full object-contain" loading="lazy" />
            <div className="absolute inset-0 lk-arch-sheen pointer-events-none" />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <span aria-hidden className="block font-accent text-8xl md:text-9xl leading-none text-[hsl(var(--gold)/0.7)] -mb-6 md:-mb-10">
            “
          </span>
          <ScrollWords
            className="font-accent font-light italic text-2xl md:text-[2.6rem] text-cream leading-snug"
            text="As the fourth generation of LAKSANA, I, Amaan Hussain, am deeply proud to carry forward this legacy. Having recently graduated from the Gemological Institute of America (GIA), I bring not only a lifetime of family tradition but also the highest standards of gemological education to our work. Our mission remains unchanged — to craft jewelry of exceptional quality, each piece a story of beauty, heritage, and artistry, while continuing to welcome clients to our home in Galle Fort, where history and craftsmanship meet."
          />
          <Reveal className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-[hsl(var(--gold))]" />
            <p className="font-body text-[11px] tracking-[0.45em] uppercase text-cream/80">Amaan Hussain · GIA G.G.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AmaanSection;
