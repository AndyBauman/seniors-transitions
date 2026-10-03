import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Users, Heart, Phone, Quote } from "lucide-react";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { UnderstandingYourOptions } from "@/components/sections/UnderstandingYourOptions";
import { FAQSchema } from "@/components/SchemaMarkup";

const homeFaqs = [
  {
    question: "What does Senior Transitions Group do?",
    answer:
      "We help families in the Portland, Oregon and Vancouver, Washington metros coordinate senior living placement, home transition options (including paths to sell or transition the family home), and downsizing or move management—so housing logistics do not delay care decisions.",
  },
  {
    question: "Who is your service for?",
    answer:
      "Adult children, seniors, and professionals when a parent needs more support than living at home safely provides—whether that means assisted living, memory care, downsizing, or an urgent move after a health event.",
  },
  {
    question: "How much does placement cost for families?",
    answer:
      "For qualifying placements in our service area, community placement guidance is provided at no cost to the family; senior living communities compensate the advisor. We explain how we are paid before you commit. Other services such as move coordination or real estate are quoted separately.",
  },
  {
    question: "How long does a typical senior transition take?",
    answer:
      "Placement-focused timelines often run about 2–6 weeks; a full transition that includes home transition and downsizing commonly runs 8–12 weeks. Urgent situations can be expedited—call (503) 755-8555 to discuss your timeline.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We focus on the greater Portland–Vancouver metropolitan area, including cities such as Portland, Beaverton, Lake Oswego, Tigard, Gresham, Hillsboro, West Linn, Oregon City, Vancouver, and Camas. See our local pages for details.",
  },
  {
    question: "Can you help if we need to move quickly?",
    answer:
      "Yes. We coordinate urgent relocations—including hospital-to-community transitions and rapid downsizing—when safety or discharge timelines require fast action in our metro.",
  },
  {
    question: "Do you help with selling the family home?",
    answer:
      "Yes. Our real estate and downsizing services align home exit strategy with move-in dates, including traditional listing and other options depending on condition, timeline, and family goals.",
  },
  {
    question: "How do we get started?",
    answer:
      "Schedule a free, no-obligation family consultation online or call (503) 755-8555. We listen first, then outline a clear path—never a high-pressure sales pitch.",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <>
      <FAQSchema questions={homeFaqs} />
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 items-center min-h-[500px] md:min-h-[600px]">
            <div className="px-4 md:px-8 py-16 md:py-20 lg:py-24 lg:pr-12 text-white">
              <p className="geo-lede text-base md:text-lg text-white/95 font-normal max-w-xl mb-5 leading-relaxed">
                <strong>Senior Transitions Group</strong> helps families in the{" "}
                <strong>Portland, OR and Vancouver, WA</strong> metros with{" "}
                <strong>senior living placement</strong>,{" "}
                <strong>home transition planning</strong>, and{" "}
                <strong>downsizing and move coordination</strong>—so care and
                housing decisions are not blocked by the house.
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium italic mb-6">
                Every Transition Deserves a Trusted Partner
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                We guide seniors and families through life&apos;s most significant
                housing changes with expertise, compassion, and unwavering
                support.
              </p>
              <Link href="/free-family-consultation" className="btn-primary">
                Free Family Consultation
              </Link>
            </div>
            <div className="relative hidden lg:block h-full min-h-[500px]">
              <Image
                src="/hero-collage.png"
                alt="Seniors and families, a trusted transition advisor, and home — representing compassionate senior living guidance"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, min(55vw, 960px)"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
        {/* Mobile: show image below text */}
        <div className="lg:hidden">
          <Image
            src="/hero-collage.png"
            alt="Seniors and families, a trusted transition advisor, and home — representing compassionate senior living guidance"
            width={1024}
            height={917}
            className="w-full h-auto max-w-[1024px] mx-auto"
            sizes="100vw"
            priority
            unoptimized
          />
        </div>
      </section>

      <section className="bg-white border-b border-navy/10" aria-label="Summary">
        <div className="container-custom px-4 md:px-8 py-10 md:py-12">
          <div className="geo-tldr max-w-3xl border-l-4 border-coral pl-5 md:pl-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
              TL;DR
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-navy text-sm md:text-base leading-relaxed">
              <li>
                <strong>What we do:</strong> Placement guidance, real
                estate/downsize options, and transition coordination—together or
                à la carte.
              </li>
              <li>
                <strong>Where:</strong> Greater Portland–Vancouver area; see{" "}
                <Link href="/oregon/portland" className="text-coral underline hover:no-underline">
                  local pages
                </Link>{" "}
                for nearby cities.
              </li>
              <li>
                <strong>First step:</strong> No-obligation conversation—{" "}
                <Link
                  href="/free-family-consultation"
                  className="text-coral underline hover:no-underline"
                >
                  free family consultation
                </Link>{" "}
                or call (503) 755-8555.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl text-navy italic leading-relaxed">
              Every senior deserves a partner who understands both the practical
              and emotional complexity of transition.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-navy font-semibold mt-4">
              We&apos;re that partner.
            </p>
            <div className="w-16 h-1 bg-coral mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete support for every aspect of the senior living transition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Placement Services */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Users className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Placement Services
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Shortlists and tours aligned to care needs, budget, and
                location—then help with paperwork and move-in timing.
              </p>
              <Link
                href="/services/placement"
                className="inline-flex items-center text-coral font-medium text-sm hover:underline"
              >
                Explore Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Real Estate & Downsizing */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Home className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Real Estate & Downsizing
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Professional home sales or direct purchase, with compassionate
                downsizing and estate sale coordination.
              </p>
              <Link
                href="/services/real-estate"
                className="inline-flex items-center text-coral font-medium text-sm hover:underline"
              >
                Explore Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Transition Coordination */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Heart className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Transition Coordination
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Complete move management from planning through settling in,
                ensuring every detail is handled with care.
              </p>
              <Link
                href="/services/transition"
                className="inline-flex items-center text-coral font-medium text-sm hover:underline"
              >
                Explore Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <HowWeHelp />

      {/* Understanding Your Options */}
      <UnderstandingYourOptions />

      {/* Who We Serve Section */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Who We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* For Seniors & Families */}
            <div className="group relative bg-navy text-white p-8 hover:bg-navy/90 transition-colors">
              <h3 className="font-serif text-2xl font-medium mb-4">
                For Seniors & Families
              </h3>
              <p className="text-white/80 mb-6">
                When the family home becomes too much, we&apos;re here.
              </p>
              <Link
                href="/for-families"
                className="inline-flex items-center text-coral font-medium text-sm hover:underline"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* For Placement Agents */}
            <div className="group relative bg-muted p-8 hover:bg-muted/80 transition-colors">
              <h3 className="font-serif text-2xl font-medium text-navy mb-4">
                For Placement Agents
              </h3>
              <p className="text-muted-foreground mb-6">
                Your clients&apos; transitions, seamlessly coordinated.
              </p>
              <Link
                href="/for-placement-agents"
                className="inline-flex items-center text-coral font-medium text-sm hover:underline"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* For Communities */}
            <div className="group relative bg-coral text-white p-8 hover:bg-coral/90 transition-colors">
              <h3 className="font-serif text-2xl font-medium mb-4">
                For Communities
              </h3>
              <p className="text-white/90 mb-6">
                Residents who are ready, qualified, and confident.
              </p>
              <Link
                href="/for-communities"
                className="inline-flex items-center text-white font-medium text-sm hover:underline"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              What Families Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 shadow-sm">
              <Quote className="h-8 w-8 text-coral/30 mb-4" />
              <p className="font-serif text-lg text-navy italic mb-6 leading-relaxed">
                &ldquo;STG made our mom&apos;s move so much easier than we
                imagined. They handled the sale of her house and found a
                beautiful assisted living community nearby. We couldn&apos;t
                have done it without them.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-navy">Sarah Johnson</p>
                <p className="text-muted-foreground text-sm">
                  Daughter of Client
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 shadow-sm">
              <Quote className="h-8 w-8 text-coral/30 mb-4" />
              <p className="font-serif text-lg text-navy italic mb-6 leading-relaxed">
                &ldquo;As a placement agent, working with STG is a dream – they
                take care of the real estate and transition hurdles so I can
                focus on care needs. My clients are always grateful for the
                comprehensive support.&rdquo;
              </p>
              <div>
                <p className="font-semibold text-navy">Michael Chen</p>
                <p className="text-muted-foreground text-sm">
                  Senior Placement Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-navy text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {homeFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-navy/10 rounded-lg"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-medium text-navy">
                  {faq.question}
                </summary>
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Let&apos;s Talk About Your Family
            </h2>
            <p className="text-white/80 mb-2">
              No obligation. We explain how we are paid before you decide.
            </p>
            <p className="text-white/60 text-sm mb-8">
              Mon–Fri 9am–6pm · Sat 10am–4pm · (503) 755-8555
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-family-consultation" className="btn-primary">
                Free Family Consultation
              </Link>
              <a
                href="tel:5037558555"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-navy transition-colors uppercase tracking-wider text-sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                (503) 755-8555
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
