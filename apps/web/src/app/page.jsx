import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <ExperienceTimeline />
      <Certifications />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 px-6 text-center text-sm text-[var(--muted)]">
        <p style={{ fontFamily: "JetBrains Mono, monospace" }}>
          &gt; Built with React, Next.js & Tailwind CSS
        </p>
        <p className="mt-2">
          © 2026 Adrian Cristopher V. Villamor. All rights reserved.
        </p>
      </footer>
    </main>
  );
}