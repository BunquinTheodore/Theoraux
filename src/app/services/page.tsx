"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Zap,
  ShoppingCart,
  Plug,
  Wrench,
  Check,
} from "lucide-react";
import { services } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Zap,
  ShoppingCart,
  Plug,
  Wrench,
};

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">
              End-to-End Solutions for{" "}
              <span className="text-primary-600">Every Need</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-dark/60">
              From initial concept to ongoing support, we offer a comprehensive
              suite of services to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
                >
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                      {Icon && <Icon size={28} />}
                    </div>
                    <h2 className="text-3xl font-bold text-dark">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-dark/60">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check
                            size={16}
                            className="shrink-0 text-primary-600"
                          />
                          <span className="text-dark/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <div className="flex h-[300px] items-center justify-center rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100">
                      {Icon && <Icon size={80} className="text-primary-300" />}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
