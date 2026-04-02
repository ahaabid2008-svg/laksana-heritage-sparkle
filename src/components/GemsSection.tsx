import sapphireOvalPair from "@/assets/sapphire-oval-pair.jpeg";
import sapphireCushionDeep from "@/assets/sapphire-cushion-deep.jpeg";
import sapphireRoundVivid from "@/assets/sapphire-round-vivid.jpeg";
import yellowSapphireOvalLight from "@/assets/yellow-sapphire-oval-light.jpeg";
import yellowSapphireOvalVivid from "@/assets/yellow-sapphire-oval-vivid.jpeg";
import yellowSapphireHeartNew from "@/assets/yellow-sapphire-heart-new.jpeg";
import pinkSapphirePear from "@/assets/pink-sapphire-pear.jpeg";
import pinkSapphireCushion from "@/assets/pink-sapphire-cushion.jpeg";
import tealSapphireHeart from "@/assets/teal-sapphire-heart.jpeg";

type GemItem = {
  src: string;
  name: string;
  desc: string;
};

type GemCategory = {
  category: string;
  gems: GemItem[];
};

const gemCategories: GemCategory[] = [
  {
    category: "Sapphires",
    gems: [
      { src: sapphireOvalPair, name: "Royal Blue Sapphire Pair", desc: "Vivid oval-cut, matched Ceylon pair" },
      { src: sapphireCushionDeep, name: "Blue Sapphire Cushion", desc: "Deep royal blue, cushion-cut Ceylon" },
      { src: sapphireRoundVivid, name: "Blue Sapphire Round", desc: "Intense cornflower blue, round brilliant-cut" },
      { src: yellowSapphireOvalLight, name: "Yellow Sapphire Oval", desc: "Light golden Ceylon, unheated oval-cut" },
      { src: yellowSapphireOvalVivid, name: "Yellow Sapphire Oval", desc: "Vivid canary yellow, precision oval-cut" },
      { src: yellowSapphireHeartNew, name: "Yellow Sapphire Heart", desc: "Radiant golden heart, Ceylon origin" },
      { src: pinkSapphirePear, name: "Pink Sapphire Pear", desc: "Vivid hot pink, pear-cut Ceylon" },
      { src: pinkSapphireCushion, name: "Pink Sapphire Cushion", desc: "Soft pastel pink, cushion-cut Ceylon" },
      { src: tealSapphireHeart, name: "Teal Sapphire Heart", desc: "Bi-colour teal green, heart-cut Ceylon" },
    ],
  },
  {
    category: "Aquamarine",
    gems: [],
  },
  {
    category: "Tourmaline",
    gems: [],
  },
  {
    category: "Garnet",
    gems: [],
  },
];

const GemsSection = () => {
  return (
    <section id="gems" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-cream/60 mb-4">
            Nature's Masterpieces
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            GEMSTONES
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="space-y-16">
          {gemCategories.map((category) => (
            <div key={category.category}>
              <h3 className="font-display text-2xl md:text-3xl text-cream tracking-wide mb-6 text-center">
                {category.category}
              </h3>
              {category.gems.length === 0 ? (
                <p className="font-accent text-sm text-cream/40 italic col-span-full text-center">Coming soon</p>
              ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {category.gems.map((gem, index) => (
                  <div key={`${gem.name}-${index}`} className="group relative overflow-hidden">
                    <img
                      src={gem.src}
                      alt={gem.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                      <h3 className="font-display text-base md:text-lg text-cream">{gem.name}</h3>
                      <p className="font-accent text-sm text-cream/60">{gem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemsSection;
