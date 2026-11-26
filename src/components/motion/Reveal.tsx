import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { luxe } from "./intro";

/* ---------- Fade / rise in on enter ---------- */
export const Reveal = ({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-12% 0px" }}
    transition={{ duration: 1.1, delay, ease: luxe }}
  >
    {children}
  </motion.div>
);

/* ---------- Masked line / word reveal for headings ---------- */
export const RevealText = ({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as: Tag = "span",
  play,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  /** Control playback manually instead of on-scroll. */
  play?: boolean;
}) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const active = play ?? inView;
  const words = text.split(" ");
  const MotionTag = motion[Tag];
  return (
    <MotionTag ref={ref as never} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 4 }}
            animate={active ? { y: 0, rotate: 0 } : undefined}
            transition={{ duration: 1, delay: delay + i * stagger, ease: luxe }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

/* ---------- Scroll-scrubbed word illumination ---------- */
const Word = ({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{" "}
    </motion.span>
  );
};

export const ScrollWords = ({ text, className }: { text: string; className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const reduce = useReducedMotion();
  const words = text.split(" ");
  if (reduce) return <p className={className}>{text}</p>;
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
};

/* ---------- Clip-path image reveal with parallax drift ---------- */
export const ImageReveal = ({
  src,
  alt,
  className,
  imgClassName = "",
  speed = 6,
  direction = "up",
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
  direction?: "up" | "left" | "right";
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);
  const from =
    direction === "left" ? "inset(0 100% 0 0)" : direction === "right" ? "inset(0 0 0 100%)" : "inset(100% 0 0 0)";
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: from }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1.4, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        initial={{ scale: 1.35 }}
        whileInView={{ scale: 1.15 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, delay, ease: luxe }}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </motion.div>
  );
};

/* ---------- Count-up number ---------- */
export const Counter = ({ to, from = 0, suffix = "", duration = 2 }: { to: number; from?: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const mv = useMotionValue(from);
  const [val, setVal] = useState(from);
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration, ease: luxe, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, mv, to, duration]);
  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
};

/* ---------- Magnetic hover wrapper ---------- */
export const Magnetic = ({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
};

/* ---------- Section eyebrow: tiny lozenge, hairline, tracked label ---------- */
export const Eyebrow = ({ label, className = "" }: { index?: string; label: string; className?: string }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <motion.span
      aria-hidden
      className="w-[7px] h-[7px] rotate-45 border border-[hsl(var(--gold))]"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: luxe }}
    />
    <motion.span
      className="font-body text-[10px] tracking-[0.5em] uppercase text-[hsl(var(--gold))]"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.15, ease: luxe }}
    >
      {label}
    </motion.span>
    <motion.span
      aria-hidden
      className="h-px w-16 bg-[hsl(var(--gold)/0.4)] origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, delay: 0.3, ease: luxe }}
    />
  </div>
);
