"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import { education } from "@/content/portfolio";

export default function Education() {
  return (
    <Section title="Education" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-[var(--panel)] border border-[var(--border)] p-8 transition-smooth hover:border-[var(--accent)]"
        style={{ borderRadius: "8px" }}
      >
        <div className="flex items-start gap-4">
          <GraduationCap
            size={40}
            className="text-[var(--accent)] flex-shrink-0"
          />
          <div>
            <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
            <p className="text-lg text-[var(--muted)] mb-1">
              {education.school}
            </p>
            <p className="text-sm text-[var(--muted)]">{education.location}</p>
            <p
              className="text-sm text-[var(--accent)] mt-2"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Graduated: {education.year}
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
