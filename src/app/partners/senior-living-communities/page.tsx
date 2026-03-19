import {
  CheckCircle,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  CalendarCheck,
  UserCheck,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Senior Living Community Partnerships | Senior Transitions Group",
  description:
    "Preferred vendor partnership for senior living communities. Reduce move-in cancellations, ensure smoother transitions, and receive qualified, move-ready residents.",
};

const stats = [
  { value: "92%", label: "Move-in completion rate with our support" },
  { value: "40%", label: "Reduction in move-in delays" },
  { value: "3x", label: "Faster home-sale-to-move-in timeline" },
  { value: "450+", label: "Successful transitions completed" },
];

const benefits = [
  {
    title: "Reduced Cancellations",
    description:
      "When families have professional support managing the home sale, downsizing, and logistics, they follow through. Our involvement dramatically reduces last-minute cancellations.",
    icon: ShieldCheck,
  },
  {
    title: "Smoother Move-Ins",
    description:
      "Residents arrive organized, settled, and emotionally prepared. Our team coordinates directly with your admissions staff to align timelines and expectations.",
    icon: CalendarCheck,
  },
  {
    title: "Qualified, Ready Residents",
    description:
      "We help families resolve the financial and logistical barriers to move-in — home sales, estate liquidation, and downsizing — so residents arrive ready to thrive.",
    icon: UserCheck,
  },
  {
    title: "Measurable Results",
    description:
      "Track referral outcomes, move-in timelines, and resident satisfaction through regular partner reporting.",
    icon: BarChart3,
  },
];

const programFeatures = [
  "Dedicated community liaison for your campus",
  "Co-branded family resource materials",
  "Priority scheduling for your resident transitions",
  "Direct coordination with your admissions team",
  "Monthly partner performance reporting",
  "Joint family education workshops",
];

export default function SeniorLivingCommunitiesPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Senior Living Community Partnerships
            </h1>
            <p className="text-lg text-white/80">
              A preferred vendor program designed to fill units faster, reduce
              cancellations, and deliver move-ready residents.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
                The Gap Between &ldquo;Yes&rdquo; and Move-In Day
              </h2>
              <p className="text-muted-foreground mb-4">
                You know the scenario: a family tours your community, falls in
                love, and says yes. Then reality sets in — the house needs to
                sell, decades of belongings need to be sorted, and the logistics
                feel overwhelming. Weeks turn into months. Sometimes, the
                move-in never happens.
              </p>
              <p className="text-muted-foreground mb-6">
                Senior Transitions Group bridges that gap. We become the
                family&apos;s transition team, handling every logistical barrier
                between their decision and your front door.
              </p>
              <Link
                href="/partner-with-us"
                className="inline-flex items-center text-coral font-medium hover:underline"
              >
                Discuss a partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-muted p-6 rounded text-center"
                >
                  <p className="font-serif text-3xl font-medium text-coral mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-12 text-center">
            Partnership Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-8 shadow-sm rounded"
              >
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

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                Preferred Vendor Program
              </h2>
              <p className="text-muted-foreground mb-6">
                Our preferred vendor program is tailored to each
                community&apos;s needs. Whether you operate independent living,
                assisted living, memory care, or a CCRC, we customize our
                services to align with your admissions process and resident
                expectations.
              </p>
              <ul className="space-y-3">
                {programFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted p-8 lg:p-12 rounded">
              <p className="font-serif text-xl text-navy italic leading-relaxed mb-6">
                &ldquo;Since partnering with Senior Transitions Group, our
                move-in cancellation rate has dropped significantly. Families
                arrive prepared and residents settle in faster. It&apos;s been a
                game-changer for our admissions pipeline.&rdquo;
              </p>
              <div className="w-12 h-1 bg-coral mb-4"></div>
              <p className="font-semibold text-navy">
                Director of Admissions
              </p>
              <p className="text-muted-foreground text-sm">
                Partner Community, Independent &amp; Assisted Living
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Let&apos;s Fill Your Community Together
            </h2>
            <p className="text-white/80 mb-2">
              Schedule a call to discuss how our preferred vendor program can
              support your occupancy goals.
            </p>
            <p className="text-white/60 text-sm mb-8">
              No commitment required. We&apos;ll outline a program tailored to
              your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/partner-with-us" className="btn-primary">
                Become a Partner
              </Link>
              <a
                href="tel:8007842273"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-navy transition-colors uppercase tracking-wider text-sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                (800) 784-2273
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
