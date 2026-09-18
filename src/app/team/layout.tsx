import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Meet Our Team",
  description:
    "Meet the Theoraux team — the developers, designers, and project managers building custom software and automation solutions for our clients.",
  path: "/team",
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
