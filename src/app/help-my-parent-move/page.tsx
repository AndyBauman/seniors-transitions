import {
  Heart,
  MapPin,
  AlertCircle,
  Phone,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Help My Parent Move | Senior Transitions Group",
  description:
    "Feeling overwhelmed helping your aging parent transition? You don't have to do this alone. Free family consultation for adult children navigating senior moves.",
};

const situations = [
  {
    title: "Mom or Dad Is Refusing to Move",
    description:
      "They know the house is too much, but the idea of leaving feels like losing their independence. We help families navigate this conversation with patience and respect — never pressure.",
    icon: Heart,
  },
  {
    title: "You Live Far Away",
    description:
      "Long-distance caregiving is exhausting. You can't be there to sort through the basement, meet with realtors, or supervise movers. We become your trusted local team.",
    icon: MapPin,
  },
  {
    title: "A Health Crisis Changed Everything",
    description:
      "A fall, a diagnosis, a hospital stay — suddenly the timeline compressed. When you need to move quickly but carefully, our team mobilizes fast while keeping your parent's dignity at the center.",
    icon: AlertCircle,
  },
];

const howWeHelp = [
  "Navigate the emotional conversations about moving",
  "Sort through a lifetime of belongings with sensitivity",
  "Coordinate the sale of the family home",
  "Find the right senior living community",
  "Manage every detail of the physical move",
  "Set up the new space to feel like home",
];

const steps = [
  {
    step: "1",
    title: "Free Family Consultation",
    description:
      "We listen to your situation — no judgment, no sales pitch. Just an honest assessment of how we can help and what the process looks like.",
    icon: Phone,
  },
  {
    step: "2",
    title: "A Plan That Fits Your Family",
    description:
      "We create a customized transition plan around your parent's needs, your timeline, and your family's comfort level. Nothing happens until everyone is ready.",
    icon: Shield,
  },
  {
    step: "3",
    title: "We Handle the Details",
    description:
      "From first sort to final box, our team manages the entire transition. You stay informed. Your parent stays supported. Nobody falls through the cracks.",
    icon: Clock,
  },
];

export default function HelpMyParentMovePage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              You Don&apos;t Have to Do This Alone
            </h1>
            <p className="text-lg text-white/80 mb-2">
              Helping a parent move is one of the hardest things a family goes
              through. We&apos;ve guided over 450 families through it.
            </p>
            <p className="text-white/60">
              Let us carry the weight so you can be present for what matters.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              We Understand Your Situation
            </h2>
            <p className="text-muted-foreground">
              If you found this page, you&apos;re probably dealing with
              something that feels overwhelming. You&apos;re not alone — these
              are the situations families bring to us every week.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {situations.map((situation) => (
              <div key={situation.title} className="bg-muted p-8 rounded">
                <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                  <situation.icon className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {situation.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {situation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
                How We Help Your Family
              </h2>
              <p className="text-muted-foreground mb-6">
                We handle the logistics so you can focus on being there for your
                parent. Our team manages every aspect of the transition with
                expertise and compassion.
              </p>
              <ul className="space-y-3">
                {howWeHelp.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 lg:p-12 rounded shadow-sm">
              <p className="font-serif text-xl text-navy italic leading-relaxed mb-6">
                &ldquo;I was trying to manage Mom&apos;s move from 2,000 miles
                away while working full-time and raising kids. Senior
                Transitions Group became my lifeline. They treated my mother
                with more patience and respect than I could have hoped for. I
                finally stopped feeling guilty.&rdquo;
              </p>
              <div className="w-12 h-1 bg-coral mb-4"></div>
              <p className="font-semibold text-navy">Sarah T.</p>
              <p className="text-muted-foreground text-sm">
                Daughter, long-distance caregiver
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-12 text-center">
            Three Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-navy text-white flex items-center justify-center mx-auto mb-6 rounded-full font-serif text-2xl font-semibold">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Take the First Step for Your Family
            </h2>
            <p className="text-white/80 mb-2">
              A free, confidential conversation about your parent&apos;s
              situation. No obligation. No pressure.
            </p>
            <p className="text-white/60 text-sm mb-8">
              Most families wish they&apos;d called sooner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-family-consultation" className="btn-primary">
                Free Family Consultation
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
