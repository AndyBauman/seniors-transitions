import {
  CheckCircle,
  ArrowRight,
  Scale,
  FileText,
  ShieldCheck,
  Clock,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Elder Law Attorney Partnerships | Senior Transitions Group",
  description:
    "Partnership program for elder law attorneys, estate planners, and fiduciaries. Trusted transition logistics for probate, estate, and guardianship cases.",
};

const situations = [
  "Probate cases requiring estate cleanout and property preparation",
  "Guardianship or conservatorship matters involving relocation",
  "Clients downsizing as part of Medicaid spend-down planning",
  "Trust administration requiring property liquidation",
  "Families in crisis needing immediate transition support",
];

const services = [
  {
    title: "Probate & Estate Support",
    description:
      "We handle the physical side of estate settlement — sorting, inventorying, donating, liquidating, and preparing the property for sale.",
    icon: FileText,
  },
  {
    title: "Ethical Partnership Standards",
    description:
      "Our partnership operates under full transparency. No conflicts of interest. Clear documentation. Full accountability to the client and their legal representative.",
    icon: ShieldCheck,
  },
  {
    title: "Fiduciary-Friendly Process",
    description:
      "Detailed inventories, photo documentation, and itemized reporting that supports your fiduciary obligations and court requirements.",
    icon: Scale,
  },
  {
    title: "Urgent Transition Capability",
    description:
      "When a client needs to relocate immediately due to health or safety concerns, our team mobilizes quickly while maintaining thorough documentation.",
    icon: Clock,
  },
];

const referralSteps = [
  {
    step: "1",
    title: "Identify a Client Need",
    description:
      "Your client or their family needs help with relocation, downsizing, home preparation, or estate cleanout as part of a legal matter.",
  },
  {
    step: "2",
    title: "Make the Referral",
    description:
      "Contact us directly or have the family reach out. We schedule an assessment within 48 hours.",
  },
  {
    step: "3",
    title: "We Coordinate & Document",
    description:
      "Our team manages the transition with detailed documentation suitable for legal proceedings and fiduciary reporting.",
  },
  {
    step: "4",
    title: "Reporting & Follow-Up",
    description:
      "You receive comprehensive status updates and final reporting aligned with your case requirements.",
  },
];

export default function ElderLawAttorneysPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Elder Law Attorney Partnerships
            </h1>
            <p className="text-lg text-white/80">
              Trusted transition logistics for your clients&apos; most sensitive
              legal matters. Documented, ethical, and thorough.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
                When Legal Matters Require Physical Transitions
              </h2>
              <p className="text-muted-foreground mb-4">
                Elder law practice often intersects with the physical realities
                of aging — a client who needs to move into care, an estate that
                needs to be settled, a property that must be prepared for sale as
                part of a legal proceeding.
              </p>
              <p className="text-muted-foreground mb-6">
                Senior Transitions Group provides the on-the-ground logistics
                that complement your legal expertise. We handle the property and
                personal belongings with the same level of care and
                documentation your practice demands.
              </p>
              <Link
                href="/partner-with-us"
                className="inline-flex items-center text-coral font-medium hover:underline"
              >
                Discuss a partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-muted p-8 rounded">
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                Common Scenarios We Support
              </h3>
              <ul className="space-y-3">
                {situations.map((item) => (
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

      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-12 text-center">
            Services for Legal Professionals
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
            Referral Process
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {referralSteps.map((item) => (
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
              A Trusted Resource for Your Practice
            </h2>
            <p className="text-white/80 mb-2">
              Let&apos;s discuss how our services can support your elder law,
              estate planning, or fiduciary practice.
            </p>
            <p className="text-white/60 text-sm mb-8">
              Fully insured. Documented processes. Court-ready reporting.
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
