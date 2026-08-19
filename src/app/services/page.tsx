"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const bgRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeIndexRef = useRef(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const items = itemRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );
      const bgNumbers = bgRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );
      if (items.length === 0) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.set(items, { opacity: 0, y: 0 });
        gsap.set(items[0], { opacity: 1 });
        gsap.set(bgNumbers, { opacity: 0 });
        gsap.set(bgNumbers[0], { opacity: 1 });
        activeIndexRef.current = 0;

        const swapTo = (idx: number) => {
          const prev = activeIndexRef.current;
          if (idx === prev) return;

          gsap.to(items[prev], {
            opacity: 0,
            y: -18,
            duration: 0.5,
            ease: "power2.inOut",
            overwrite: "auto",
          });
          gsap.fromTo(
            items[idx],
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.inOut",
              overwrite: "auto",
            }
          );

          if (bgNumbers[prev] && bgNumbers[idx]) {
            gsap.to(bgNumbers[prev], {
              opacity: 0,
              duration: 0.7,
              ease: "power2.inOut",
              overwrite: "auto",
            });
            gsap.to(bgNumbers[idx], {
              opacity: 1,
              duration: 0.7,
              ease: "power2.inOut",
              overwrite: "auto",
            });
          }

          activeIndexRef.current = idx;
        };

        const trigger = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top+=72",
          end: () => "+=" + window.innerHeight * services.length,
          pin: true,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * services.length),
              services.length - 1
            );
            swapTo(idx);
          },
        });

        return () => {
          trigger.kill();
          gsap.set(items, { clearProps: "all" });
          gsap.set(bgNumbers, { clearProps: "all" });
        };
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <section
        ref={containerRef}
        className="relative z-0 overflow-hidden bg-white px-4 pt-32 pb-24 text-black dark:bg-black dark:text-white sm:px-6 sm:pt-40 sm:pb-32 lg:flex lg:h-screen lg:items-center lg:overflow-visible lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                Our Services
              </p>
              <h1 className="font-display mt-4 text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl">
                End-to-end solutions for every need.
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                From initial concept to ongoing support, we offer a
                comprehensive suite of services to bring your vision to life.
              </p>
            </motion.div>
          </div>

          <div className="relative mt-16 divide-y divide-black/10 dark:divide-white/10 lg:col-span-8 lg:mt-0 lg:min-h-[320px] lg:divide-y-0">
            {/* Ghost number watermark, crossfades behind the active service */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 hidden select-none items-center justify-end overflow-hidden lg:flex"
            >
              {services.map((_, index) => (
                <div
                  key={`bg-${index}`}
                  ref={(el) => {
                    bgRefs.current[index] = el;
                  }}
                  className="font-display absolute right-0 text-[200px] leading-none font-semibold text-black/[0.04] xl:text-[260px] dark:text-white/[0.05]"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              ))}
            </div>

            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="relative z-10 scroll-mt-28 py-10 first:pt-0 lg:absolute lg:inset-0 lg:p-0"
              >
                <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(services.length).padStart(2, "0")}
                </span>
                <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
