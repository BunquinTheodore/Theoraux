"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // Reads DOM state set by the pre-hydration bootstrap script in layout.tsx;
    // must happen post-mount to avoid a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`inline-flex h-8 w-8 items-center justify-center text-current transition-colors hover:opacity-70 ${className}`}
    >
      {isDark === null ? null : isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
