"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeader from "@/components/ui/SectionHeader";
import Rule from "@/components/ui/Rule";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    title: "Understand",
    description: "We learn how your business and users actually operate.",
  },
  {
    title: "Design",
    description: "We turn requirements into a clear product experience.",
  },
  {
    title: "Build",
    description: "We develop scalable, maintainable software.",
  },
  {
    title: "Ship",
    description: "We launch, measure, improve, and support.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const activeSteps = stepRefs.current.filter(
        (el): el is HTMLDivElement => el !== null
      );
      gsap.set(activeSteps, { opacity: 0.3, y: 14 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * 1.5,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${self.progress})`;
          }
          activeSteps.forEach((el, i) => {
            const local = Math.min(
              Math.max((self.progress - i * 0.25) / 0.25, 0),
              1
            );
            el.style.opacity = String(0.3 + local * 0.7);
            el.style.transform = `translateY(${(1 - local) * 14}px)`;
          });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-0 flex min-h-screen flex-col justify-center bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader label="How We Work" title="Process" />
        <Rule />

        <div className="relative mt-12 h-px w-full bg-black/10 dark:bg-white/10">
          <div
            ref={barRef}
            className="absolute inset-y-0 left-0 h-px w-full origin-left scale-x-0 bg-black dark:bg-white"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
            >
              <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
