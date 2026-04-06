"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) {
      // Focus first error field (only in browser)
      if (typeof window !== "undefined") {
        const firstErrorField = Object.keys(errors)[0];
        document.getElementById(firstErrorField)?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // For static deployment, create a mailto link
      const subject = `Portfolio Contact: ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:ace.villamor008@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open email client
      window.open(mailtoLink, '_blank');

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error("Contact form error:", error);
      setErrorMessage("Failed to open email client. Please contact directly at ace.villamor008@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSuccess) {
    return (
      <Section title="Contact" id="contact">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-[var(--panel)] border border-[var(--accent)] p-8"
          style={{ borderRadius: "8px" }}
        >
          <div className="text-center">
            <CheckCircle2
              size={48}
              className="text-[var(--success)] mx-auto mb-4"
            />
            <div style={{ fontFamily: "JetBrains Mono, monospace" }}>
              <p className="text-[var(--accent)] mb-2">
                &gt; Email client opened
              </p>
              <p className="text-[var(--muted)] text-sm">
                Your email client has been opened with the message details. Please send the email to complete your message.
              </p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-6 text-sm text-[var(--accent)] hover:underline"
            >
              Send another message
            </button>
          </div>
        </motion.div>
      </Section>
    );
  }

  return (
    <Section title="Contact" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-[var(--muted)] mb-8 text-center">
          Have a project in mind or want to discuss opportunities? Fill out the form below
          and your email client will open with a pre-filled message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
          {errorMessage && (
            <div
              className="p-4 bg-[var(--danger)]/10 border border-[var(--danger)] text-[var(--danger)] text-sm"
              style={{ borderRadius: "6px" }}
            >
              {errorMessage}
            </div>
          )}

          <Input
            label="Name"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Your name"
            required
          />

          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="your.email@example.com"
            required
          />

          <Textarea
            label="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Tell me about your project or inquiry..."
            required
          />

          <Button type="submit" disabled={isSubmitting} variant="primary">
            {isSubmitting ? (
              "Sending..."
            ) : (
              <span className="flex items-center gap-2">
                <Send size={18} />
                Send Message
              </span>
            )}
          </Button>
        </form>
      </motion.div>
    </Section>
  );
}
