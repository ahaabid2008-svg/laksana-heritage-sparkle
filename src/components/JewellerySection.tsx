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
import pinkTourmalineRing from "@/assets/pink-tourmaline-ring.jpeg";
import aquamarineHaloRing from "@/assets/aquamarine-halo-ring.jpeg";
import aquamarineTrilogyRing from "@/assets/aquamarine-trilogy-ring.jpeg";
import diamondLetterNecklace from "@/assets/diamond-letter-necklace.jpeg";
import sapphireTrilogyRing from "@/assets/sapphire-trilogy-ring.jpeg";
import aquamarineMarquiseRing from "@/assets/aquamarine-marquise-ring.jpeg";
import zultaniteSolitaireRing from "@/assets/zultanite-solitaire-ring.jpeg";
import multiSapphireStackingRings from "@/assets/multi-sapphire-stacking-rings.jpeg";
import sapphireStarburstRing from "@/assets/sapphire-starburst-ring.jpeg";
import yellowSapphireHaloRing from "@/assets/yellow-sapphire-halo-ring.jpeg";
import gemstoneBangles from "@/assets/gemstone-bangles.jpeg";
import tourmalineBarNecklace from "@/assets/tourmaline-bar-necklace.jpeg";
import tourmalineBarNecklace2 from "@/assets/tourmaline-bar-necklace-2.jpeg";
import rubyDiamondStuds from "@/assets/ruby-diamond-studs.jpeg";
import pinkTourmalineDropEarrings from "@/assets/pink-tourmaline-drop-earrings.jpeg";
import tsavoriteDropEarrings from "@/assets/tsavorite-drop-earrings.jpeg";
import diamondChandelierEarrings from "@/assets/diamond-chandelier-earrings.jpeg";

const pieces = [
  { src: sapphireRing, name: "Royal Sapphire Trilogy", desc: "Platinum · Blue Sapphire · Diamonds" },
  { src: emeraldRing, name: "Emerald Floral Cocktail", desc: "Yellow Gold · Tsavorite · Diamond Halo" },
  { src: blueSapphireRing, name: "Timeless, Tangled & One-Of-A-Kind", desc: "Rose Gold · 3ct Blue Sapphire · Round & Marquise Diamonds" },
  { src: sapphireTrilogyRing, name: "Ceylon Sapphire Trilogy", desc: "Yellow Gold · Oval Blue Sapphire · Round Brilliant Diamonds" },
  { src: aquamarineMarquiseRing, name: "Aquamarine Marquise Cocktail", desc: "Platinum · Marquise Aquamarine · Tapered Baguette Diamonds" },
  { src: zultaniteSolitaireRing, name: "Zultanite Solitaire", desc: "Yellow Gold · Colour-Change Zultanite · Four-Prong Setting" },
  { src: multiSapphireStackingRings, name: "Multi-Sapphire Stacking Set", desc: "Yellow Gold · Bezel-Set Sapphires · Mixed Fancy Cuts" },
  { src: sapphireStarburstRing, name: "Sapphire Starburst Ring", desc: "White Gold · Oval Blue Sapphire · Diamond Sunburst Halo" },
  { src: yellowSapphireHaloRing, name: "Yellow Sapphire Halo", desc: "Yellow Gold · Cushion Yellow Sapphire · Diamond Halo & Pavé" },
  { src: gemstoneBangles, name: "Gemstone Open Bangles", desc: "Sterling Silver · Tourmaline & Garnet · Bezel-Set Mixed Cuts" },
  { src: tourmalineBarNecklace, name: "Tourmaline Bar Link Necklace", desc: "White Gold · Emerald-Cut Tourmalines · Peach Morganite Stations" },
  
  { src: rubyDiamondStuds, name: "Ruby Lattice Dome Studs", desc: "White Gold · Rubies · Diamond Openwork Lattice" },
  { src: pinkTourmalineDropEarrings, name: "Pink Tourmaline Drop Earrings", desc: "White Gold · Oval Pink Tourmaline · Diamond Halo & Pavé" },
  { src: tsavoriteDropEarrings, name: "Tsavorite Sunburst Drops", desc: "Yellow Gold · Oval Tsavorite · Diamond Sunburst Halo" },
  { src: diamondChandelierEarrings, name: "Diamond Chandelier Earrings", desc: "White Gold · Round Brilliant Diamonds · Milgrain Openwork" },
  { src: pinkTourmalineRing, name: "Pink Tourmaline Asscher Ring", desc: "Yellow Gold · Pink Tourmaline · Diamond Clusters" },
  { src: aquamarineHaloRing, name: "Aquamarine Cushion Halo", desc: "18kt White Gold · 7ct Aquamarine · Green Tourmalines" },
  { src: aquamarineTrilogyRing, name: "Aquamarine Trilogy Ring", desc: "18kt White Gold · Aquamarine · Green Tourmaline" },
  { src: garnetRing, name: "Hessonite Sunburst", desc: "White Gold · Hessonite Garnet · Double Diamond Halo" },
  { src: greenRing, name: "Green Sapphire Custom Ring", desc: "Sterling Silver · 3ct Green Sapphire · Pear White Sapphires" },
  { src: morganiteRing, name: "Morganite Cathedral Ring", desc: "White Gold · Morganite · Diamond Setting" },
  { src: diamondLetterNecklace, name: "Diamond Initial Necklace", desc: "White Gold · Diamond Letters · Station Chain" },
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
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-gray-400 mb-4">
            Bespoke Creations
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 tracking-wide">
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
