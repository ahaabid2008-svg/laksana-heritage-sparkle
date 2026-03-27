import greenRing from "@/assets/green-ring.jpeg";
import aquamarineEarrings from "@/assets/aquamarine-earrings.jpeg";
import aquamarineRing from "@/assets/aquamarine-ring.jpeg";
import sapphireRing from "@/assets/sapphire-ring.jpeg";

const pieces = [
  { src: sapphireRing, name: "Royal Sapphire Trilogy", desc: "Platinum · Blue Sapphire · Diamonds" },
  { src: greenRing, name: "Mint Tourmaline Cocktail", desc: "White Gold · Green Tourmaline · Pavé Diamonds" },
  { src: aquamarineEarrings, name: "Aquamarine Drop Earrings", desc: "Yellow Gold · Aquamarine · Diamonds" },
  { src: aquamarineRing, name: "Aquamarine Halo Ring", desc: "White Gold · Aquamarine · Diamond Halo" },
];

const JewellerySection = () => {
  return (
    <section id="jewellery" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-gold/60 mb-4">
            Bespoke Creations
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            High Jewellery
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pieces.map((piece) => (
            <div key={piece.name} className="group relative overflow-hidden bg-charcoal">
              <img
                src={piece.src}
                alt={piece.name}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-6 border-t border-gold/10">
                <h3 className="font-display text-xl text-cream mb-1">{piece.name}</h3>
                <p className="font-accent text-sm text-gold/60 tracking-wide">{piece.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewellerySection;
