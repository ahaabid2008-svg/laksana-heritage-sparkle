import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Mode = "default" | "link" | "view";

/** Gold dot + trailing ring. Only on precise pointers (mouse / trackpad). */
const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!mq.matches || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      if (t?.closest("[data-cursor='view']")) setMode("view");
      else if (t?.closest("a, button, [role='button']")) setMode("link");
      else setMode("default");
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = mode === "view" ? 92 : mode === "link" ? 56 : 34;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[300] rounded-full bg-[hsl(var(--gold))]"
        style={{ x, y, width: 6, height: 6, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible && mode !== "view" ? 1 : 0 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[299] rounded-full border flex items-center justify-center"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          borderColor: mode === "default" ? "hsl(40 20% 90% / 0.35)" : "hsl(40 48% 62% / 0.9)",
          backgroundColor: mode === "view" ? "hsl(40 48% 62% / 0.92)" : "hsl(40 48% 62% / 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        <motion.span
          className="font-body text-[10px] tracking-[0.25em] uppercase text-black"
          animate={{ opacity: mode === "view" ? 1 : 0, scale: mode === "view" ? 1 : 0.6 }}
        >
          View
        </motion.span>
      </motion.div>
    </>
  );
};

export default Cursor;
