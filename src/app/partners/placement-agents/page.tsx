import {
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  DollarSign,
  FileText,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Placement Agent Partnerships | Senior Transitions Group",
  description:
    "Partner with Senior Transitions Group to offer your placement clients complete move management, real estate, and downsizing services. Competitive referral program.",
};

const benefits = [
  {
    title: "Complete Client Care",
    description:
      "Your clients receive seamless move management, downsizing, and real estate support — all coordinated around the placement you've already made.",
  },
  {
    title: "Competitive Referral Compensation",
    description:
      "Earn referral fees on every transition service your clients use. Transparent structure with no hidden terms.",
  },
  {
    title: "Faster Move-Ins",
    description:
      "When we handle logistics, your placements close faster. Communities see fewer delays and cancellations.",
  },
  {
    title: "Your Reputation, Protected",
    description:
      "Our SRES and NASMM certified team operates under the same ethical standards you hold yourself to.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "You Make the Placement",
    description:
      "Continue doing what you do best — matching seniors with the right community based on care needs, budget, and preferences.",
  },
  {
    step: "2",
    title: "Introduce Us",
    description:
      "When your client needs help with the home, the move, or downsizing, introduce our team. We'll take it from there.",
  },
  {
    step: "3",
    title: "We Handle the Transition",
    description:
      "Our specialists manage every detail — from sorting and packing to home sale and move-in day coordination.",
  },
  {
    step: "4",
    title: "You Earn & We Report",
    description:
      "Receive your referral compensation and a detailed status update on every shared client.",
  },
];

export default function PlacementAgentsPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Placement Agent Partnerships
            </h1>
            <p className="text-lg text-white/80">
              You find the right community. We handle everything else. Together,
              we deliver a complete transition experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
                Extend Your Value Without Extending Your Workload
              </h2>
              <p className="text-muted-foreground mb-4">
                As a placement agent, your expertise is in matching seniors with
                the right care environment. But families often need help with
                everything that comes after the placement decision — selling the
                home, downsizing a lifetime of belongings, and coordinating the
                physical move.
              </p>
              <p className="text-muted-foreground mb-6">
                Senior Transitions Group becomes your back-office transition
                team. We handle the logistics so you can focus on placements,
                knowing your clients are in expert hands.
              </p>
              <Link
                href="/partner-with-us"
                className="inline-flex items-center text-coral font-medium hover:underline"
              >
                Start the conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <CheckCircle className="h-5 w-5 text-coral flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-12 text-center">
            How the Referral Process Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mx-auto mb-4 rounded font-serif text-xl font-semibold">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">
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

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-medium text-navy mb-8 text-center">
              What Our Partners Say
            </h2>
            <div className="bg-muted p-8 lg:p-12 rounded">
              <p className="font-serif text-xl text-navy italic leading-relaxed mb-6">
                &ldquo;Before partnering with Senior Transitions Group, I was
                losing placements because families couldn&apos;t manage the move
                logistics. Now I introduce their team and the entire process
                flows. My placement-to-move-in rate has increased by 40%, and
                families are consistently grateful for the seamless
                experience.&rdquo;
              </p>
              <div className="w-12 h-1 bg-coral mb-4"></div>
              <p className="font-semibold text-navy">Michael Chen</p>
              <p className="text-muted-foreground text-sm">
                Senior Living Advisor, 8 years in placement services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-white/80 mb-2">
              Join a growing network of placement professionals who deliver
              complete transition experiences.
            </p>
            <p className="text-white/60 text-sm mb-8">
              No contracts. No minimums. Just better outcomes for your clients.
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
