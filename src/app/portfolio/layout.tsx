import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Software & Automation Portfolio",
  description:
    "Explore Theoraux's websites, custom systems, and n8n automation case studies, including customer support, appointment booking, and AI lead qualification.",
  path: "/portfolio",
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
