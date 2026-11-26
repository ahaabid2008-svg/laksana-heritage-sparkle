import sapphireRing from "@/assets/sapphire-ring.jpeg";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import GoldDust from "@/components/motion/GoldDust";
import { luxe, useIntroDone } from "@/components/motion/intro";
import { Magnetic } from "@/components/motion/Reveal";

const title = "LAKSANA".split("");

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroDone();

  // Scroll-linked choreography
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const archScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const titleSpacing = useTransform(scrollYProgress, [0, 1], ["0.02em", "0.12em"]);
  const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // Pointer parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const ringX = useTransform(sx, (v) => v * 18);
  const ringY = useTransform(sy, (v) => v * 18);
  const ringRotate = useTransform(sx, (v) => v * 4);
  const titleX = useTransform(sx, (v) => v * -14);
  const glowX = useTransform(sx, (v) => `${50 + v * 22}%`);
  const glowY = useTransform(sy, (v) => `${45 + v * 22}%`);
  const glow = useMotionTemplate`radial-gradient(600px circle at ${glowX} ${glowY}, hsl(40 48% 62% / 0.16), transparent 60%)`;

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-background isolate"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
    >
      {/* Ambient light + gold dust */}
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ background: glow }} />
      <GoldDust className="-z-10" />

      {/* Arch window with the signature ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pt-10"
        style={{ scale: archScale, y: archY }}
      >
        <motion.div
          className="relative h-[54svh] md:h-[66svh] aspect-[3/4.1]"
          initial={{ clipPath: "inset(100% 0% 0% 0% round 999px 999px 0 0)" }}
          animate={ready ? { clipPath: "inset(0% 0% 0% 0% round 999px 999px 0 0)" } : undefined}
          transition={{ duration: 1.6, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 rounded-t-full bg-[#efe9df] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#fffaf0_0%,#e9e1d3_70%)]" />
            <motion.img
              src={sapphireRing}
              alt="Royal blue Ceylon sapphire ring with diamonds by LAKSANA"
              className="absolute inset-0 w-full h-full object-contain px-[10%] pt-[62%] pb-[4%] mix-blend-multiply lk-float"
              style={{ x: ringX, y: ringY, rotate: ringRotate }}
              initial={{ scale: 1.3, opacity: 0 }}
              animate={ready ? { scale: 1, opacity: 1 } : undefined}
              transition={{ duration: 2, delay: 0.5, ease: luxe }}
              fetchPriority="high"
            />
            <div className="absolute inset-0 lk-arch-sheen" />
          </div>
        </motion.div>
      </motion.div>

      {/* Gold outline arch drawn around the window */}
      <motion.div aria-hidden className="absolute inset-0 flex items-center justify-center pt-10 pointer-events-none" style={{ scale: archScale, y: archY }}>
        <svg className="h-[calc(54svh+28px)] md:h-[calc(66svh+36px)] aspect-[3/4.1] overflow-visible" viewBox="0 0 300 410" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M2 410 V150 A148 148 0 0 1 298 150 V410"
            stroke="hsl(40 48% 62% / 0.55)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={ready ? { pathLength: 1 } : undefined}
            transition={{ duration: 2.4, delay: 0.6, ease: luxe }}
          />
        </svg>
      </motion.div>

      {/* Giant wordmark — difference blend so it reads over both the arch and the night */}
      <motion.div
        className="absolute inset-0 pt-[24svh] md:pt-[22svh] flex items-start justify-center mix-blend-difference pointer-events-none"
        style={{ y: titleY, x: titleX }}
      >
        <motion.h1
          className="font-display font-normal text-[#ece6da] leading-none text-[16.5vw] md:text-[13.5vw] flex"
          style={{ letterSpacing: titleSpacing, opacity: fade }}
          aria-label="LAKSANA"
        >
          {title.map((l, i) => (
            <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.06em]">
              <motion.span
                className="inline-block"
                initial={{ y: "105%" }}
                animate={ready ? { y: 0 } : undefined}
                transition={{ duration: 1.3, delay: 0.35 + Math.abs(i - 3) * 0.09, ease: luxe }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-0 inset-x-0 px-6 md:px-10 pb-8 md:pb-10 flex items-end justify-between gap-6"
        style={{ opacity: fade }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1.2, delay: 1.2, ease: luxe }}
          className="hidden sm:block"
        >
          <p className="font-accent italic text-cream/80 text-lg">Since 1980</p>
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-cream/45 mt-1">Galle Fort, Sri Lanka</p>
        </motion.div>

        <motion.div
          className="mx-auto sm:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1.2, delay: 1.35, ease: luxe }}
        >
          <Magnetic>
            <a
              href="#heritage"
              className="group flex flex-col items-center gap-3 text-cream/70 hover:text-cream transition-colors"
            >
              <span className="font-body text-[11px] tracking-[0.35em] uppercase">Discover our legacy</span>
              <span className="relative block h-12 w-px bg-cream/15 overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-1/2 bg-[hsl(var(--gold))] lk-scroll-cue" />
              </span>
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1.2, delay: 1.5, ease: luxe }}
          className="hidden sm:block text-right"
        >
          <p className="font-accent italic text-cream/80 text-lg">Coloured Stone Specialists</p>
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-cream/45 mt-1">Four Generations</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
