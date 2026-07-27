"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Facebook } from "lucide-react";
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
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-dark transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <Linkedin size={12} />
                  </a>
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Facebook`}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-dark transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <Facebook size={12} />
                  </a>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-dark">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary-600">
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
  );
}
