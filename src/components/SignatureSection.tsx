import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Magnetic, RevealText } from "@/components/motion/Reveal";
import { luxe } from "@/components/motion/intro";

import royalBlue from "@/assets/sapphire-ring.jpeg";
import tsavorite from "@/assets/emerald-ring.jpeg";
import padparadscha from "@/assets/Padparadscha Sapphire, Diamonds, Gold.jpeg";
import pinkNecklace from "@/assets/pink-sapphire-with-diamonds-necklace.jpeg";
import blueTennis from "@/assets/blue-sapphire-tennis-bracelet.jpeg";
import bangle from "@/assets/Pink_Sapphire_and_Blue_Sapphire_Bangle.jpeg";
import blueHalo from "@/assets/blue-sapphire-halo-diamond-ring.jpeg";
import alexandrite from "@/assets/alexandrite-with-diamond-ring.jpeg";

const pieces = [
  { src: royalBlue, name: "Royal Blue Sapphire", meta: "6 Carat · White Gold · Diamonds", glow: "rgba(45,105,255,.35)" },
  { src: padparadscha, name: "Padparadscha Sapphire", meta: "Yellow Gold · Diamond Halo", glow: "rgba(255,120,110,.35)" },
  { src: tsavorite, name: "Tsavorite", meta: "4 Carat · Custom Made · Diamond Halo", glow: "rgba(45,160,95,.35)" },
  { src: pinkNecklace, name: "Pink Sapphire Necklace", meta: "Gold · Diamonds", glow: "rgba(230,80,150,.3)" },
  { src: blueTennis, name: "Blue Sapphire Tennis", meta: "White Gold · Four-Prong Setting", glow: "rgba(45,105,255,.3)" },
  { src: bangle, name: "Pink & Blue Sapphire Bangle", meta: "Gold · Pear Cut · Open Bangle", glow: "rgba(212,175,55,.35)" },
  { src: blueHalo, name: "Tanzanite Halo", meta: "White Gold · Diamond Halo · Pavé Band", glow: "rgba(110,80,220,.32)" },
  { src: alexandrite, name: "Alexandrite", meta: "Gold · Diamonds", glow: "rgba(140,160,60,.35)" },
];

const useIsDesktop = () => {
  const [d, setD] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setD(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return d;
};

const Card = ({ p, i }: { p: (typeof pieces)[number]; i: number }) => (
  <Link
    to="/collection#jewellery"
    data-cursor="view"
    className="group relative shrink-0 w-[78vw] sm:w-[340px] md:w-[min(380px,30vw)] snap-center"
    style={{ ["--gem-glow" as string]: p.glow }}
  >
    <div className="relative aspect-[3/4] overflow-hidden bg-[#efe9df]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#fffaf0_0%,#e7dfd0_75%)]" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: "radial-gradient(circle at 50% 55%, var(--gem-glow), transparent 60%)" }}
      />
      <img
        src={p.src}
        alt={`${p.name} by LAKSANA`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-contain p-[10%] mix-blend-multiply transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110 group-hover:-rotate-2"
      />
      <div className="luxe-light-sweep" />
      <div aria-hidden className="absolute inset-3 border border-black/[0.07] pointer-events-none" />
      <span className="absolute bottom-6 inset-x-0 text-center font-body text-[10px] tracking-[0.45em] uppercase text-black/60 opacity-0 translate-y-2 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
        Discover
      </span>
    </div>
    <div className="pt-5 flex items-start justify-between gap-4">
      <div>
        <h3 className="font-accent text-[1.35rem] md:text-2xl text-cream">{p.name}</h3>
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/40 mt-2">{p.meta}</p>
      </div>
    </div>
    <span className="block h-px mt-4 bg-[hsl(var(--gold))] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
  </Link>
);

const Intro = () => (
  <div className="shrink-0 w-full sm:w-[380px] md:w-[440px] flex flex-col justify-center pr-6 md:pr-16">
    <Eyebrow label="Signature Pieces" className="mb-8" />
    <RevealText
      as="h2"
      className="font-accent font-light text-5xl md:text-7xl text-cream leading-[1.02]"
      text="Pieces that hold the light"
    />
    <p className="font-accent text-lg text-cream/55 mt-6 leading-relaxed max-w-sm">
      Ceylon sapphires and rare coloured stones, set by hand in our own workshop inside the walls of Galle Fort.
    </p>
    <div className="mt-10">
      <Magnetic>
        <Link
          to="/collection"
          className="inline-flex items-center gap-3 rounded-full border border-[hsl(var(--gold)/0.5)] px-7 py-4 font-body text-[11px] tracking-[0.3em] uppercase text-cream hover:bg-[hsl(var(--gold))] hover:text-black transition-colors duration-500"
        >
          Explore the collection <ArrowUpRight className="w-4 h-4" />
        </Link>
      </Magnetic>
    </div>
  </div>
);

const SignatureSection = () => {
  const isDesktop = useIsDesktop();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    if (!isDesktop || !trackRef.current) return;
    const measure = () => {
      const el = trackRef.current!;
      setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isDesktop]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const raw = useTransform(scrollYProgress, (v) => -v * distance);
  const x = useSpring(raw, { stiffness: 140, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!isDesktop) {
    return (
      <section ref={sectionRef} className="py-24 bg-background">
        <div className="px-6 mb-10">
          <Intro />
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-6 [scrollbar-width:none]">
          {pieces.map((p, i) => (
            <Card key={p.name} p={p} i={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative bg-background" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <motion.div ref={trackRef} style={{ x }} className="flex items-center gap-10 pl-10 lg:pl-20 pr-[10vw] will-change-transform">
          <Intro />
          {pieces.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.08, ease: luxe }}
              className={`shrink-0 ${i % 2 ? "mt-24" : ""}`}
            >
              <Card p={p} i={i} />
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute bottom-10 left-10 lg:left-20 right-10 lg:right-20 flex items-center gap-6">
          <span className="font-body text-[11px] tracking-[0.3em] uppercase text-cream/40">Scroll</span>
          <div className="flex-1 h-px bg-cream/10 overflow-hidden">
            <motion.div className="h-full gradient-gold origin-left" style={{ scaleX: bar }} />
          </div>
          <span className="font-body text-[11px] tracking-[0.3em] text-cream/40 tabular-nums">
            {String(pieces.length).padStart(2, "0")} pieces
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
