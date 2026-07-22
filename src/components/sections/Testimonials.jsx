import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import RevealOnScroll from "../ui/RevealOnScroll";
import { testimonials } from "../../data/testimonials";
import { StarIcon, ArrowLeft, ArrowRight } from "../icons/Icons";

const DURATION = 6; // seconds per slide

export default function Testimonials() {
  const [active, setActive] = useState(0);
  // cycleKey is the single source of truth: bump it every time a new slide cycle begins.
  // The progress bar uses this as its key (forcing a remount from scaleX:0 each time).
  // The auto-advance setTimeout uses it as a dep so timer always resets in sync with the bar.
  const [cycleKey, setCycleKey] = useState(0);
  const [hovering, setHovering] = useState(false);
  const pointerStartX = useRef(null);
  const total = testimonials.length;

  const goTo = (index) => {
    const i = ((index % total) + total) % total;
    setActive(i);
    setCycleKey((k) => k + 1);
  };

  // setTimeout (not setInterval) - restarts whenever cycleKey changes, keeping timer + bar in sync.
  // hovering pauses the timer; on mouse-leave we bump cycleKey so bar restarts from 0.
  useEffect(() => {
    if (hovering) return;
    const t = setTimeout(() => {
      setActive((prev) => (prev + 1) % total);
      setCycleKey((k) => k + 1);
    }, DURATION * 1000);
    return () => clearTimeout(t);
  }, [cycleKey, hovering, total]);

  // Pointer events work for both mouse and touch, and setPointerCapture
  // ensures we get the up event even if the pointer leaves the element.
  const handlePointerDown = (e) => {
    pointerStartX.current = e.clientX;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
  };

  const handlePointerUp = (e) => {
    if (pointerStartX.current === null) return;
    const diff = pointerStartX.current - e.clientX;
    pointerStartX.current = null;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(active + 1) : goTo(active - 1);
    }
  };

  const handlePointerCancel = () => { pointerStartX.current = null; };

  const current = testimonials[active];

  return (
    <SectionWrapper id="testimonials" bg="bg-cloud">
      <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
        <SectionLabel className="text-center">Testimonials</SectionLabel>
        <RevealOnScroll>
          <h2 className="text-h1 text-charcoal">
            Stories of recovery, in their own words
          </h2>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => {
            setHovering(false);
            setCycleKey((k) => k + 1); // restart bar from 0 when hover ends
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              goTo(active - 1);
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              goTo(active + 1);
            }
          }}
          style={{ userSelect: "none", cursor: "grab" }}
        >
          {/* Testimonial card */}
          <div className="relative h-105">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                role="group"
                aria-roledescription="testimonial"
                aria-label={`Testimonial ${active + 1} of ${total}`}
                aria-live="polite"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-snow rounded-3xl p-8 md:p-14 text-center w-full h-full flex flex-col justify-between items-stretch"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6 text-sand w-full">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>

                {/* Quote - standardized height */}
                <div className="flex-1 w-full flex items-start mb-6">
                  <p className="text-h3 text-charcoal leading-relaxed font-normal text-balance">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>

                {/* Attribution - fixed height */}
                <div className="h-20 md:h-16 flex flex-col justify-center w-full">
                  <p className="text-sm font-medium text-charcoal">{current.name}</p>
                  <p className="text-caption text-slate mt-1">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow Navigation + Progress indicators */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mt-12">
            {/* Left Arrow - stopPropagation prevents triggering the outer drag handler */}
            <button
              onClick={() => goTo(active - 1)}
              onPointerDown={(e) => e.stopPropagation()}
              className="p-2 text-primary-deep hover:text-primary-dark hover:bg-primary-light/30 rounded-full transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 md:gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  onPointerDown={(e) => e.stopPropagation()}
                  className="relative h-1 rounded-full overflow-hidden cursor-pointer bg-charcoal/10 transition-all duration-300"
                  style={{ width: i === active ? 40 : 20 }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active ? "true" : undefined}
                >
                  {i === active && (
                    // key={cycleKey} forces a true remount so animation always starts from scaleX:0
                    <motion.div
                      key={cycleKey}
                      className="absolute inset-0 bg-primary-deep rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: DURATION, ease: "linear" }}
                      style={{ originX: 0 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => goTo(active + 1)}
              onPointerDown={(e) => e.stopPropagation()}
              className="p-2 text-primary-deep hover:text-primary-dark hover:bg-primary-light/30 rounded-full transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
