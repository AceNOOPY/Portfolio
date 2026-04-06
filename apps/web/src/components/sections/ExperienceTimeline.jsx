"use client";

import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import { experience } from "@/content/portfolio";

export default function ExperienceTimeline() {
  return (
    <Section title="Experience" id="experience">
      <div className="space-y-12">
        {experience.map((job, idx) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 border-l-2 border-[var(--border)]"
          >
            {/* Timeline node */}
            <div
              className="absolute left-[-9px] top-0 w-4 h-4 bg-[var(--accent)] border-2 border-[var(--bg)]"
              style={{ borderRadius: "50%" }}
            />

            <div className="mb-2">
              <h3 className="text-xl font-bold">{job.role}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                <span className="text-[var(--muted)]">{job.company}</span>
                <span className="hidden sm:inline text-[var(--border)]">•</span>
                <span
                  className="text-sm text-[var(--accent)]"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {job.period}
                </span>
              </div>
            </div>

            <ul className="space-y-2 mt-4">
              {job.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx} className="text-[var(--muted)] flex gap-3">
                  <span className="text-[var(--accent)] mt-1.5">▹</span>
                  <span className="flex-1">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
