import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Theoraux's portfolio of web, mobile, and custom software projects — from e-commerce storefronts and fintech apps to disaster-monitoring systems and CRM platforms.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
