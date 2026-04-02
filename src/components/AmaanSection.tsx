import amaanMicroscope from "@/assets/amaan-microscope.jpeg";
import amaanGemstone from "@/assets/amaan-gemstone.jpeg";

const AmaanSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            Gemologist
          </h2>
          <div className="divider-gold w-24 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div className="relative group">
            <div className="overflow-hidden">
              <img
                src={amaanGemstone}
                alt="Amaan Hussain examining a gemstone at LAKSANA"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="relative group">
            <div className="overflow-hidden">
              <img
                src={amaanMicroscope}
                alt="Amaan Hussain using a GIA microscope for gemstone analysis"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="font-accent text-lg md:text-xl text-cream/60 leading-relaxed italic">
            "As the fourth generation of LAKSANA, I, Amaan Hussain, am deeply proud to carry forward this legacy. Having recently graduated from the Gemological Institute of America (GIA), I bring not only a lifetime of family tradition but also the highest standards of gemological education to our work. Our mission remains unchanged — to craft jewelry of exceptional quality, each piece a story of beauty, heritage, and artistry, while continuing to welcome clients to our home in Galle Fort, where history and craftsmanship meet."
          </p>
          <p className="font-display text-xl text-cream tracking-wide">
            — Amaan Hussain
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmaanSection;
