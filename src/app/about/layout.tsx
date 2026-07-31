import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Theoraux is a software development team building intelligent automation, custom web, mobile, and software solutions for businesses in the Philippines and beyond.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
