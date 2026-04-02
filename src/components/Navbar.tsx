import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Heritage", href: "#heritage", page: "/" },
  { label: "Collection", href: "/collection", page: "/collection" },
  { label: "Inclusions", href: "/inclusions", page: "/inclusions" },
  { label: "Contact", href: "#contact", page: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (href: string, page: string) => {
    const anchor = href; // e.g. "#heritage"
    if (location.pathname === page) {
      // Same page, just scroll
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Navigate to home page, then scroll after load
      navigate(page);
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
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
            <li key={item.label}>
              {item.href.startsWith("/") ? (
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
                {item.href.startsWith("/") ? (
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
