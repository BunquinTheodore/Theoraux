"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl bg-light p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mx-auto mb-6 aspect-9/16 w-28 overflow-hidden rounded-2xl bg-white ring-2 ring-primary-50 shadow-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-contain object-top"
                  />
                </div>
                <h3 className="text-xl font-semibold text-dark">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-600">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-dark/60">
                  {member.bio}
                </p>
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
