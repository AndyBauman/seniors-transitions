import {
  Users,
  Building2,
  Home,
  Scale,
  ArrowRight,
  Handshake,
  TrendingUp,
  Shield,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Partnership Programs | Senior Transitions Group",
  description:
    "Partner with Senior Transitions Group. Programs for placement agents, senior living communities, real estate agents, and elder law attorneys.",
};

const partnerTypes = [
  {
    title: "Placement Agents",
    description:
      "Extend your services with move management, real estate, and downsizing support for every placement you make.",
    href: "/partners/placement-agents",
    icon: Users,
  },
  {
    title: "Senior Living Communities",
    description:
      "Reduce move-in cancellations and ensure smoother transitions with our preferred vendor partnership.",
    href: "/partners/senior-living-communities",
    icon: Building2,
  },
  {
    title: "Real Estate Agents",
    description:
      "Serve your senior clients better with comprehensive transition support that complements your SRES expertise.",
    href: "/partners/real-estate-agents",
    icon: Home,
  },
  {
    title: "Elder Law Attorneys",
    description:
      "Provide your clients with trusted transition logistics when estate, probate, or guardianship matters require relocation.",
    href: "/partners/elder-law-attorneys",
    icon: Scale,
  },
];

const benefits = [
  {
    title: "Dedicated Partner Manager",
    description:
      "A single point of contact who understands your business and coordinates all referrals seamlessly.",
    icon: Handshake,
  },
  {
    title: "Revenue Growth",
    description:
      "Competitive referral compensation and co-marketing opportunities that drive measurable business results.",
    icon: TrendingUp,
  },
  {
    title: "Trusted & Certified",
    description:
      "SRES and NASMM certified team with 10+ years of experience and over 450 successful transitions.",
    icon: Shield,
  },
  {
    title: "Client-Centered Approach",
    description:
      "We treat every referral with the same care and professionalism that your reputation demands.",
    icon: HeartHandshake,
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Partnership Programs
            </h1>
            <p className="text-lg text-white/80">
              Strategic partnerships built on shared commitment to exceptional
              senior care. Let&apos;s grow together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Find Your Partnership Track
            </h2>
            <p className="text-muted-foreground">
              We work with professionals across the senior care ecosystem.
              Select your role to learn how we can support your clients and
              strengthen your practice.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((partner) => (
              <Link
                key={partner.title}
                href={partner.href}
                className="group bg-white border border-border p-8 rounded hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                  <partner.icon className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {partner.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {partner.description}
                </p>
                <span className="inline-flex items-center text-coral font-medium text-sm group-hover:underline">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Why Partner With Us
            </h2>
            <p className="text-muted-foreground">
              Senior Transitions Group brings certified expertise, a
              client-first philosophy, and a proven track record to every
              partnership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 shadow-sm rounded text-center"
              >
                <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mx-auto mb-6 rounded">
                  <benefit.icon className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Ready to Explore a Partnership?
            </h2>
            <p className="text-white/80 mb-8">
              Tell us about your practice and we&apos;ll outline how a
              partnership can benefit your clients and your business.
            </p>
            <Link href="/partner-with-us" className="btn-primary">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
