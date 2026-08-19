"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Rule from "@/components/ui/Rule";
import { network } from "@/lib/data";

export default function NetworkSection() {
  return (
    <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Our Network"
          title="Built around good people."
          description="Beyond our core team, our founder Theodore has built real relationships with founders and operators across industries — people whose work we respect and regularly exchange ideas with."
        />

        <Rule />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {network.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
              className="flex items-center justify-between gap-4 border-b border-black/10 py-6 dark:border-white/10 sm:odd:border-r sm:odd:border-black/10 sm:odd:pr-8 sm:even:pl-8 dark:sm:odd:border-white/10"
            >
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">
                  {person.name}
                </p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {person.role}, {person.company}
                </p>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                {person.industry}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
