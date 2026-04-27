import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Heritage", href: "#heritage", page: "/" },
  { label: "Collection", href: "/collection", page: "/collection" },
  { label: "Bespoke Gallery", href: "/bespoke-gallery", page: "/bespoke-gallery" },
  { label: "Inclusions", href: "/inclusions", page: "/inclusions" },
  { label: "Contact", href: "#contact", page: "/" },
];

const collectionSubItems = [
  {
    label: "Gems",
    href: "/collection#gems",
    children: [
      { label: "Sapphires", href: "/collection#gems-sapphires" },
      { label: "Aquamarine", href: "/collection#gems-aquamarine" },
      { label: "Tourmaline", href: "/collection#gems-tourmaline" },
      { label: "Garnet", href: "/collection#gems-garnet" },
    ],
  },
  {
    label: "Jewellery",
    href: "/collection#jewellery",
    children: [
      {
        label: "Gold",
        href: "/collection#jewellery-gold",
        children: [
          { label: "Rings", href: "/collection#jewellery-gold-rings" },
          { label: "Earrings", href: "/collection#jewellery-gold-earrings" },
          { label: "Bracelets", href: "/collection#jewellery-gold-bracelets" },
          { label: "Bangles", href: "/collection#jewellery-gold-bangles" },
          { label: "Necklaces", href: "/collection#jewellery-gold-necklaces" },
        ],
      },
      {
        label: "Sterling Silver",
        href: "/collection#jewellery-sterling-silver",
        children: [
          { label: "Rings", href: "/collection#jewellery-sterling-silver-rings" },
          { label: "Earrings", href: "/collection#jewellery-sterling-silver-earrings" },
          { label: "Bracelets", href: "/collection#jewellery-sterling-silver-bracelets" },
          { label: "Bangles", href: "/collection#jewellery-sterling-silver-bangles" },
          { label: "Necklaces", href: "/collection#jewellery-sterling-silver-necklaces" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);
  const [expandedSubChild, setExpandedSubChild] = useState<string | null>(null);
  const [desktopExpandedSub, setDesktopExpandedSub] = useState<string | null>(null);
  const [desktopExpandedSubChild, setDesktopExpandedSubChild] = useState<string | null>(null);
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
                    <ChevronDown
                      size={14}
                      className="text-cream/50 group-hover:text-cream transition-colors"
                    />
                  </Link>

                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <ul className="bg-background/95 backdrop-blur-md border border-cream/10 rounded-sm py-2 min-w-[180px]">
                      {collectionSubItems.map((sub) => (
                        <li key={sub.label}>
                          {sub.children ? (
                            <div>
                              <button
                                onClick={() =>
                                  setDesktopExpandedSub(
                                    desktopExpandedSub === sub.label ? null : sub.label
                                  )
                                }
                                className="w-full flex items-center justify-between px-4 py-2 font-body text-sm tracking-[0.1em] text-cream/60 hover:text-cream hover:bg-cream/5 transition-colors"
                              >
                                <span>{sub.label}</span>
                                {desktopExpandedSub === sub.label ? (
                                  <ChevronDown size={12} />
                                ) : (
                                  <ChevronRight size={12} />
                                )}
                              </button>

                              {desktopExpandedSub === sub.label && (
                                <ul className="py-1">
                                  {sub.children.map((child) => (
                                    <li key={child.label}>
                                      {child.children ? (
                                        <div>
                                          <button
                                            onClick={() =>
                                              setDesktopExpandedSubChild(
                                                desktopExpandedSubChild === child.label
                                                  ? null
                                                  : child.label
                                              )
                                            }
                                            className="w-full flex items-center justify-between pl-8 pr-4 py-1.5 font-body text-xs tracking-[0.1em] text-cream/50 hover:text-cream hover:bg-cream/5 transition-colors"
                                          >
                                            <span>{child.label}</span>
                                            {desktopExpandedSubChild === child.label ? (
                                              <ChevronDown size={10} />
                                            ) : (
                                              <ChevronRight size={10} />
                                            )}
                                          </button>

                                          {desktopExpandedSubChild === child.label && (
                                            <ul className="py-1">
                                              {child.children.map((grandchild) => (
                                                <li key={grandchild.label}>
                                                  <button
                                                    onClick={() =>
                                                      handleCollectionSubClick(grandchild.href)
                                                    }
                                                    className="w-full text-left pl-12 pr-4 py-1.5 font-body text-xs tracking-[0.1em] text-cream/40 hover:text-cream hover:bg-cream/5 transition-colors"
                                                  >
                                                    {grandchild.label}
                                                  </button>
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                        </div>
                                      ) : (
                                        <button
                                          onClick={() => handleCollectionSubClick(child.href)}
                                          className="w-full text-left pl-8 pr-4 py-1.5 font-body text-xs tracking-[0.1em] text-cream/50 hover:text-cream hover:bg-cream/5 transition-colors"
                                        >
                                          {child.label}
                                        </button>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <button
                              onClick={() => handleCollectionSubClick(sub.href)}
                              className="w-full text-left px-4 py-2 font-body text-sm tracking-[0.1em] text-cream/60 hover:text-cream hover:bg-cream/5 transition-colors"
                            >
                              {sub.label}
                            </button>
                          )}
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

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
                        {collectionOpen ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronRight size={18} />
                        )}
                      </button>
                    </div>

                    {collectionOpen && (
                      <ul className="pl-4 mt-3 flex flex-col gap-3">
                        {collectionSubItems.map((sub) => (
                          <li key={sub.label}>
                            {sub.children ? (
                              <div>
                                <div className="flex items-center justify-between">
                                  <button
                                    onClick={() => handleCollectionSubClick(sub.href)}
                                    className="font-body text-xs tracking-[0.15em] uppercase text-cream/50 hover:text-cream transition-colors"
                                  >
                                    {sub.label}
                                  </button>

                                  <button
                                    onClick={() =>
                                      setExpandedSub(expandedSub === sub.label ? null : sub.label)
                                    }
                                    className="p-1 text-cream/40 hover:text-cream transition-colors"
                                  >
                                    {expandedSub === sub.label ? (
                                      <ChevronDown size={14} />
                                    ) : (
                                      <ChevronRight size={14} />
                                    )}
                                  </button>
                                </div>

                                {expandedSub === sub.label && (
                                  <ul className="pl-4 mt-2 flex flex-col gap-2">
                                    {sub.children.map((child) => (
                                      <li key={child.label}>
                                        {child.children ? (
                                          <div>
                                            <div className="flex items-center justify-between">
                                              <button
                                                onClick={() => handleCollectionSubClick(child.href)}
                                                className="font-body text-xs tracking-[0.1em] text-cream/40 hover:text-cream transition-colors"
                                              >
                                                {child.label}
                                              </button>

                                              <button
                                                onClick={() =>
                                                  setExpandedSubChild(
                                                    expandedSubChild === child.label
                                                      ? null
                                                      : child.label
                                                  )
                                                }
                                                className="p-1 text-cream/30 hover:text-cream transition-colors"
                                              >
                                                {expandedSubChild === child.label ? (
                                                  <ChevronDown size={12} />
                                                ) : (
                                                  <ChevronRight size={12} />
                                                )}
                                              </button>
                                            </div>

                                            {expandedSubChild === child.label && (
                                              <ul className="pl-4 mt-1 flex flex-col gap-1">
                                                {child.children.map((grandchild) => (
                                                  <li key={grandchild.label}>
                                                    <button
                                                      onClick={() =>
                                                        handleCollectionSubClick(grandchild.href)
                                                      }
                                                      className="font-body text-xs tracking-[0.1em] text-cream/30 hover:text-cream transition-colors"
                                                    >
                                                      {grandchild.label}
                                                    </button>
                                                  </li>
                                                ))}
                                              </ul>
                                            )}
                                          </div>
                                        ) : (
                                          <button
                                            onClick={() => handleCollectionSubClick(child.href)}
                                            className="font-body text-xs tracking-[0.1em] text-cream/40 hover:text-cream transition-colors"
                                          >
                                            {child.label}
                                          </button>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ) : (
                              <button
                                onClick={() => handleCollectionSubClick(sub.href)}
                                className="font-body text-xs tracking-[0.15em] uppercase text-cream/50 hover:text-cream transition-colors"
                              >
                                {sub.label}
                              </button>
                            )}
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