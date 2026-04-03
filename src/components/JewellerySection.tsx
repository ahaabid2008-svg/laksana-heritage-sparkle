import { useState } from "react";
import greenRing from "@/assets/green-ring.jpeg";
import alexandriteRingGreen from "@/assets/alexandrite-ring-green.jpeg";
import alexandriteRingPink from "@/assets/alexandrite-ring-pink.jpeg";
import whiteSapphireCocktail1 from "@/assets/white-sapphire-cocktail-1.jpeg";
import whiteSapphireCocktail2 from "@/assets/white-sapphire-cocktail-2.jpeg";
import rubyCocktail1 from "@/assets/ruby-cocktail-1.jpeg";
import rubyCocktail2 from "@/assets/ruby-cocktail-2.jpeg";
import pinkBlueSapphireCuff from "@/assets/pink-blue-sapphire-cuff.jpeg";
import tourmalineTsavoriteCuff from "@/assets/tourmaline-tsavorite-cuff.jpeg";
import spessartineGarnetRing from "@/assets/spessartine-garnet-ring.jpeg";
import starSapphireRing from "@/assets/star-sapphire-ring.jpeg";
import greenSapphireArtDecoRing from "@/assets/green-sapphire-art-deco-ring.jpeg";
import kunzitePinkSapphireRing from "@/assets/kunzite-pink-sapphire-ring.jpeg";
import greenSapphireByzantineRing from "@/assets/green-sapphire-byzantine-ring.jpeg";
import sapphireCircleDropEarrings from "@/assets/sapphire-circle-drop-earrings.jpeg";
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
import sapphireTrilogyRing from "@/assets/sapphire-trilogy-ring.jpeg";
import aquamarineMarquiseRing from "@/assets/aquamarine-marquise-ring.jpeg";
import zultaniteSolitaireRing from "@/assets/zultanite-solitaire-ring.jpeg";
import multiSapphireStackingRings from "@/assets/multi-sapphire-stacking-rings.jpeg";
import sapphireStarburstRing from "@/assets/sapphire-starburst-ring.jpeg";
import yellowSapphireHaloRing from "@/assets/yellow-sapphire-halo-ring.jpeg";

import tourmalineBarNecklace from "@/assets/tourmaline-bar-necklace.jpeg";
import tourmalineBarNecklace2 from "@/assets/tourmaline-bar-necklace-2.jpeg";
import rubyDiamondStuds from "@/assets/ruby-diamond-studs.jpeg";
import pinkTourmalineDropEarrings from "@/assets/pink-tourmaline-drop-earrings.jpeg";
import tsavoriteDropEarrings from "@/assets/tsavorite-drop-earrings.jpeg";
import diamondChandelierEarrings from "@/assets/diamond-chandelier-earrings.jpeg";
import aquamarineDiamondEternityRingV2 from "@/assets/aquamarine-diamond-eternity-ring-v2.jpeg";
import sapphireDoubleHaloStudsV2 from "@/assets/sapphire-double-halo-studs-v2.jpeg";
import sapphirePaveBandRingV2 from "@/assets/sapphire-pave-band-ring-v2.jpeg";
import sapphireFloralBypassRingV2 from "@/assets/sapphire-floral-bypass-ring-v2.jpeg";
import laksanaTsavoriteSapphireBandsV2 from "@/assets/laksana-tsavorite-sapphire-bands-v2.jpeg";
import rhodoliteHaloCocktailRingV2 from "@/assets/rhodolite-halo-cocktail-ring-v2.jpeg";
import pinkTourmalineSunburstEarringsV2 from "@/assets/pink-tourmaline-sunburst-earrings-v2.jpeg";
import greenTourmalineDiamondHaloRingV2 from "@/assets/green-tourmaline-diamond-halo-ring-v2.jpeg";
import tsavoriteStarburstDropEarringsV2 from "@/assets/tsavorite-starburst-drop-earrings-v2.jpeg";
import pinkTourmalineLaceDropEarrings from "@/assets/pink-tourmaline-lace-drop-earrings.jpeg";
import sapphireTopazAmethystRing from "@/assets/sapphire-topaz-amethyst-ring.jpeg";
import garnetDiamondHaloRing from "@/assets/garnet-diamond-halo-ring.jpeg";
import multiSapphireFloralNecklace from "@/assets/multi-sapphire-floral-necklace.jpeg";
import pinkSapphireTennisBracelet from "@/assets/pink-sapphire-tennis-bracelet.jpeg";
import yellowSapphireBracelet from "@/assets/yellow-sapphire-bracelet.jpeg";
import spinelCuffBangle from "@/assets/spinel-cuff-bangle.jpeg";
import sapphireDiamondCuffBangle from "@/assets/sapphire-diamond-cuff-bangle.jpeg";
import zirconSpinelCuffBangle from "@/assets/zircon-spinel-cuff-bangle.jpeg";
import sapphireTsavoriteCuffBangle from "@/assets/sapphire-tsavorite-cuff-bangle.jpeg";
import pinkSapphireAmethystCuffBangle from "@/assets/pink-sapphire-amethyst-cuff-bangle.jpeg";
import amethystSapphireCuffBangle from "@/assets/amethyst-sapphire-cuff-bangle.jpeg";
import diamondPaveWideBand from "@/assets/diamond-pave-wide-band.jpeg";
import whiteSapphireRing from "@/assets/white-sapphire-ring.jpeg";
import tourmalineRing from "@/assets/tourmaline-ring.jpeg";
import pinkSapphireRingJewel from "@/assets/pink-sapphire-ring.jpeg";
import tricolorDiamondEternityBands from "@/assets/tricolor-diamond-eternity-bands.jpeg";
import tricolorDiamondEternityRings from "@/assets/tricolor-diamond-eternity-rings.jpeg";
import blueSapphireTennisBracelet from "@/assets/blue-sapphire-tennis-bracelet.jpeg";
import greenTourmalineDropEarrings from "@/assets/green-tourmaline-drop-earrings.jpeg";
import tourmalinePearDropEarrings from "@/assets/tourmaline-pear-drop-earrings.jpeg";
import sapphireFloralClusterNecklace from "@/assets/sapphire-floral-cluster-necklace.jpeg";
import tourmalineSignetRing from "@/assets/tourmaline-signet-ring.jpeg";
import diamondLetterNecklace from "@/assets/diamond-letter-necklace.jpeg";
import greenSapphireWhiteSapphireRing from "@/assets/green-sapphire-white-sapphire-ring.jpeg";
import tealSapphireLoveRing from "@/assets/teal-sapphire-love-ring.jpeg";
import blueSapphireDomeRing from "@/assets/blue-sapphire-dome-ring.jpeg";
import blueSapphireDomeRing2 from "@/assets/blue-sapphire-dome-ring-2.jpeg";
import diamondClusterGoldRing from "@/assets/diamond-cluster-gold-ring.jpeg";
import whiteSapphireEmeraldRing from "@/assets/white-sapphire-emerald-ring.jpeg";
import triSapphireHammeredRing from "@/assets/tri-sapphire-hammered-ring.jpeg";
import orangeSapphireHaloRing1 from "@/assets/orange-sapphire-halo-ring-1.jpeg";
import orangeSapphireHaloRing2 from "@/assets/orange-sapphire-halo-ring-2.jpeg";
import multiGemLatticeHoops from "@/assets/multi-gem-lattice-hoops.jpeg";

type PieceItem = {
  src: string | string[];
  name: string;
  desc: string;
};

type JewelleryCategory = {
  category: string;
  pieces: PieceItem[];
};

type JewelleryMetal = {
  metal: string;
  id: string;
  categories: JewelleryCategory[];
};

const jewelleryByMetal: JewelleryMetal[] = [
  {
    metal: "Gold",
    id: "jewellery-gold",
    categories: [
      {
        category: "Rings",
        pieces: [
          { src: sapphireRing, name: "Royal Sapphire Trilogy", desc: "Platinum · Blue Sapphire · Diamonds" },
          { src: emeraldRing, name: "Tsavorite Floral Cocktail", desc: "CUSTOM MADE · Yellow Gold · 4ct Tsavorite · Diamond Halo" },
          { src: blueSapphireRing, name: "Timeless, Tangled & One-Of-A-Kind", desc: "Rose Gold · 3ct Blue Sapphire · Round & Marquise Diamonds" },
          { src: sapphireTrilogyRing, name: "Ceylon Sapphire Trilogy", desc: "Yellow Gold · Oval Blue Sapphire · Round Brilliant Diamonds" },
          { src: aquamarineMarquiseRing, name: "Aquamarine Marquise Cocktail", desc: "Platinum · Marquise Aquamarine · Tapered Baguette Diamonds" },
          { src: zultaniteSolitaireRing, name: "Tourmaline Solitaire", desc: "Yellow Gold · Tourmaline · Four-Prong Setting" },
          { src: multiSapphireStackingRings, name: "Multi-Sapphire Stacking Set", desc: "Yellow Gold · Bezel-Set Sapphires · Mixed Fancy Cuts" },
          { src: sapphireStarburstRing, name: "Sapphire Starburst Ring", desc: "White Gold · Oval Blue Sapphire · Diamond Sunburst Halo" },
          { src: yellowSapphireHaloRing, name: "Yellow Sapphire Halo", desc: "CUSTOM MADE · Yellow Gold · 4.5ct Vivid Yellow Sapphire · Dazzling Diamonds" },
          { src: sapphirePaveBandRingV2, name: "Dream in Blue", desc: "White Gold · Royal Blue Sapphire · Diamonds" },
          { src: sapphireFloralBypassRingV2, name: "Sapphire Floral Cluster Ring", desc: "White Gold · Calibrated Blue Sapphires · Diamond Floral Settings" },
          { src: aquamarineDiamondEternityRingV2, name: "Aquamarine & White Sapphire Eternity", desc: "CUSTOM MADE · Yellow Gold · White Sapphires · Pale Aquamarines" },
          { src: laksanaTsavoriteSapphireBandsV2, name: "Tsavorite & Sapphire Eternity Bands", desc: "White Gold · Calibré Tsavorites & Sapphires · Shared-Prong Set" },
          { src: rhodoliteHaloCocktailRingV2, name: "Rhodolite Halo Cocktail Ring", desc: "White Gold · Emerald-Cut Rhodolite · Diamond Halo" },
          { src: greenTourmalineDiamondHaloRingV2, name: "Green Tourmaline Diamond Halo", desc: "White Gold · Oval Green Tourmaline · Asymmetric Diamond Halo" },
          { src: pinkTourmalineRing, name: "Pink Tourmaline Asscher Ring", desc: "Yellow Gold · Pink Tourmaline · Diamond Clusters" },
          { src: aquamarineHaloRing, name: "Aquamarine Cushion Halo", desc: "18kt White Gold · 7ct Aquamarine · Green Tourmalines" },
          { src: aquamarineTrilogyRing, name: "Aquamarine Trilogy Ring", desc: "18kt White Gold · Aquamarine · Green Tourmaline" },
          
          { src: morganiteRing, name: "Morganite Cathedral Ring", desc: "White Gold · Morganite · Diamond Setting" },
          { src: whiteSapphireRing, name: "White Sapphire Halo Ring", desc: "White Gold · Oval White Sapphire · Diamond Sunburst Halo" },
          { src: tourmalineRing, name: "Tourmaline Five-Stone Ring", desc: "Yellow Gold · Emerald-Cut Green Tourmalines · Mixed Gems" },
          { src: pinkSapphireRingJewel, name: "Pink Sapphire Scroll Ring", desc: "Yellow & White Gold · Cushion Pink Sapphire · Filigree Setting" },
          { src: tourmalineSignetRing, name: "Tourmaline Signet Ring", desc: "Yellow Gold · Emerald-Cut Tourmaline · Brushed Finish" },
          { src: sapphireTopazAmethystRing, name: "Sapphire, Topaz & Amethyst Ring", desc: "Rose Gold · Blue Sapphires · Blue Topaz · Amethyst · Moonstones" },
          { src: garnetDiamondHaloRing, name: "Garnet Trillion Halo Ring", desc: "Rose Gold · Trillion Garnet · Diamond Halo & Pavé" },
          { src: diamondPaveWideBand, name: "Diamond Pavé Wide Band", desc: "Rose Gold · Round Brilliant Diamonds · Five-Row Pavé" },
          { src: tricolorDiamondEternityBands, name: "Tri-Colour Diamond Eternity Bands", desc: "Rose, White & Yellow Gold · Round Brilliant Diamonds · Stacking Set" },
          { src: tricolorDiamondEternityRings, name: "Tri-Colour Diamond Eternity Rings", desc: "Rose, White & Yellow Gold · Diamond Eternity · Shared-Prong Set" },
          { src: [alexandriteRingGreen, alexandriteRingPink], name: "Alexandrite Sunburst Cocktail Ring", desc: "CUSTOM MADE · White Gold · 5ct Colour-Change Alexandrite · Diamond Starburst Halo" },
          { src: [whiteSapphireCocktail1, whiteSapphireCocktail2], name: "White Sapphire Cocktail Ring", desc: "CUSTOM MADE · White Gold · 19ct White Sapphire · Princess-Cut Diamonds" },
          { src: [rubyCocktail1, rubyCocktail2], name: "Unheated Ruby Cocktail Ring", desc: "CUSTOM MADE · White Gold · 4ct Unheated Ruby · Baguette & Round Diamonds" },
          { src: spessartineGarnetRing, name: "Spessartine Garnet Cocktail Ring", desc: "CUSTOM MADE · White Gold · 9ct Spessartine Garnet · Double Diamond Halo" },
          { src: starSapphireRing, name: "Star Sapphire Cabochon Ring", desc: "CUSTOM MADE · Yellow Gold · 10ct Star Sapphire · Beaded Bezel Setting" },
          { src: greenSapphireArtDecoRing, name: "Green Sapphire Art Deco Ring", desc: "CUSTOM MADE · Yellow Gold · Cushion Green Sapphire · Baguette & Round Diamonds" },
          { src: kunzitePinkSapphireRing, name: "Kunzite & Pink Sapphire Ring", desc: "CUSTOM MADE · White Gold · Oval Kunzite Cabochon · Pink Sapphire Accents" },
          { src: greenSapphireByzantineRing, name: "Green Sapphire Byzantine Band", desc: "CUSTOM MADE · Yellow Gold · 2ct Green Sapphire · Hot Pink Sapphires · Rope Detail" },
          { src: greenSapphireWhiteSapphireRing, name: "Green Sapphire Byzantine Ring", desc: "CUSTOM MADE · White Gold · 3ct Green Sapphire · Two White Sapphires · Rope Detail" },
          { src: tealSapphireLoveRing, name: "Teal Sapphire 'Love' Ring", desc: "CUSTOM MADE · Yellow Gold · Teal Sapphires · Green Sapphires · Script Band" },
          { src: [blueSapphireDomeRing, blueSapphireDomeRing2], name: "Blue Sapphire Dome Ring", desc: "CUSTOM MADE · White Gold · 7ct Blue Sapphire · Diamond Filigree Setting" },
          { src: diamondClusterGoldRing, name: "Diamond Cluster Ring", desc: "CUSTOM MADE · Yellow Gold · Diamond Floral Cluster · Pavé Band" },
          { src: whiteSapphireEmeraldRing, name: "White Sapphire & Emerald Ring", desc: "CUSTOM MADE · Yellow Gold · 2ct White Sapphire · Two Emeralds · Diamonds" },
          { src: triSapphireHammeredRing, name: "Tri-Sapphire Hammered Band", desc: "CUSTOM MADE · Yellow Gold · Blue Sapphire · Green Sapphire · Pink Sapphire · Hammered Finish" },
        ],
      },
      {
        category: "Earrings",
        pieces: [
          { src: rubyDiamondStuds, name: "Ruby Lattice Dome Studs", desc: "CUSTOM MADE · White Gold · Rubies · Diamond Openwork Lattice" },
          { src: pinkTourmalineDropEarrings, name: "Pink Tourmaline Drop Earrings", desc: "White Gold · Oval Pink Tourmaline · Diamond Halo & Pavé" },
          { src: tsavoriteDropEarrings, name: "Tsavorite Sunburst Drops", desc: "Yellow Gold · Oval Tsavorite · Diamond Sunburst Halo" },
          { src: diamondChandelierEarrings, name: "Diamond Chandelier Earrings", desc: "White Gold · Round Brilliant Diamonds · Milgrain Openwork" },
          { src: sapphireDoubleHaloStudsV2, name: "Sapphire Fantasy Earrings", desc: "Yellow Gold · Blue Sapphires · Yellow Sapphires" },
          { src: pinkTourmalineSunburstEarringsV2, name: "Pink Sapphire Sunburst Earrings", desc: "Yellow Gold · Oval Pink Sapphires · Baguette Diamond Rays" },
          { src: tsavoriteStarburstDropEarringsV2, name: "Tsavorite Starburst Drops", desc: "White Gold · Oval Tsavorites · Diamond Starburst Frames" },
          { src: pinkTourmalineLaceDropEarrings, name: "Pink Tourmaline Lace Drops", desc: "White Gold · Oval Pink Tourmalines · Diamond Lace Openwork" },
          { src: greenTourmalineDropEarrings, name: "Green Tourmaline Drop Earrings", desc: "Yellow Gold · Emerald-Cut Green Tourmalines · Diamond Studs" },
          { src: pinkSapphireHoops, name: "Pink Sapphire Hoop Earrings", desc: "Rose Gold · Pink Sapphires · Inside-Out Setting" },
          { src: sapphireEarrings, name: "Sapphire Halo Studs", desc: "White Gold · Blue Sapphires · Double Diamond Halo" },
          { src: aquamarineEarrings, name: "Aquamarine Drop Earrings", desc: "Yellow Gold · Aquamarine · Diamonds" },
          { src: tourmalinePearDropEarrings, name: "Tourmaline Pear Drop Earrings", desc: "White Gold · Pear Pink & Green Tourmalines · Diamond Halo" },
          { src: sapphireCircleDropEarrings, name: "Sapphire Circle Drop Earrings", desc: "CUSTOM MADE · White Gold · 3ct Blue Sapphires · Diamond Circle Frames" },
        ],
      },
      {
        category: "Bracelets",
        pieces: [
          { src: pinkSapphireTennisBracelet, name: "Pink Sapphire Tennis Bracelet", desc: "White Gold · Oval Pink Sapphires · Diamond Spacers" },
          { src: yellowSapphireBracelet, name: "Yellow Sapphire Tennis Bracelet", desc: "White Gold · Emerald-Cut Yellow Sapphires · Diamond Links" },
          { src: blueSapphireTennisBracelet, name: "Blue Sapphire Tennis Bracelet", desc: "White Gold · Round Blue Sapphires · Four-Prong Setting" },
        ],
      },
      {
        category: "Bangles",
        pieces: [
          { src: spinelCuffBangle, name: "Tourmaline Open Cuff Bangle", desc: "Yellow Gold · Kite & Emerald-Cut Pink Tourmalines · Bezel Set" },
          { src: sapphireDiamondCuffBangle, name: "Sapphire & Diamond Cuff Bangle", desc: "Yellow Gold · Cushion Blue Sapphire · Round Brilliant Diamond" },
          { src: zirconSpinelCuffBangle, name: "Tourmaline Cuff Bangle", desc: "Yellow Gold · Champagne Tourmaline · Pink Tourmaline · Bezel Set" },
          { src: sapphireTsavoriteCuffBangle, name: "Sapphire & Tsavorite Cuff Bangle", desc: "Yellow Gold · Heart Yellow Sapphire · Oval Tsavorite" },
          { src: pinkSapphireAmethystCuffBangle, name: "Pink Sapphire & Purple Sapphire Cuff", desc: "Yellow Gold · Heart Pink Sapphire · Emerald-Cut Purple Sapphire" },
          { src: amethystSapphireCuffBangle, name: "Rose Garnet & Sapphire Cuff Bangle", desc: "Yellow Gold · Emerald-Cut Rose Garnet · Oval Blue Sapphire" },
          { src: tourmalineBangle, name: "Watermelon Tourmaline Bangle", desc: "Yellow Gold · Bi-colour Tourmaline · Diamond" },
          { src: pinkBlueSapphireCuff, name: "Pink Sapphire & Blue Sapphire Cuff Bangle", desc: "CUSTOM MADE · Yellow Gold · Oval Pink Sapphire · Oval Blue Sapphire · Bezel Set" },
          { src: tourmalineTsavoriteCuff, name: "Tourmaline & Tsavorite Cuff Bangle", desc: "CUSTOM MADE · Yellow Gold · Emerald-Cut Green Tourmaline · Oval Tsavorites · Bezel Set" },
        ],
      },
      {
        category: "Necklaces",
        pieces: [
          { src: sapphireFloralClusterNecklace, name: "Sapphire Floral Cluster Necklace", desc: "White Gold · Round Blue Sapphires · Diamond Star Tips" },
          { src: multiSapphireFloralNecklace, name: "Multi-Sapphire Floral Necklace", desc: "White Gold · Blue, Yellow & Pink Sapphires · Diamond Floral Halos" },
          { src: diamondLetterNecklace, name: "Diamond Letter Necklace", desc: "White Gold · Round Brilliant Diamonds · Custom Letter Pendant" },
        ],
      },
    ],
  },
  {
    metal: "Sterling Silver",
    id: "jewellery-sterling-silver",
    categories: [
      {
        category: "Rings",
        pieces: [
          { src: greenRing, name: "Green Sapphire Custom Ring", desc: "Sterling Silver · 3ct Green Sapphire · Pear White Sapphires" },
        ],
      },
      {
        category: "Earrings",
        pieces: [],
      },
      {
        category: "Bracelets",
        pieces: [],
      },
      {
        category: "Bangles",
        pieces: [],
      },
      {
        category: "Necklaces",
        pieces: [
          { src: tourmalineBarNecklace, name: "Tourmaline Bar Link Necklace", desc: "Sterling Silver · Emerald-Cut Tourmalines · Peach Morganite Stations" },
          { src: tourmalineBarNecklace2, name: "Tourmaline & Garnet Station Necklace", desc: "Sterling Silver · Rhodolite Garnet · Tsavorite · Mixed Fancy Cuts" },
        ],
      },
    ],
  },
];

const SwipeableImage = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrent((prev) => (diff > 0 ? Math.min(prev + 1, images.length - 1) : Math.max(prev - 1, 0)));
    }
    setTouchStart(null);
  };

  return (
    <div className="relative overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <img
        src={images[current]}
        alt={`${alt} - view ${current + 1}`}
        className="w-full aspect-square object-cover transition-transform duration-700"
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-black" : "bg-black/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

const JewellerySection = () => {
  return (
    <section id="jewellery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 tracking-wide">
            Fine Jewellery
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="space-y-20">
          {jewelleryByMetal.map((metalGroup) => (
            <div key={metalGroup.metal} id={metalGroup.id}>
              <h3 className="font-display text-3xl md:text-4xl text-gray-900 tracking-wide mb-10 text-center">
                {metalGroup.metal}
              </h3>
              <div className="space-y-16">
                {metalGroup.categories.map((category) => (
                  <div key={category.category} id={`${metalGroup.id}-${category.category.toLowerCase()}`}>
                    <h4 className="font-display text-2xl md:text-3xl text-gray-900 tracking-wide mb-6 text-center">
                      {category.category}
                    </h4>
                    {category.pieces.length > 0 ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.pieces.map((piece, index) => (
                          <div key={`${piece.name}-${index}`} className="group relative overflow-hidden bg-white rounded-sm shadow-md">
                            {Array.isArray(piece.src) ? (
                              <SwipeableImage images={piece.src} alt={piece.name} />
                            ) : (
                              <img
                                src={piece.src}
                                alt={piece.name}
                                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            )}
                            <div className="p-5 border-t border-gray-100">
                              <h3 className="font-display text-lg text-gray-900 mb-1">{piece.name}</h3>
                              <p className="font-accent text-sm text-gray-500 tracking-wide">{piece.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center font-accent text-sm text-gray-400 tracking-wide py-8">
                        Coming Soon
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewellerySection;
