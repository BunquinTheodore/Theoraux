"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

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
      <section className="bg-light pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600">
              Book a Free Consultation
            </span>
            <h1 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="text-primary-600">Amazing</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-dark/60">
              Tell us about your project and we&apos;ll get back to you within
              24 hours with next steps — no sales pressure, just a clear plan
              for how we&apos;d help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-dark">Get in Touch</h2>
              <p className="mt-4 text-dark/60">
                Have a project in mind? We&apos;d love to hear about it. Fill
                out the form or reach out directly through any of the channels
                below.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Email</p>
                    <a
                      href="mailto:bunquintheodore@gmail.com"
                      className="text-dark/60 transition-colors hover:text-primary-600"
                    >
                      bunquintheodore@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Phone</p>
                    <a
                      href="tel:+639629935762"
                      className="text-dark/60 transition-colors hover:text-primary-600"
                    >
                      (+63) 962 993 5762
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Location</p>
                    <p className="text-dark/60">Philippines · Remote-friendly worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Response Time</p>
                    <p className="text-dark/60">Within 24 hours, guaranteed</p>
                  </div>
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
                <div className="flex h-full items-center justify-center rounded-3xl bg-light p-12 text-center">
                  <div>
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Send size={28} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">
                      Message Sent!
                    </h3>
                    <p className="mt-3 text-dark/60">
                      Thank you for reaching out. We&apos;ll review your message
                      and get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl bg-light p-8 sm:p-10"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-dark"
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
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-dark"
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
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-dark"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
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
                        className="mb-2 block text-sm font-medium text-dark"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
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
                      className="mb-2 block text-sm font-medium text-dark"
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
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-dark outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>
                  <div className="mt-8">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2" size={16} />}
                    </Button>
                    {submitError && (
                      <p className="mt-3 text-sm text-red-600">{submitError}</p>
                    )}
                    <div className="mt-4 flex items-start gap-2 text-xs text-dark/50">
                      <ShieldCheck
                        size={16}
                        className="mt-0.5 shrink-0 text-primary-500"
                      />
                      <p>
                        Your details are kept confidential and are only used to
                        respond to your inquiry. No spam, ever.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Common Questions"
            title="Before You Reach Out"
            description="A few things prospective clients usually want to know."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-primary-600"
                  />
                  <div>
                    <p className="font-semibold text-dark">{faq.question}</p>
                    <p className="mt-2 text-sm leading-relaxed text-dark/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
