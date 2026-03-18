import { Building2, UserCheck, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "For Communities | Senior Transitions Group",
  description:
    "Partner with Senior Transitions Group to receive residents who are ready, qualified, and confident in their decision.",
};

export default function ForCommunitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              For Communities
            </h1>
            <p className="text-lg text-white/80">
              Residents who are ready, qualified, and confident.
            </p>
          </div>
        </div>
      </section>

      {/* The Value */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                Quality Move-Ins, Every Time
              </h2>
              <p className="text-muted-foreground mb-4">
                When families work with Senior Transitions Group, they arrive at
                your community fully prepared. Their home is sold or in
                contract, their belongings are sorted, and they&apos;ve had time
                to emotionally prepare for this new chapter.
              </p>
              <p className="text-muted-foreground mb-4">
                This means fewer last-minute cancellations, smoother move-in
                days, and residents who are ready to engage with your community
                from day one.
              </p>
              <p className="text-muted-foreground">
                We become an extension of your sales team, helping families
                overcome the practical barriers that often delay or derail
                move-ins.
              </p>
            </div>
            <div className="bg-muted p-8 lg:p-12 rounded">
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                What We Handle:
              </h3>
              <ul className="space-y-3">
                {[
                  "Home sale coordination",
                  "Downsizing and estate sales",
                  "Move management and setup",
                  "Timeline coordination with your team",
                  "Family communication and support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            Benefits for Your Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm rounded">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <UserCheck className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Qualified Residents
              </h3>
              <p className="text-muted-foreground text-sm">
                Families who have resolved their real estate and financial
                situation are ready to commit and move in on schedule.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm rounded">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <TrendingUp className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Reduced Cancellations
              </h3>
              <p className="text-muted-foreground text-sm">
                When practical barriers are removed, families follow through on
                their commitment to your community.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm rounded">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Building2 className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Smooth Move-Ins
              </h3>
              <p className="text-muted-foreground text-sm">
                Professional move management means residents arrive settled and
                ready to engage with your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            How We Work With Communities
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border p-6 rounded">
                <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                  Referral Partnership
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  When your sales team identifies a family struggling with real
                  estate or transition logistics, refer them to us. We&apos;ll
                  handle the barriers and coordinate the move-in with your team.
                </p>
                <ul className="space-y-2">
                  {[
                    "No cost to your community",
                    "Dedicated point of contact",
                    "Regular progress updates",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-coral" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border p-6 rounded bg-muted">
                <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                  Preferred Provider
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Become a preferred community partner. We&apos;ll recommend
                  your community to families whose needs match your offerings.
                </p>
                <ul className="space-y-2">
                  {[
                    "Priority placement consideration",
                    "Marketing collaboration",
                    "Joint family events",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-coral" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl font-medium mb-2">450+</p>
              <p className="text-white/70">Successful transitions completed</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-medium mb-2">95%</p>
              <p className="text-white/70">Move-in completion rate</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-medium mb-2">30+</p>
              <p className="text-white/70">Community partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Partner With Us
            </h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how we can help fill your community with
              qualified, ready residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Partnership Call
              </Link>
              <Link href="/services" className="btn-outline inline-flex items-center">
                Learn About Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
