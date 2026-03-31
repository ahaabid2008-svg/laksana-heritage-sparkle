import sapphireHeartInclusion from "@/assets/sapphire-heart-inclusion.jpeg";
import catsEyeGem from "@/assets/cats-eye-gem.jpeg";
import lapisGem from "@/assets/lapis-gem.jpeg";
import demantoidGem from "@/assets/demantoid-gem.jpeg";
import sapphireSpiderweb from "@/assets/sapphire-spiderweb-1.jpeg";

const inclusions = [
  {
    src: sapphireHeartInclusion,
    name: "Heart-Shaped Fingerprint",
    desc: "Sri Lankan Blue Sapphire · Natural heart-shaped healing fingerprint",
    story:
      "Inside this Sri Lankan Blue Sapphire is a tiny golden heart-shaped fingerprint — a natural pattern that formed as the gem healed during heating. A stone signed by nature with love.",
  },
  {
    src: catsEyeGem,
    name: "Quartz Bull's Eye",
    desc: "Classic optical effect with bright center and colorful rings",
    story:
      "This quartz specimen displays a mesmerizing bull's eye pattern — concentric rings of color radiating from a bright center, created by fibrous inclusions that interact with light.",
  },
  {
    src: lapisGem,
    name: "Hackmanite",
    desc: "Tenebrescent sodalite, color-changing under UV light",
    story:
      "Hackmanite is a rare variety of sodalite that changes color when exposed to UV light — a phenomenon called tenebrescence. Its internal structure holds the secret to this reversible magic.",
  },
  {
    src: demantoidGem,
    name: "Demantoid Garnet",
    desc: "Rare green garnet with signature horsetail inclusions",
    story:
      "The prized horsetail inclusions of demantoid garnet — radiating sprays of chrysotile fibers — are among the most celebrated inclusions in gemology, actually increasing the stone's value.",
  },
];

const InclusionsSection = () => {
  return (
    <section id="inclusions" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-foreground/60 mb-4">
            Hidden Worlds Within
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wide">
            Inclusions
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-sm bg-card"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-5">
                <h3 className="font-display text-lg text-foreground mb-1">
                  {item.name}
                </h3>
                <p className="font-accent text-sm text-muted-foreground mb-3">
                  {item.desc}
                </p>
                <p className="font-accent text-sm text-foreground/70 leading-relaxed">
                  {item.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InclusionsSection;
