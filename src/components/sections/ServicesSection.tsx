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
import { ArrowUpRight } from "lucide-react";

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
        <SectionHeader label="What We Do" title="Services That Drive Results" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group flex h-full flex-col items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    {Icon && <Icon size={22} />}
                  </div>
                  <div className="flex w-full items-center justify-between gap-2">
                    <h3 className="text-base font-semibold leading-snug text-dark">
                      {service.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-dark/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
