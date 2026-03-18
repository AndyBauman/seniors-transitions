import { Heart, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Transition Coordination | Senior Transitions Group",
  description:
    "Complete move management from planning through settling in, ensuring every detail is handled with care for seniors and families.",
};

export default function TransitionServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-coral/20 flex items-center justify-center mx-auto mb-6 rounded">
              <Heart className="h-8 w-8 text-coral" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Transition Coordination
            </h1>
            <p className="text-lg text-white/80">
              Complete move management from planning through settling in,
              ensuring every detail is handled with care.
            </p>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                We Handle Every Detail
              </h2>
              <p className="text-muted-foreground mb-6">
                Moving is stressful at any age, but for seniors leaving a
                long-time home, it can be especially challenging. Our NASMM
                certified move managers take care of everything, so you can
                focus on what matters most – your loved one&apos;s wellbeing.
              </p>
              <ul className="space-y-3">
                {[
                  "Detailed move planning and timeline",
                  "Professional packing with inventory",
                  "Coordination with movers",
                  "Unpacking and setup at new home",
                  "Furniture placement and arrangement",
                  "Picture hanging and décor setup",
                  "Utility transfers and address changes",
                  "Post-move support and adjustments",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted aspect-square flex items-center justify-center rounded">
              <Heart className="h-32 w-32 text-navy/20" />
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            The Move Day Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white flex items-center justify-center font-serif font-medium rounded">
                  AM
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Morning: The Old Home
                  </h3>
                  <p className="text-muted-foreground">
                    Our team arrives early to oversee the movers, ensure
                    everything is properly protected and loaded, and do a final
                    walkthrough of the home. We handle any last-minute details
                    so you don&apos;t have to.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-coral text-white flex items-center justify-center font-serif font-medium rounded">
                  PM
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Afternoon: The New Home
                  </h3>
                  <p className="text-muted-foreground">
                    At the new residence, we direct furniture placement, unpack
                    essentials, make the bed with fresh linens, set up the
                    bathroom, and organize the kitchen. By evening, your loved
                    one walks into a home that feels familiar and welcoming.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white flex items-center justify-center font-serif font-medium rounded">
                  +1
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Days After: Settling In
                  </h3>
                  <p className="text-muted-foreground">
                    We return in the following days to complete unpacking, hang
                    pictures, organize closets, and make any adjustments. We
                    stay involved until your loved one feels completely at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium text-navy mb-6">
              Why Professional Move Management Matters
            </h2>
            <p className="text-muted-foreground mb-8">
              Studies show that the stress of moving can significantly impact
              senior health and wellbeing. Professional move management reduces
              this stress dramatically, leading to better outcomes and faster
              adjustment to the new environment.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-4xl font-medium text-coral mb-2">
                  73%
                </p>
                <p className="text-muted-foreground text-sm">
                  Less stress reported by families using move management
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-coral mb-2">
                  2x
                </p>
                <p className="text-muted-foreground text-sm">
                  Faster adjustment to new living environment
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-coral mb-2">
                  98%
                </p>
                <p className="text-muted-foreground text-sm">
                  Client satisfaction with our move coordination
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium mb-4">
              Let Us Manage Your Move
            </h2>
            <p className="text-white/80 mb-8">
              Schedule a consultation to discuss your transition needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-navy transition-colors uppercase tracking-wider text-sm"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
