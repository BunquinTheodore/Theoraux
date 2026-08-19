import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import Process from "@/components/sections/Process";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NetworkSection from "@/components/sections/NetworkSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Theoraux | Home",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <Process />
      <TestimonialsSection />
      <NetworkSection />
      <CTABanner />
    </>
  );
}
