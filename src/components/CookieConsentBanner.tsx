"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { COOKIE_CONSENT_KEY, getCookie, setCookie } from "@/lib/cookies";
import type { CookieConsentValue } from "@/lib/cookies";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!getCookie(COOKIE_CONSENT_KEY));
  }, []);

  const respond = (value: CookieConsentValue) => {
    setCookie(COOKIE_CONSENT_KEY, value, 365);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white text-black dark:border-white/10 dark:bg-black dark:text-white"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              We use cookies to improve your experience on this site. Read
              our{" "}
              <Link href="/privacy" className="underline hover:text-black dark:hover:text-white">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="underline hover:text-black dark:hover:text-white">
                Terms of Service
              </Link>{" "}
              to learn more.
            </p>
            <div className="flex shrink-0 gap-3">
              <Button variant="outline" size="sm" onClick={() => respond("rejected")}>
                Reject
              </Button>
              <Button variant="solid" size="sm" onClick={() => respond("accepted")}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
