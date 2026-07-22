import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import RevealOnScroll from "../ui/RevealOnScroll";
import { conditions } from "../../data/conditions";
import { CheckIcon, ArrowRight } from "../icons/Icons";

export default function Conditions() {
  const [active, setActive] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const tabsRef = useRef(null);
  const current = conditions[active];

  // Show the hint only on mobile, only if the tab list actually overflows
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;

    const check = () => {
      const isMobile = window.innerWidth < 1024;
      const overflows = el.scrollWidth > el.clientWidth + 4; // +4 tolerance
      setShowScrollHint(isMobile && overflows);
    };

    check();
    window.addEventListener("resize", check);

    // Auto-dismiss after 5s so it doesn't linger forever
    const dismiss = setTimeout(() => setShowScrollHint(false), 5000);

    return () => {
      window.removeEventListener("resize", check);
      clearTimeout(dismiss);
    };
  }, []);

  // Hide hint as soon as the user starts scrolling
  const handleTabsScroll = () => {
    if (tabsRef.current && tabsRef.current.scrollLeft > 10) {
      setShowScrollHint(false);
    }
  };

  const handleTabClick = (index) => {
    setActive(index);
    setShowScrollHint(false);
  };

  return (
    <SectionWrapper id="conditions" bg="bg-snow">
      <div className="mb-16 md:mb-20 max-w-2xl">
        <SectionLabel>Conditions We Treat</SectionLabel>
        <RevealOnScroll>
          <h2 className="text-h1 text-charcoal mb-6">
            Expert treatment for a wide spectrum of conditions
          </h2>
          <p className="text-body text-slate">
            Select a condition below to learn how our evidence-based approach can
            help you recover, strengthen, and thrive.
          </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-16">
          {/* Tabs - vertical on desktop, horizontal scroll on mobile */}
          <div className="relative">
            <div
              className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide"
              style={{ WebkitOverflowScrolling: "touch" }}
              ref={tabsRef}
              onScroll={handleTabsScroll}
            >
              {conditions.map((condition, i) => (
                <button
                  key={condition.id}
                  onClick={() => handleTabClick(i)}
                  className={`text-left px-5 py-4 rounded-xl whitespace-nowrap lg:whitespace-normal transition-all duration-300 cursor-pointer flex-shrink-0 snap-start ${
                    active === i
                      ? "bg-primary-deep text-snow"
                      : "bg-transparent text-slate hover:text-charcoal hover:bg-cloud"
                  }`}
                >
                  <span className="text-sm font-medium">{condition.title}</span>
                </button>
              ))}
            </div>

            {/* Gradient fade + animated arrow - indicates scrollability on mobile */}
            <AnimatePresence>
              {showScrollHint && (
                <motion.div
                  className="absolute right-0 top-0 bottom-4 w-20 pointer-events-none lg:hidden z-10 flex items-center justify-end pr-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background:
                      "linear-gradient(to right, transparent, var(--color-snow) 65%)",
                  }}
                >
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="text-primary-deep"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content area */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-cloud rounded-2xl p-8 md:p-12"
              >
                <h3 className="text-h2 text-charcoal mb-4">{current.title}</h3>
                <p className="text-body text-slate mb-8">{current.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-3 text-sm text-charcoal"
                    >
                      <CheckIcon className="w-4 h-4 text-primary-deep flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-primary-deep hover:text-primary-dark mt-8 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  Discuss your condition with us →
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
