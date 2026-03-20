import { Users, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/SchemaMarkup";

const faqs = [
  {
    question: "What types of senior living communities do you help families find?",
    answer:
      "We help families find the full spectrum of senior living options: Independent Living for active seniors who want maintenance-free living with social activities, Assisted Living for those who need help with daily tasks like bathing or medication management, Memory Care for seniors with Alzheimer's or dementia who need specialized supervision, Skilled Nursing for individuals who require 24-hour medical care, and Continuing Care Retirement Communities (CCRCs) that offer multiple levels of care on one campus.",
  },
  {
    question: "What is the difference between independent living, assisted living, and memory care?",
    answer:
      "Independent Living is designed for seniors who are largely self-sufficient but want the convenience of maintenance-free living, meals, and social programming. Assisted Living provides all of that plus hands-on help with activities of daily living — bathing, dressing, medication reminders, and mobility. Memory Care is a secured, specialized form of assisted living specifically designed for people living with Alzheimer's disease, dementia, or other cognitive conditions, with trained staff and structured programs that reduce confusion and anxiety.",
  },
  {
    question: "How much does your senior living placement service cost families?",
    answer:
      "Our placement service is completely free to families. We are compensated directly by the senior living communities when a resident moves in, similar to how a real estate agent is paid by a seller. This means you receive professional guidance, community research, tour coordination, and ongoing advocacy at no out-of-pocket cost.",
  },
  {
    question: "How do you determine which senior living community is best for my loved one?",
    answer:
      "We start with a comprehensive needs assessment that covers medical and care requirements, daily living abilities, cognitive health, social preferences, location priorities, and budget. From there, we draw on our deep knowledge of local communities — including things that aren't on brochures, like staff-to-resident ratios, turnover rates, and resident satisfaction — to present a curated shortlist of communities that are genuinely the best fit.",
  },
  {
    question: "How long does the senior living placement process usually take?",
    answer:
      "A typical placement takes 2 to 6 weeks from the first consultation to move-in. Urgent placements — such as after a hospital discharge or safety concern — can be expedited to just a few days. We work on your timeline, never rushing your family to make a decision before you feel confident and ready.",
  },
  {
    question: "Do you accompany families on tours of senior living communities?",
    answer:
      "Yes, we personally accompany you on every tour. Having an experienced advocate by your side means you'll know which questions to ask, what to look for beyond the surface, and how to fairly compare communities side by side. We also provide a written comparison guide after tours to help your family make an informed decision.",
  },
  {
    question: "What if my loved one doesn't adjust well after moving into a community?",
    answer:
      "Adjustment periods are normal — most seniors need 30 to 90 days to feel at home in a new community. We check in regularly after move-in and work closely with the community's staff to ensure your loved one is integrating well. If a community truly isn't the right fit despite best efforts, we'll help your family explore alternatives at no additional cost.",
  },
  {
    question: "Can you help with a placement if my parent has been diagnosed with Alzheimer's or dementia?",
    answer:
      "Absolutely. Memory care placement requires specialized knowledge, and it's one of our core areas of expertise. We understand the specific licensing, staffing models, and programming that make a memory care community effective. We also help families navigate the emotional complexity of this transition and can recommend support resources for caregivers.",
  },
];

export const metadata = {
  title: "Placement Services | Senior Transitions Group",
  description:
    "Expert senior living placement services. We guide seniors and families to find the perfect community with personalized assessments and ongoing support.",
};

export default function PlacementServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-coral/20 flex items-center justify-center mx-auto mb-6 rounded">
              <Users className="h-8 w-8 text-coral" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Placement Services
            </h1>
            <p className="text-lg text-white/80">
              We guide seniors and families through life&apos;s most significant
              housing changes with expertise, compassion, and unwavering
              support.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                Finding the Right Community
              </h2>
              <p className="text-muted-foreground mb-6">
                Choosing a senior living community is one of the most important
                decisions a family can make. With hundreds of options available,
                the process can feel overwhelming. That&apos;s where we come in.
              </p>
              <p className="text-muted-foreground mb-6">
                Our placement specialists have deep knowledge of local
                communities and can match your loved one&apos;s specific needs,
                preferences, and budget with the right options. We take the time
                to understand what matters most to your family.
              </p>
              <ul className="space-y-3">
                {[
                  "Independent Living",
                  "Assisted Living",
                  "Memory Care",
                  "Skilled Nursing",
                  "Continuing Care Retirement Communities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted aspect-square flex items-center justify-center rounded">
              <Users className="h-32 w-32 text-navy/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            Our Placement Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded font-serif font-medium">
                1
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Assessment
              </h3>
              <p className="text-muted-foreground text-sm">
                We conduct a thorough assessment of care needs, lifestyle
                preferences, location requirements, and budget considerations.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded font-serif font-medium">
                2
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Research
              </h3>
              <p className="text-muted-foreground text-sm">
                We research and pre-screen communities that match your criteria,
                presenting only the best options for your consideration.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded font-serif font-medium">
                3
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Tours
              </h3>
              <p className="text-muted-foreground text-sm">
                We accompany you on community tours, helping you ask the right
                questions and evaluate each option objectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="w-10 h-10 bg-navy text-white flex items-center justify-center mb-4 rounded font-serif font-medium">
                4
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                Move-In
              </h3>
              <p className="text-muted-foreground text-sm">
                We coordinate with the chosen community and support you through
                the move-in process, ensuring a smooth transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4 text-center">
              Placement Services FAQ
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Common questions about finding the right senior living community
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
              Let Us Help You Find the Right Community
            </h2>
            <p className="text-white/80 mb-8">
              Schedule a free consultation to discuss your family&apos;s needs.
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
