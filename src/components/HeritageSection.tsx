import byzantineRing from "@/assets/byzantine-ring.jpeg";

const HeritageSection = () => {
  return (
    <section id="heritage" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-cream/60 mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            Heritage
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative group">
            <div className="overflow-hidden">
              <img
                src={byzantineRing}
                alt="Handcrafted Byzantine-style gold ring by LAKSANA"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 border border-cream/20 translate-x-4 translate-y-4 -z-10" />
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl text-cream leading-relaxed">
              A Legacy Spanning{" "}
              <span className="text-cream italic">Four Generations</span>
            </h3>
            <p className="font-accent text-lg text-cream/60 leading-relaxed">
              LAKSANA is a distinguished private jeweller based in Galle Fort, Sri Lanka, with a legacy spanning four generations. Established in 1980, it was the first jewelry shop in Galle Fort opened by a resident of the historic city.
            </p>
            <p className="font-accent text-lg text-cream/60 leading-relaxed">
              Specialising in coloured gemstones, LAKSANA has built a reputation for creating exceptional high jewellery, blending Sri Lanka's rich gemstone heritage with timeless craftsmanship.
            </p>
            <p className="font-accent text-lg text-cream/60 leading-relaxed">
              Over the decades, the family-run business has upheld its tradition of excellence, offering bespoke creations featuring exquisite Sapphires, Rubies, Tourmalines and other rare gems, making it a trusted name among collectors and connoisseurs.
            </p>
            <div className="pt-4 flex gap-12">
              <div>
                <p className="font-display text-3xl text-cream">1980</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/40 mt-1">Established</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cream">4</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/40 mt-1">Generations</p>
              </div>
              <div>
                <p className="font-display text-3xl text-cream">46+</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/40 mt-1">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
