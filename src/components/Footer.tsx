import { Facebook, Instagram, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/motion/Reveal";
import { luxe } from "@/components/motion/intro";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/laksanajewellery", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/laksana._", label: "Instagram" },
  { icon: Mail, href: "mailto:info.laksana@gmail.com", label: "Email" },
  { icon: ExternalLink, href: "https://linktr.ee/laksanajewellery", label: "Linktree" },
];

const word = "LAKSANA".split("");

const Footer = () => {
  return (
    <footer className="relative bg-charcoal border-t border-cream/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: luxe }}
          className="border border-cream/15 p-6 mb-14 text-center"
        >
          <p className="font-accent text-base md:text-lg text-cream/70 leading-relaxed tracking-wide">
            Kindly contact us directly for any specific size or color requirements for any gemstones.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-accent text-sm text-cream/40 text-center md:text-left">
            Private Jeweller · Galle Fort, Sri Lanka · Since 1980
          </p>
          <div className="flex justify-center gap-3">
            {socialLinks.map((link) => (
              <Magnetic key={link.label} strength={0.4}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-11 h-11 rounded-full border border-cream/15 flex items-center justify-center text-cream/50 hover:text-black hover:bg-[hsl(var(--gold))] hover:border-transparent transition-colors duration-500"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              </Magnetic>
            ))}
          </div>
          <p className="font-body text-xs text-cream/30 tracking-wide">
            © {new Date().getFullYear()} LAKSANA. All rights reserved.
          </p>
        </div>
      </div>

      {/* Monumental wordmark */}
      <motion.div
        aria-hidden
        className="mt-10 flex justify-center select-none leading-[0.78] translate-y-[8%]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {word.map((l, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block font-display text-[22vw] lk-gold opacity-90"
              variants={{ hidden: { y: "100%" }, show: { y: 0 } }}
              transition={{ duration: 1.2, delay: i * 0.06, ease: luxe }}
            >
              {l}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </footer>
  );
};

export default Footer;
