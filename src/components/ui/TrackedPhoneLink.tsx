"use client";

import { trackPhoneClick } from "@/lib/analytics";

interface TrackedPhoneLinkProps {
  location: string;
  className?: string;
  children?: React.ReactNode;
}

export function TrackedPhoneLink({
  location,
  className,
  children,
}: TrackedPhoneLinkProps) {
  return (
    <a
      href="tel:5037558555"
      onClick={() => trackPhoneClick(location)}
      className={className}
    >
      {children || "(503) 755-8555"}
    </a>
  );
}
