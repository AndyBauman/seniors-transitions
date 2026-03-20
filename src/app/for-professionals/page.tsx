import {
  Users,
  Building2,
  Scale,
  HeartHandshake,
  Home,
  ArrowRight,
  CheckCircle,
  Zap,
  MessageSquare,
  ShieldCheck,
  Award,
  Phone,
  Clock,
  Handshake,
  ClipboardCheck,
  Send,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "For Senior Care Professionals | Senior Transitions Group",
  description:
    "Partner with Senior Transitions Group. We work with placement agents, senior living communities, elder law attorneys, discharge planners, and SRES agents to deliver seamless senior transitions.",
};

const partnerTypes = [
  {
    icon: Users,
    title: "Placement Agents & Advisors",
    description:
      "Extend your service offering with real estate, downsizing, and move management support for the families you place. We handle the logistics so you can focus on finding the right community.",
  },
  {
    icon: Building2,
    title: "Senior Living Communities",
    description:
      "Receive move-in-ready residents who have sold their home, downsized, and are emotionally prepared for their new chapter. Fewer cancellations, smoother transitions.",
  },
  {
    icon: Scale,
    title: "Elder Law Attorneys & Estate Planners",
    description:
      "Your clients navigating Medicaid planning or estate settlements often need hands-on transition support. We provide the operational piece that complements your legal guidance.",
  },
  {
    icon: HeartHandshake,
    title: "Hospital Discharge Planners & Social Workers",
    description:
      "When patients need to transition directly from hospital to senior living, we expedite the process — coordinating housing, home sales, and move logistics under tight timelines.",
  },
  {
    icon: Home,
    title: "Real Estate Agents (SRES)",
    description:
      "Collaborate on senior home sales with a team that understands the emotional complexity. We provide placement services and move management to complement your real estate expertise.",
  },
];

const processSteps = [
  {
    icon: Send,
    title: "Refer a Client",
    description:
      "Submit a referral through our partner portal, by phone, or by email. Share the basics about the client's situation and timeline.",
  },
  {
    icon: ClipboardCheck,
    title: "We Assess & Plan",
    description:
      "Our team meets with the family to understand their full picture — care needs, real estate, belongings, and emotional readiness — then builds a customized plan.",
  },
  {
    icon: Handshake,
    title: "Collaborative Execution",
    description:
      "We keep you informed at every milestone. You remain the trusted advisor while we handle the transition logistics behind the scenes.",
  },
  {
    icon: CheckCircle,
    title: "Successful Outcome",
    description:
      "The family transitions smoothly, your client is taken care of, and you've strengthened a referral relationship built on results.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Faster Placements",
    description:
      "By removing real estate and logistical barriers, families move forward on their timeline instead of stalling.",
  },
  {
    icon: HeartHandshake,
    title: "Comprehensive Support",
    description:
      "From home sales to downsizing to move management — we handle the pieces that fall outside your scope.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Regular updates, shared timelines, and a single point of contact so you're never left wondering about progress.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability You Can Count On",
    description:
      "Over 450 successful transitions. When you refer a family to us, you can be confident they're in capable hands.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description:
      "Our team holds SRES and NASMM certifications, with deep experience across placement, real estate, and senior move management.",
  },
  {
    icon: Clock,
    title: "Responsive & Available",
    description:
      "We understand the urgency of senior transitions. Our team is available 7 days a week and responds to partner inquiries within hours.",
  },
];

const partnerResources = [
  {
    href: "/partners/placement-agents",
    label: "Partnership Details for Placement Agents",
  },
  {
    href: "/partners/senior-living-communities",
    label: "Partnership Details for Senior Living Communities",
  },
  {
    href: "/partners/real-estate-agents",
    label: "Partnership Details for Real Estate Agents",
  },
  {
    href: "/partners/elder-law-attorneys",
    label: "Partnership Details for Elder Law Attorneys",
  },
];

export default function ForProfessionalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              For Senior Care Professionals
            </h1>
            <p className="text-lg text-white/80">
              Partner with Senior Transitions Group to deliver seamless,
              end-to-end transitions for the families you serve.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Who We Work With
            </h2>
            <p className="text-muted-foreground">
              We collaborate with professionals across the senior care ecosystem
              to ensure families receive complete support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="bg-muted p-8 rounded hover:shadow-sm transition-shadow"
              >
                <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                  <partner.icon className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {partner.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Partnership Works */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              How Partnership Works
            </h2>
            <p className="text-muted-foreground">
              A straightforward referral process designed to respect your
              relationship with your client
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mx-auto mb-4 rounded font-serif text-xl font-medium">
                  {index + 1}
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professionals Choose Us */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Why Professionals Choose Us
            </h2>
            <p className="text-muted-foreground">
              Built for the professionals who already have their clients&apos;
              trust
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 shadow-sm rounded border border-border">
                <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                  <benefit.icon className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
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

      {/* Partner Testimonial */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <svg
                className="w-12 h-12 text-coral mx-auto mb-6 opacity-80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-serif text-2xl md:text-3xl font-medium italic leading-relaxed mb-6">
                Senior Transitions Group has become an indispensable part of our
                referral network. Their ability to handle real estate, downsizing,
                and move logistics means our families actually follow through on
                placements. It&apos;s rare to find a partner this reliable.
              </blockquote>
              <div>
                <p className="font-semibold text-lg">Michael Chen</p>
                <p className="text-white/70">
                  Senior Living Placement Advisor, 12+ years in practice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Resources */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
                Partner Resources
              </h2>
              <p className="text-muted-foreground">
                Learn more about how we work with your specific profession
              </p>
            </div>
            <div className="space-y-4">
              {partnerResources.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between p-5 bg-white rounded shadow-sm hover:shadow-md transition-shadow group"
                >
                  <span className="text-navy font-medium group-hover:text-coral transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-coral flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Become a Partner
            </h2>
            <p className="text-white/80 mb-2">
              Join a growing network of professionals who trust Senior
              Transitions Group to deliver results for their clients.
            </p>
            <p className="text-white/60 text-sm mb-8">
              No contracts required — just mutual commitment to exceptional
              client outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partner-with-us" className="btn-primary">
                Become a Partner
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
