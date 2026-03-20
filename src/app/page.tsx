import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Users, Heart, Phone, Quote } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 items-center min-h-[500px] md:min-h-[600px]">
            <div className="py-16 md:py-20 lg:py-24 lg:pr-12 text-white">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium italic mb-6">
                Every Transition Deserves a Trusted Partner
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                We guide seniors and families through life&apos;s most significant
                housing changes with expertise, compassion, and unwavering
                support.
              </p>
              <Link href="/contact" className="btn-primary">
                Begin the Conversation
              </Link>
            </div>
            <div className="relative hidden lg:block h-full min-h-[500px]">
              <Image
                src="/hero-collage.png"
                alt="Senior living community — elderly couples, caregiver consultation, and assisted living building"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
        {/* Mobile: show image below text */}
        <div className="lg:hidden">
          <Image
            src="/hero-collage.png"
            alt="Senior living community — elderly couples, caregiver consultation, and assisted living building"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
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
                We guide seniors and families through life&apos;s most
                significant housing changes with expertise, compassion, and
                unwavering support.
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

      {/* CTA Section */}
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
