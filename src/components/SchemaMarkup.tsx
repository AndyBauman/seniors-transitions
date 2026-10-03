import { SITE_URL, SOCIAL_LINKS } from "@/lib/site";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Senior Transitions Group",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    telephone: "(503) 755-8555",
    email: "info@seniors-transitions.com",
    description:
      "Senior living placement, home transition planning, downsizing, and move coordination for families in the Portland, Oregon and Vancouver, Washington metropolitan area.",
    sameAs: Object.values(SOCIAL_LINKS),
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Portland metropolitan area",
        containedInPlace: { "@type": "State", name: "Oregon" },
      },
      {
        "@type": "AdministrativeArea",
        name: "Vancouver metropolitan area",
        containedInPlace: { "@type": "State", name: "Washington" },
      },
    ],
    serviceType: [
      "Senior Move Management",
      "Senior Living Placement",
      "Downsizing Services",
      "Estate Cleanouts",
      "Real Estate for Seniors",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url: string;
}

export function ServiceSchema({
  serviceName,
  description,
  url,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Senior Transitions Group",
      url: SITE_URL,
      telephone: "(503) 755-8555",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  questions: FAQItem[];
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  city: string;
  state: string;
  services: string[];
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished = "2025-06-01",
  dateModified = "2026-05-01",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Senior Transitions Group",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Senior Transitions Group",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema({
  city,
  state,
  services,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Senior Transitions Group – ${city}, ${state}`,
    url: SITE_URL,
    telephone: "(503) 755-8555",
    email: "info@seniors-transitions.com",
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: state,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Senior Transition Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
