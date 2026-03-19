import type { Metadata } from "next";
import Link from "next/link";
import { LocalBusinessSchema, FAQSchema } from "@/components/SchemaMarkup";

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

function toDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  const params: { state: string; city: string }[] = [];
  for (const [state, cities] of Object.entries(CITIES)) {
    for (const city of cities) {
      params.push({ state, city });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{ state: string; city: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { state, city } = await params;
  const cityName = toDisplayName(city);
  const stateName = toDisplayName(state);

  return {
    title: `Senior Move Management in ${cityName}, ${stateName} | Senior Transitions Group`,
    description: `Expert senior transition services in ${cityName}, ${stateName}. We help with senior moves, downsizing, assisted living placement, estate cleanouts, and more. Call (800) 784-2273.`,
    keywords: [
      `senior move management ${cityName}`,
      `downsizing services ${cityName}`,
      `senior living placement ${cityName} ${stateName}`,
      `estate cleanout ${cityName}`,
      `assisted living ${cityName}`,
    ],
  };
}

export default async function CityPage({ params }: PageProps) {
  const { state, city } = await params;
  const cityName = toDisplayName(city);
  const stateName = toDisplayName(state);

  const faqItems = [
    {
      question: `What senior transition services are available in ${cityName}?`,
      answer: `Senior Transitions Group offers comprehensive services in ${cityName} including senior move management, downsizing assistance, assisted living and memory care placement, estate cleanouts, and emergency moves. We coordinate every detail so families can focus on what matters most.`,
    },
    {
      question: `How much does senior move management cost in ${cityName}, ${stateName}?`,
      answer: `Costs vary depending on the scope of services needed. We offer free consultations to assess your situation and provide a transparent quote. Many families find our services save them time, stress, and money compared to managing a senior move on their own.`,
    },
    {
      question: `How do I find the right assisted living community in ${cityName}?`,
      answer: `Our placement specialists in ${cityName} evaluate your loved one's care needs, preferences, and budget to recommend the best-fit communities. We tour communities with you, help with paperwork, and coordinate the entire transition at no cost to your family.`,
    },
    {
      question: `Can you help with an emergency senior move in ${cityName}?`,
      answer: `Yes. We handle urgent senior relocations in the ${cityName} area, including hospital-to-facility moves and rapid downsizing. Our team can mobilize quickly to ensure your loved one is safe and settled as soon as possible.`,
    },
    {
      question: `Do you serve all neighborhoods in ${cityName} and surrounding ${stateName} communities?`,
      answer: `We serve ${cityName} and the broader ${stateName} metro area. Whether your family is in the city center or a surrounding suburb, our local team is ready to help with every aspect of the senior transition process.`,
    },
  ];

  return (
    <>
      <LocalBusinessSchema
        city={cityName}
        state={stateName}
        services={[
          "Senior Move Management",
          "Senior Living Placement",
          "Downsizing Services",
          "Estate Cleanouts",
          "Emergency Senior Moves",
        ]}
      />
      <FAQSchema questions={faqItems} />

      {/* Hero */}
      <section className="bg-navy text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Senior Move Management in {cityName}, {stateName}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            Compassionate, expert guidance for seniors and families navigating
            life&apos;s biggest housing transitions in the {cityName} area.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-8">
            Senior Transition Services in {cityName}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            When a senior loved one needs to move — whether it&apos;s
            downsizing, relocating to assisted living, or clearing a family
            estate — the process can feel overwhelming. Senior Transitions Group
            brings trusted, local expertise to {cityName} families who need
            support during these pivotal moments.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our {cityName}-based team coordinates every detail: from finding the
            right senior living community to sorting, packing, and managing the
            physical move. We partner with local real estate agents, estate sale
            professionals, and senior care advisors across {stateName} to
            deliver a seamless experience.
          </p>
        </div>
      </section>

      {/* How We Help - 3 Cards */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-12">
            How We Help {cityName} Families
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-coral/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">
                Senior Living Placement
              </h3>
              <p className="text-muted-foreground">
                We evaluate care needs, tour communities, and help your family
                find the ideal assisted living, memory care, or independent
                living community in {cityName} — at no cost to you.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-coral/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">
                Real Estate &amp; Downsizing
              </h3>
              <p className="text-muted-foreground">
                From selling the family home to sorting decades of belongings,
                we manage the entire downsizing process so your family can move
                forward with confidence in the {cityName} market.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-coral/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">
                Move Management
              </h3>
              <p className="text-muted-foreground">
                Our certified senior move managers in {cityName} handle packing,
                logistics, unpacking, and setup — creating a smooth transition
                that reduces stress for the entire family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-10">
            Common Situations We Help With in {cityName}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Helping aging parents downsize from the family home",
              "Moving a loved one into assisted living or memory care",
              "Coordinating an estate cleanout after a loss",
              "Emergency or rapid senior relocation",
              "Selling a senior's home while managing the transition",
              "Sorting, donating, and distributing household belongings",
              "Setting up a new senior living apartment",
              "Long-distance coordination for out-of-state families",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Senior Living Communities */}
      <section className="section-padding bg-muted">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-8">
            Senior Living Communities We Serve
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The {cityName} area is home to dozens of senior living communities
            ranging from independent living and active adult communities to
            assisted living, memory care, and skilled nursing facilities. Our
            team has first-hand knowledge of communities across the{" "}
            {cityName} metro, and we stay current on availability, pricing, and
            resident satisfaction.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you&apos;re exploring options for the first time or need to
            make an urgent placement, we&apos;ll match your loved one with
            communities that fit their care needs, lifestyle preferences, and
            budget — all at no cost to your family.
          </p>
        </div>
      </section>

      {/* Local Senior Resources */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-8">
            Local Senior Resources
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {cityName} offers a strong network of senior support services.
            Families can connect with these local resources:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-navy/10 rounded-lg p-6">
              <h3 className="font-serif text-lg text-navy mb-2">
                Area Agency on Aging
              </h3>
              <p className="text-muted-foreground text-sm">
                The {stateName} Area Agency on Aging provides information on
                home-care programs, benefits counseling, caregiver support, and
                more for {cityName} area seniors.
              </p>
            </div>
            <div className="border border-navy/10 rounded-lg p-6">
              <h3 className="font-serif text-lg text-navy mb-2">
                Senior Centers
              </h3>
              <p className="text-muted-foreground text-sm">
                Local senior centers in {cityName} offer meals, recreation,
                wellness programs, and social connection for older adults
                throughout the community.
              </p>
            </div>
            <div className="border border-navy/10 rounded-lg p-6">
              <h3 className="font-serif text-lg text-navy mb-2">
                Veterans Services
              </h3>
              <p className="text-muted-foreground text-sm">
                {cityName} veterans may qualify for VA Aid &amp; Attendance
                benefits to help cover senior living costs. Ask us how we can
                help navigate the process.
              </p>
            </div>
            <div className="border border-navy/10 rounded-lg p-6">
              <h3 className="font-serif text-lg text-navy mb-2">
                Medicaid &amp; Financial Assistance
              </h3>
              <p className="text-muted-foreground text-sm">
                {stateName} Medicaid programs may help qualifying seniors pay
                for assisted living or nursing care. We can point you toward the
                right local resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Professionals: Partner With Us in {cityName}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Are you a senior living community, real estate agent, elder law
            attorney, or home care provider in {cityName}? We&apos;re building a
            trusted referral network across {stateName} and would love to
            connect.
          </p>
          <Link href="/partner-with-us" className="btn-outline text-lg">
            Learn About Partnership
          </Link>
        </div>
      </section>

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

      {/* Final CTA */}
      <section className="section-padding bg-coral text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Ready to Get Started in {cityName}?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Schedule a free, no-obligation consultation with our {cityName}{" "}
            senior transition team. We&apos;ll listen to your situation and
            outline a clear path forward.
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
        </div>
      </section>
    </>
  );
}
