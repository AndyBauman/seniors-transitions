import {
  Building2,
  Heart,
  Home,
  Users,
  ShieldCheck,
  Stethoscope,
  MapPin,
  DollarSign,
  Star,
  UserCheck,
  ClipboardList,
  ArrowRight,
  Phone,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";

export const metadata = {
  title: "Choosing Senior Living | Senior Transitions Group",
  description:
    "A comprehensive guide to help families choose the right senior living community. Compare assisted living, memory care, independent living, CCRCs, and skilled nursing options.",
};

const communityTypes = [
  {
    icon: Home,
    title: "Independent Living",
    description:
      "For active seniors who want a maintenance-free lifestyle with social opportunities, dining, and amenities — without the burden of home upkeep.",
  },
  {
    icon: Heart,
    title: "Assisted Living",
    description:
      "For seniors who need help with daily activities like bathing, dressing, or medication management while maintaining as much independence as possible.",
  },
  {
    icon: ShieldCheck,
    title: "Memory Care",
    description:
      "Specialized communities for individuals with Alzheimer's or other forms of dementia, featuring secure environments and trained staff.",
  },
  {
    icon: Building2,
    title: "Continuing Care Retirement Communities (CCRCs)",
    description:
      "Campus-style communities offering a full continuum of care — from independent living through skilled nursing — so residents can age in place.",
  },
  {
    icon: Stethoscope,
    title: "Skilled Nursing Facilities",
    description:
      "For seniors who need round-the-clock medical care and supervision from licensed nurses and therapists.",
  },
];

const keyFactors = [
  {
    icon: MapPin,
    title: "Location & Proximity",
    description:
      "Consider closeness to family, medical providers, and familiar neighborhoods. Being nearby makes visits easier and keeps your loved one connected.",
  },
  {
    icon: Stethoscope,
    title: "Level of Care",
    description:
      "Assess current and anticipated care needs. A community that can adjust care over time may prevent the disruption of future moves.",
  },
  {
    icon: DollarSign,
    title: "Cost & Financial Fit",
    description:
      "Understand all-inclusive versus à la carte pricing. Ask about rate increases, what's included, and whether long-term care insurance or VA benefits apply.",
  },
  {
    icon: Star,
    title: "Amenities & Activities",
    description:
      "Look for programs that match your loved one's interests — fitness classes, arts, outings, and spiritual services all contribute to quality of life.",
  },
  {
    icon: UserCheck,
    title: "Staff Ratios & Training",
    description:
      "Higher staff-to-resident ratios typically mean more attentive care. Ask about training, turnover rates, and how staff handle emergencies.",
  },
  {
    icon: Users,
    title: "Community Culture",
    description:
      "Every community has its own personality. Visit at different times, eat a meal there, and talk to current residents to gauge whether it feels like home.",
  },
];

const tourQuestions = [
  "What is the staff-to-resident ratio during the day and at night?",
  "How do you handle medical emergencies and after-hours care?",
  "What is included in the monthly fee, and what costs extra?",
  "How do you create individualized care plans, and how often are they reviewed?",
  "Can residents age in place if their care needs increase?",
  "What activities and social programs are offered daily?",
  "What is the process for transitioning a new resident?",
  "How do you communicate with families about their loved one's well-being?",
  "What are your policies on visitors, pets, and personal belongings?",
  "Can I speak with current residents or their family members for references?",
];

const resourceLinks = [
  {
    href: "/choosing-senior-living/assisted-living-vs-memory-care",
    label: "Assisted Living vs. Memory Care: Understanding the Difference",
  },
  {
    href: "/choosing-senior-living/questions-to-ask-on-tour",
    label: "The Complete List of Questions to Ask on a Community Tour",
  },
  {
    href: "/choosing-senior-living/independent-vs-assisted-living",
    label: "Independent Living vs. Assisted Living: Which Is Right?",
  },
  {
    href: "/choosing-senior-living/what-is-a-ccrc",
    label: "What Is a CCRC? A Guide to Continuing Care Communities",
  },
  {
    href: "/choosing-senior-living/what-to-bring",
    label: "What to Bring When Moving to Senior Living",
  },
];

const faqItems = [
  {
    question: "When is the right time to start looking at senior living communities?",
    answer:
      "The best time to start exploring is before there's an urgent need. Planning ahead gives families time to tour communities, compare options, and make a thoughtful decision rather than a rushed one. If you're noticing safety concerns, increased isolation, or difficulty managing daily tasks, those are strong signals it's time to start the conversation.",
  },
  {
    question: "How long does the process of choosing a community typically take?",
    answer:
      "Most families spend 2 to 6 months from initial research to move-in, though timelines vary based on care urgency and availability. Starting early allows time for multiple tours, financial planning, and emotional adjustment. In urgent situations, we can help expedite the process significantly.",
  },
  {
    question: "Can my loved one try a community before committing long-term?",
    answer:
      "Many communities offer short-term or respite stays, typically ranging from a few days to a few months. This is an excellent way for your loved one to experience daily life, meet residents, and get comfortable before making a long-term commitment.",
  },
  {
    question: "What if my loved one's care needs change after moving in?",
    answer:
      "Quality communities regularly reassess residents and adjust care plans accordingly. Some communities offer multiple levels of care on one campus, allowing residents to transition seamlessly. We always recommend considering future care needs when selecting a community.",
  },
  {
    question: "How do I talk to a reluctant parent about senior living?",
    answer:
      "Focus on their priorities — safety, social connection, and reducing daily burdens — rather than framing it as a loss of independence. Involve them in the process by touring together and letting them voice their preferences. A professional advisor can also help facilitate these conversations with empathy and experience.",
  },
];

export default function ChoosingSeniorLivingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Choosing the Right Senior Living Community
            </h1>
            <p className="text-lg text-white/80">
              A comprehensive guide to help your family navigate the options,
              ask the right questions, and find a community that feels like
              home.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Communities */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Types of Senior Living Communities
            </h2>
            <p className="text-muted-foreground">
              Understanding the differences is the first step toward finding the
              right fit for your loved one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityTypes.map((type) => (
              <div key={type.title} className="bg-muted p-8 rounded">
                <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                  <type.icon className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              How to Choose the Right Community
            </h2>
            <p className="text-muted-foreground">
              Six critical factors to evaluate when comparing communities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFactors.map((factor) => (
              <div key={factor.title} className="bg-white p-8 shadow-sm rounded">
                <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mb-6 rounded">
                  <factor.icon className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {factor.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions to Ask */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
                Questions to Ask on a Tour
              </h2>
              <p className="text-muted-foreground">
                Bring this list with you — the answers will reveal what daily
                life is really like.
              </p>
            </div>
            <div className="space-y-4">
              {tourQuestions.map((question, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-coral text-white flex items-center justify-center font-semibold text-sm rounded">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Costs */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                Understanding Senior Living Costs
              </h2>
              <p className="text-muted-foreground mb-4">
                Senior living costs vary widely based on location, care level,
                and community type. National averages range from $2,000–$3,500
                per month for independent living to $5,000–$8,000+ for memory
                care or skilled nursing.
              </p>
              <p className="text-muted-foreground mb-4">
                Most communities charge a monthly fee that covers housing,
                meals, and basic services. Additional care, specialized
                therapies, and premium amenities may cost extra. Always ask for
                a complete fee breakdown before committing.
              </p>
              <p className="text-muted-foreground">
                Funding options may include personal savings, home sale proceeds,
                long-term care insurance, Veterans Aid & Attendance benefits, and
                in some cases Medicaid. A financial advisor familiar with elder
                care can help you plan.
              </p>
            </div>
            <div className="bg-white p-8 lg:p-12 rounded shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">
                Common Funding Sources:
              </h3>
              <ul className="space-y-3">
                {[
                  "Proceeds from home sale",
                  "Long-term care insurance",
                  "Veterans Aid & Attendance benefits",
                  "Personal savings and investments",
                  "Medicaid (for qualifying individuals)",
                  "Life insurance policy conversions",
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

      {/* Resource Links */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
                Helpful Resources
              </h2>
              <p className="text-muted-foreground">
                Dive deeper into the topics that matter most to your family
              </p>
            </div>
            <div className="space-y-4">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between p-5 bg-muted rounded hover:shadow-sm transition-shadow group"
                >
                  <div className="flex items-center gap-3">
                    <ClipboardList className="h-5 w-5 text-coral flex-shrink-0" />
                    <span className="text-navy font-medium group-hover:text-coral transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-coral flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-12 h-12 bg-coral/10 flex items-center justify-center mx-auto mb-4 rounded">
                <HelpCircle className="h-6 w-6 text-coral" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-white/80 mb-2">
              Schedule a free consultation and let our team guide you through
              the process with expertise and compassion.
            </p>
            <p className="text-white/60 text-sm mb-8">
              No obligation — just honest guidance for your family
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Free Consultation
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
