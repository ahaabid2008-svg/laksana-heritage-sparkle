import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
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

const luxeEase = [0.22, 1, 0.36, 1] as const;

const dropdownVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: luxeEase,
      staggerChildren: 0.045,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.98,
    filter: "blur(6px)",
    transition: {
      duration: 0.22,
      ease: luxeEase,
    },
  },
};

const dropdownItemVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: luxeEase,
    },
  },
};

const mobileMenuVariant: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.35,
      ease: luxeEase,
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.28,
      ease: luxeEase,
    },
  },
};

const mobileItemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: luxeEase,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [collectionHover, setCollectionHover] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);
  const [expandedSubChild, setExpandedSubChild] = useState<string | null>(null);
  const [desktopExpandedSub, setDesktopExpandedSub] = useState<string | null>(null);
  const [desktopExpandedSubChild, setDesktopExpandedSubChild] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (href: string, page: string) => {
    const anchor = href;
    setOpen(false);

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
    setCollectionHover(false);

    if (location.pathname === path && hash) {
      const el = document.querySelector(`#${hash}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(path);

      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(`#${hash}`);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 350);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: luxeEase }}
      className={`fixed top-0 left-0 right-0 z-50 luxury-navbar ${
        isScrolled ? "luxury-navbar-scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.15em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.1, ease: luxeEase, delay: 0.15 }}
        >
          <Link to="/" className="font-display text-2xl text-cream">
            LAKSANA
          </Link>
        </motion.div>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.label === "Collection") setCollectionHover(true);
              }}
              onMouseLeave={() => {
                if (item.label === "Collection") setCollectionHover(false);
              }}
            >
              {item.label === "Collection" ? (
                <div className="relative">
                  <Link
                    to={item.href}
                    className="lux-nav-link font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        collectionHover ? "rotate-180 text-gold" : "text-cream/50"
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {collectionHover && (
                      <motion.div
                        variants={dropdownVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 pt-4"
                      >
                        <motion.ul className="luxury-dropdown min-w-[220px] py-3">
                          {collectionSubItems.map((sub) => (
                            <motion.li key={sub.label} variants={dropdownItemVariant}>
                              <button
                                type="button"
                                onClick={() =>
                                  setDesktopExpandedSub(
                                    desktopExpandedSub === sub.label ? null : sub.label
                                  )
                                }
                                className="w-full flex items-center justify-between px-4 py-2.5 font-body text-sm tracking-[0.12em] text-cream/65 hover:text-cream hover:bg-cream/5 transition-colors"
                              >
                                <span>{sub.label}</span>
                                {desktopExpandedSub === sub.label ? (
                                  <ChevronDown size={12} />
                                ) : (
                                  <ChevronRight size={12} />
                                )}
                              </button>

                              <AnimatePresence>
                                {desktopExpandedSub === sub.label && (
                                  <motion.ul
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.25, ease: luxeEase }}
                                    className="overflow-hidden"
                                  >
                                    {sub.children.map((child) => (
                                      <li key={child.label}>
                                        {"children" in child && child.children ? (
                                          <div>
                                            <button
                                              type="button"
                                              onClick={() =>
                                                setDesktopExpandedSubChild(
                                                  desktopExpandedSubChild === child.label
                                                    ? null
                                                    : child.label
                                                )
                                              }
                                              className="w-full flex items-center justify-between pl-8 pr-4 py-2 font-body text-xs tracking-[0.12em] text-cream/50 hover:text-cream hover:bg-cream/5 transition-colors"
                                            >
                                              <span>{child.label}</span>
                                              {desktopExpandedSubChild === child.label ? (
                                                <ChevronDown size={10} />
                                              ) : (
                                                <ChevronRight size={10} />
                                              )}
                                            </button>

                                            <AnimatePresence>
                                              {desktopExpandedSubChild === child.label && (
                                                <motion.ul
                                                  initial={{ opacity: 0, height: 0 }}
                                                  animate={{ opacity: 1, height: "auto" }}
                                                  exit={{ opacity: 0, height: 0 }}
                                                  transition={{ duration: 0.25, ease: luxeEase }}
                                                  className="overflow-hidden"
                                                >
                                                  {child.children.map((grandchild) => (
                                                    <li key={grandchild.label}>
                                                      <button
                                                        type="button"
                                                        onClick={() =>
                                                          handleCollectionSubClick(grandchild.href)
                                                        }
                                                        className="w-full text-left pl-12 pr-4 py-1.5 font-body text-xs tracking-[0.1em] text-cream/40 hover:text-gold hover:bg-cream/5 transition-colors"
                                                      >
                                                        {grandchild.label}
                                                      </button>
                                                    </li>
                                                  ))}
                                                </motion.ul>
                                              )}
                                            </AnimatePresence>
                                          </div>
                                        ) : (
                                          <button
                                            type="button"
                                            onClick={() => handleCollectionSubClick(child.href)}
                                            className="w-full text-left pl-8 pr-4 py-2 font-body text-xs tracking-[0.12em] text-cream/50 hover:text-gold hover:bg-cream/5 transition-colors"
                                          >
                                            {child.label}
                                          </button>
                                        )}
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  className="lux-nav-link font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => handleAnchorClick(item.href, item.page)}
                  className="lux-nav-link font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <motion.button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9, rotate: open ? -12 : 12 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden luxury-mobile-menu overflow-hidden"
          >
            <motion.ul className="flex flex-col gap-5 px-6 py-6">
              {navItems.map((item) => (
                <motion.li key={item.label} variants={mobileItemVariant}>
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
                          type="button"
                          onClick={() => setCollectionOpen(!collectionOpen)}
                          className="p-1 text-cream/50 hover:text-cream transition-colors"
                        >
                          {collectionOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                        </button>
                      </div>

                      <AnimatePresence>
                        {collectionOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: luxeEase }}
                            className="pl-4 mt-3 flex flex-col gap-3 overflow-hidden"
                          >
                            {collectionSubItems.map((sub) => (
                              <li key={sub.label}>
                                <div className="flex items-center justify-between">
                                  <button
                                    type="button"
                                    onClick={() => handleCollectionSubClick(sub.href)}
                                    className="font-body text-xs tracking-[0.15em] uppercase text-cream/50 hover:text-cream transition-colors"
                                  >
                                    {sub.label}
                                  </button>

                                  <button
                                    type="button"
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

                                <AnimatePresence>
                                  {expandedSub === sub.label && (
                                    <motion.ul
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.28, ease: luxeEase }}
                                      className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden"
                                    >
                                      {sub.children.map((child) => (
                                        <li key={child.label}>
                                          {"children" in child && child.children ? (
                                            <div>
                                              <div className="flex items-center justify-between">
                                                <button
                                                  type="button"
                                                  onClick={() => handleCollectionSubClick(child.href)}
                                                  className="font-body text-xs tracking-[0.1em] text-cream/40 hover:text-cream transition-colors"
                                                >
                                                  {child.label}
                                                </button>

                                                <button
                                                  type="button"
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

                                              <AnimatePresence>
                                                {expandedSubChild === child.label && (
                                                  <motion.ul
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.25, ease: luxeEase }}
                                                    className="pl-4 mt-1 flex flex-col gap-1 overflow-hidden"
                                                  >
                                                    {child.children.map((grandchild) => (
                                                      <li key={grandchild.label}>
                                                        <button
                                                          type="button"
                                                          onClick={() =>
                                                            handleCollectionSubClick(grandchild.href)
                                                          }
                                                          className="font-body text-xs tracking-[0.1em] text-cream/30 hover:text-gold transition-colors"
                                                        >
                                                          {grandchild.label}
                                                        </button>
                                                      </li>
                                                    ))}
                                                  </motion.ul>
                                                )}
                                              </AnimatePresence>
                                            </div>
                                          ) : (
                                            <button
                                              type="button"
                                              onClick={() => handleCollectionSubClick(child.href)}
                                              className="font-body text-xs tracking-[0.1em] text-cream/40 hover:text-gold transition-colors"
                                            >
                                              {child.label}
                                            </button>
                                          )}
                                        </li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
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
                      type="button"
                      onClick={() => handleAnchorClick(item.href, item.page)}
                      className="font-body text-sm tracking-[0.15em] uppercase text-cream/70 hover:text-cream transition-colors"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;