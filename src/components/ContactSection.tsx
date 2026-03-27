import { MapPin, Phone, Clock } from "lucide-react";

const whatsappNumbers = [
  { display: "0777 900 170", number: "94777900170" },
  { display: "0777 900 118", number: "94777900118" },
  { display: "0777 900 119", number: "94777900119" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-gold/60 mb-4">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream tracking-wide">
            Contact
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Location */}
          <div className="text-center space-y-4 p-8 border border-gold/10 hover:border-gold/30 transition-colors duration-500">
            <MapPin className="w-6 h-6 text-gold mx-auto" />
            <h3 className="font-display text-lg text-cream">Location</h3>
            <p className="font-accent text-cream/50 leading-relaxed">
              Galle Fort<br />
              Galle, Sri Lanka
            </p>
          </div>

          {/* WhatsApp */}
          <div className="text-center space-y-4 p-8 border border-gold/10 hover:border-gold/30 transition-colors duration-500">
            <Phone className="w-6 h-6 text-gold mx-auto" />
            <h3 className="font-display text-lg text-cream">WhatsApp</h3>
            <div className="space-y-3">
              {whatsappNumbers.map((num) => (
                <a
                  key={num.number}
                  href={`https://wa.me/${num.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-accent text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  {num.display}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="text-center space-y-4 p-8 border border-gold/10 hover:border-gold/30 transition-colors duration-500">
            <Clock className="w-6 h-6 text-gold mx-auto" />
            <h3 className="font-display text-lg text-cream">Hours</h3>
            <p className="font-accent text-cream/50 leading-relaxed">
              By Appointment<br />
              & Walk-in Welcome
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
