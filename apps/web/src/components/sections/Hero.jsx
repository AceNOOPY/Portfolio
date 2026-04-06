"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import useTypingEffect from "@/hooks/useTypingEffect";

export default function Hero() {
  const line1 = useTypingEffect("whoami", 80, 500);
  const line2 = useTypingEffect("Senior OutSystems Developer", 60, 1500);
  const line3 = useTypingEffect("cat about.txt", 80, 3000);
  const line4 = useTypingEffect(
    "7+ years building enterprise applications with OutSystems...",
    40,
    4000,
  );

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent)] opacity-5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-[var(--accent)]">Adrian Villamor</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--muted)] mb-12">
            Senior OutSystems Developer specializing in scalable enterprise
            applications
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--panel)] border border-[var(--border)] overflow-hidden scanline"
          style={{ borderRadius: "8px" }}
        >
          {/* Terminal header */}
          <div className="bg-[#0d0d0d] px-4 py-3 flex items-center gap-2 border-b border-[var(--border)]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span
              className="ml-4 text-xs text-[var(--muted)]"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              terminal
            </span>
          </div>

          {/* Terminal content */}
          <div
            className="p-6"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)]">$</span>
                <span className="text-[var(--text)]">
                  {line1.displayedText}
                </span>
                {!line1.isComplete && <span className="blink">_</span>}
              </div>

              {line1.isComplete && (
                <div className="text-[var(--muted)] ml-4">
                  {line2.displayedText}
                  {!line2.isComplete && <span className="blink">_</span>}
                </div>
              )}

              {line2.isComplete && (
                <>
                  <div className="h-4" />
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent)]">$</span>
                    <span className="text-[var(--text)]">
                      {line3.displayedText}
                    </span>
                    {!line3.isComplete && <span className="blink">_</span>}
                  </div>
                </>
              )}

              {line3.isComplete && (
                <div className="text-[var(--muted)] ml-4">
                  {line4.displayedText}
                  {!line4.isComplete && <span className="blink">_</span>}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 mt-8"
        >
          <a
            href="https://github.com/AceNOOPY"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[var(--border)] transition-smooth hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderRadius: "6px" }}
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ac-villamor"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-[var(--border)] transition-smooth hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderRadius: "6px" }}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#contact"
            className="p-3 border border-[var(--border)] transition-smooth hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderRadius: "6px" }}
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
