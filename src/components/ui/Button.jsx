import { motion } from "framer-motion";

const styles = {
  primary:
    "bg-primary-deep text-snow hover:bg-primary-dark",
  secondary:
    "border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-snow",
  ghost:
    "text-charcoal hover:text-primary-dark",
  sand:
    "bg-sand text-snow hover:opacity-90",
  light:
    "bg-snow text-charcoal hover:bg-cloud",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}) {
  const sizeClass =
    size === "lg"
      ? "px-10 py-4 text-base"
      : size === "sm"
        ? "px-5 py-2 text-sm"
        : "px-8 py-3 text-sm";

  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-400 cursor-pointer ${styles[variant]} ${sizeClass} ${className}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      {...props}
    >
      {children}
    </Component>
  );
}
