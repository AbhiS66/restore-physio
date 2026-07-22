import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PlusIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="10" y1="5" x2="10" y2="15" />
    <line x1="5" y1="10" x2="15" y2="10" />
  </svg>
);

const MinusIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="5" y1="10" x2="15" y2="10" />
  </svg>
);

/**
 * BlogFAQ - Reusable accordion FAQ component.
 * Used across BlogPage, TechniquePage, ServiceDetailPage, and LandingPage.
 *
 * Props:
 * - faqs: array of { question, answer }
 * - variant: "default" | "primary" (default: white bg, primary: tinted bg)
 * - className: additional wrapper classes
 */
export default function BlogFAQ({ faqs = [], variant = "default", className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const bgClass = variant === "primary" ? "bg-primary-light/40 border-primary/10" : "bg-snow border-charcoal/10";

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${bgClass}`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-charcoal pr-4">
                {faq.question}
              </span>
              <span className={`shrink-0 transition-colors duration-300 ${isOpen ? "text-primary-deep" : "text-slate"}`}>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-slate leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}