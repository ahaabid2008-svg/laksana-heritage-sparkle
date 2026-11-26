import { useEffect, useRef } from "react";

/** Canvas of slowly rising, twinkling gold dust. Pauses when offscreen. */
const GoldDust = ({ density = 70, className = "" }: { density?: number; className?: string }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    type P = { x: number; y: number; r: number; vy: number; vx: number; tw: number; ph: number };
    let ps: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(density * Math.min(1, w / 1200) + density * 0.3);
      ps = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        vy: -(Math.random() * 0.25 + 0.05),
        vx: (Math.random() - 0.5) * 0.12,
        tw: Math.random() * 0.02 + 0.006,
        ph: Math.random() * Math.PI * 2,
      }));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let raf = 0;
    let running = true;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y += p.vy;
        p.x += p.vx;
        p.ph += p.tw;
        if (p.y < -5) {
          p.y = h + 5;
          p.x = Math.random() * w;
        }
        const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(p.ph));
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, `rgba(240, 205, 120, ${a})`);
        g.addColorStop(1, "rgba(240, 205, 120, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running) raf = requestAnimationFrame(draw);
    };
    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [density]);

  return <canvas ref={ref} aria-hidden className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />;
};

export default GoldDust;
