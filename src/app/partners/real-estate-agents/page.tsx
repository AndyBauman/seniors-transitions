import {
  CheckCircle,
  ArrowRight,
  Home,
  PackageCheck,
  Users,
  Handshake,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Agent Partnerships | Senior Transitions Group",
  description:
    "SRES and real estate agent partnership program. Help your senior clients with downsizing coordination, move management, and transition support.",
};

const challenges = [
  "Client emotionally attached to the home and delaying listing",
  "House packed with decades of belongings and not show-ready",
  "Family members out of state and unable to help",
  "Senior overwhelmed by the idea of moving and sorting",
  "Estate or probate situation requiring sensitive handling",
];

const services = [
  {
    title: "Downsizing Coordination",
    description:
      "We work with your clients to sort, donate, and distribute belongings — transforming a cluttered home into a show-ready listing.",
    icon: PackageCheck,
  },
  {
    title: "Move Management",
    description:
      "From packing to unpacking at the new location, our team handles the physical move so your client isn't overwhelmed.",
    icon: Home,
  },
  {
    title: "Family Liaison",
    description:
      "We coordinate with out-of-state family members, keeping everyone informed and reducing the burden on your client.",
    icon: Users,
  },
  {
    title: "Referral Partnership",
    description:
      "Earn referral compensation when you connect clients who need placement or transition services beyond real estate.",
    icon: Handshake,
  },
];

const processSteps = [
  {
    step: "1",
    title: "Identify the Need",
    description:
      "Your senior client needs to sell, but the home isn't ready and the transition feels overwhelming.",
  },
  {
    step: "2",
    title: "Connect Us",
    description:
      "Introduce Senior Transitions Group. We meet with the client and family to assess their full situation.",
  },
  {
    step: "3",
    title: "We Prepare the Home",
    description:
      "Our team handles downsizing, cleanout, and move coordination while you prepare for listing.",
  },
  {
    step: "4",
    title: "You Sell, We Settle",
    description:
      "You manage the sale. We manage the move to senior living. The family gets a seamless experience.",
  },
];

export default function RealEstateAgentsPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Real Estate Agent Partnerships
            </h1>
            <p className="text-lg text-white/80">
              Serve your senior clients with the specialized transition support
              they need — and close listings faster.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
                When a Listing Needs More Than Marketing
              </h2>
              <p className="text-muted-foreground mb-4">
                As a real estate professional — especially those with SRES
                certification — you understand that senior home sales are
                different. The emotional complexity, the volume of belongings,
                and the coordination with care needs make these transactions
                uniquely challenging.
              </p>
              <p className="text-muted-foreground mb-6">
                Senior Transitions Group handles the non-real-estate side of
                these transitions so you can focus on what you do best: selling
                the home.
              </p>
              <Link
                href="/partner-with-us"
                className="inline-flex items-center text-coral font-medium hover:underline"
              >
                Start a partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-muted p-8 rounded">
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                Sound Familiar?
              </h3>
              <ul className="space-y-3">
                {challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-4 text-sm">
                If any of these describe your current client situation,
                we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-12 text-center">
            How We Support Your Senior Clients
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 shadow-sm rounded"
              >
                <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                  <service.icon className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            The Partnership Process
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {processSteps.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-coral/10 flex items-center justify-center rounded">
                  <span className="font-serif text-xl font-semibold text-coral">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Better Outcomes for Your Senior Clients
            </h2>
            <p className="text-white/80 mb-2">
              Let&apos;s discuss how we can support your practice and make
              senior transitions smoother for everyone involved.
            </p>
            <p className="text-white/60 text-sm mb-8">
              SRES-aligned. NASMM certified. 450+ transitions completed.
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
