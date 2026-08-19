"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Rule from "@/components/ui/Rule";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 text-black dark:bg-black dark:text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader label="What We Do" title="Services" />
      </div>

      <Rule />
      <div>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
          >
            <Link
              href={`/services#${service.id}`}
              className="group relative block border-b border-black/10 transition-colors duration-300 hover:bg-black/[0.02] dark:border-white/10 dark:hover:bg-white/[0.04]"
              style={{
                marginLeft: "calc(50% - 50vw)",
                marginRight: "calc(50% - 50vw)",
              }}
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 sm:flex-row sm:items-center sm:gap-8 sm:px-6 sm:py-8 lg:px-8">
                <span className="font-mono text-sm text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white sm:w-10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 sm:w-64 sm:shrink-0 sm:text-3xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:flex-1">
                  {service.shortDescription}
                </p>
                <span className="hidden font-mono text-sm text-neutral-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white sm:block">
                  →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
