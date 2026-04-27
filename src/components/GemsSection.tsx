import { motion, type Variants } from "framer-motion";
import sapphireOvalPair from "@/assets/sapphire-oval-pair.jpeg";
import sapphireCushionDeep from "@/assets/sapphire-cushion-deep.jpeg";
import sapphireRoundVivid from "@/assets/sapphire-round-vivid.jpeg";
import yellowSapphireOvalLight from "@/assets/yellow-sapphire-oval-light.jpeg";
import yellowSapphireOvalVivid from "@/assets/yellow-sapphire-oval-vivid.jpeg";
import yellowSapphireHeartNew from "@/assets/yellow-sapphire-heart-new.jpeg";
import pinkSapphirePear from "@/assets/pink-sapphire-pear.jpeg";
import pinkSapphireCushion from "@/assets/pink-sapphire-cushion.jpeg";
import tealSapphireHeart from "@/assets/teal-sapphire-heart.jpeg";
import aquamarineEmeraldDeep from "@/assets/aquamarine-emerald-deep.jpeg";
import aquamarineEmeraldLight from "@/assets/aquamarine-emerald-light.jpeg";
import aquamarineCoffin from "@/assets/aquamarine-coffin.jpeg";
import aquamarinePear from "@/assets/aquamarine-pear.jpeg";
import garnetEmeraldVivid from "@/assets/garnet-emerald-vivid.jpeg";
import garnetOval from "@/assets/garnet-oval.jpeg";
import garnetOvalSmall from "@/assets/garnet-oval-small.jpeg";
import garnetHeart from "@/assets/garnet-heart.jpeg";
import garnetHeartPear from "@/assets/garnet-heart-pear.jpeg";
import garnetPearPair from "@/assets/garnet-pear-pair.jpeg";
import tourmalineRadiantPurple from "@/assets/tourmaline-radiant-purple.jpeg";
import tourmalineOvalPink from "@/assets/tourmaline-oval-pink.jpeg";
import tourmalineBicolourEmerald from "@/assets/tourmaline-bicolour-emerald.jpeg";
import tourmalineGreenEmerald from "@/assets/tourmaline-green-emerald.jpeg";

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
    gems: [
      { src: aquamarineEmeraldDeep, name: "Aquamarine Emerald-Cut", desc: "Deep ocean blue, precision emerald-cut" },
      { src: aquamarineEmeraldLight, name: "Aquamarine Emerald-Cut", desc: "Sky blue, classic emerald-cut" },
      { src: aquamarineCoffin, name: "Aquamarine Coffin-Cut", desc: "Icy blue, unique coffin-cut" },
      { src: aquamarinePear, name: "Aquamarine Pear", desc: "Vivid Swiss blue, pear brilliant-cut" },
    ],
  },
  {
    category: "Tourmaline",
    gems: [
      { src: tourmalineRadiantPurple, name: "Tourmaline Radiant", desc: "Tourmaline, vivid purple radiant-cut" },
      { src: tourmalineOvalPink, name: "Tourmaline Oval", desc: "Tourmaline, deep pink oval-cut" },
      { src: tourmalineBicolourEmerald, name: "Tourmaline Bi-Colour", desc: "Tourmaline, bi-colour emerald-cut" },
      { src: tourmalineGreenEmerald, name: "Tourmaline Emerald-Cut", desc: "Tourmaline, green emerald-cut" },
    ],
  },
  {
    category: "Garnet",
    gems: [
      { src: garnetEmeraldVivid, name: "Green Garnet Emerald-Cut", desc: "Green garnet, vivid emerald-cut" },
      { src: garnetOval, name: "Green Garnet Oval", desc: "Green garnet, brilliant oval-cut" },
      { src: garnetOvalSmall, name: "Green Garnet Oval", desc: "Green garnet, precision oval-cut" },
      { src: garnetHeart, name: "Green Garnet Heart", desc: "Green garnet, heart brilliant-cut" },
      { src: garnetHeartPear, name: "Green Garnet Heart", desc: "Green garnet, heart pear-cut" },
      { src: garnetPearPair, name: "Green Garnet Pear Pair", desc: "Green garnet, matched pear pair" },
    ],
  },
];

const luxeEase = [0.22, 1, 0.36, 1] as const;

const getGemGlowClass = (text: string) => {
  const value = text.toLowerCase();

  if (
    value.includes("blue") ||
    value.includes("sapphire") ||
    value.includes("aquamarine")
  ) {
    return "gem-glow-blue";
  }

  if (
    value.includes("green") ||
    value.includes("emerald") ||
    value.includes("peridot") ||
    value.includes("tourmaline")
  ) {
    return "gem-glow-green";
  }

  if (value.includes("garnet") || value.includes("ruby")) {
    return "gem-glow-red";
  }

  if (value.includes("purple") || value.includes("amethyst")) {
    return "gem-glow-purple";
  }

  if (value.includes("yellow") || value.includes("gold")) {
    return "gem-glow-gold";
  }

  return "gem-glow-neutral";
};

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: luxeEase,
    },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: luxeEase,
    },
  },
};

const GemsSection = () => {
  return (
    <section id="gems" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-cream/60 mb-4">
            Nature&apos;s Masterpieces
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            GEMSTONES
          </h2>

          <motion.div
            className="divider-gold w-24 mx-auto mt-6"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.8, ease: luxeEase }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>

        <div className="space-y-16">
          {gemCategories.map((category) => (
            <div key={category.category} id={`gems-${category.category.toLowerCase()}`}>
              <motion.h3
                className="font-display text-2xl md:text-3xl text-cream tracking-wide mb-6 text-center"
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
              >
                {category.category}
              </motion.h3>

              {category.gems.length === 0 ? (
                <p className="font-accent text-sm text-cream/40 italic col-span-full text-center">
                  Coming soon
                </p>
              ) : (
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.08 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
                >
                  {category.gems.map((gem, index) => (
                    <motion.div
                      key={`${gem.name}-${index}`}
                      variants={item}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className={`group luxury-card relative overflow-hidden ${getGemGlowClass(
                        `${gem.name} ${gem.desc}`
                      )}`}
                    >
                      <div className="luxury-image-wrap">
                        <img
                          src={gem.src}
                          alt={gem.name}
                          loading="lazy"
                          className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <span className="luxe-light-sweep" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                        <h3 className="font-display text-base md:text-lg text-cream">
                          {gem.name}
                        </h3>
                        <p className="font-accent text-sm text-cream/60">
                          {gem.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemsSection;