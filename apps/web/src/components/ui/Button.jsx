import { motion } from "motion/react";

export default function Button({
  children,
  variant = "primary",
  disabled = false,
  ...props
}) {
  const baseClasses =
    "px-6 py-3 font-medium transition-smooth disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-[var(--accent)] text-[var(--bg)] hover:bg-[#0ea472]",
    secondary:
      "border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseClasses} ${variantClasses[variant]}`}
      style={{ borderRadius: "6px" }}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
