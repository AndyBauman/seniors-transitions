import { Handshake, Home, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "For Placement Agents | Senior Transitions Group",
  description:
    "Partner with Senior Transitions Group. We handle real estate and transition logistics so you can focus on care placement.",
};

export default function ForPlacementAgentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              For Placement Agents
            </h1>
            <p className="text-lg text-white/80">
              Your clients&apos; transitions, seamlessly coordinated.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                Focus on What You Do Best
              </h2>
              <p className="text-muted-foreground mb-4">
                As a placement agent, your expertise is in matching seniors with
                the right care communities. But you know that placement is only
                part of the equation.
              </p>
              <p className="text-muted-foreground mb-4">
                Your clients often face significant hurdles before they can move
                in: selling a home, downsizing decades of belongings, and
                coordinating the actual move. These challenges can delay
                placements and create stress for everyone involved.
              </p>
              <p className="text-muted-foreground">
                That&apos;s where we come in. Senior Transitions Group handles
                the real estate and transition logistics, so you can focus on
                care needs and community matching.
              </p>
            </div>
            <div className="bg-muted p-8 lg:p-12 rounded">
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                Common Placement Delays:
              </h3>
              <ul className="space-y-3">
                {[
                  "Home hasn't sold yet",
                  "Family overwhelmed by downsizing",
                  "No one to coordinate the move",
                  "Financial uncertainty from unsold property",
                  "Family members in different locations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            Partnership Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm rounded">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Clock className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Faster Placements
              </h3>
              <p className="text-muted-foreground text-sm">
                When real estate and moving logistics are handled, your clients
                can move in on schedule without delays.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm rounded">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Handshake className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Happier Clients
              </h3>
              <p className="text-muted-foreground text-sm">
                Families appreciate the comprehensive support, leading to better
                reviews and more referrals for your business.
              </p>
            </div>

            <div className="bg-white p-8 shadow-sm rounded">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Home className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Complete Solution
              </h3>
              <p className="text-muted-foreground text-sm">
                Offer your clients a true full-service experience without adding
                to your workload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            How Our Partnership Works
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white flex items-center justify-center font-serif font-medium rounded">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    You Make the Referral
                  </h3>
                  <p className="text-muted-foreground">
                    When your client needs real estate or transition support,
                    simply introduce us. We&apos;ll take it from there.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white flex items-center justify-center font-serif font-medium rounded">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    We Handle the Logistics
                  </h3>
                  <p className="text-muted-foreground">
                    We manage the home sale, downsizing, and move coordination,
                    keeping you informed of progress.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white flex items-center justify-center font-serif font-medium rounded">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Smooth Move-In
                  </h3>
                  <p className="text-muted-foreground">
                    Your client arrives at their new community ready and
                    settled, with everything coordinated around your placement
                    timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl text-navy italic leading-relaxed mb-6">
              &ldquo;As a placement agent, working with STG is a dream – they
              take care of the real estate and transition hurdles so I can focus
              on care needs. My clients are always grateful for the
              comprehensive support.&rdquo;
            </p>
            <p className="font-semibold text-navy">Michael Chen</p>
            <p className="text-muted-foreground text-sm">
              Senior Placement Advisor
            </p>
            <div className="w-12 h-1 bg-coral mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Let&apos;s Partner Together
            </h2>
            <p className="text-white/80 mb-8">
              Schedule a call to discuss how we can support your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Partnership Call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-navy transition-colors uppercase tracking-wider text-sm"
              >
                View Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
