import { Facebook, Instagram, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/laksanajewellery", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/laksana._", label: "Instagram" },
  { icon: Mail, href: "mailto:info.laksana@gmail.com", label: "Email" },
  { icon: ExternalLink, href: "https://linktr.ee/laksanajewellery", label: "Linktree" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-cream/20 rounded-sm p-6 mb-10 text-center">
          <p className="font-accent text-sm md:text-base text-cream/70 leading-relaxed tracking-wide">
            Kindly contact us directly for any specific size or color requirements for any gemstones.
          </p>
        </div>
        <div className="text-center">
        <p className="font-display text-xl tracking-[0.3em] text-cream mb-4">
          LAKSANA
        </p>
        <p className="font-accent text-sm text-cream/30">
          Private Jeweller · Galle Fort, Sri Lanka · Since 1980
        </p>

        <div className="flex justify-center gap-6 my-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-cream/40 hover:text-cream transition-colors duration-300"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="divider-gold w-16 mx-auto mb-6" />
        <p className="font-body text-xs text-cream/20 tracking-wide">
          © {new Date().getFullYear()} LAKSANA. All rights reserved.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
