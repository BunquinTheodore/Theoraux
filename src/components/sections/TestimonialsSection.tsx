"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function TestimonialsSection() {
  return (
    <section className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Testimonials" title="What Our Clients Say" />
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => {
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <Link
                  href={
                    testimonial.projectId
                      ? `/portfolio/${testimonial.projectId}`
                      : "/portfolio"
                  }
                  className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="flex flex-1 items-center text-sm leading-relaxed text-dark/70">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
                      {getInitials(testimonial.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-dark">
                        {testimonial.name}
                      </p>
                      <p className="truncate text-xs text-dark/50">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto shrink-0 text-dark/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600"
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
