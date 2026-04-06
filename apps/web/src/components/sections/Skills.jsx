"use client";

import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { skills } from "@/content/portfolio";

export default function Skills() {
  const categories = Object.keys(skills);

  return (
    <Section title="Skills & Tech Stack" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3
              className="text-lg font-semibold mb-4 text-[var(--accent)]"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills[category].map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
