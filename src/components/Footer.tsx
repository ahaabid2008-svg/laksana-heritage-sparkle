const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-display text-xl tracking-[0.3em] text-cream mb-4">
          LAKSANA
        </p>
        <p className="font-accent text-sm text-cream/30">
          Private Jeweller · Galle Fort, Sri Lanka · Since 1980
        </p>
        <div className="divider-gold w-16 mx-auto my-6" />
        <p className="font-body text-xs text-cream/20 tracking-wide">
          © {new Date().getFullYear()} LAKSANA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
