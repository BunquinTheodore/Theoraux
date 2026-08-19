"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";
import { teamMembers } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

export default function TeamPage() {
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
              Our Team
            </p>
            <h1 className="font-display mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              The people behind Theoraux.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              A passionate team of developers, designers, and strategists
              working together to deliver exceptional software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white dark:bg-black"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Facebook`}
                      className="text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                    >
                      <Facebook size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
