import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Heritage", href: "#heritage", page: "/" },
  { label: "Collection", href: "/collection", page: "/collection" },
  { label: "Inclusions", href: "/inclusions", page: "/inclusions" },
  { label: "Contact", href: "#contact", page: "/" },
];

const collectionSubItems = [
  { label: "Gems", href: "/collection#gems" },
  { label: "Jewellery", href: "/collection#jewellery" },
  { label: "Bespoke Gallery", href: "/collection#bespoke-gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (href: string, page: string) => {
    const anchor = href;
    if (location.pathname === page) {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(page);
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  };

  const handleCollectionSubClick = (href: string) => {
    const [path, hash] = href.split("#");
    setOpen(false);
    setCollectionOpen(false);
    if (location.pathname === path && hash) {
      const el = document.querySelector(`#${hash}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(`#${hash}`);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-cream/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-[0.3em] text-cream">
          LAKSANA
        </Link>
        
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.label === "Collection" ? (
                <div className="relative">
                  <Link
                    to={item.href}
                    className="font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown size={14} className="text-cream/50 group-hover:text-cream transition-colors" />
                  </Link>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <ul className="bg-background/95 backdrop-blur-md border border-cream/10 rounded-sm py-2 min-w-[160px]">
                      {collectionSubItems.map((sub) => (
                        <li key={sub.label}>
                          <button
                            onClick={() => handleCollectionSubClick(sub.href)}
                            className="w-full text-left px-4 py-2 font-body text-sm tracking-[0.1em] text-cream/60 hover:text-cream hover:bg-cream/5 transition-colors"
                          >
                            {sub.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  className="font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleAnchorClick(item.href, item.page)}
                  className="font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-cream/10 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.label === "Collection" ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setCollectionOpen(!collectionOpen)}
                        className="p-1 text-cream/50 hover:text-cream transition-colors"
                      >
                        {collectionOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                      </button>
                    </div>
                    {collectionOpen && (
                      <ul className="pl-4 mt-3 flex flex-col gap-3">
                        {collectionSubItems.map((sub) => (
                          <li key={sub.label}>
                            <button
                              onClick={() => handleCollectionSubClick(sub.href)}
                              className="font-body text-xs tracking-[0.15em] uppercase text-cream/50 hover:text-cream transition-colors"
                            >
                              {sub.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleAnchorClick(item.href, item.page);
                    }}
                    className="font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
