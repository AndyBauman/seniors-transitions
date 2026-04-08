declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackMetaPixelLead(data: {
  service_type?: string;
  city?: string;
}) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "Consultation Request",
      content_category: data.service_type || "Senior Home Transition",
      city: data.city,
      value: 0,
      currency: "USD",
    });
  }
}

export function trackMetaPixelFormStep(step: number, stepName: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "FormStep", {
      step_number: step,
      step_name: stepName,
    });
  }
}

export function trackMetaPixelViewContent(contentName: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", { content_name: contentName });
  }
}

export function trackMetaPixelSchedule() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Schedule");
  }
}

export function trackMetaPixelContact() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact");
  }
}

export function getUTMParams(): Record<string, string> {
  if (typeof document === "undefined") return {};

  const params: Record<string, string> = {};
  const cookies = document.cookie.split(";");
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "fbclid",
    "gclid",
    "first_visit_source",
    "first_visit_page",
    "utm_timestamp",
  ];

  cookies.forEach((cookie) => {
    const [key, value] = cookie.trim().split("=");
    if (utmKeys.includes(key)) {
      params[key] = decodeURIComponent(value);
    }
  });

  return params;
}

export function trackPhoneClick(location: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Contact", {
      content_name: `Phone Click: ${location}`,
    });
  }
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_click", { event_label: location });
  }
}

export function trackFormStart() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "FormStart");
  }
}

export function trackResourceDownload(resourceName: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", "ResourceDownload", { resource: resourceName });
  }
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "resource_download", { event_label: resourceName });
  }
}

export function trackPageEngagement(pageName: string, scrollDepth: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll_depth", {
      event_label: pageName,
      value: scrollDepth,
    });
  }
}
