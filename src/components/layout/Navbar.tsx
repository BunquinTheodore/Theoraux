"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 text-black transition-all duration-300 dark:text-white ${
        scrolled
          ? "border-b border-black/10 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-black/90"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="font-mono text-sm font-medium tracking-[0.15em]">
              THEORAUX
            </span>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-black dark:text-white"
                    : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-black/30 px-5 py-2 text-sm transition-colors hover:border-black hover:bg-black hover:text-white dark:border-white/30 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              Let&apos;s Talk <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-[60] flex flex-col bg-white px-6 py-10 sm:top-[72px] dark:bg-black lg:hidden">
          <div className="flex flex-1 flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-medium tracking-tight ${
                  pathname === link.href
                    ? "text-black dark:text-white"
                    : "text-neutral-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 border border-black/30 px-6 py-4 text-sm transition-colors hover:border-black hover:bg-black hover:text-white dark:border-white/30 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
          >
            Let&apos;s Talk <span aria-hidden>→</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
