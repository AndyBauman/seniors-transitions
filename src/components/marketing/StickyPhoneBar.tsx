"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { trackPhoneClick } from "@/lib/analytics";

export function StickyPhoneBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-border p-3 lg:hidden z-40">
      <a
        href="tel:5037558555"
        onClick={() => trackPhoneClick("sticky-mobile")}
        className="flex items-center justify-center gap-2 bg-coral hover:bg-coral/90 text-white font-semibold py-3 rounded-sm transition-colors max-w-sm mx-auto uppercase tracking-wider text-sm"
      >
        <Phone className="w-4 h-4" />
        <span>Call to Talk with Our Team</span>
      </a>
    </div>
  );
}
