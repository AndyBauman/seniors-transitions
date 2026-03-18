import { Home, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Real Estate & Downsizing | Senior Transitions Group",
  description:
    "Professional home sales or direct purchase, with compassionate downsizing and estate sale coordination for seniors and families.",
};

export default function RealEstateServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-coral/20 flex items-center justify-center mx-auto mb-6 rounded">
              <Home className="h-8 w-8 text-coral" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Real Estate & Downsizing
            </h1>
            <p className="text-lg text-white/80">
              Professional home sales or direct purchase, with compassionate
              downsizing and estate sale coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Home Sale Options */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            Home Sale Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-border p-8 rounded">
              <h3 className="font-serif text-2xl font-medium text-navy mb-4">
                Traditional Listing
              </h3>
              <p className="text-muted-foreground mb-6">
                Our SRES-certified agents specialize in senior real estate
                sales, understanding the unique needs and timeline requirements
                of transitioning families.
              </p>
              <ul className="space-y-3">
                {[
                  "Comprehensive market analysis",
                  "Professional staging and photography",
                  "Strategic marketing plan",
                  "Expert negotiation",
                  "Flexible timeline coordination",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border p-8 rounded bg-muted">
              <h3 className="font-serif text-2xl font-medium text-navy mb-4">
                Direct Purchase
              </h3>
              <p className="text-muted-foreground mb-6">
                Need to move quickly? We can purchase your home directly,
                providing certainty and speed when timing is critical.
              </p>
              <ul className="space-y-3">
                {[
                  "Fair market value offer",
                  "Close on your timeline",
                  "No repairs or staging needed",
                  "No showings or open houses",
                  "Certainty of sale",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downsizing Services */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white aspect-square flex items-center justify-center rounded">
              <Home className="h-32 w-32 text-navy/20" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                Compassionate Downsizing
              </h2>
              <p className="text-muted-foreground mb-6">
                After decades in a family home, downsizing can feel
                overwhelming. Our team approaches this process with sensitivity
                and patience, helping you decide what to keep, donate, sell, or
                discard.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Sorting & Organizing",
                    desc: "We help categorize belongings and make decisions at a comfortable pace.",
                  },
                  {
                    title: "Estate Sales",
                    desc: "Professional estate sale coordination to maximize value from items you're not keeping.",
                  },
                  {
                    title: "Donations",
                    desc: "We coordinate with charities to donate items and provide tax receipts.",
                  },
                  {
                    title: "Disposal",
                    desc: "Responsible disposal of items that can't be sold or donated.",
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <h4 className="font-semibold text-navy">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium mb-4">
              Get a Free Home Valuation
            </h2>
            <p className="text-white/80 mb-8">
              Learn what your home is worth and explore your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Valuation
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
