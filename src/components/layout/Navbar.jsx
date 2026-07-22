import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, CloseIcon, ChevronDownIcon } from "../icons/Icons";
import Button from "../ui/Button";
import logo from "../../assets/logo.png";

const hashLinks = [
  { label: "About", href: "/#about" },
  { label: "Conditions", href: "/#conditions" },
  { label: "Testimonials", href: "/#testimonials" },
];

const serviceLinks = [
  { label: "Home Visit Physiotherapy", href: "/services/home-visit-physiotherapy" },
  { label: "Knee Pain Physiotherapy", href: "/services/knee-pain-physiotherapy" },
  { label: "Back Pain Physiotherapy", href: "/services/back-pain-physiotherapy" },
  { label: "Neck Pain Physiotherapy", href: "/services/neck-pain-physiotherapy" },
  { label: "Post-Surgery Rehab", href: "/services/post-surgery-rehabilitation" },
  { label: "Parkinson's Rehabilitation", href: "/services/parkinsons-rehabilitation" },
];

const locationLinks = [
  { label: "Physiotherapy in Powai", href: "/physiotherapy-in-powai" },
  { label: "Physiotherapy in Vikhroli", href: "/physiotherapy-in-vikhroli" },
  { label: "Physiotherapy in Hiranandani", href: "/physiotherapy-in-hiranandani" },
  { label: "Physiotherapy in Bhandup", href: "/physiotherapy-in-bhandup" },
  { label: "Physiotherapy in Ghatkopar", href: "/physiotherapy-in-ghatkopar" },
  { label: "Physiotherapy in Saki Naka", href: "/physiotherapy-in-sakinaka" },
];

const techniqueLinks = [
  { label: "Manual Therapy", href: "/techniques/manual-therapy" },
  { label: "IFT", href: "/techniques/interferential-therapy" },
  { label: "Shockwave Therapy", href: "/techniques/shockwave-therapy" },
  { label: "Kinesiology Taping", href: "/techniques/kinesiology-taping" },
  { label: "TENS Therapy", href: "/techniques/tens-therapy" },
];

const PHONE_HREF = "tel:+917738556911";

/* ─── Dropdown ─────────────────────────────────────────────────────────── */
function NavDropdown({ label, links, allLink }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <button
        className="flex items-center gap-1 text-sm tracking-wide text-slate hover:text-charcoal transition-colors duration-300 cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <ChevronDownIcon
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-0 mt-3 bg-snow rounded-2xl shadow-lg border border-charcoal/10 py-3 px-1 min-w-65"
            initial={{ opacity: 0, y: -8, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-0.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm text-slate hover:text-charcoal hover:bg-cloud rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {allLink && (
              <div className="border-t border-charcoal/5 mt-2 pt-2 px-2">
                <Link
                  to={allLink.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-xs font-medium text-primary-deep hover:text-primary-dark rounded-lg transition-colors duration-200"
                >
                  {allLink.label} →
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile Dropdown ──────────────────────────────────────────────────── */
function MobileDropdown({ label, links, allLink, onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-xs">
      <button
        className="flex items-center justify-between w-full text-h3 text-charcoal py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform duration-200 mt-1 ml-2  ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pt-3 pb-2 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={onClose}
                  className="block py-2 text-lg text-slate hover:text-charcoal transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              {allLink && (
                <Link
                  to={allLink.href}
                  onClick={onClose}
                  className="block py-2 text-base font-medium text-primary-deep hover:text-primary-dark transition-colors duration-200"
                >
                  {allLink.label} →
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cloud/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Adapt Physiotherapy"
                className="h-10 md:h-12 w-auto"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {hashLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide text-slate hover:text-charcoal transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}

              <NavDropdown label="Services" links={serviceLinks} allLink={{ label: "All Services", href: "/services/home-visit-physiotherapy" }} />
              <NavDropdown label="Locations" links={locationLinks} />
              <NavDropdown label="Techniques" links={techniqueLinks} allLink={{ label: "All Techniques", href: "/techniques/manual-therapy" }} />

              <Link
                to="/team"
                className="text-sm tracking-wide text-slate hover:text-charcoal transition-colors duration-300"
              >
                Team
              </Link>

              <a
                href="/#contact"
                className="text-sm tracking-wide text-slate hover:text-charcoal transition-colors duration-300"
              >
                Contact
              </a>
            </div>

            {/* Mobile: Call Icon + Toggle */}
            <div className="flex items-center gap-1 lg:hidden">
              <button
                className="text-charcoal p-2 cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-cloud flex flex-col items-center justify-start pt-32 gap-6 overflow-y-auto pb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {hashLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="text-h3 text-charcoal py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <MobileDropdown label="Services" links={serviceLinks} allLink={{ label: "All Services", href: "/services/home-visit-physiotherapy" }} onClose={closeMobile} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.40, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <MobileDropdown label="Locations" links={locationLinks} onClose={closeMobile} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <MobileDropdown label="Techniques" links={techniqueLinks} allLink={{ label: "All Techniques", href: "/techniques/manual-therapy" }} onClose={closeMobile} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/team"
                onClick={closeMobile}
                className="block text-h3 text-charcoal py-2"
              >
                Team
              </Link>
            </motion.div>

            <motion.a
              href="/#contact"
              onClick={closeMobile}
              className="text-h3 text-charcoal py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.64, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}