import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;
export const getLenis = () => lenis;

/** Buttery inertial scrolling (desktop) + scroll reset between pages. */
const SmoothScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.95 });
    let raf = 0;
    const loop = (t: number) => {
      lenis?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    if (hash) return;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default SmoothScroll;
