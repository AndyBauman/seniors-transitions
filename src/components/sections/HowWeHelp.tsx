import { Home, Clock, DollarSign, Shield, Heart, FileText } from "lucide-react";

const steps = [
  {
    icon: Home,
    title: "We Buy the Home As-Is",
    description:
      "No repairs, no cleaning, no staging. We take the home in any condition — even with belongings inside.",
  },
  {
    icon: Clock,
    title: "Close on Your Timeline",
    description:
      "Whether your loved one needs to move in 7 days or 60 days, we work around your family's schedule.",
  },
  {
    icon: DollarSign,
    title: "Fair Cash Offer",
    description:
      "Proceeds go directly toward senior living move-in costs, deposits, and whatever your family needs.",
  },
  {
    icon: Shield,
    title: "Medicaid-Safe Process",
    description:
      "We structure transactions carefully to avoid triggering the 5-year Medicaid lookback — protecting your family's assets.",
  },
  {
    icon: FileText,
    title: "Zero Cost to Families",
    description:
      "No realtor commissions, no closing costs, no hidden fees. We're paid by our partners — not you.",
  },
  {
    icon: Heart,
    title: "Compassionate Support",
    description:
      "We coordinate with placement agents, senior communities, and your family to make the transition as smooth as possible.",
  },
];

export function HowWeHelp() {
  return (
    <section className="bg-white">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
            How We Help Your Family
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We handle the home so you can focus on your loved one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-coral/10 rounded mb-4">
                <step.icon className="w-7 h-7 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
