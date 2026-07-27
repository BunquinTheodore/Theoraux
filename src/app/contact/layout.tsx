import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theoraux | Contact",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
