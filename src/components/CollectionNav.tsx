import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  subcategories?: NavItem[];
};

const categories: NavItem[] = [
  {
    label: "Gems",
    href: "#gems",
    subcategories: [
      { label: "Sapphires", href: "#gems-sapphires" },
      { label: "Aquamarine", href: "#gems-aquamarine" },
      { label: "Tourmaline", href: "#gems-tourmaline" },
      { label: "Garnet", href: "#gems-garnet" },
    ],
  },
  {
    label: "Jewellery",
    href: "#jewellery",
    subcategories: [
      {
        label: "Gold",
        href: "#jewellery-gold",
        subcategories: [
          { label: "Rings", href: "#jewellery-gold-rings" },
          { label: "Earrings", href: "#jewellery-gold-earrings" },
          { label: "Bracelets", href: "#jewellery-gold-bracelets" },
          { label: "Bangles", href: "#jewellery-gold-bangles" },
          { label: "Necklaces", href: "#jewellery-gold-necklaces" },
        ],
      },
      {
        label: "Sterling Silver",
        href: "#jewellery-sterling-silver",
        subcategories: [
          { label: "Rings", href: "#jewellery-sterling-silver-rings" },
          { label: "Earrings", href: "#jewellery-sterling-silver-earrings" },
          { label: "Bracelets", href: "#jewellery-sterling-silver-bracelets" },
          { label: "Bangles", href: "#jewellery-sterling-silver-bangles" },
          { label: "Necklaces", href: "#jewellery-sterling-silver-necklaces" },
        ],
      },
    ],
  },
  { label: "Bespoke Gallery", href: "#bespoke-gallery" },
];

const CollectionNav = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-background border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-cream/40 mb-4">
          By Category
        </p>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.label}>
              <button
                onClick={() => {
                  if (cat.subcategories) {
                    setExpandedCategory(
                      expandedCategory === cat.label ? null : cat.label
                    );
                  }
                  scrollTo(cat.href);
                }}
                className="w-full flex items-center justify-between py-3 px-2 font-display text-lg tracking-wide text-cream/80 hover:text-cream transition-colors duration-300"
              >
                <span>{cat.label}</span>
                {cat.subcategories &&
                  (expandedCategory === cat.label ? (
                    <ChevronDown size={18} className="text-cream/40" />
                  ) : (
                    <ChevronRight size={18} className="text-cream/40" />
                  ))}
              </button>

              {cat.subcategories && expandedCategory === cat.label && (
                <ul className="pl-6 pb-2 space-y-1">
                  {cat.subcategories.map((sub) => (
                    <li key={sub.label}>
                      {sub.subcategories ? (
                        <div>
                          <button
                            onClick={() => {
                              setExpandedSub(expandedSub === sub.label ? null : sub.label);
                              scrollTo(sub.href);
                            }}
                            className="w-full flex items-center justify-between py-2 px-2 font-accent text-sm tracking-[0.15em] text-cream/50 hover:text-cream transition-colors duration-300"
                          >
                            <span>{sub.label}</span>
                            {expandedSub === sub.label ? (
                              <ChevronDown size={14} className="text-cream/40" />
                            ) : (
                              <ChevronRight size={14} className="text-cream/40" />
                            )}
                          </button>
                          {expandedSub === sub.label && (
                            <ul className="pl-6 pb-1 space-y-1">
                              {sub.subcategories.map((child) => (
                                <li key={child.label}>
                                  <button
                                    onClick={() => scrollTo(child.href)}
                                    className="w-full text-left py-1.5 px-2 font-accent text-xs tracking-[0.15em] text-cream/40 hover:text-cream transition-colors duration-300"
                                  >
                                    {child.label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => scrollTo(sub.href)}
                          className="w-full text-left py-2 px-2 font-accent text-sm tracking-[0.15em] text-cream/50 hover:text-cream transition-colors duration-300"
                        >
                          {sub.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CollectionNav;
