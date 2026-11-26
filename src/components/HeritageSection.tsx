import laksanaStorefront from "@/assets/laksana-storefront.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Counter, Eyebrow, ImageReveal, Reveal, RevealText, ScrollWords } from "@/components/motion/Reveal";
import { luxe } from "@/components/motion/intro";

const stats = [
  { to: 1980, from: 1900, suffix: "", label: "Established" },
  { to: 4, from: 0, suffix: "", label: "Generations" },
  { to: 46, from: 0, suffix: "+", label: "Years" },
];

const HeritageSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const frameY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yearY = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);

  return (
    <section id="heritage" className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Eyebrow label="Our Story" className="mb-10 md:mb-14" />

        <ScrollWords
          className="font-accent font-light text-[clamp(1.9rem,4.4vw,4rem)] leading-[1.12] text-cream max-w-5xl"
          text="For over four generations, LAKSANA has proudly stood as Galle Fort's oldest and most cherished jeweller — where history and craftsmanship meet."
        />

        <div ref={ref} className="relative grid md:grid-cols-12 gap-12 md:gap-16 items-center mt-24 md:mt-36">
          {/* Ghost year behind the composition */}
          <motion.span
            aria-hidden
            style={{ y: yearY }}
            className="absolute -top-16 md:-top-24 right-0 font-display text-[28vw] md:text-[18vw] leading-none lk-text-outline opacity-40 select-none pointer-events-none"
          >
            1980
          </motion.span>

          <div className="md:col-span-6 relative">
            <motion.div
              aria-hidden
              style={{ y: frameY }}
              className="absolute inset-0 border border-[hsl(var(--gold)/0.35)] translate-x-5 translate-y-5 md:translate-x-7 md:translate-y-7"
            />
            <ImageReveal
              src={laksanaStorefront}
              alt="LAKSANA jewellery storefront in Galle Fort, Sri Lanka at dusk"
              className="aspect-[4/5] w-full"
              speed={7}
            />
          </div>

          <div className="md:col-span-6 relative space-y-6">
            <RevealText
              as="h3"
              className="font-accent font-light text-3xl md:text-[2.75rem] text-cream leading-tight"
              text="A Legacy Spanning Four Generations"
            />
            <Reveal delay={0.1}>
              <p className="font-accent text-lg md:text-xl text-cream/60 leading-relaxed">
                Nestled within this historical city, we've honed the art of crafting unique designs, meticulously
                handcrafted in our own factory in Galle Fort.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-accent text-lg md:text-xl text-cream/60 leading-relaxed">
                Our passion extends beyond tradition, as we specialize in crafting bespoke jewellery pieces, tailored to
                your desires. What truly sets us apart is our expertise as{" "}
                <em className="text-gold-light not-italic">coloured stone specialists</em>, adding a vibrant touch to
                every creation.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-accent text-lg md:text-xl text-cream/60 leading-relaxed">
                Join us on a journey through time and artistry, where LAKSANA brings history and innovation together in
                every precious piece we create.
              </p>
            </Reveal>

            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-cream/10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15 * i, ease: luxe }}
                >
                  <p className="font-accent font-light text-5xl md:text-6xl lk-gold">
                    <Counter to={s.to} from={s.from} suffix={s.suffix} duration={2.2} />
                  </p>
                  <p className="font-body text-[11px] tracking-[0.25em] uppercase text-cream/40 mt-2">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
