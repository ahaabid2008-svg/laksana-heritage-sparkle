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
import tsavoriteDiamondRing1 from "@/assets/tsavorite-diamond-ring-1.jpeg";
import tsavoriteDiamondRing2 from "@/assets/tsavorite-diamond-ring-2.jpeg";
import goldenYellowSapphireRing from "@/assets/golden-yellow-sapphire-ring.jpeg";
import tanzaniteDiamondRing from "@/assets/tanzanite-diamond-ring.jpeg";
import blueSapphireDiamondRing from "@/assets/blue-sapphire-diamond-ring.jpeg";
import tanzaniteDiamondEarrings1 from "@/assets/tanzanite-diamond-earrings-1.jpeg";
import tsavoriteDiamondEarrings from "@/assets/tsavorite-diamond-earrings.jpeg";
import blueSapphireDiamondEarrings from "@/assets/blue-sapphire-diamond-earrings.jpeg";
import tanzaniteDiamondEarrings2 from "@/assets/tanzanite-diamond-earrings-2.jpeg";
import tourmalineEarrings1 from "@/assets/tourmaline-earrings-1.jpeg";
import tourmalineEarrings2 from "@/assets/tourmaline-earrings-2.jpeg";
import tourmalineEarrings3 from "@/assets/tourmaline-earrings-3.jpeg";
import tourmalineEarrings4 from "@/assets/tourmaline-earrings-4.jpeg";
import spinelEarrings from "@/assets/spinel-earrings.jpeg";
import blueSapphireDiamondStuds from "@/assets/blue-sapphire-diamond-studs.jpeg";
import blueSapphireDiamondStuds2 from "@/assets/blue-sapphire-diamond-studs-2.jpeg";
import tourmalineDiamondDropEarrings from "@/assets/tourmaline-diamond-drop-earrings.jpeg";
import berylStoneEarrings from "@/assets/beryl-stone-earrings.jpeg";
import whiteSapphireEarringsImg from "@/assets/white-sapphire-earrings.jpeg";
import peridotYellowSapphireEarrings from "@/assets/peridot-yellow-sapphire-earrings.jpeg";
import pinkTourmalinePinkSapphireEarrings from "@/assets/pink-tourmaline-sapphire-earrings.jpeg";
import multiColourSapphireEarrings from "@/assets/multi-colour-sapphire-earrings.jpeg";
import yellowSapphireDiamondEarrings from "@/assets/yellow-sapphire-diamond-earrings.jpeg";

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
          { src: sapphireRing, name: "Royal Blue Sapphire - 6 Carat", desc: "White Gold · Diamonds" },
          { src: emeraldRing, name: "Tsavorite - 4 Carat", desc: "CUSTOM MADE · Yellow Gold · Diamond Halo" },
          { src: blueSapphireRing, name: "Blue Sapphire - 3 Carat", desc: "Rose Gold · Round & Marquise Diamonds" },
          { src: sapphireTrilogyRing, name: "Ceylon Sapphire", desc: "Yellow Gold · Diamonds" },
          { src: aquamarineMarquiseRing, name: "Aquamarine", desc: "White Gold · Tapered Baguette Diamonds" },
          { src: zultaniteSolitaireRing, name: "Tourmaline", desc: "Yellow Gold · Four-Prong Setting" },
          { src: multiSapphireStackingRings, name: "Multi-Sapphire", desc: "Yellow Gold · Bezel-Set · Mixed Fancy Cuts" },
          
          { src: yellowSapphireHaloRing, name: "Yellow Sapphire - 4.5 Carat", desc: "CUSTOM MADE · Yellow Gold · Dazzling Diamonds" },
          { src: sapphirePaveBandRingV2, name: "Royal Blue Sapphire", desc: "White Gold · Diamonds" },
          { src: sapphireFloralBypassRingV2, name: "Blue Sapphires", desc: "White Gold · Diamond Floral Settings" },
          { src: aquamarineDiamondEternityRingV2, name: "Aquamarine & White Sapphire", desc: "CUSTOM MADE · Yellow Gold" },
          { src: laksanaTsavoriteSapphireBandsV2, name: "Tsavorite & Sapphire", desc: "White Gold · Shared-Prong Set" },
          { src: rhodoliteHaloCocktailRingV2, name: "Rhodolite", desc: "White Gold · Diamond Halo" },
          { src: greenTourmalineDiamondHaloRingV2, name: "Green Tourmaline", desc: "White Gold · Asymmetric Diamond Halo" },
          { src: pinkTourmalineRing, name: "Pink Tourmaline", desc: "Yellow Gold · Diamond Clusters" },
          { src: aquamarineHaloRing, name: "Aquamarine - 7 Carat", desc: "White Gold · Green Tourmalines" },
          { src: aquamarineTrilogyRing, name: "Aquamarine & Green Tourmaline", desc: "White Gold" },
          
          { src: morganiteRing, name: "Morganite", desc: "White Gold · Diamond Setting" },
          
          
          
          { src: tourmalineSignetRing, name: "Tourmaline", desc: "Yellow Gold · Brushed Finish" },
          { src: sapphireTopazAmethystRing, name: "Sapphire, Topaz & Amethyst", desc: "CUSTOM MADE · Rose Gold · Moonstones" },
          { src: garnetDiamondHaloRing, name: "Garnet", desc: "Rose Gold · Diamond Halo & Pavé" },
          { src: diamondPaveWideBand, name: "Diamonds", desc: "Rose Gold · Five-Row Pavé" },
          { src: tricolorDiamondEternityBands, name: "Diamonds", desc: "Rose, White & Yellow Gold · Stacking Set" },
          { src: tricolorDiamondEternityRings, name: "Diamonds", desc: "Rose, White & Yellow Gold · Shared-Prong Set" },
          { src: [alexandriteRingGreen, alexandriteRingPink], name: "Alexandrite - 5 Carat", desc: "CUSTOM MADE · White Gold · Diamond Starburst Halo" },
          { src: [whiteSapphireCocktail1, whiteSapphireCocktail2], name: "White Sapphire - 19 Carat", desc: "CUSTOM MADE · White Gold · Princess-Cut Diamonds" },
          { src: [rubyCocktail1, rubyCocktail2], name: "Unheated Ruby - 4 Carat", desc: "CUSTOM MADE · White Gold · Baguette & Round Diamonds" },
          { src: spessartineGarnetRing, name: "Spessartine Garnet - 9 Carat", desc: "CUSTOM MADE · White Gold · Double Diamond Halo" },
          { src: starSapphireRing, name: "Star Sapphire - 10 Carat", desc: "CUSTOM MADE · Yellow Gold · Beaded Bezel Setting" },
          { src: greenSapphireArtDecoRing, name: "Green Sapphire", desc: "CUSTOM MADE · Yellow Gold · Baguette & Round Diamonds" },
          { src: kunzitePinkSapphireRing, name: "Kunzite & Pink Sapphire", desc: "CUSTOM MADE · White Gold" },
          { src: greenSapphireByzantineRing, name: "Green Sapphire - 2 Carat", desc: "CUSTOM MADE · Yellow Gold · Hot Pink Sapphires · Rope Detail" },
          { src: greenSapphireWhiteSapphireRing, name: "Green Sapphire - 3 Carat", desc: "CUSTOM MADE · White Gold · Two White Sapphires · Rope Detail" },
          { src: tealSapphireLoveRing, name: "Teal & Green Sapphire", desc: "CUSTOM MADE · Yellow Gold · Script Band" },
          { src: [blueSapphireDomeRing, blueSapphireDomeRing2], name: "Blue Sapphire - 7 Carat", desc: "CUSTOM MADE · White Gold · Diamond Filigree Setting" },
          { src: diamondClusterGoldRing, name: "Diamonds", desc: "CUSTOM MADE · Yellow Gold · Floral Cluster · Pavé Band" },
          { src: whiteSapphireEmeraldRing, name: "White Sapphire & Emerald - 2 Carat", desc: "CUSTOM MADE · Yellow Gold · Diamonds" },
          { src: triSapphireHammeredRing, name: "Blue, Green & Pink Sapphire", desc: "CUSTOM MADE · Yellow Gold · Hammered Finish" },
          { src: [orangeSapphireHaloRing1, orangeSapphireHaloRing2], name: "Orange Sapphire - 12 Carat", desc: "CUSTOM MADE · White Gold · Dazzling Diamonds" },
          { src: [tsavoriteDiamondRing1, tsavoriteDiamondRing2], name: "Tsavorite - 8.07 Carat", desc: "CUSTOM MADE · White Gold · Dazzling Diamonds" },
          { src: goldenYellowSapphireRing, name: "Golden Yellow Sapphire - 8 Carat", desc: "CUSTOM MADE · Yellow Gold · Dazzling Diamonds" },
          { src: tanzaniteDiamondRing, name: "Tanzanite", desc: "CUSTOM MADE · Yellow Gold · Dazzling Diamonds" },
          { src: blueSapphireDiamondRing, name: "Blue Sapphire - 3 Carat", desc: "CUSTOM MADE · White Gold · Dazzling Diamonds" },
        ],
      },
      {
        category: "Earrings",
        pieces: [
          { src: rubyDiamondStuds, name: "Rubies & Diamonds", desc: "CUSTOM MADE · White Gold · Openwork Lattice" },
          { src: pinkTourmalineDropEarrings, name: "Pink Tourmaline", desc: "White Gold · Diamond Halo & Pavé" },
          { src: tsavoriteDropEarrings, name: "Tsavorite", desc: "Yellow Gold · Diamond Sunburst Halo" },
          { src: diamondChandelierEarrings, name: "Diamonds", desc: "White Gold · Milgrain Openwork" },
          { src: sapphireDoubleHaloStudsV2, name: "Blue Sapphire & Diamonds", desc: "Yellow Gold" },
          { src: pinkTourmalineSunburstEarringsV2, name: "Pink Sapphires", desc: "Yellow Gold · Baguette Diamond Rays" },
          { src: tsavoriteStarburstDropEarringsV2, name: "Tsavorites", desc: "White Gold · Diamond Starburst Frames" },
          { src: pinkTourmalineLaceDropEarrings, name: "Pink Tourmalines", desc: "White Gold · Diamond Lace Openwork" },
          { src: greenTourmalineDropEarrings, name: "Green Tourmalines", desc: "Yellow Gold · Diamond Studs" },
          { src: pinkSapphireHoops, name: "Pink Sapphires", desc: "Rose Gold · Inside-Out Setting" },
          { src: sapphireEarrings, name: "Blue Sapphires", desc: "White Gold · Double Diamond Halo" },
          { src: aquamarineEarrings, name: "Aquamarine", desc: "Yellow Gold · Diamonds" },
          { src: tourmalinePearDropEarrings, name: "Pink & Green Tourmalines", desc: "White Gold · Diamond Halo" },
          { src: sapphireCircleDropEarrings, name: "Blue Sapphires - 3 Carat", desc: "CUSTOM MADE · White Gold · Diamond Circle Frames" },
          { src: multiGemLatticeHoops, name: "Sapphires, Rubies & Aquamarines", desc: "CUSTOM MADE · Yellow Gold · Cabochon Setting" },
          { src: tanzaniteDiamondEarrings1, name: "Tanzanites & Diamonds", desc: "White Gold" },
          { src: tsavoriteDiamondEarrings, name: "Tsavorites & Diamonds", desc: "White Gold" },
          { src: blueSapphireDiamondEarrings, name: "Blue Sapphires & Diamonds", desc: "White Gold" },
          { src: tanzaniteDiamondEarrings2, name: "Tanzanites & Diamonds", desc: "Yellow Gold" },
          { src: tourmalineEarrings1, name: "Tourmalines", desc: "Yellow Gold · Mixed Gems" },
          { src: tourmalineEarrings2, name: "Multi-Colour Tourmalines", desc: "Yellow Gold · Drop Setting" },
          { src: tourmalineEarrings3, name: "Tourmalines", desc: "Yellow Gold · Mixed Colours" },
          { src: tourmalineEarrings4, name: "Tourmalines", desc: "Yellow Gold · Tri-Colour" },
          { src: spinelEarrings, name: "Spinels", desc: "Yellow Gold · Mixed Colours" },
          { src: blueSapphireDiamondStuds, name: "Blue Sapphires & Diamonds", desc: "Gold" },
          { src: blueSapphireDiamondStuds2, name: "Blue Sapphires & Diamonds", desc: "Gold" },
          { src: tourmalineDiamondDropEarrings, name: "Tourmalines & Diamonds", desc: "Gold" },
          { src: berylStoneEarrings, name: "Beryl - 16 Carat", desc: "Gold · Diamond Studs" },
          { src: whiteSapphireEarringsImg, name: "White Sapphires", desc: "Gold · Rose Tones" },
          { src: peridotYellowSapphireEarrings, name: "Peridot & Yellow Sapphire", desc: "Gold" },
          { src: pinkTourmalinePinkSapphireEarrings, name: "Pink Tourmaline & Pink Sapphire", desc: "Gold · Calibrated Stones" },
          { src: multiColourSapphireEarrings, name: "Multi-Colour Sapphires", desc: "Gold · Chain Drop" },
          { src: yellowSapphireDiamondEarrings, name: "Pale Yellow Sapphire & Diamonds", desc: "Gold" },
        ],
      },
      {
        category: "Bracelets",
        pieces: [
          { src: pinkSapphireTennisBracelet, name: "Pink Sapphires", desc: "White Gold · Diamond Spacers" },
          { src: yellowSapphireBracelet, name: "Yellow Sapphires", desc: "White Gold · Diamond Links" },
          { src: blueSapphireTennisBracelet, name: "Blue Sapphires", desc: "White Gold · Four-Prong Setting" },
        ],
      },
      {
        category: "Bangles",
        pieces: [
          { src: spinelCuffBangle, name: "Pink Tourmalines", desc: "Yellow Gold · Bezel Set" },
          { src: sapphireDiamondCuffBangle, name: "Sapphire & Diamond", desc: "Yellow Gold" },
          { src: zirconSpinelCuffBangle, name: "Champagne & Pink Tourmaline", desc: "Yellow Gold · Bezel Set" },
          { src: sapphireTsavoriteCuffBangle, name: "Yellow Sapphire & Tsavorite", desc: "Yellow Gold" },
          { src: pinkSapphireAmethystCuffBangle, name: "Pink & Purple Sapphire", desc: "Yellow Gold" },
          { src: amethystSapphireCuffBangle, name: "Rose Garnet & Sapphire", desc: "Yellow Gold" },
          { src: tourmalineBangle, name: "Watermelon Tourmaline", desc: "Yellow Gold · Diamond" },
          { src: pinkBlueSapphireCuff, name: "Pink & Blue Sapphire", desc: "CUSTOM MADE · Yellow Gold · Bezel Set" },
          { src: tourmalineTsavoriteCuff, name: "Green Tourmaline & Tsavorite", desc: "CUSTOM MADE · Yellow Gold · Bezel Set" },
        ],
      },
      {
        category: "Necklaces",
        pieces: [
          { src: sapphireFloralClusterNecklace, name: "Blue Sapphires", desc: "White Gold · Diamond Star Tips" },
          { src: multiSapphireFloralNecklace, name: "Multi-Sapphires", desc: "White Gold · Diamond Floral Halos" },
          { src: diamondLetterNecklace, name: "Diamonds", desc: "White Gold · Custom Letter Pendant" },
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
          { src: greenRing, name: "Green Sapphire - 3 Carat", desc: "Sterling Silver · Pear White Sapphires" },
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
          { src: tourmalineBarNecklace, name: "Tourmalines & Morganite", desc: "Sterling Silver" },
          { src: tourmalineBarNecklace2, name: "Rhodolite Garnet & Tsavorite", desc: "Sterling Silver · Mixed Fancy Cuts" },
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
                              {piece.desc.startsWith("CUSTOM MADE") ? (
                                <>
                                  <p className="font-accent text-sm text-gray-500 tracking-wide font-semibold">CUSTOM MADE</p>
                                  <p className="font-accent text-sm text-gray-500 tracking-wide">{piece.desc.replace("CUSTOM MADE · ", "")}</p>
                                </>
                              ) : (
                                <p className="font-accent text-sm text-gray-500 tracking-wide">{piece.desc}</p>
                              )}
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
