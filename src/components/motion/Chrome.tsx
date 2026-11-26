import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { curtain } from "./intro";

/** Thin gold reading-progress line pinned to the top of the viewport. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] z-[120] origin-left gradient-gold"
      style={{ scaleX }}
    />
  );
};

/** Subtle animated film grain over everything. */
export const Grain = () => <div aria-hidden className="lk-grain" />;

/** Curtain wipe between routes. */
export const RouteTransition = () => {
  const { pathname } = useLocation();
  const first = useRef(true);
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setKey(pathname + Date.now());
    const t = setTimeout(() => setKey(null), 1100);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {key && (
        <motion.div
          key={key}
          aria-hidden
          className="fixed inset-0 z-[150] bg-[hsl(0_0%_3%)] flex items-center justify-center pointer-events-none"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 100% 0)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease: curtain }}
        >
          <motion.span
            className="font-display text-cream tracking-[0.4em] text-xl"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            LAKSANA
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
