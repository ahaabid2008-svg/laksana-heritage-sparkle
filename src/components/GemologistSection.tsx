import gemologist from "@/assets/gemologist.jpeg";

const GemologistSection = () => {
  return (
    <section id="gemologist" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <p className="font-accent text-sm tracking-[0.4em] uppercase text-gold/60">
              Expert Eye
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
              Our Gemologist
            </h2>
            <div className="divider-gold w-24 mt-2 mb-4" />
            <p className="font-accent text-lg text-cream/60 leading-relaxed">
              With GIA certification and years of hands-on experience, our in-house gemologist meticulously evaluates every stone that passes through LAKSANA's doors.
            </p>
            <p className="font-accent text-lg text-cream/60 leading-relaxed">
              Each gemstone is examined for colour, clarity, cut and carat weight, ensuring only the finest specimens are selected for our bespoke collections. This dedication to quality is what sets LAKSANA apart.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <div className="w-12 h-px bg-gold/40" />
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold/60">
                GIA Certified · Third Generation
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 relative group">
            <div className="overflow-hidden">
              <img
                src={gemologist}
                alt="LAKSANA's GIA-certified gemologist examining a gemstone"
                className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 border border-gold/20 -translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GemologistSection;
