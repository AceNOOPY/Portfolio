"use client";

import { motion } from "motion/react";
import { Award } from "lucide-react";
import Section from "@/components/ui/Section";
import { certifications } from "@/content/portfolio";

export default function Certifications() {
  return (
    <Section title="Certifications" id="certifications">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[var(--panel)] border border-[var(--border)] p-6 transition-smooth hover:border-[var(--accent)]"
            style={{ borderRadius: "8px" }}
          >
            <Award size={32} className="text-[var(--accent)] mb-4" />
            <h3 className="text-lg font-semibold text-[var(--text)]">{cert}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
