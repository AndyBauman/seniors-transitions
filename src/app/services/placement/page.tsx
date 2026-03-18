import { Users, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Placement Services | Senior Transitions Group",
  description:
    "Expert senior living placement services. We guide seniors and families to find the perfect community with personalized assessments and ongoing support.",
};

export default function PlacementServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-coral/20 flex items-center justify-center mx-auto mb-6 rounded">
              <Users className="h-8 w-8 text-coral" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Placement Services
            </h1>
            <p className="text-lg text-white/80">
              We guide seniors and families through life&apos;s most significant
              housing changes with expertise, compassion, and unwavering
              support.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                Finding the Right Community
              </h2>
              <p className="text-muted-foreground mb-6">
                Choosing a senior living community is one of the most important
                decisions a family can make. With hundreds of options available,
                the process can feel overwhelming. That&apos;s where we come in.
              </p>
              <p className="text-muted-foreground mb-6">
                Our placement specialists have deep knowledge of local
                communities and can match your loved one&apos;s specific needs,
                preferences, and budget with the right options. We take the time
                to understand what matters most to your family.
              </p>
              <ul className="space-y-3">
                {[
                  "Independent Living",
                  "Assisted Living",
                  "Memory Care",
                  "Skilled Nursing",
                  "Continuing Care Retirement Communities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted aspect-square flex items-center justify-center rounded">
              <Users className="h-32 w-32 text-navy/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            Our Placement Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded font-serif font-medium">
                1
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Assessment
              </h3>
              <p className="text-muted-foreground text-sm">
                We conduct a thorough assessment of care needs, lifestyle
                preferences, location requirements, and budget considerations.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded font-serif font-medium">
                2
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Research
              </h3>
              <p className="text-muted-foreground text-sm">
                We research and pre-screen communities that match your criteria,
                presenting only the best options for your consideration.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded font-serif font-medium">
                3
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Tours
              </h3>
              <p className="text-muted-foreground text-sm">
                We accompany you on community tours, helping you ask the right
                questions and evaluate each option objectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded font-serif font-medium">
                4
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Move-In
              </h3>
              <p className="text-muted-foreground text-sm">
                We coordinate with the chosen community and support you through
                the move-in process, ensuring a smooth transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium mb-4">
              Let Us Help You Find the Right Community
            </h2>
            <p className="text-white/80 mb-8">
              Schedule a free consultation to discuss your family&apos;s needs.
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
