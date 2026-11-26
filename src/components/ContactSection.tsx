import { MapPin, Phone, Clock, Mail, Facebook, Instagram, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode, PointerEvent } from "react";
import { Eyebrow, Magnetic, RevealText } from "@/components/motion/Reveal";
import { luxe } from "@/components/motion/intro";

const whatsappNumbers = [
  { display: "074 190 0974", number: "94741900974" },
  { display: "077 790 0170", number: "94777900170" },
  { display: "076 790 0974", number: "94767900974" },
];

const hours: [string, string][] = [
  ["Thursday", "9 AM – 7 PM"],
  ["Friday", "9 AM – 12 PM\n1:30 PM – 7 PM"],
  ["Saturday", "9 AM – 7 PM"],
  ["Sunday", "9 AM – 7 PM"],
  ["Monday", "9 AM – 7 PM"],
  ["Tuesday", "9 AM – 7 PM"],
  ["Wednesday", "9 AM – 7 PM"],
];

const spotlight = (e: PointerEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Card = ({ title, children, i }: { icon?: LucideIcon; title: string; children: ReactNode; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 1.3, delay: i * 0.15, ease: luxe }}
    onPointerMove={spotlight}
    className="lk-spotlight group relative px-2 md:px-10 py-10 md:py-4 border-t md:border-t-0 md:border-l first:border-0 border-cream/10 overflow-hidden"
  >
    <div className="relative">
      <p className="font-body text-[10px] tracking-[0.5em] uppercase text-[hsl(var(--gold))] mb-6">{title}</p>
      {children}
    </div>
  </motion.div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-20">
          <Eyebrow label="Visit the Boutique" className="mb-8" />
          <RevealText as="h2" className="font-accent font-light text-5xl md:text-8xl text-cream leading-none" text="Come find us" />
          <RevealText
            as="p"
            className="font-accent font-light italic text-5xl md:text-8xl leading-none lk-gold pb-2"
            text="inside the Fort."
            delay={0.2}
          />
        </div>

        <div className="grid md:grid-cols-3 border-y border-cream/10 md:py-12">
          <Card icon={MapPin} title="Location" i={0}>
            <a
              href="https://maps.app.goo.gl/deM1sDEcGMU9gBZ5A?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent text-xl text-cream/70 leading-relaxed hover:text-cream transition-colors duration-300 lk-underline"
            >
              Galle Fort
              <br />
              Galle, Sri Lanka
            </a>
          </Card>

          <Card icon={Phone} title="WhatsApp" i={1}>
            <div className="space-y-2">
              {whatsappNumbers.map((num) => (
                <a
                  key={num.number}
                  href={`https://wa.me/${num.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-fit font-accent text-xl text-cream/70 tabular-nums hover:text-cream transition-colors duration-300 lk-underline"
                >
                  {num.display}
                </a>
              ))}
            </div>
          </Card>

          <Card icon={Clock} title="Hours" i={2}>
            <div className="font-accent text-cream/55 text-[15px] leading-relaxed space-y-1">
              {hours.map(([d, h]) => (
                <div key={d}>
                  <div className="flex justify-between gap-4">
                    <span>{d}</span>
                    <span className="tabular-nums text-right whitespace-pre-line">{h}</span>
                  </div>
                  {d === "Friday" && <p className="text-cream/35 italic text-sm">Hours might differ</p>}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {[
            { href: "mailto:info.laksana@gmail.com", Icon: Mail, label: "info.laksana@gmail.com", ext: false },
            { href: "https://www.instagram.com/laksana._", Icon: Instagram, label: "@laksana._", ext: true },
            { href: "https://www.facebook.com/laksanajewellery", Icon: Facebook, label: "LAKSANA", ext: true },
          ].map(({ href, Icon, label, ext }) => (
            <Magnetic key={label} strength={0.25}>
              <a
                href={href}
                {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-3 rounded-full border border-cream/15 px-7 py-3 font-body text-[11px] tracking-[0.25em] text-cream/70 hover:text-black hover:bg-[hsl(var(--gold))] hover:border-transparent transition-colors duration-500"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
