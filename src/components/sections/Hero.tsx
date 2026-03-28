"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary-50 opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary-100 opacity-30 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-600">
              Custom Software Solutions
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-dark sm:text-5xl lg:text-6xl">
              Intelligent{" "}
              <span className="text-primary-600">Automation</span> for
              Your Business
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-dark/60">
              Streamline operations &amp; cut tasks to unlock efficiency and drive
              growth. We build custom web, mobile, and software solutions
              tailored to your unique needs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Book a Consultation <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button href="/portfolio" variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-dark">25+</p>
                <p className="text-sm text-dark/50">Projects Delivered</p>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-dark">8+</p>
                <p className="text-sm text-dark/50">Happy Clients</p>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-dark">3+</p>
                <p className="text-sm text-dark/50">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-[500px] w-[500px]">
              {/* Abstract teal shapes */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400 to-primary-600 opacity-10" />
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-3xl border-2 border-primary-200" />
              <div className="absolute top-16 left-16 right-16 bottom-16 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-2xl">
                <div className="flex h-full flex-col items-center justify-center p-8 text-white">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20">
                    <Play size={32} />
                  </div>
                  <p className="text-center text-lg font-medium">
                    Building the future,
                    <br />
                    one solution at a time
                  </p>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 rounded-2xl bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <span className="text-lg text-green-600">&#10003;</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">
                      Project Delivered
                    </p>
                    <p className="text-xs text-dark/50">E-Commerce Platform</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-lg text-primary-600">&#9889;</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">
                      Efficiency Up
                    </p>
                    <p className="text-xs text-dark/50">+45% Productivity</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
