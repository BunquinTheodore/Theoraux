import Link from "next/link";
import { Linkedin, Facebook } from "lucide-react";
import Rule from "@/components/ui/Rule";
import Logo from "@/components/ui/Logo";

const primaryLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white text-black dark:border-white/10 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="font-mono text-sm font-medium tracking-[0.15em]">
                THEORAUX
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              Software products for ambitious businesses.
            </p>
            <div className="mt-8 flex gap-5">
              <a
                href="https://www.linkedin.com/company/112286976"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582763437544"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
              <li>
                <a
                  href="mailto:bunquintheodore@gmail.com"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  bunquintheodore@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+639629935762"
                  className="transition-colors hover:text-black dark:hover:text-white"
                >
                  (+63) 962 993 5762
                </a>
              </li>
              <li>Philippines</li>
            </ul>
          </div>
        </div>

        <Rule className="mt-16" />
        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} THEORAUX
          </p>
          <p className="text-xs text-neutral-500">
            Built with care in the Philippines.
          </p>
        </div>
      </div>
    </footer>
  );
}
