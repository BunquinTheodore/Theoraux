"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
            Let&apos;s discuss your project and find the perfect solution for
            your business. Book a free consultation with our team today.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary" size="lg">
              Book a Consultation <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
