import type { Metadata } from "next";
import Link from "next/link";
import { ServiceSchema, FAQSchema } from "@/components/SchemaMarkup";

const CITIES: Record<string, string[]> = {
  arizona: ["phoenix", "scottsdale", "tucson"],
  california: ["los-angeles", "san-diego", "san-francisco"],
  colorado: ["denver", "colorado-springs"],
  florida: ["miami", "tampa", "orlando", "jacksonville"],
  texas: ["houston", "dallas", "austin", "san-antonio"],
  "new-york": ["new-york-city", "buffalo"],
  illinois: ["chicago"],
  ohio: ["columbus", "cleveland"],
  pennsylvania: ["philadelphia", "pittsburgh"],
  washington: ["seattle"],
};

const SERVICE_SLUGS = [
  "senior-move-manager",
  "help-parents-downsize",
  "move-to-assisted-living",
  "move-to-memory-care",
  "estate-cleanout",
  "downsizing-services-for-seniors",
  "emergency-senior-move",
] as const;

type ServiceSlug = (typeof SERVICE_SLUGS)[number];

interface ServiceInfo {
  displayName: string;
  shortDescription: string;
  longDescription: (city: string, state: string) => string;
  situations: string[];
}

const SERVICE_MAP: Record<ServiceSlug, ServiceInfo> = {
  "senior-move-manager": {
    displayName: "Senior Move Manager",
    shortDescription:
      "Certified senior move managers who handle every detail of your loved one's relocation.",
    longDescription: (city, state) =>
      `Finding a qualified senior move manager in ${city}, ${state} can make all the difference when a loved one needs to relocate. Our certified senior move managers coordinate the entire process — from creating a personalized move plan and sorting belongings to packing, transporting, and setting up the new home. We understand the emotional weight of leaving a longtime home, and we approach every move in ${city} with patience, respect, and meticulous attention to detail. Whether the move is across town or across ${state}, our team ensures nothing falls through the cracks.`,
    situations: [
      "Relocating from a long-time family home to a smaller residence",
      "Moving into a senior living community or retirement neighborhood",
      "Coordinating a move for a parent who lives in another city",
      "Managing the logistics of downsizing decades of belongings",
    ],
  },
  "help-parents-downsize": {
    displayName: "Help Parents Downsize",
    shortDescription:
      "Compassionate downsizing support that helps adult children guide their parents through the process.",
    longDescription: (city, state) =>
      `Helping your parents downsize in ${city}, ${state} is one of the most meaningful — and challenging — things you can do for your family. Our team specializes in guiding adult children and their aging parents through the emotional and physical process of right-sizing. We help sort through years of accumulated belongings, decide what to keep, donate, sell, or discard, and coordinate every step of the transition. In the ${city} area, we work with trusted local donation centers, estate sale companies, and moving teams to make the process as smooth as possible.`,
    situations: [
      "Parents are ready to move to a smaller, more manageable home",
      "Health changes require a safer living arrangement",
      "Family home has become too much to maintain",
      "Parents are reluctant but open to exploring their options",
    ],
  },
  "move-to-assisted-living": {
    displayName: "Move to Assisted Living",
    shortDescription:
      "Expert placement and move coordination for families transitioning a loved one to assisted living.",
    longDescription: (city, state) =>
      `Moving a loved one to assisted living in ${city}, ${state} involves significant decisions — from choosing the right community to managing the physical move. Our placement specialists evaluate your family member's care needs, lifestyle preferences, and budget, then recommend the best-fit assisted living communities in the ${city} metro area. Once you've chosen a community, our move management team handles packing, transporting belongings, and setting up the new apartment so your loved one feels at home from day one. We serve families across ${state} and coordinate with local communities daily.`,
    situations: [
      "Doctor or family has recommended assisted living care",
      "A loved one can no longer live safely at home alone",
      "Caregiver burnout is affecting the family",
      "Comparing assisted living communities in the area",
    ],
  },
  "move-to-memory-care": {
    displayName: "Move to Memory Care",
    shortDescription:
      "Specialized support for families navigating the transition to a memory care community.",
    longDescription: (city, state) =>
      `When a loved one is diagnosed with Alzheimer's or another form of dementia, finding the right memory care community in ${city}, ${state} is critical. Our team understands the unique needs of memory care residents and guides families through every stage — from evaluating specialized communities in ${city} to planning a move that minimizes confusion and anxiety for your loved one. We work closely with memory care staff to coordinate move-in day, set up the room with familiar items, and ensure a smooth handoff that prioritizes your family member's comfort and safety.`,
    situations: [
      "A loved one has been diagnosed with Alzheimer's or dementia",
      "Current living situation is no longer safe for someone with memory loss",
      "Family needs help evaluating memory care options in the area",
      "Urgent placement is needed after a health event",
    ],
  },
  "estate-cleanout": {
    displayName: "Estate Cleanout",
    shortDescription:
      "Respectful, thorough estate cleanout services that handle every item with care.",
    longDescription: (city, state) =>
      `Managing an estate cleanout in ${city}, ${state} after a loved one passes or moves into care can be emotionally and physically exhausting. Senior Transitions Group provides comprehensive estate cleanout services across the ${city} area — sorting through personal belongings, identifying items of value, coordinating donations, and ensuring the property is left clean and ready for sale or transfer. Our approach is always respectful and thorough. We understand that every item tells a story, and we take the time to help families in ${state} honor those memories while moving forward.`,
    situations: [
      "Clearing a home after a loved one has passed",
      "Preparing a property for sale after a senior moves to care",
      "Managing the contents of a home for an out-of-state family",
      "Sorting, donating, and disposing of a full household",
    ],
  },
  "downsizing-services-for-seniors": {
    displayName: "Downsizing Services for Seniors",
    shortDescription:
      "Full-service downsizing support tailored specifically for older adults and their families.",
    longDescription: (city, state) =>
      `Downsizing is about more than just moving to a smaller space — it's about creating a living situation that supports safety, comfort, and independence. Our downsizing services for seniors in ${city}, ${state} cover every step: space planning for the new home, sorting and organizing belongings, coordinating estate sales or donations, packing, moving, and full unpacking and setup. We work at your loved one's pace and with deep sensitivity to the emotions involved. Families across ${city} and greater ${state} trust us to make this life transition manageable and even positive.`,
    situations: [
      "Transitioning from a large family home to a condo, apartment, or senior community",
      "Reducing belongings to fit a smaller living space",
      "Needing help with the physical demands of sorting and packing",
      "Planning a staged downsizing over weeks or months",
    ],
  },
  "emergency-senior-move": {
    displayName: "Emergency Senior Move",
    shortDescription:
      "Rapid-response senior move services for urgent relocations and crisis situations.",
    longDescription: (city, state) =>
      `When a senior needs to move quickly — due to a health crisis, safety concern, or sudden change in living situation — our emergency senior move team in ${city}, ${state} is ready to respond. We can mobilize within 24–72 hours to coordinate housing placement, pack and transport belongings, and set up a new living space. Whether it's a hospital-to-facility transition, an unsafe home situation, or an unexpected eviction, our ${city} team has the local connections and experience to handle urgent senior relocations with speed and compassion across ${state}.`,
    situations: [
      "Hospital discharge requiring immediate placement",
      "Unsafe living conditions at the current home",
      "Sudden caregiver loss or family emergency",
      "Rapid relocation due to facility closure or eviction",
    ],
  },
};

function toDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  const params: { state: string; city: string; service: string }[] = [];
  for (const [state, cities] of Object.entries(CITIES)) {
    for (const city of cities) {
      for (const service of SERVICE_SLUGS) {
        params.push({ state, city, service });
      }
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{ state: string; city: string; service: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { state, city, service } = await params;
  const cityName = toDisplayName(city);
  const stateName = toDisplayName(state);
  const serviceInfo = SERVICE_MAP[service as ServiceSlug];
  const serviceName = serviceInfo?.displayName ?? toDisplayName(service);

  return {
    title: `${serviceName} in ${cityName}, ${stateName} | Senior Transitions Group`,
    description: `${serviceInfo?.shortDescription ?? "Professional senior transition services."} Serving ${cityName}, ${stateName}. Call (800) 784-2273 for a free consultation.`,
    keywords: [
      `${serviceName.toLowerCase()} ${cityName}`,
      `senior transition services ${cityName} ${stateName}`,
      `senior move help ${cityName}`,
    ],
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { state, city, service } = await params;
  const cityName = toDisplayName(city);
  const stateName = toDisplayName(state);
  const serviceInfo = SERVICE_MAP[service as ServiceSlug];
  const serviceName = serviceInfo?.displayName ?? toDisplayName(service);

  const faqItems = [
    {
      question: `What does a ${serviceName.toLowerCase()} service include in ${cityName}?`,
      answer: `Our ${serviceName.toLowerCase()} service in ${cityName} includes a personalized plan, hands-on coordination, and local expertise. We handle the details so your family can focus on supporting your loved one through the transition.`,
    },
    {
      question: `How quickly can you help with ${serviceName.toLowerCase()} in ${cityName}, ${stateName}?`,
      answer: `Timelines depend on the scope of the project. Standard engagements typically begin within one to two weeks, while emergency services can be mobilized within 24–72 hours in the ${cityName} area.`,
    },
    {
      question: `How much does ${serviceName.toLowerCase()} cost in ${cityName}?`,
      answer: `Every situation is unique. We offer a free consultation to understand your needs and provide a transparent, no-obligation quote. Many families find our services save significant time and reduce stress.`,
    },
  ];

  return (
    <>
      <ServiceSchema
        serviceName={`${serviceName} in ${cityName}, ${stateName}`}
        description={serviceInfo?.shortDescription ?? ""}
        url={`https://seniors-transitions.com/${state}/${city}/${service}`}
      />
      <FAQSchema questions={faqItems} />

      {/* Hero */}
      <section className="bg-navy text-white section-padding">
        <div className="container-custom text-center">
          <p className="text-coral font-medium uppercase tracking-wider mb-4">
            {cityName}, {stateName}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            {serviceName} in {cityName}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            {serviceInfo?.shortDescription}
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Service Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8">
            {serviceName} in {cityName}, {stateName}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {serviceInfo?.longDescription(cityName, stateName)}
          </p>
        </div>
      </section>

      {/* When to Call Us */}
      {serviceInfo?.situations && (
        <section className="section-padding bg-muted">
          <div className="container-custom max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-10">
              When to Call Us
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {serviceInfo.situations.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white rounded-lg p-5"
                >
                  <svg
                    className="w-6 h-6 text-coral flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group border border-navy/10 rounded-lg"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-navy">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-coral transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Back link + CTA */}
      <section className="section-padding bg-coral text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Let&apos;s Talk About Your Situation in {cityName}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Every senior transition is different. Schedule a free consultation
            and we&apos;ll create a plan tailored to your family&apos;s needs in{" "}
            {cityName}, {stateName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-coral font-bold py-3 px-8 rounded-lg hover:bg-white/90 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+18007842273"
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Call (800) 784-2273
            </a>
          </div>
          <Link
            href={`/${state}/${city}`}
            className="inline-block mt-8 text-white/80 hover:text-white underline transition-colors"
          >
            &larr; Back to all {cityName} services
          </Link>
        </div>
      </section>
    </>
  );
}
