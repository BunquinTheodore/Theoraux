import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Software & Automation Services",
  description:
    "Explore Theoraux's services: web development, mobile app development, custom software & systems, UI/UX design, process automation, e-commerce, API integration, and ongoing maintenance & support.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
