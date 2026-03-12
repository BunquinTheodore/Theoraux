"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { pricingTiers } from "@/lib/data";

export default function PricingSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Pricing"
          title="Simple, Transparent Pricing"
          description="Choose a package that fits your needs. Every project is unique, so prices are starting points — we'll provide a detailed quote after understanding your requirements."
        />
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
      </div>
    </section>
  );
}
