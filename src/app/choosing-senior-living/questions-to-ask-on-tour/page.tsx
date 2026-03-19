import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Essential Questions to Ask on a Senior Living Tour | Senior Transitions Group",
  description:
    "A comprehensive list of 20 essential questions to ask when touring senior living communities. Organized by category: care, staffing, dining, activities, costs, and policies.",
};

export default function QuestionsToAskOnTourPage() {
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
              Essential Questions to Ask on a Senior Living Tour
            </h1>
            <p className="text-lg text-white/80">
              Walking through a community is only helpful if you know what to look for and what to ask. This guide ensures you leave every tour with the information you need.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Touring a senior living community can feel overwhelming. The buildings are often beautiful, the staff are welcoming, and the brochures are polished. But beneath the surface, there are critical details that will determine whether a community is truly the right fit for your loved one. The best way to uncover those details is to arrive prepared with the right questions.
              </p>
              <p>
                We&apos;ve compiled this list based on years of helping families evaluate communities. We recommend bringing a printed copy on each tour and taking notes so you can compare communities objectively afterward.
              </p>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Care &amp; Staffing
                </h2>
                <p className="mb-4">
                  The quality of care your loved one receives depends almost entirely on staffing. These questions help you evaluate whether a community can meet your family member&apos;s current and future needs.
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong className="text-navy">What is your staff-to-resident ratio during the day, evening, and overnight?</strong>
                    <p className="mt-1">Staffing levels often drop significantly at night. Ask specifically about each shift, and whether a licensed nurse is on-site 24/7 or just on call.</p>
                  </li>
                  <li>
                    <strong className="text-navy">What training do caregivers receive, and how often is it updated?</strong>
                    <p className="mt-1">Look for communities that invest in ongoing education, particularly in fall prevention, dementia awareness, and emergency response.</p>
                  </li>
                  <li>
                    <strong className="text-navy">How do you handle medical emergencies?</strong>
                    <p className="mt-1">Understand whether staff are trained in CPR and first aid, how quickly they can reach a resident, and what hospital the community partners with.</p>
                  </li>
                  <li>
                    <strong className="text-navy">How do you create and update individualized care plans?</strong>
                    <p className="mt-1">A good community conducts a thorough initial assessment and revisits the care plan regularly&mdash;not just when something goes wrong.</p>
                  </li>
                  <li>
                    <strong className="text-navy">What happens if my loved one&apos;s care needs increase significantly?</strong>
                    <p className="mt-1">Some communities can accommodate higher acuity; others will require a transfer. Knowing this upfront prevents painful surprises later.</p>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Activities &amp; Social Life
                </h2>
                <p className="mb-4">
                  Social engagement is one of the greatest benefits of community living. These questions reveal whether the programming is genuinely enriching or just a printed calendar.
                </p>
                <ol className="list-decimal pl-6 space-y-4" start={6}>
                  <li>
                    <strong className="text-navy">Can I see a recent monthly activity calendar?</strong>
                    <p className="mt-1">Look for variety: fitness, creative arts, outings, educational programs, spiritual services, and intergenerational activities. Ask if activities run on weekends too.</p>
                  </li>
                  <li>
                    <strong className="text-navy">How do you engage residents who are reluctant to participate?</strong>
                    <p className="mt-1">The best communities have activity directors who personally invite residents and tailor programming to individual interests, rather than offering a one-size-fits-all calendar.</p>
                  </li>
                  <li>
                    <strong className="text-navy">Are there opportunities for residents to leave the community for outings?</strong>
                    <p className="mt-1">Regular excursions to restaurants, museums, parks, and shopping centers help residents stay connected to the outside world.</p>
                  </li>
                  <li>
                    <strong className="text-navy">Is there a resident council or a way for residents to give feedback?</strong>
                    <p className="mt-1">Communities that welcome resident input tend to be more responsive and higher quality overall.</p>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Dining
                </h2>
                <p className="mb-4">
                  Meals are one of the most important parts of daily life in a community. Poor food quality is one of the top complaints families report.
                </p>
                <ol className="list-decimal pl-6 space-y-4" start={10}>
                  <li>
                    <strong className="text-navy">Can we eat a meal here during the tour?</strong>
                    <p className="mt-1">This is the single best way to evaluate dining quality. Pay attention to the food itself, but also observe the dining atmosphere and how staff interact with residents.</p>
                  </li>
                  <li>
                    <strong className="text-navy">How many meal options are available at each sitting?</strong>
                    <p className="mt-1">Look for communities that offer choices rather than a single set menu. Ask about accommodations for dietary restrictions, allergies, and cultural preferences.</p>
                  </li>
                  <li>
                    <strong className="text-navy">Are snacks and beverages available between meals?</strong>
                    <p className="mt-1">Some residents eat small amounts frequently. Access to a bistro, snack station, or kitchenette can be important.</p>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Costs &amp; Financial Policies
                </h2>
                <p className="mb-4">
                  Pricing in senior living can be confusing. Base rates often don&apos;t include everything, and unexpected fees can add up quickly.
                </p>
                <ol className="list-decimal pl-6 space-y-4" start={13}>
                  <li>
                    <strong className="text-navy">What is included in the base monthly rate, and what costs extra?</strong>
                    <p className="mt-1">Ask specifically about laundry, transportation, medication management, and incontinence care. These are common add-on charges that can increase the monthly bill by $500 to $2,000.</p>
                  </li>
                  <li>
                    <strong className="text-navy">How often do rates increase, and by how much historically?</strong>
                    <p className="mt-1">Most communities raise rates annually. Ask for actual numbers from the past three years so you can budget realistically.</p>
                  </li>
                  <li>
                    <strong className="text-navy">Is there a community fee or entrance fee, and is any of it refundable?</strong>
                    <p className="mt-1">Many communities charge a one-time fee ranging from $1,500 to $5,000 or more. Understand what it covers and under what circumstances it might be refunded.</p>
                  </li>
                  <li>
                    <strong className="text-navy">What is your billing policy if a resident passes away or moves out mid-month?</strong>
                    <p className="mt-1">Some communities require 30 or 60 days&apos; notice; others prorate the final month. Know this before signing a contract.</p>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Policies &amp; Contract Terms
                </h2>
                <p className="mb-4">
                  Don&apos;t wait until move-in to understand the policies that will govern your loved one&apos;s daily life.
                </p>
                <ol className="list-decimal pl-6 space-y-4" start={17}>
                  <li>
                    <strong className="text-navy">What are the visiting hours and guest policies?</strong>
                    <p className="mt-1">The best communities allow flexible visitation. Restrictive visiting policies can be a red flag.</p>
                  </li>
                  <li>
                    <strong className="text-navy">Can residents personalize their rooms or apartments?</strong>
                    <p className="mt-1">Being able to hang pictures, bring furniture, and create a homelike environment is important for emotional well-being.</p>
                  </li>
                  <li>
                    <strong className="text-navy">What is your discharge or transfer policy?</strong>
                    <p className="mt-1">Under what circumstances might a resident be asked to leave? How much notice is given? What support does the community provide in finding an alternative?</p>
                  </li>
                  <li>
                    <strong className="text-navy">Can I review the full residency agreement before committing?</strong>
                    <p className="mt-1">Never sign a contract on the day of a tour. Take it home, read it carefully, and have an attorney review it if possible. Reputable communities will encourage this.</p>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  What to Observe During the Tour
                </h2>
                <p className="mb-4">
                  Beyond the questions you ask, pay close attention to what you see, hear, and feel during the tour. Your instincts matter.
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong className="text-navy">Watch the staff.</strong> Do they greet residents by name? Do they seem rushed or patient? Are they making eye contact and speaking warmly?</li>
                  <li><strong className="text-navy">Observe the residents.</strong> Do they look well-groomed and content? Are they socializing in common areas or sitting alone in their rooms?</li>
                  <li><strong className="text-navy">Notice the smell.</strong> A persistent odor of urine or heavy air freshener can indicate cleanliness issues. Clean communities smell neutral.</li>
                  <li><strong className="text-navy">Check the common areas.</strong> Are they well-maintained and inviting? Are activity rooms actually being used, or do they look staged?</li>
                  <li><strong className="text-navy">Look at the outdoor spaces.</strong> Safe, accessible outdoor areas with seating and walking paths indicate a community that values quality of life.</li>
                  <li><strong className="text-navy">Ask to see a room that hasn&apos;t been prepared for a tour.</strong> Model rooms are always pristine. A lived-in room gives you a more honest picture of daily conditions.</li>
                  <li><strong className="text-navy">Visit at different times.</strong> If possible, return for an unscheduled visit during a meal, in the evening, or on a weekend to see the community in its everyday state.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  After the Tour
                </h2>
                <p className="mb-4">
                  Within 24 hours of each tour, sit down and write out your impressions while they&apos;re fresh. Rate each community on the criteria that matter most to your family. Compare notes with other family members who attended.
                </p>
                <p>
                  Remember that the right community isn&apos;t always the one with the fanciest lobby or the lowest price. It&apos;s the one where you feel confident your loved one will be safe, respected, and genuinely cared for. Trust the process, trust your instincts, and don&apos;t rush the decision.
                </p>
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
                  title: "Assisted Living vs. Memory Care",
                  href: "/choosing-senior-living/assisted-living-vs-memory-care",
                  description: "Understand the key differences between these two levels of care.",
                },
                {
                  title: "What Is a CCRC?",
                  href: "/choosing-senior-living/what-is-a-ccrc",
                  description: "Learn about continuing care retirement communities and their unique structure.",
                },
                {
                  title: "What to Bring When Moving to Assisted Living",
                  href: "/choosing-senior-living/what-to-bring",
                  description: "A practical packing guide for the transition to community living.",
                },
                {
                  title: "Signs Your Parent May Need Assisted Living",
                  href: "/resources/signs-parent-needs-assisted-living",
                  description: "How to recognize when it's time to explore senior living options.",
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
              Want a Guide by Your Side on Community Tours?
            </h2>
            <p className="text-white/80 mb-8">
              Our placement specialists accompany families on tours, helping you ask the right questions and evaluate each community objectively. Schedule a free consultation to get started.
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
