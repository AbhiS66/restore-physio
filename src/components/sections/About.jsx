import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import RevealOnScroll from "../ui/RevealOnScroll";

/* Animated counter that counts up when in view */
function Counter({ target, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration, ease: "easeOut" });
    }
  }, [inView, target, count, duration]);

  return (
    <span ref={ref} className="text-h1 text-primary-deep tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="text-primary/60">{suffix}</span>}
    </span>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about" bg="bg-snow">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left - Pull quote + Stats */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="sr-only">Our Philosophy</h2>
          <SectionLabel>Our Philosophy</SectionLabel>
            <RevealOnScroll>
              <blockquote className="text-h1 text-charcoal leading-tight mb-8">
                <span className="text-primary">"</span>
                Healing is not a destination. It&apos;s a practice and we walk
                beside you at every step.
                <span className="text-primary">"</span>
              </blockquote>
            </RevealOnScroll>
          </div>

          {/* Stats row */}
          <RevealOnScroll>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-charcoal/10">
              <div>
                <Counter target={6} suffix="+" />
                <p className="text-caption text-slate mt-1">Years Experience</p>
              </div>
              <div>
                <Counter target={1500} suffix="+" />
                <p className="text-caption text-slate mt-1">Patients Treated</p>
              </div>
              <div>
                <Counter target={97} suffix="%" />
                <p className="text-caption text-slate mt-1">Recovery Rate</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right - Narrative */}
        <div className="flex flex-col justify-center">
          <RevealOnScroll>
            <p className="text-body text-slate mb-6">
              At Adapt Physiotherapy, we believe that every body tells a story. Pain is not just a
              symptom to be silenced - it&apos;s a signal to be understood. Our approach
              begins with listening. Truly listening. To your history, your goals,
              and the language your body speaks.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-body text-slate mb-6">
              Founded by a team of specialists with backgrounds in orthopaedic surgery,
              sports medicine, and rehabilitation science, Adapt was born from a
              simple conviction: premium care should feel personal, not clinical.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-body text-slate mb-8">
              Every treatment plan is a collaboration - crafted around your
              unique anatomy, lifestyle, and aspirations. Because recovery isn&apos;t
              one-size-fits-all. It&apos;s one-of-a-kind.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-caption text-primary-deep">
                Where science meets compassion
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
