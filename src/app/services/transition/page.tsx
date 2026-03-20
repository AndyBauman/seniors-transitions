import { Heart, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/SchemaMarkup";

const faqs = [
  {
    question: "What exactly does a senior move manager do?",
    answer:
      "A senior move manager oversees every logistical detail of a senior's relocation — from creating a move plan and timeline, to packing and labeling belongings, coordinating with movers, supervising load-in and delivery, unpacking and setting up the new home, and handling post-move tasks like address changes and utility transfers. The goal is to remove the logistical burden from the senior and their family so everyone can focus on the emotional side of the transition.",
  },
  {
    question: "How far in advance should we start planning a senior move?",
    answer:
      "Ideally, 6 to 8 weeks before the desired move date. This gives us time to create a detailed plan, coordinate downsizing if needed, book movers, and prepare both the old and new residences. That said, we regularly handle urgent moves in as little as 1 to 2 weeks when a hospital discharge, safety concern, or time-sensitive community opening requires it. The sooner we're involved, the smoother the experience.",
  },
  {
    question: "What is NASMM certification and why does it matter?",
    answer:
      "NASMM stands for the National Association of Senior & Specialty Move Managers. NASMM-certified professionals adhere to a strict code of ethics, carry appropriate insurance, and have demonstrated expertise in the unique physical, emotional, and logistical challenges of relocating older adults. Choosing a NASMM-certified move manager means you're working with a credentialed specialist — not a general moving company.",
  },
  {
    question: "Will my loved one's new home feel familiar on the very first night?",
    answer:
      "That's exactly our goal. On move day, we set up the new residence so it feels like home before your loved one walks in — the bed is made with their own linens, family photos are placed, the bathroom is stocked, and the kitchen has essentials ready. Many families tell us their loved one couldn't believe how 'at home' the new place felt from day one.",
  },
  {
    question: "Do you handle moves to all types of senior living communities?",
    answer:
      "Yes. We coordinate moves into independent living apartments, assisted living communities, memory care facilities, skilled nursing centers, and continuing care retirement communities. We also handle moves from one community to another, or from a senior's home into a family member's residence. Each move type has different requirements, and we tailor our approach accordingly.",
  },
  {
    question: "How do you minimize stress for the senior during the move?",
    answer:
      "Stress reduction is built into everything we do. We keep the senior involved in decisions without burdening them with logistics. On move day, we recommend they spend the morning somewhere comfortable while our team manages the heavy lifting. We create familiar surroundings in the new home before they arrive. We also check in frequently in the days and weeks after the move to catch and address any adjustment challenges early.",
  },
  {
    question: "What happens after move day — do you provide follow-up support?",
    answer:
      "Yes. We return within 24–48 hours to complete remaining unpacking, hang pictures, organize closets, and make any furniture adjustments. We stay in touch for several weeks afterward to ensure your loved one is settling in comfortably. If anything needs attention — a piece of furniture that isn't working in its spot, extra items to donate, or help finding local services — we're a phone call away.",
  },
  {
    question: "Can you coordinate out-of-state or long-distance moves for seniors?",
    answer:
      "Absolutely. Long-distance moves are one of our specialties. We coordinate between the origin and destination, manage logistics with interstate movers, and can have a team member present at both ends to oversee packing and setup. For families managing a parent's move from across the country, our service is especially valuable — we serve as your trusted on-the-ground representative.",
  },
];

export const metadata = {
  title: "Transition Coordination | Senior Transitions Group",
  description:
    "Complete move management from planning through settling in, ensuring every detail is handled with care for seniors and families.",
};

export default function TransitionServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-coral/20 flex items-center justify-center mx-auto mb-6 rounded">
              <Heart className="h-8 w-8 text-coral" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Transition Coordination
            </h1>
            <p className="text-lg text-white/80">
              Complete move management from planning through settling in,
              ensuring every detail is handled with care.
            </p>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                We Handle Every Detail
              </h2>
              <p className="text-muted-foreground mb-6">
                Moving is stressful at any age, but for seniors leaving a
                long-time home, it can be especially challenging. Our NASMM
                certified move managers take care of everything, so you can
                focus on what matters most – your loved one&apos;s wellbeing.
              </p>
              <ul className="space-y-3">
                {[
                  "Detailed move planning and timeline",
                  "Professional packing with inventory",
                  "Coordination with movers",
                  "Unpacking and setup at new home",
                  "Furniture placement and arrangement",
                  "Picture hanging and décor setup",
                  "Utility transfers and address changes",
                  "Post-move support and adjustments",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted aspect-square flex items-center justify-center rounded">
              <Heart className="h-32 w-32 text-navy/20" />
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            The Move Day Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white flex items-center justify-center font-serif font-medium rounded">
                  AM
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Morning: The Old Home
                  </h3>
                  <p className="text-muted-foreground">
                    Our team arrives early to oversee the movers, ensure
                    everything is properly protected and loaded, and do a final
                    walkthrough of the home. We handle any last-minute details
                    so you don&apos;t have to.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-coral text-white flex items-center justify-center font-serif font-medium rounded">
                  PM
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Afternoon: The New Home
                  </h3>
                  <p className="text-muted-foreground">
                    At the new residence, we direct furniture placement, unpack
                    essentials, make the bed with fresh linens, set up the
                    bathroom, and organize the kitchen. By evening, your loved
                    one walks into a home that feels familiar and welcoming.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white flex items-center justify-center font-serif font-medium rounded">
                  +1
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Days After: Settling In
                  </h3>
                  <p className="text-muted-foreground">
                    We return in the following days to complete unpacking, hang
                    pictures, organize closets, and make any adjustments. We
                    stay involved until your loved one feels completely at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium text-navy mb-6">
              Why Professional Move Management Matters
            </h2>
            <p className="text-muted-foreground mb-8">
              Studies show that the stress of moving can significantly impact
              senior health and wellbeing. Professional move management reduces
              this stress dramatically, leading to better outcomes and faster
              adjustment to the new environment.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-4xl font-medium text-coral mb-2">
                  73%
                </p>
                <p className="text-muted-foreground text-sm">
                  Less stress reported by families using move management
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-coral mb-2">
                  2x
                </p>
                <p className="text-muted-foreground text-sm">
                  Faster adjustment to new living environment
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-coral mb-2">
                  98%
                </p>
                <p className="text-muted-foreground text-sm">
                  Client satisfaction with our move coordination
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4 text-center">
              Transition Coordination FAQ
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Common questions about professional senior move management
            </p>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium mb-4">
              Let Us Manage Your Move
            </h2>
            <p className="text-white/80 mb-8">
              Schedule a consultation to discuss your transition needs.
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

      <FAQSchema questions={faqs} />
    </>
  );
}
