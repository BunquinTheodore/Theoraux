import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Our Software Studio",
  description:
    "Theoraux is a software development team building intelligent automation, custom web, mobile, and software solutions for businesses in the Philippines and beyond.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
