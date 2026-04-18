import { motion } from "framer-motion";

export default function SectionLabel({ children, className = "" }) {
  return (
    <motion.span
      className={`text-label text-slate block mb-4 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  );
}
