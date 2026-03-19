import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "The Complete Senior Downsizing Checklist | Senior Transitions Group",
  description:
    "A comprehensive, phased senior downsizing checklist. Organized by timeline — from 3 months before the move through settling in — with a room-by-room sorting guide.",
};

export default function DownsizingChecklistPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Link
              href="/resources"
              className="inline-flex items-center text-coral hover:text-coral/80 text-sm uppercase tracking-wider mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Resources
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              The Complete Senior Downsizing Checklist
            </h1>
            <p className="text-lg text-white/80">
              A phased, actionable checklist that takes you from the first decision to fully settled in&mdash;with nothing overlooked.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Downsizing for a move to senior living involves hundreds of decisions, dozens of tasks, and a timeline that can feel impossibly tight. The families who handle it most successfully are the ones who break it into manageable phases and work through them methodically.
              </p>
              <p>
                This checklist is designed to be your roadmap. We&apos;ve organized every major task by timeline&mdash;from three months before the move to the first weeks after move-in&mdash;so you always know what to focus on next. We&apos;ve also included a room-by-room sorting guide to help you work through the house systematically.
              </p>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Phase 1: Three Months Before the Move
                </h2>
                <p className="mb-4">
                  This is the planning phase. You&apos;re laying the groundwork so that everything runs smoothly when the pace picks up.
                </p>
                <ul className="space-y-3">
                  {[
                    "Obtain the floor plan and exact dimensions of the new living space",
                    "Take measurements of all furniture you're considering bringing",
                    "Create a preliminary furniture layout for the new space",
                    "Hold a family meeting to discuss the process, divide responsibilities, and set expectations",
                    "Decide whether you need professional help (senior move manager, estate sale company, junk removal)",
                    "Research and schedule any professionals you plan to hire",
                    "Begin collecting packing supplies: boxes, tape, markers, bubble wrap, wardrobe boxes",
                    "Review the new community's policies on what residents can and cannot bring",
                    "Notify your parent's doctor and pharmacy about the upcoming address change",
                    "Begin sorting through one low-stakes area (utility closet, linen closet, garage) to build momentum",
                    "Gather important documents: medical records, insurance policies, legal documents, financial accounts",
                    "If selling the home, meet with a real estate agent to discuss timeline and preparations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 border-2 border-navy/30 rounded mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Phase 2: Two Months Before the Move
                </h2>
                <p className="mb-4">
                  The sorting phase. This is where the bulk of the decision-making happens.
                </p>
                <ul className="space-y-3">
                  {[
                    "Begin room-by-room sorting (see sorting guide below)",
                    "Use four categories for every item: Keep & Move, Give to Family, Donate/Sell, Discard",
                    "Coordinate with family members about items they'd like to have — set a deadline for decisions",
                    "Schedule donation pickups (Habitat ReStore, Goodwill, Salvation Army, local charities)",
                    "Schedule an estate sale if applicable (most estate sale companies need 2–4 weeks lead time)",
                    "List valuable items for online sale (Facebook Marketplace, Craigslist, OfferUp)",
                    "Arrange junk removal for items that can't be donated or sold",
                    "Begin packing non-essential items that are confirmed to move",
                    "Set up mail forwarding through USPS",
                    "Update your parent's address with banks, insurance, Social Security, and subscription services",
                    "Cancel or transfer home services: lawn care, pest control, newspaper delivery, cleaning service",
                    "If applicable, begin preparing the home for sale (cleaning, repairs, staging)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 border-2 border-navy/30 rounded mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Phase 3: One Month Before the Move
                </h2>
                <p className="mb-4">
                  The execution phase. Finish sorting, confirm logistics, and prepare the new space.
                </p>
                <ul className="space-y-3">
                  {[
                    "Complete all sorting — every room should be categorized by now",
                    "Confirm moving company booking (date, time, scope, and cost)",
                    "Confirm the new community's move-in date, time restrictions, and elevator reservations if applicable",
                    "Pack all remaining items that will move, labeling boxes clearly by room",
                    "Arrange for utilities to be transferred or shut off at the old home",
                    "Ensure the new space has utilities set up (confirm with the community what they handle)",
                    "Purchase any new items needed for the smaller space (compact furniture, storage solutions, organizers)",
                    "Prepare a 'first night' box with essentials: medications, toiletries, pajamas, phone charger, glasses, a comfort item",
                    "Notify neighbors and local friends about the move and share the new address",
                    "Complete any remaining donation pickups and junk removal",
                    "Do a final walkthrough of the floor plan to confirm furniture placement",
                    "Pre-arrange the bedroom setup: the bed should be ready before your parent arrives",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 border-2 border-navy/30 rounded mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Phase 4: Move Week
                </h2>
                <p className="mb-4">
                  The final push. Stay organized, delegate tasks, and focus on your parent&apos;s comfort.
                </p>
                <ul className="space-y-3">
                  {[
                    "Confirm all logistics: movers, time, parking, building access at both locations",
                    "Pack a bag with your parent's essential daily items — this travels with you, not the movers",
                    "Do a final sweep of the old home: check all closets, attic, basement, garage, outdoor storage",
                    "Clean the old home or schedule a move-out cleaning service",
                    "Bring the 'first night' box and essential bag to the new space before movers arrive",
                    "Direct movers on furniture placement using your pre-planned layout",
                    "Make the bed first — this sends a signal that the space is livable and welcoming",
                    "Set up the bathroom with familiar toiletries",
                    "Hang a few family photos and place familiar objects where they'll be seen immediately",
                    "Stock a small supply of your parent's favorite snacks and beverages",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 border-2 border-navy/30 rounded mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Phase 5: Move Day
                </h2>
                <p className="mb-4">
                  Keep the day as calm and predictable as possible. Your parent&apos;s emotional state matters more than logistics today.
                </p>
                <ul className="space-y-3">
                  {[
                    "Have one family member stay with your parent while others manage the movers",
                    "If possible, have your parent arrive after the space is mostly set up — walking into chaos is stressful",
                    "Share the first meal together in the new community",
                    "Meet the nursing or care staff and introduce your parent personally",
                    "Walk through the community together: dining room, activity spaces, outdoor areas",
                    "Ensure the emergency call system is explained and your parent knows how to use it",
                    "Don't try to unpack everything — prioritize the bedroom, bathroom, and one comfortable sitting area",
                    "Leave when the time feels right, but reassure your parent about when you'll visit next",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 border-2 border-navy/30 rounded mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Phase 6: After the Move (First 30 Days)
                </h2>
                <p className="mb-4">
                  The transition doesn&apos;t end on move day. The first month is critical for adjustment.
                </p>
                <ul className="space-y-3">
                  {[
                    "Visit frequently but consistently — establish a predictable pattern",
                    "Unpack remaining boxes gradually over the first two weeks",
                    "Check in with staff about how your parent is adjusting — eating, sleeping, socializing",
                    "Encourage participation in activities, but don't force it — adjustment takes time",
                    "Finalize address changes for any remaining accounts or services",
                    "If selling the old home, finalize any remaining preparations",
                    "Return any rented moving equipment",
                    "Send thank-you notes to anyone who helped with the move",
                    "Check in with yourself — how are you doing? Seek support if the emotional toll is heavy",
                    "Schedule a care plan review with the community after 30 days to ensure needs are being met",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 border-2 border-navy/30 rounded mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Room-by-Room Sorting Guide
                </h2>
                <p className="mb-4">
                  When you&apos;re ready to sort, work through the house one room at a time. Start with the easiest spaces to build momentum before tackling emotionally loaded rooms.
                </p>

                <div className="space-y-6">
                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Kitchen</h3>
                    <p className="text-sm mb-2">Keep only essentials for the new space (if the apartment has a kitchenette): a few mugs, plates, utensils, and a coffee maker. Most meals will be provided by the community.</p>
                    <p className="text-sm"><strong className="text-navy">Common keepers:</strong> favorite mug, a cherished cookbook, small coffee maker. <strong className="text-navy">Let go:</strong> duplicate utensils, specialty appliances, serving dishes for large gatherings.</p>
                  </div>

                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Living Room / Family Room</h3>
                    <p className="text-sm mb-2">Select one comfortable chair or small sofa, a side table, a TV, and a lamp. The new living area will be significantly smaller.</p>
                    <p className="text-sm"><strong className="text-navy">Common keepers:</strong> favorite recliner, family photos, a small bookcase. <strong className="text-navy">Let go:</strong> oversized sofas, entertainment centers, excess decorative items.</p>
                  </div>

                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Bedroom</h3>
                    <p className="text-sm mb-2">Bring the bed (if it fits), a nightstand, a dresser, and familiar bedding. The bedroom should feel as close to home as possible.</p>
                    <p className="text-sm"><strong className="text-navy">Common keepers:</strong> bed, nightstand, favorite pillow, family photos for the nightstand. <strong className="text-navy">Let go:</strong> extra furniture, exercise equipment, anything that won&apos;t fit the floor plan.</p>
                  </div>

                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Bathroom</h3>
                    <p className="text-sm mb-2">Keep current-use toiletries and two to three sets of towels. Discard expired medications and products.</p>
                    <p className="text-sm"><strong className="text-navy">Common keepers:</strong> current toiletries, non-slip bath mat, two sets of towels. <strong className="text-navy">Let go:</strong> old medications, stockpiled supplies, decorative items that clutter counter space.</p>
                  </div>

                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Garage / Basement / Attic</h3>
                    <p className="text-sm mb-2">These spaces often hold decades of accumulated items. Be decisive. Most of this will not move.</p>
                    <p className="text-sm"><strong className="text-navy">Common keepers:</strong> photo albums, essential tools (if there&apos;s storage), holiday items family members want. <strong className="text-navy">Let go:</strong> old paint, broken items, outdated technology, collections with no sentimental value.</p>
                  </div>

                  <div className="bg-muted p-6 rounded">
                    <h3 className="font-serif text-lg font-medium text-navy mb-2">Home Office / Paperwork</h3>
                    <p className="text-sm mb-2">Sort through paperwork carefully. Keep essential documents; shred anything containing personal or financial information that is no longer needed.</p>
                    <p className="text-sm"><strong className="text-navy">Keep:</strong> tax returns (7 years), legal documents, insurance policies, medical records. <strong className="text-navy">Shred:</strong> old bank statements, outdated insurance papers, junk mail, expired warranties.</p>
                  </div>
                </div>
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
                  title: "How to Help Your Parent Downsize",
                  href: "/resources/how-to-help-parent-downsize",
                  description: "A detailed guide covering emotional preparation, sorting, and working with professionals.",
                },
                {
                  title: "What to Bring When Moving to Assisted Living",
                  href: "/choosing-senior-living/what-to-bring",
                  description: "A room-by-room packing guide for what to bring to the new community.",
                },
                {
                  title: "Managing Guilt When Moving a Parent",
                  href: "/resources/managing-guilt-moving-parent",
                  description: "How to navigate the emotional weight of this decision with self-compassion.",
                },
                {
                  title: "Signs Your Parent May Need Assisted Living",
                  href: "/resources/signs-parent-needs-assisted-living",
                  description: "Understand when it's time to start exploring senior living options.",
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
              Let Us Handle the Logistics
            </h2>
            <p className="text-white/80 mb-8">
              Our transition specialists manage the entire downsizing and moving process&mdash;so you can focus on supporting your loved one. From sorting to setup, we&apos;re with you every step of the way.
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
