import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { curtain, hasSeenIntro, luxe, markIntroDone } from "./intro";

const letters = "LAKSANA".split("");

const Preloader = () => {
  const [show, setShow] = useState(() => !hasSeenIntro());
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!show) return;
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1900;
    let raf = 0;
    let timer = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else
        timer = window.setTimeout(() => {
          setShow(false);
          html.style.overflow = "";
          markIntroDone();
        }, 380);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      html.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] bg-[hsl(0_0%_3%)] flex flex-col items-center justify-center"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.05, ease: curtain }}
        >
          <div className="flex overflow-hidden">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                className="font-display text-5xl md:text-7xl text-cream tracking-[0.18em] inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.9, ease: luxe }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="font-accent italic text-cream/50 tracking-[0.35em] text-sm mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Galle Fort · Since 1980
          </motion.p>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[min(60vw,320px)]">
            <div className="h-px bg-cream/10 overflow-hidden">
              <div
                className="h-full gradient-gold origin-left"
                style={{ transform: `scaleX(${count / 100})` }}
              />
            </div>
            <p className="mt-3 text-center font-body text-[10px] tracking-[0.4em] text-cream/40 tabular-nums">
              {String(count).padStart(3, "0")}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
