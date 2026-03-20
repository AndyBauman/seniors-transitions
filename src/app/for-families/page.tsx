import { Heart, Home, Users, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "For Seniors & Families | Senior Transitions Group",
  description:
    "When the family home becomes too much, we're here. Complete support for seniors and families navigating the transition to senior living.",
};

export default function ForFamiliesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              For Seniors & Families
            </h1>
            <p className="text-lg text-white/80">
              When the family home becomes too much, we&apos;re here.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Your Situation */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                We Understand What You&apos;re Going Through
              </h2>
              <p className="text-muted-foreground mb-4">
                The decision to leave a family home is never easy. Whether
                it&apos;s driven by health concerns, the desire to be closer to
                family, or simply the recognition that the house has become too
                much to manage, it&apos;s a significant life transition.
              </p>
              <p className="text-muted-foreground mb-4">
                You may be feeling overwhelmed by the logistics, worried about
                finding the right community, or unsure how to handle decades of
                accumulated belongings. These feelings are completely normal.
              </p>
              <p className="text-muted-foreground">
                That&apos;s why we created Senior Transitions Group – to be the
                trusted partner who guides you through every step of this
                journey with expertise and compassion.
              </p>
            </div>
            <div className="bg-muted p-8 lg:p-12 rounded">
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                Common Concerns We Address:
              </h3>
              <ul className="space-y-3">
                {[
                  "How do I find the right community for my needs?",
                  "What do I do with a lifetime of belongings?",
                  "How do I sell my home while managing everything else?",
                  "How can I make this easier on my family?",
                  "What if I need to move quickly?",
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

      {/* How We Help */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            How We Help Your Family
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm rounded">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Users className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Find the Right Community
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                We assess your needs and preferences, research options, and
                accompany you on tours to find the perfect fit.
              </p>
              <Link
                href="/services/placement"
                className="inline-flex items-center text-coral font-medium text-sm hover:underline"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 shadow-sm rounded">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Home className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Sell Your Home
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Our real estate specialists handle the sale of your home,
                coordinating with your transition timeline.
              </p>
              <Link
                href="/services/real-estate"
                className="inline-flex items-center text-coral font-medium text-sm hover:underline"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 shadow-sm rounded">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                <Heart className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                Manage the Move
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                From downsizing to unpacking, we handle every detail so you can
                focus on this new chapter.
              </p>
              <Link
                href="/services/transition"
                className="inline-flex items-center text-coral font-medium text-sm hover:underline"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-medium text-navy mb-8 text-center">
              The Senior Transitions Difference
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral text-white flex items-center justify-center font-semibold text-sm rounded">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    One Point of Contact
                  </h3>
                  <p className="text-muted-foreground">
                    Instead of juggling multiple service providers, you work
                    with one dedicated team that coordinates everything.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral text-white flex items-center justify-center font-semibold text-sm rounded">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    No Pressure, No Rush
                  </h3>
                  <p className="text-muted-foreground">
                    We work on your timeline and never push you to make
                    decisions before you&apos;re ready.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral text-white flex items-center justify-center font-semibold text-sm rounded">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    Certified Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Our team holds SRES (Seniors Real Estate Specialist) and
                    NASMM (National Association of Senior Move Managers)
                    certifications.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-coral text-white flex items-center justify-center font-semibold text-sm rounded">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    Compassionate Approach
                  </h3>
                  <p className="text-muted-foreground">
                    We understand the emotional weight of this transition and
                    treat every family with patience and respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Let&apos;s Talk About Your Family
            </h2>
            <p className="text-white/80 mb-2">
              No obligation. Just conversation and clarity.
            </p>
            <p className="text-white/60 text-sm mb-8">
              Available 7 days a week for your convenience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
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
