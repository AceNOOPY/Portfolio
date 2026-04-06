import { motion } from "motion/react";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`bg-[var(--panel)] border border-[var(--border)] p-6 transition-smooth hover:border-[var(--accent)] ${className}`}
      style={{ borderRadius: "8px" }}
    >
      {children}
    </motion.div>
  );
}
