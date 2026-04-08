"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageEngagement } from "@/lib/analytics";

export function ScrollTracker() {
  const pathname = usePathname();
  const tracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    tracked.current = new Set();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      const thresholds = [25, 50, 75, 90];
      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold);
          trackPageEngagement(pathname, threshold);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
