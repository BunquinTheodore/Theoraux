import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <TeamSection />
      <CTABanner />
    </>
  );
}
