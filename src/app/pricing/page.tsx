"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { pricingTiers } from "@/lib/data";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";

export default function PricingPage() {
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
              Pricing
            </span>
            <h1 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">
              Transparent{" "}
              <span className="text-primary-600">Pricing</span> for Every
              Budget
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-dark/60">
              Choose a package that fits your needs. Every project is unique, so
              these are starting points — we&apos;ll create a detailed proposal
              after understanding your requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative rounded-3xl p-8 ${
                  tier.highlighted
                    ? "bg-dark text-white shadow-2xl ring-2 ring-primary-500 scale-[1.02]"
                    : "bg-light text-dark"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span
                    className={`ml-2 text-sm ${
                      tier.highlighted ? "text-gray-300" : "text-dark/50"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm ${
                    tier.highlighted ? "text-gray-300" : "text-dark/60"
                  }`}
                >
                  {tier.description}
                </p>
                <div className="my-8 h-px bg-gray-200/20" />
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          tier.highlighted
                            ? "text-primary-400"
                            : "text-primary-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.highlighted ? "text-gray-200" : "text-dark/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 opacity-40"
                    >
                      <X size={16} className="mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="/contact"
                    variant={tier.highlighted ? "primary" : "outline"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 rounded-3xl bg-light p-10 text-center"
          >
            <h3 className="text-2xl font-bold text-dark">
              Not sure which plan is right for you?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-dark/60">
              Every project is different. Book a free consultation and
              we&apos;ll help you figure out the best approach and provide a
              detailed, no-obligation quote tailored to your specific
              requirements.
            </p>
            <div className="mt-6">
              <Button href="/contact">Book a Free Consultation</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
