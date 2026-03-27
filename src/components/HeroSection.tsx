import sapphireRing from "@/assets/sapphire-ring.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={sapphireRing}
          alt="Exquisite sapphire ring by LAKSANA"
          className="w-full h-full object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-accent text-lg md:text-xl tracking-[0.3em] uppercase text-gold-light mb-6 opacity-80">
          Est. 1980 · Galle Fort, Sri Lanka
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-[0.08em] gradient-gold-text mb-8 leading-tight">
          LAKSANA
        </h1>
        <div className="divider-gold w-32 mx-auto mb-8" />
        <p className="font-accent text-xl md:text-2xl text-cream/70 tracking-wide italic max-w-2xl mx-auto">
          Three generations of exquisite gemstone artistry & high jewellery
        </p>
        <a
          href="#heritage"
          className="inline-block mt-12 px-8 py-3 border border-gold/40 text-gold text-sm tracking-[0.2em] uppercase font-body hover:bg-gold/10 transition-all duration-500"
        >
          Discover Our Legacy
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
