"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
];

export function UTMCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    UTM_PARAMS.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        document.cookie = `${param}=${encodeURIComponent(value)};path=/;max-age=${30 * 24 * 60 * 60}`;
      }
    });

    if (!document.cookie.includes("first_visit_source")) {
      const referrer = document.referrer;
      let source = "direct";

      if (referrer.includes("facebook.com")) source = "facebook";
      else if (referrer.includes("google.com")) source = "google";
      else if (referrer.includes("bing.com")) source = "bing";
      else if (referrer.includes("caring.com")) source = "caring";
      else if (referrer.includes("aplaceformom.com")) source = "aplaceformom";
      else if (referrer.includes("seniorliving.org")) source = "seniorliving";
      else if (referrer) source = "referral";

      document.cookie = `first_visit_source=${source};path=/;max-age=${30 * 24 * 60 * 60}`;
      document.cookie = `first_visit_page=${encodeURIComponent(window.location.pathname)};path=/;max-age=${30 * 24 * 60 * 60}`;
      document.cookie = `utm_timestamp=${Date.now()};path=/;max-age=${30 * 24 * 60 * 60}`;
    }
  }, [searchParams]);

  return null;
}
