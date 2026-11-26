import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, useState } from "react";
import { luxe } from "@/components/motion/intro";

import stone from "@/assets/royal-blue-sapphire-cushion.jpeg";
import loupe from "@/assets/silk-inclusion.jpeg";
import velvet from "@/assets/blue-sapphire-cushion.jpeg";
import heirloom from "@/assets/Blue Sapphire 4CT, Diamonds, Gold.jpeg";

type Chapter = {
  numeral: string;
  kicker: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  /** product shot on white: sits on ivory and multiplies */
  ivory?: boolean;
  bg: string;
};

const chapters: Chapter[] = [
  {
    numeral: "I",
    kicker: "The Stone",
    title: "It begins with a single sapphire.",
    body: "Ceylon blue — chosen for colour, life and brilliance long before it is ever set.",
    src: stone,
    alt: "Loose royal blue Ceylon sapphire, cushion cut",
    ivory: true,
    bg: "#070b17",
  },
  {
    numeral: "II",
    kicker: "The Eye",
    title: "Studied beneath the loupe.",
    body: "Our GIA Graduate Gemologist reads every stone — its inclusions, its light, its truth.",
    src: loupe,
    alt: "Gemstone held in tweezers under magnification showing fine silk inclusions",
    bg: "#0a0a0d",
  },
  {
    numeral: "III",
    kicker: "The Hand",
    title: "Shaped inside the Fort.",
    body: "Designed and handcrafted in our own workshop in Galle Fort, as it has been for four generations.",
    src: velvet,
    alt: "Cushion-cut blue sapphire resting on white velvet",
    bg: "#0b0a09",
  },
  {
    numeral: "IV",
    kicker: "The Heirloom",
    title: "Made to be handed down.",
    body: "A piece that carries its story — from the island, to your hand, to the next.",
    src: heirloom,
    alt: "Blue sapphire and diamond halo ring in gold by LAKSANA",
    ivory: true,
    bg: "#100c07",
  },
];

const N = chapters.length;

const Layer = ({ c, i, p }: { c: Chapter; i: number; p: MotionValue<number> }) => {
  const at = i / N;
  // iris opens as this chapter arrives
  const radius = useTransform(p, i === 0 ? [0, 1] : [at - 0.1, at + 0.02], i === 0 ? [75, 75] : [0, 75]);
  const clip = useMotionTemplate`circle(${radius}% at 50% 50%)`;
  // gentle drift while it's on stage, then it zooms past as the next arrives
  const scale = useTransform(p, [at - 0.1, at + 0.12, at + 1 / N + 0.02], [1.25, 1, 1.18]);
  const rotate = useTransform(p, [at - 0.1, at + 1 / N], i === 0 ? [-14, 10] : [-4, 4]);

  return (
    <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
      <div className={`absolute inset-0 ${c.ivory ? "bg-[radial-gradient(circle_at_50%_42%,#fffaf0_0%,#e7dfd0_78%)]" : "bg-black"}`} />
      <motion.img
        src={c.src}
        alt={c.alt}
        loading="lazy"
        style={{ scale, rotate }}
        className={`absolute inset-0 w-full h-full ${c.ivory ? "object-contain p-[16%] mix-blend-multiply" : "object-cover"}`}
      />
    </motion.div>
  );
};

const JourneySection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(N - 1, Math.max(0, Math.floor(v * N + 0.08)));
    setActive((a) => (a === idx ? a : idx));
  });

  const bg = useTransform(
    p,
    chapters.map((_, i) => i / (N - 1)),
    chapters.map((c) => c.bg),
  );
  const lensScale = useTransform(scrollYProgress, [0, 0.06, 0.94, 1], [0.86, 1, 1, 0.92]);
  const ringRotate = useTransform(p, [0, 1], [0, 140]);
  const c = chapters[active];

  return (
    <motion.section
      ref={ref}
      aria-label="From stone to heirloom"
      className="relative"
      style={{ height: `${N * 110 + 60}svh`, backgroundColor: bg }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Giant ghost word */}
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={c.kicker}
              initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -80, filter: "blur(12px)" }}
              transition={{ duration: 1.1, ease: luxe }}
              className="font-accent italic font-light text-[30vw] md:text-[19vw] leading-none text-cream/[0.035] whitespace-nowrap"
            >
              {c.kicker.replace("The ", "")}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 items-center gap-6">
          {/* Copy */}
          <div className="order-2 md:order-1 md:col-span-4 text-center md:text-left pb-10 md:pb-0">
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[hsl(var(--gold))] mb-6 md:mb-10">
              From Stone to Heirloom
            </p>
            <div className="relative min-h-[190px] md:min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial="in" animate="show" exit="out">
                  <div className="overflow-hidden">
                    <motion.p
                      variants={{ in: { y: "100%" }, show: { y: 0 }, out: { y: "-100%" } }}
                      transition={{ duration: 0.8, ease: luxe }}
                      className="font-accent italic text-lg md:text-xl text-[hsl(var(--gold-light))]"
                    >
                      {c.kicker}
                    </motion.p>
                  </div>
                  <div className="overflow-hidden mt-2 md:mt-4 pb-1">
                    <motion.h3
                      variants={{ in: { y: "105%" }, show: { y: 0 }, out: { y: "-105%" } }}
                      transition={{ duration: 0.9, delay: 0.05, ease: luxe }}
                      className="font-accent font-light text-3xl md:text-5xl text-cream leading-[1.05] [text-wrap:balance]"
                    >
                      {c.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    variants={{ in: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 }, out: { opacity: 0, y: -10 } }}
                    transition={{ duration: 0.8, delay: 0.15, ease: luxe }}
                    className="mt-4 md:mt-6 font-accent text-base md:text-lg text-cream/55 leading-relaxed max-w-sm mx-auto md:mx-0"
                  >
                    {c.body}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* The loupe */}
          <div className="order-1 md:order-2 md:col-span-6 md:col-start-6 flex justify-center pt-20 md:pt-0">
            <motion.div style={{ scale: lensScale }} className="relative w-[min(76vw,46svh)] md:w-[min(40vw,72svh)] aspect-square">
              {/* glow */}
              <div aria-hidden className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,hsl(40_48%_62%/0.12),transparent_62%)]" />

              {/* progress ring + ticks */}
              <motion.svg aria-hidden viewBox="0 0 200 200" className="absolute inset-[-9%] w-[118%] h-[118%] overflow-visible" style={{ rotate: ringRotate }}>
                <circle cx="100" cy="100" r="96" fill="none" stroke="hsl(40 48% 62% / 0.14)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="96" fill="none" stroke="hsl(40 48% 62% / 0.1)" strokeWidth="0.4" strokeDasharray="0.6 3.4" />
              </motion.svg>
              <svg aria-hidden viewBox="0 0 200 200" className="absolute inset-[-9%] w-[118%] h-[118%] overflow-visible -rotate-90">
                <motion.circle cx="100" cy="100" r="96" fill="none" stroke="hsl(var(--gold))" strokeWidth="0.8" style={{ pathLength: p }} />
              </svg>
              {chapters.map((ch, i) => {
                const a = (i / N) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + Math.cos(a) * 59;
                const y = 50 + Math.sin(a) * 59;
                return (
                  <span
                    key={ch.numeral}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 font-accent text-sm md:text-base transition-colors duration-700 ${
                      i <= active ? "text-[hsl(var(--gold-light))]" : "text-cream/25"
                    }`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {ch.numeral}
                  </span>
                );
              })}

              {/* lens */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9),inset_0_0_0_1px_hsl(40_48%_62%/0.35)]">
                {chapters.map((ch, i) => (
                  <Layer key={ch.numeral} c={ch} i={i} p={p} />
                ))}
                {/* glass */}
                <div aria-hidden className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_26%,rgba(255,255,255,0.22),transparent_38%)] mix-blend-screen pointer-events-none" />
                <div aria-hidden className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.35)] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* chapter counter */}
        <div className="absolute bottom-8 inset-x-0 flex justify-center gap-3" aria-hidden>
          {chapters.map((ch, i) => (
            <span key={ch.numeral} className="h-px w-10 bg-cream/15 overflow-hidden">
              <span
                className="block h-full bg-[hsl(var(--gold))] origin-left transition-transform duration-700"
                style={{ transform: `scaleX(${i <= active ? 1 : 0})` }}
              />
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default JourneySection;
