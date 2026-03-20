import { Home, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/SchemaMarkup";

const faqs = [
  {
    question: "Should I list my parent's home on the market or accept a direct purchase offer?",
    answer:
      "It depends on your timeline, the condition of the home, and your financial priorities. A traditional listing typically yields the highest sale price but takes longer and requires showings, repairs, and staging. Our direct purchase option is ideal when speed and certainty matter more — for example, if your loved one needs to move into a community quickly or the home needs significant repairs. We'll walk you through both options with transparent numbers so you can make the best decision for your family.",
  },
  {
    question: "What is an SRES-certified real estate agent?",
    answer:
      "SRES stands for Seniors Real Estate Specialist, a designation from the National Association of Realtors. SRES-certified agents have completed specialized training in the financial, emotional, and logistical considerations of selling a home when the owner is a senior. They understand reverse mortgages, tax implications of home sales for retirees, estate considerations, and how to work sensitively with older adults and their families.",
  },
  {
    question: "How long does it typically take to sell a senior's home?",
    answer:
      "With a traditional listing, most homes sell within 30 to 90 days depending on the local market, price point, and condition. Our direct purchase option can close in as little as 14 days. We coordinate the sale timeline with your loved one's move-in date at their new community so the two processes run in parallel rather than creating a gap or overlap.",
  },
  {
    question: "What happens to all the belongings we can't take to the new residence?",
    answer:
      "Our downsizing team helps sort everything into clear categories: items to keep and move, items with value to sell through an estate sale, items to donate to charities (we coordinate pickup and provide tax receipts), and items to responsibly dispose of. Decades of accumulated possessions can feel overwhelming, but we work at your family's pace and treat every item with respect.",
  },
  {
    question: "Do you coordinate estate sales, and how does that work?",
    answer:
      "Yes. We either manage the estate sale directly or partner with established estate sale professionals depending on the volume and value of the items. A typical estate sale is advertised locally and online, runs for 1–2 days, and can generate meaningful income from furniture, collectibles, artwork, tools, and household goods. We handle pricing, setup, staffing, and cleanup so your family doesn't have to.",
  },
  {
    question: "Can you help sell a home that needs significant repairs or updating?",
    answer:
      "Absolutely. Many senior homes haven't been updated in years, and that's perfectly fine. With a traditional listing, we can advise on which cost-effective repairs will yield the best return and coordinate contractors on your behalf. With our direct purchase option, we buy the home as-is — no repairs, no staging, no cleaning required. Either way, the condition of the home won't be a barrier.",
  },
  {
    question: "How do you handle sentimental items and family heirlooms during the downsizing process?",
    answer:
      "We understand that behind every item is a memory. Our downsizing specialists are trained to approach this process with empathy and patience. We encourage families to identify heirloom and sentimental items first, before any sorting decisions begin. We can also help photograph and catalog items for family members who live far away so everyone has input. The goal is to honor the past while making a comfortable transition forward.",
  },
  {
    question: "Is the free home valuation really free?",
    answer:
      "Yes, completely free with no obligation whatsoever. We provide a professional comparative market analysis of your home's value based on recent sales, current market conditions, and the home's features. You'll receive a written report you can use whether or not you choose to work with us. There is zero pressure to list or sell — the valuation is our way of helping families make informed decisions.",
  },
];

export const metadata = {
  title: "Real Estate & Downsizing | Senior Transitions Group",
  description:
    "Professional home sales or direct purchase, with compassionate downsizing and estate sale coordination for seniors and families.",
};

export default function RealEstateServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-coral/20 flex items-center justify-center mx-auto mb-6 rounded">
              <Home className="h-8 w-8 text-coral" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Real Estate & Downsizing
            </h1>
            <p className="text-lg text-white/80">
              Professional home sales or direct purchase, with compassionate
              downsizing and estate sale coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Home Sale Options */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <h2 className="font-serif text-3xl font-medium text-navy mb-12 text-center">
            Home Sale Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-border p-8 rounded">
              <h3 className="font-serif text-2xl font-medium text-navy mb-4">
                Traditional Listing
              </h3>
              <p className="text-muted-foreground mb-6">
                Our SRES-certified agents specialize in senior real estate
                sales, understanding the unique needs and timeline requirements
                of transitioning families.
              </p>
              <ul className="space-y-3">
                {[
                  "Comprehensive market analysis",
                  "Professional staging and photography",
                  "Strategic marketing plan",
                  "Expert negotiation",
                  "Flexible timeline coordination",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border p-8 rounded bg-muted">
              <h3 className="font-serif text-2xl font-medium text-navy mb-4">
                Direct Purchase
              </h3>
              <p className="text-muted-foreground mb-6">
                Need to move quickly? We can purchase your home directly,
                providing certainty and speed when timing is critical.
              </p>
              <ul className="space-y-3">
                {[
                  "Fair market value offer",
                  "Close on your timeline",
                  "No repairs or staging needed",
                  "No showings or open houses",
                  "Certainty of sale",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-coral flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downsizing Services */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white aspect-square flex items-center justify-center rounded">
              <Home className="h-32 w-32 text-navy/20" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-medium text-navy mb-6">
                Compassionate Downsizing
              </h2>
              <p className="text-muted-foreground mb-6">
                After decades in a family home, downsizing can feel
                overwhelming. Our team approaches this process with sensitivity
                and patience, helping you decide what to keep, donate, sell, or
                discard.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Sorting & Organizing",
                    desc: "We help categorize belongings and make decisions at a comfortable pace.",
                  },
                  {
                    title: "Estate Sales",
                    desc: "Professional estate sale coordination to maximize value from items you're not keeping.",
                  },
                  {
                    title: "Donations",
                    desc: "We coordinate with charities to donate items and provide tax receipts.",
                  },
                  {
                    title: "Disposal",
                    desc: "Responsible disposal of items that can't be sold or donated.",
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <h4 className="font-semibold text-navy">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4 text-center">
              Real Estate & Downsizing FAQ
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Common questions about selling a senior&apos;s home and downsizing
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
              Get a Free Home Valuation
            </h2>
            <p className="text-white/80 mb-8">
              Learn what your home is worth and explore your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Valuation
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
