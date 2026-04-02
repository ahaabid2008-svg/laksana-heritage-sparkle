import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";

const whatsappNumbers = [
  { display: "074 190 0974", number: "94741900974" },
  { display: "077 790 0170", number: "94777900170" },
  { display: "076 790 0974", number: "94767900974" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-cream/60 mb-4">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            Contact
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Location */}
          <div className="text-center space-y-4 p-8 border border-cream/10 hover:border-cream/30 transition-colors duration-500">
            <MapPin className="w-6 h-6 text-cream mx-auto" />
            <h3 className="font-display text-lg text-cream">Location</h3>
            <a
              href="https://maps.app.goo.gl/deM1sDEcGMU9gBZ5A?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent text-cream/50 leading-relaxed hover:text-cream transition-colors duration-300"
            >
              Galle Fort<br />
              Galle, Sri Lanka
            </a>
          </div>

          {/* WhatsApp */}
          <div className="text-center space-y-4 p-8 border border-cream/10 hover:border-cream/30 transition-colors duration-500">
            <Phone className="w-6 h-6 text-cream mx-auto" />
            <h3 className="font-display text-lg text-cream">WhatsApp</h3>
            <div className="space-y-3">
              {whatsappNumbers.map((num) => (
                <a
                  key={num.number}
                  href={`https://wa.me/${num.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-accent text-cream/50 hover:text-cream transition-colors duration-300"
                >
                  {num.display}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="text-center space-y-4 p-8 border border-cream/10 hover:border-cream/30 transition-colors duration-500">
            <Clock className="w-6 h-6 text-cream mx-auto" />
            <h3 className="font-display text-lg text-cream">Hours</h3>
            <div className="font-accent text-cream/50 text-sm leading-relaxed space-y-1">
              <div className="flex justify-between gap-4"><span>Thursday</span><span>9 AM – 7 PM</span></div>
              <div className="flex justify-between gap-4"><span>Friday</span><span>9 AM – Midday</span></div>
              <div className="flex justify-between gap-4"><span>(Good Friday)</span><span>1:30 – 7 PM</span></div>
              <p className="text-cream/40 italic pt-1">Hours might differ</p>
              <div className="flex justify-between gap-4"><span>Saturday</span><span>9 AM – 7 PM</span></div>
              <div className="flex justify-between gap-4"><span>Sunday</span><span>9 AM – 7 PM</span></div>
              <div className="flex justify-between gap-4"><span>Monday</span><span>9 AM – 7 PM</span></div>
              <div className="flex justify-between gap-4"><span>Tuesday</span><span>9 AM – 7 PM</span></div>
              <div className="flex justify-between gap-4"><span>Wednesday</span><span>9 AM – 7 PM</span></div>
            </div>
          </div>
        </div>

        {/* Social & Email Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="mailto:info.laksana@gmail.com"
            className="flex items-center gap-2 font-accent text-sm text-cream/50 hover:text-cream transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            info.laksana@gmail.com
          </a>
          <a
            href="https://www.instagram.com/laksana._"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-accent text-sm text-cream/50 hover:text-cream transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
            @laksana._
          </a>
          <a
            href="https://www.facebook.com/laksanajewellery"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-accent text-sm text-cream/50 hover:text-cream transition-colors duration-300"
          >
            <Facebook className="w-4 h-4" />
            LAKSANA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
