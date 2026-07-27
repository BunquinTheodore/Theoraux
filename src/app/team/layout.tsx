import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theoraux | Team",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
