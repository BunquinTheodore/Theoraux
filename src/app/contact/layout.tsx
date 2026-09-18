import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Free Project Consultation",
  description:
    "Get in touch with Theoraux to discuss your web, mobile, or custom software project. Let's talk about how intelligent automation can streamline your operations.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
