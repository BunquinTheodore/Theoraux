"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import Rule from "@/components/ui/Rule";

const faqs = [
  {
    question: "How soon can you start?",
    answer:
      "Most engagements kick off within 1-2 weeks of our discovery call, depending on project scope and our current schedule.",
  },
  {
    question: "I don't have a technical spec — is that a problem?",
    answer:
      "Not at all. Most clients come to us with a business problem, not a spec. The free consultation is where we help translate that into a concrete plan.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We offer ongoing maintenance and support packages to keep your product running smoothly well after launch.",
  },
  {
    question: "Will you sign an NDA?",
    answer:
      "Yes. We're glad to sign an NDA before diving into specifics if your project involves sensitive or proprietary information.",
  },
];

const inputClasses =
  "w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm text-black outline-none transition-colors focus:border-black placeholder:text-neutral-400 dark:border-white/20 dark:text-white dark:focus:border-white dark:placeholder:text-neutral-500";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/bunquintheodore@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Contact Form - ${formData.name || "Website Visitor"}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", service: "", budget: "", message: "" });
    } catch {
      setSubmitError(
        "We could not send your message right now. Please try again in a moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-white px-4 pt-36 pb-20 text-black dark:bg-black dark:text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
              Book a Free Consultation
            </p>
            <h1 className="font-display mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s build something amazing.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              Tell us about your project and we&apos;ll get back to you
              within 24 hours with next steps — no sales pressure, just a
              clear plan for how we&apos;d help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                Get in Touch
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Have a project in mind? We&apos;d love to hear about it. Fill
                out the form or reach out directly through any of the
                channels below.
              </p>
              <div className="mt-10 space-y-6 border-t border-black/10 pt-8 dark:border-white/10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                    Email
                  </p>
                  <a
                    href="mailto:bunquintheodore@gmail.com"
                    className="mt-1 block transition-colors hover:text-neutral-500 dark:hover:text-neutral-400"
                  >
                    bunquintheodore@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                    Phone
                  </p>
                  <a
                    href="tel:+639629935762"
                    className="mt-1 block transition-colors hover:text-neutral-500 dark:hover:text-neutral-400"
                  >
                    (+63) 962 993 5762
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                    Location
                  </p>
                  <p className="mt-1">
                    Philippines · Remote-friendly worldwide
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                    Response Time
                  </p>
                  <p className="mt-1">Within 24 hours, guaranteed</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="flex h-full min-h-[400px] items-center justify-center border border-black/10 p-12 text-center dark:border-white/10">
                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-tight">
                      Message Sent
                    </h3>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                      Thank you for reaching out. We&apos;ll review your
                      message and get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-xs uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className={inputClasses}
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="custom">Custom Software</option>
                        <option value="design">UI/UX Design</option>
                        <option value="automation">Process Automation</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="api">API Integration</option>
                        <option value="support">Maintenance &amp; Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-xs uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className={inputClasses}
                      >
                        <option value="">Select budget range</option>
                        <option value="500-1500">$500 - $1,500</option>
                        <option value="1500-3000">$1,500 - $3,000</option>
                        <option value="3000-5000">$3,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000+">$10,000+</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs uppercase tracking-[0.1em] text-neutral-500 dark:text-neutral-400"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>
                  <div className="mt-10">
                    <Button
                      type="submit"
                      variant="solid"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send size={16} />}
                    </Button>
                    {submitError && (
                      <p className="mt-3 text-sm text-red-600">{submitError}</p>
                    )}
                    <p className="mt-4 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                      Your details are kept confidential and are only used to
                      respond to your inquiry. No spam, ever.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            label="Common Questions"
            title="Before You Reach Out"
            description="A few things prospective clients usually want to know."
          />
          <Rule />
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 pt-12 sm:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-medium">{faq.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
