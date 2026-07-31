import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Theoraux team — the developers, designers, and project managers building custom software and automation solutions for our clients.",
  alternates: { canonical: "/team" },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
