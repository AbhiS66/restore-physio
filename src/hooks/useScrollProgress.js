import { useScroll, useTransform } from "framer-motion";

export function useScrollProgress(ref, offset = ["start end", "end start"]) {
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  return { scrollYProgress, y, opacity };
}
