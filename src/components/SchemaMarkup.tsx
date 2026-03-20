export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Senior Transitions Group",
    url: "https://seniors-transitions.com",
    logo: "https://seniors-transitions.com/logo.png",
    telephone: "(503) 755-8555",
    email: "info@seniors-transitions.com",
    description:
      "Expert senior transition specialists guiding families through life's most significant housing changes.",
    sameAs: [
      "https://www.facebook.com/SeniorTransitionsGroup",
      "https://www.linkedin.com/company/senior-transitions-group",
      "https://www.instagram.com/seniortransitionsgroup",
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
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
      url: "https://seniors-transitions.com",
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

export function LocalBusinessSchema({
  city,
  state,
  services,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Senior Transitions Group – ${city}, ${state}`,
    url: "https://seniors-transitions.com",
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
