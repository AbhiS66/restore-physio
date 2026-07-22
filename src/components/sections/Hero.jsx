import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Button from "../ui/Button";
import { ArrowRight } from "../icons/Icons";

/* Organic flowing gradient background */
function AnimatedBackground({ reduceMotion }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cloud via-primary-light/30 to-cloud" />

      {/* Floating organic shapes - slow, calming motion */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-primary/[0.06] blur-3xl"
        animate={
          reduceMotion
            ? { opacity: 0.8 }
            : {
                x: [0, 30, -20, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.1, 0.95, 1],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { duration: 20, repeat: Infinity, ease: "linear" }
        }
      />
      <motion.div
        className="absolute -bottom-1/3 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-sand/[0.04] blur-3xl"
        animate={
          reduceMotion
            ? { opacity: 0.75 }
            : {
                x: [0, -20, 30, 0],
                y: [0, 30, -20, 0],
                scale: [1, 0.95, 1.1, 1],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { duration: 25, repeat: Infinity, ease: "linear" }
        }
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-[30vw] h-[30vw] rounded-full bg-primary/[0.04] blur-3xl"
        animate={
          reduceMotion
            ? { opacity: 0.7 }
            : {
                x: [0, 40, -10, 0],
                y: [0, -20, 40, 0],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { duration: 18, repeat: Infinity, ease: "linear" }
        }
      />
    </div>
  );
}

/* Staggered text line reveal */
const lineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-x-hidden scrollbar-hide"
      id="hero"
    >
      {/* Animated background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <AnimatedBackground reduceMotion={reduceMotion} />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20 w-full pt-32 pb-20 md:pt-40 md:pb-32"
        style={{ opacity: textOpacity }}
      >
        <div className="max-w-3xl">
          {/* Section label */}
          <motion.span
            className="text-label text-primary-deep block mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Adapt Physiotherapy · Mumbai
          </motion.span>

          {/* Headline - each line reveals separately */}
          <h1 className="text-display text-charcoal mb-8">
            <motion.span
              className="block"
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              Your body holds
            </motion.span>
            <motion.span
              className="block"
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              the wisdom to heal.
            </motion.span>
            <motion.span
              className="block text-primary-deep"
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              We guide the journey.
            </motion.span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            className="text-body text-slate max-w-lg mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Evidence-based rehabilitation delivered with compassion.
            Personalised treatment plans crafted by specialists who listen,
            understand, and heal.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Desktop: Scroll to contact */}

            {/* Desktop */}
            <div className="hidden md:contents">
              <Button href="#contact" size="lg">
                Book Consultation
                <ArrowRight />
              </Button>
            </div>

            {/* Mobile */}
            <div className="contents md:hidden">
              <Button href="tel:+917738556911" size="lg">
                Book Consultation
                <ArrowRight />
              </Button>
            </div>
            <Button href="#services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </motion.div>
        </div>

        {/* Animated separator line */}
        <motion.div
          className="absolute bottom-12 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 h-px bg-charcoal/10"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </section>
  );
}
