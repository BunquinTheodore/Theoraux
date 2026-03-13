"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { teamMembers } from "@/lib/data";

export default function TeamSection() {
  return (
    <section className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Team"
          title="Meet the People Behind Theoraux"
          description="A passionate team of developers, designers, and strategists dedicated to delivering exceptional results."
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative mx-auto mb-4 aspect-[9/16] w-24 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="112px"
                  className="object-contain object-top"
                />
              </div>
              <h3 className="text-lg font-semibold text-dark">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary-600">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark/60">
                {member.bio}
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={member.socials.linkedin}
                  className="text-dark/30 transition-colors hover:text-primary-600"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={member.socials.twitter}
                  className="text-dark/30 transition-colors hover:text-primary-600"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
