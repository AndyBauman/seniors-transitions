import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "What Is a CCRC (Continuing Care Retirement Community)? | Senior Transitions Group",
  description:
    "Learn what a Continuing Care Retirement Community (CCRC) is, how entrance fees and monthly costs work, the levels of care provided, and whether a CCRC is the right choice for your family.",
};

export default function WhatIsACCRCPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Link
              href="/choosing-senior-living"
              className="inline-flex items-center text-coral hover:text-coral/80 text-sm uppercase tracking-wider mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Choosing Senior Living
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              What Is a CCRC (Continuing Care Retirement Community)?
            </h1>
            <p className="text-lg text-white/80">
              A CCRC offers a full continuum of care in one location&mdash;from independent living through skilled nursing&mdash;so residents never have to relocate when their needs change.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A Continuing Care Retirement Community&mdash;commonly called a CCRC or sometimes a Life Plan Community&mdash;is a type of senior living that provides multiple levels of care on a single campus. Residents typically enter when they are still healthy and independent, with the assurance that if their health declines, they can move to higher levels of care without leaving the community they know.
              </p>
              <p>
                For many families, the appeal of a CCRC is the peace of mind it provides. Instead of scrambling to find a new facility during a health crisis, residents and their families know that assisted living, memory care, and skilled nursing are all available steps away. It&apos;s a plan for the future, made while you still have the clarity and energy to make thoughtful choices.
              </p>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  The Levels of Care in a CCRC
                </h2>
                <p className="mb-4">
                  CCRCs are unique because they house three or more levels of care on one campus. Here&apos;s what that typically looks like:
                </p>
                <div className="space-y-4">
                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Independent Living</h3>
                    <p className="text-sm">
                      This is where most CCRC residents begin. They live in private apartments, cottages, or houses within the community. They manage their own daily routines and enjoy amenities such as dining, fitness centers, pools, clubs, and social events. No personal care assistance is included at this level.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Assisted Living</h3>
                    <p className="text-sm">
                      When a resident begins to need help with activities of daily living&mdash;bathing, dressing, medication management, or mobility&mdash;they can transition to the assisted living section. This provides personal care support while still promoting as much independence as possible.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Memory Care</h3>
                    <p className="text-sm">
                      Many CCRCs include a dedicated memory care unit for residents living with Alzheimer&apos;s disease or other forms of dementia. These units offer specialized programming, higher staff ratios, and secured environments.
                    </p>
                  </div>
                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Skilled Nursing</h3>
                    <p className="text-sm">
                      For residents who need around-the-clock medical care, skilled nursing provides licensed nurses and therapists on-site. This may be used temporarily after a surgery or hospitalization, or permanently if complex medical needs arise.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  How CCRC Pricing Works
                </h2>
                <p className="mb-4">
                  CCRCs have a financial structure that differs from other senior living options. Most require two components: an entrance fee and a monthly fee.
                </p>

                <h3 className="font-serif text-lg font-medium text-navy mb-2">Entrance Fees</h3>
                <p className="mb-4">
                  The entrance fee is a significant upfront payment, typically ranging from $100,000 to $500,000 or more depending on the size of the living unit, the location, and the community&apos;s amenities. This fee essentially secures your place in the community and your access to the full continuum of care.
                </p>
                <p className="mb-4">
                  Entrance fee contracts generally fall into three categories:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong className="text-navy">Type A (Life Care):</strong> The highest entrance fee, but monthly costs remain relatively stable even if you move to assisted living or skilled nursing. You&apos;re essentially prepaying for future care.</li>
                  <li><strong className="text-navy">Type B (Modified):</strong> A lower entrance fee than Type A, with a set number of days of higher-level care included. After those days are used, you pay market rates for additional care.</li>
                  <li><strong className="text-navy">Type C (Fee-for-Service):</strong> The lowest entrance fee, but you pay full market rates for assisted living or skilled nursing if and when you need them. Monthly costs can increase significantly.</li>
                </ul>
                <p className="mb-4">
                  Some CCRCs also offer refundable entrance fee options, where a percentage (often 50 to 90 percent) is returned to the resident or their estate upon departure. These options typically carry a higher initial cost.
                </p>

                <h3 className="font-serif text-lg font-medium text-navy mb-2">Monthly Fees</h3>
                <p>
                  Monthly fees cover housing, meals, utilities, housekeeping, activities, and access to community amenities. They typically range from $2,000 to $5,000 or more for independent living, with increases when moving to higher care levels depending on the contract type. These fees generally increase 3 to 5 percent annually.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Pros and Cons of CCRCs
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-3">Advantages</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-coral font-bold mt-0.5">+</span>
                        <span>One move covers you for life&mdash;no scrambling during a health crisis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-coral font-bold mt-0.5">+</span>
                        <span>Couples with different care needs can remain on the same campus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-coral font-bold mt-0.5">+</span>
                        <span>Vibrant social community with extensive amenities and programming</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-coral font-bold mt-0.5">+</span>
                        <span>Predictable costs with Life Care contracts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-coral font-bold mt-0.5">+</span>
                        <span>Maintenance-free living&mdash;no more home repairs or yard work</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-3">Considerations</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-navy font-bold mt-0.5">&ndash;</span>
                        <span>Significant upfront entrance fee requires substantial savings or home sale proceeds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-navy font-bold mt-0.5">&ndash;</span>
                        <span>Monthly fees still apply and increase over time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-navy font-bold mt-0.5">&ndash;</span>
                        <span>Not all entrance fee refund policies are favorable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-navy font-bold mt-0.5">&ndash;</span>
                        <span>Financial health of the CCRC matters&mdash;research their stability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-navy font-bold mt-0.5">&ndash;</span>
                        <span>May not be ideal if you prefer living in a smaller, more intimate setting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Who Are CCRCs Best For?
                </h2>
                <p className="mb-4">
                  CCRCs tend to be the best fit for seniors who meet most of the following criteria:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>They are currently healthy and independent but want to plan ahead for potential future care needs</li>
                  <li>They have the financial resources for the entrance fee (often from a home sale) and ongoing monthly costs</li>
                  <li>They value community, social engagement, and access to extensive amenities</li>
                  <li>They want to make one move and have the peace of mind that they&apos;re settled for the long term</li>
                  <li>They are a couple where one partner may need more care than the other in the future</li>
                </ul>
                <p>
                  CCRCs are less ideal for seniors who have limited financial resources, who prefer to remain in their own home for as long as possible, or who are uncomfortable with the commitment of a large upfront fee. For these families, other options like standalone assisted living, in-home care, or rental-based independent living may be more appropriate.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  How to Evaluate a CCRC
                </h2>
                <p className="mb-4">
                  If you&apos;re considering a CCRC, go beyond the tour. Here are the key things to investigate:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-navy">Financial stability:</strong> Request audited financial statements. A CCRC is a long-term commitment, and you need to know the organization is financially sound.</li>
                  <li><strong className="text-navy">Accreditation:</strong> Look for CCRC accreditation from CARF International, which evaluates governance, financial health, and quality of services.</li>
                  <li><strong className="text-navy">Contract terms:</strong> Have an elder law attorney review the contract before signing. Pay particular attention to refund policies, fee increase clauses, and discharge terms.</li>
                  <li><strong className="text-navy">Quality of higher-level care:</strong> Tour not just the independent living areas, but also the assisted living, memory care, and skilled nursing sections. The quality of these areas matters just as much.</li>
                  <li><strong className="text-navy">Resident satisfaction:</strong> Talk to current residents. Ask them what they love and what they wish were different. Their candid feedback is invaluable.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-medium text-navy mb-8">
              Related Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Independent Living vs. Assisted Living",
                  href: "/choosing-senior-living/independent-vs-assisted-living",
                  description: "Compare these two options to understand which fits your loved one's needs.",
                },
                {
                  title: "Assisted Living vs. Memory Care",
                  href: "/choosing-senior-living/assisted-living-vs-memory-care",
                  description: "Understand the key differences between these two care levels.",
                },
                {
                  title: "Essential Questions to Ask on a Tour",
                  href: "/choosing-senior-living/questions-to-ask-on-tour",
                  description: "Be prepared with the right questions when visiting communities.",
                },
                {
                  title: "The Complete Senior Downsizing Checklist",
                  href: "/resources/downsizing-checklist",
                  description: "A step-by-step guide for managing the move to a senior living community.",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-lg font-medium text-navy mb-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {article.description}
                  </p>
                  <span className="text-coral text-sm font-medium inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium mb-4">
              Considering a CCRC? Let Us Help You Compare Options.
            </h2>
            <p className="text-white/80 mb-8">
              Our senior living advisors can help you evaluate CCRCs in your area, understand contract terms, and find the right community for your future. Schedule a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <a
                href="tel:8007842273"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-navy transition-colors uppercase tracking-wider text-sm"
              >
                Call (800) 784-2273
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
