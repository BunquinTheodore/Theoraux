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
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";
import Link from "next/link";

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

export default function ServicesSection() {
  return (
    <section className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Do"
          title="Services That Drive Results"
          description="From concept to deployment, we deliver end-to-end solutions tailored to your specific business needs."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href="/services"
                  className="group block h-full rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-dark">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-dark/60">
                    {service.shortDescription}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
