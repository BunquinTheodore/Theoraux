import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Theoraux's services: web development, mobile app development, custom software & systems, UI/UX design, process automation, e-commerce, API integration, and ongoing maintenance & support.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
