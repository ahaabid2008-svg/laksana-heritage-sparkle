import fireGem from "@/assets/fire-gem.jpeg";
import blueSapphires from "@/assets/blue-sapphires.jpeg";
import pearSapphires from "@/assets/pear-sapphires.jpeg";

import blueSapphireLoose from "@/assets/blue-sapphire-loose.jpeg";
import pinkSapphireCushion from "@/assets/pink-sapphire-cushion.jpeg";
import pinkSapphireOval from "@/assets/pink-sapphire-oval.jpeg";
import blueSapphireCushion from "@/assets/blue-sapphire-cushion.jpeg";
import purpleGarnet from "@/assets/purple-garnet.jpeg";
import royalBlueSapphire from "@/assets/royal-blue-sapphire.jpeg";
import blueSapphireOval from "@/assets/blue-sapphire-oval.jpeg";
import lightBlueSapphire from "@/assets/light-blue-sapphire.jpeg";
import starSapphire from "@/assets/star-sapphire.jpeg";
import blueYellowSapphires from "@/assets/blue-yellow-sapphires.jpeg";
import blueSapphireAsscher from "@/assets/blue-sapphire-asscher.jpeg";
import aquamarineEmeraldCut from "@/assets/aquamarine-emerald-cut.jpeg";
import aquamarineCushion1 from "@/assets/aquamarine-cushion-1.jpeg";
import aquamarineOval from "@/assets/aquamarine-oval.jpeg";
import aquamarineCushion2 from "@/assets/aquamarine-cushion-2.jpeg";
import yellowSapphireOval1 from "@/assets/yellow-sapphire-oval-1.jpeg";
import yellowSapphireOval2 from "@/assets/yellow-sapphire-oval-2.jpeg";
import yellowSapphireHeart from "@/assets/yellow-sapphire-heart.jpeg";
import purpleSapphire from "@/assets/purple-sapphire.jpeg";

const gems = [
  { src: fireGem, name: "Padparadscha Sapphire", desc: "A rare flame-like specimen" },
  { src: blueSapphires, name: "Ceylon Blue Sapphires", desc: "Vivid royal blue, unheated" },
  { src: pearSapphires, name: "Pear-Cut Sapphires", desc: "Hand-selected matching set" },
  { src: blueSapphireLoose, name: "Ceylon Blue Sapphire", desc: "Three generations of blue sapphire expertise" },
  { src: blueYellowSapphires, name: "Blue & Yellow Sapphires", desc: "Unheated Ceylon pair, asscher-cut" },
  { src: starSapphire, name: "Star Sapphire", desc: "Six-rayed asterism, cabochon-cut" },
  { src: blueSapphireCushion, name: "Blue Sapphire Cushion", desc: "Deep royal blue, cushion-cut Ceylon origin" },
  { src: lightBlueSapphire, name: "Ceylon Blue Sapphire", desc: "Light pastel blue, unheated oval" },
  { src: royalBlueSapphire, name: "Royal Blue Sapphire", desc: "Saturated velvet blue, cushion-cut" },
  { src: blueSapphireOval, name: "Blue Sapphire Oval", desc: "Intense cornflower blue, oval faceted" },
  { src: purpleGarnet, name: "Rhodolite Garnet", desc: "Vivid purple-pink, precision radiant cut" },
  { src: pinkSapphireOval, name: "Pink Sapphire Oval", desc: "Intense pink hue, oval faceted" },
  { src: blueSapphireAsscher, name: "Blue Sapphire Asscher", desc: "Clean unheated blue, precision asscher-cut" },
  { src: pinkSapphireCushion, name: "Pink Sapphire", desc: "Vivid cushion-cut, exceptional brilliance" },
  { src: aquamarineEmeraldCut, name: "Aquamarine Emerald Cut", desc: "Ice-blue Brazilian aquamarine, step-cut" },
  { src: aquamarineCushion1, name: "Aquamarine Cushion", desc: "Deep teal-blue, cushion-cut brilliance" },
  { src: aquamarineOval, name: "Aquamarine Oval", desc: "Vivid sky-blue, precision oval faceted" },
  { src: aquamarineCushion2, name: "Aquamarine Cushion", desc: "Saturated ocean-blue, cushion-cut" },
  { src: yellowSapphireOval1, name: "Yellow Sapphire Oval", desc: "Warm golden Ceylon, unheated oval" },
  { src: yellowSapphireOval2, name: "Yellow Sapphire Oval", desc: "Vivid canary yellow, precision oval-cut" },
  { src: yellowSapphireHeart, name: "Yellow Sapphire Heart", desc: "Radiant golden heart, Ceylon origin" },
  { src: purpleSapphire, name: "Purple Sapphire", desc: "Vivid violet, oval-cut Ceylon origin" },
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
            Rare Gemstones
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {gems.map((gem) => (
            <div key={gem.name} className="group relative overflow-hidden">
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
      </div>
    </section>
  );
};

export default GemsSection;
