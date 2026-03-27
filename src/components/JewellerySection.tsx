import greenRing from "@/assets/green-ring.jpeg";
import aquamarineEarrings from "@/assets/aquamarine-earrings.jpeg";
import aquamarineRing from "@/assets/aquamarine-ring.jpeg";
import sapphireRing from "@/assets/sapphire-ring.jpeg";
import pinkSapphireHoops from "@/assets/pink-sapphire-hoops.jpeg";
import tourmalineBangle from "@/assets/tourmaline-bangle.jpeg";
import emeraldRing from "@/assets/emerald-ring.jpeg";
import garnetRing from "@/assets/garnet-ring.jpeg";
import morganiteRing from "@/assets/morganite-ring.jpeg";
import sapphireEarrings from "@/assets/sapphire-earrings.jpeg";
import blueSapphireRing from "@/assets/blue-sapphire-ring.jpeg";

const pieces = [
  { src: sapphireRing, name: "Royal Sapphire Trilogy", desc: "Platinum · Blue Sapphire · Diamonds" },
  { src: emeraldRing, name: "Emerald Floral Cocktail", desc: "Yellow Gold · Tsavorite · Diamond Halo" },
  { src: blueSapphireRing, name: "Ceylon Sapphire Solitaire", desc: "White Gold · Blue Sapphire · Triple Band Diamonds" },
  { src: garnetRing, name: "Hessonite Sunburst", desc: "White Gold · Hessonite Garnet · Double Diamond Halo" },
  { src: greenRing, name: "Mint Tourmaline Cocktail", desc: "White Gold · Green Tourmaline · Pavé Diamonds" },
  { src: morganiteRing, name: "Morganite Cathedral Ring", desc: "White Gold · Morganite · Diamond Setting" },
  { src: pinkSapphireHoops, name: "Pink Sapphire Hoop Earrings", desc: "Rose Gold · Pink Sapphires · Inside-Out Setting" },
  { src: sapphireEarrings, name: "Sapphire Halo Studs", desc: "White Gold · Blue Sapphires · Double Diamond Halo" },
  { src: tourmalineBangle, name: "Watermelon Tourmaline Bangle", desc: "Yellow Gold · Bi-colour Tourmaline · Diamond" },
  { src: aquamarineEarrings, name: "Aquamarine Drop Earrings", desc: "Yellow Gold · Aquamarine · Diamonds" },
];

const JewellerySection = () => {
  return (
    <section id="jewellery" className="py-24 md:py-32 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pieces.map((piece) => (
            <div key={piece.name} className="group relative overflow-hidden bg-white rounded-sm shadow-md">
              <img
                src={piece.src}
                alt={piece.name}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-5 border-t border-gray-100">
                <h3 className="font-display text-lg text-gray-900 mb-1">{piece.name}</h3>
                <p className="font-accent text-sm text-gray-500 tracking-wide">{piece.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewellerySection;
