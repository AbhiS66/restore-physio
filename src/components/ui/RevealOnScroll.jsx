import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function RevealOnScroll({
  children,
  className = "",
  stagger = false,
  delay = 0,
  threshold = 0.3,
}) {
  return (
    <motion.div
      className={className}
      variants={stagger ? staggerContainer : { ...variants, visible: { ...variants.visible, transition: { ...variants.visible.transition, delay } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
    >
      {children}
    </motion.div>
  );
}

// Child item for stagger animations
export function RevealItem({ children, className = "" }) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
