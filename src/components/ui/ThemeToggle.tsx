"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // Reads DOM state set by the pre-hydration bootstrap script in layout.tsx;
    // must happen post-mount to avoid a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = !document.documentElement.classList.contains("dark");

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      setIsDark(next);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!document.startViewTransition || prefersReducedMotion) {
      applyTheme();
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty("--theme-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-y", `${y}px`);

    document.startViewTransition(applyTheme);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative inline-flex h-8 w-8 items-center justify-center overflow-hidden text-current transition-opacity hover:opacity-70 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark !== null && (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-flex"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
