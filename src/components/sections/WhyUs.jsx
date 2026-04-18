import { motion } from "framer-motion";
import RevealOnScroll, { RevealItem } from "../ui/RevealOnScroll";
import SectionLabel from "../ui/SectionLabel";

const pillars = [
  {
    title: "Evidence-Based",
    description:
      "Every protocol is grounded in the latest research and clinical evidence. No guesswork, no fads — only proven methods.",
  },
  {
    title: "One-on-One Care",
    description:
      "Your therapist sees one patient at a time. Sixty minutes of undivided attention, every session, every time.",
  },
  {
    title: "Holistic Approach",
    description:
      "We treat the person, not just the injury. Your treatment plan considers body, lifestyle, goals, and well-being.",
  },
  {
    title: "Lasting Results",
    description:
      "We don't just relieve pain — we address root causes. Our patients stay better because we treat smarter.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-midnight py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <SectionLabel className="!text-primary/60">Why Restore</SectionLabel>
          <RevealOnScroll>
            <h2 className="text-h1 text-snow">
              Four pillars of exceptional care
            </h2>
          </RevealOnScroll>
        </div>

        <RevealOnScroll stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
          {pillars.map((pillar, i) => (
            <RevealItem key={i} className="h-full">
              <motion.div
                className="group relative h-full p-8 md:p-10 lg:border-l lg:border-snow/10 lg:first:border-l-0"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                transition={{ duration: 0.4 }}
              >
                {/* Top line accent */}
                <div className="w-8 h-px bg-primary mb-8 group-hover:w-12 transition-all duration-500" />

                <h3 className="text-h3 text-snow mb-4">{pillar.title}</h3>
                <p className="text-sm text-snow/50 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
