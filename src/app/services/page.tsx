import { Home, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Senior Transitions Group",
  description:
    "Complete support for every aspect of the senior living transition - placement services, real estate & downsizing, and transition coordination.",
};

const services = [
  {
    icon: Users,
    title: "Placement Services",
    description:
      "We guide seniors and families through life's most significant housing changes with expertise, compassion, and unwavering support.",
    features: [
      "Personalized assessment of care needs and preferences",
      "Curated selection of appropriate communities",
      "Guided tours and comparison support",
      "Negotiation assistance and move-in coordination",
      "Ongoing advocacy after placement",
    ],
    href: "/services/placement",
  },
  {
    icon: Home,
    title: "Real Estate & Downsizing",
    description:
      "Professional home sales or direct purchase, with compassionate downsizing and estate sale coordination.",
    features: [
      "Free home valuation and market analysis",
      "Traditional listing or direct purchase options",
      "Compassionate downsizing assistance",
      "Estate sale and donation coordination",
      "Home preparation and staging services",
    ],
    href: "/services/real-estate",
  },
  {
    icon: Heart,
    title: "Transition Coordination",
    description:
      "Complete move management from planning through settling in, ensuring every detail is handled with care.",
    features: [
      "Detailed move planning and timeline",
      "Professional packing and unpacking",
      "Furniture placement and setup",
      "Utility transfers and address changes",
      "Post-move support and check-ins",
    ],
    href: "/services/transition",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white/80">
              Complete support for every aspect of the senior living transition
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-coral/10 flex items-center justify-center mb-6 rounded">
                    <service.icon className="h-8 w-8 text-coral" />
                  </div>
                  <h2 className="font-serif text-3xl font-medium text-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-coral rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-coral font-medium hover:underline"
                  >
                    Learn more about {service.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div
                  className={`bg-muted aspect-[4/3] flex items-center justify-center rounded ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <service.icon className="h-24 w-24 text-navy/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              How We Work Together
            </h2>
            <p className="text-muted-foreground">
              Our integrated approach ensures a seamless transition experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mx-auto mb-4 rounded font-serif text-xl font-medium">
                1
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Consultation
              </h3>
              <p className="text-muted-foreground text-sm">
                Free initial meeting to understand your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mx-auto mb-4 rounded font-serif text-xl font-medium">
                2
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Planning
              </h3>
              <p className="text-muted-foreground text-sm">
                Customized transition plan tailored to your family
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mx-auto mb-4 rounded font-serif text-xl font-medium">
                3
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Execution
              </h3>
              <p className="text-muted-foreground text-sm">
                Hands-on management of every detail
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mx-auto mb-4 rounded font-serif text-xl font-medium">
                4
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Follow-Up
              </h3>
              <p className="text-muted-foreground text-sm">
                Ongoing support to ensure success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8">
              Schedule a free consultation to discuss how we can help your
              family.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
