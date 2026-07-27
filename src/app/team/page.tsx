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
      <section className="bg-light pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600">
              Our Team
            </span>
            <h1 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">
              The People Behind{" "}
              <span className="text-primary-600">Theoraux</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-dark/60">
              A passionate team of developers, designers, and strategists
              working together to deliver exceptional software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-light transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-dark transition-colors hover:bg-primary-600 hover:text-white"
                    >
                      <Linkedin size={14} />
                    </a>
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Facebook`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-dark transition-colors hover:bg-primary-600 hover:text-white"
                    >
                      <Facebook size={14} />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-dark">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary-600">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-dark/60">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              Want to Join Our Team?
            </h2>
            <p className="mt-4 text-lg text-dark/60">
              We&apos;re always looking for talented people who share our passion
              for building great software. If that sounds like you, we&apos;d
              love to hear from you.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hello@theoraux.com"
                className="inline-flex items-center rounded-full bg-primary-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
