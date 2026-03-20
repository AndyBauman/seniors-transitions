import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "What to Bring When Moving to Assisted Living | Senior Transitions Group",
  description:
    "A comprehensive packing guide for moving to assisted living. Organized by room and category, with tips on space planning, what NOT to bring, and how to prioritize sentimental items.",
};

export default function WhatToBringPage() {
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
              What to Bring When Moving to Assisted Living
            </h1>
            <p className="text-lg text-white/80">
              A practical, room-by-room packing guide to help your loved one feel at home from day one&mdash;without overcrowding a smaller space.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Moving into assisted living is one of the most significant transitions your loved one will experience. Beyond the emotional weight of leaving a longtime home, there&apos;s a deeply practical challenge: deciding what to bring to a space that is almost certainly smaller than what they&apos;re used to. The key is to be intentional. Every item that comes along should either serve a daily function or carry genuine emotional significance.
              </p>
              <p>
                This guide is designed to help families navigate the packing process thoughtfully. We&apos;ve organized it by category so you can work through it systematically, and we&apos;ve included advice on what to leave behind, how to plan for limited space, and how to honor sentimental items even when not everything can make the move.
              </p>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Start with the Floor Plan
                </h2>
                <p className="mb-4">
                  Before you pack a single box, get the exact dimensions and floor plan of the new living space. Most assisted living apartments range from a studio (around 300 square feet) to a one-bedroom (400 to 600 square feet). Some communities offer larger two-bedroom units, but space will still be tighter than a typical house.
                </p>
                <p className="mb-4">
                  Measure doorways, closets, and bathrooms. Some older furniture won&apos;t fit through narrow doorways or into compact rooms. Sketch out where key pieces will go before moving day so you aren&apos;t making difficult decisions in the middle of the move.
                </p>
                <p>
                  Many communities allow families to visit the exact unit before move-in day. Take advantage of this&mdash;bring a tape measure and take photos. Knowing the space intimately will make every packing decision easier.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Bedroom Essentials
                </h2>
                <p className="mb-4">
                  The bedroom should feel safe, familiar, and comfortable. This is where your loved one will spend the most private hours of their day, so prioritize items that promote restful sleep and personal comfort.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-navy">Their own bed (if it fits):</strong> Sleeping in a familiar bed eases the transition enormously. A twin or full-size bed usually works; a queen may fit in larger rooms. Check the dimensions first.</li>
                  <li><strong className="text-navy">Favorite bedding:</strong> Bring their preferred sheets, pillows, blankets, and quilts. Familiar textures and scents provide comfort during a stressful time.</li>
                  <li><strong className="text-navy">Nightstand with lamp:</strong> A familiar nightstand within arm&apos;s reach is important for medications, glasses, water, and a reading light.</li>
                  <li><strong className="text-navy">Small dresser or chest of drawers:</strong> Closet space is limited in most communities. A compact dresser helps keep clothing organized and accessible.</li>
                  <li><strong className="text-navy">Alarm clock:</strong> A simple, large-display clock helps with orientation, especially for seniors experiencing mild cognitive changes.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Living Area
                </h2>
                <p className="mb-4">
                  If the apartment has a separate sitting area, furnish it for comfort and daily use. Keep in mind that caregivers need room to move around, so avoid overcrowding.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-navy">A favorite recliner or armchair:</strong> This will likely become their primary seat. Choose one that&apos;s comfortable, easy to get in and out of, and not too large for the space.</li>
                  <li><strong className="text-navy">A small side table:</strong> For the remote, a drink, reading materials, or a phone.</li>
                  <li><strong className="text-navy">Television:</strong> Most communities provide cable. A flat-screen TV that can be wall-mounted saves floor space.</li>
                  <li><strong className="text-navy">A small bookcase or shelf:</strong> For books, photo albums, and meaningful objects.</li>
                  <li><strong className="text-navy">A floor lamp or table lamp:</strong> Good lighting is essential for safety and comfort, especially for reading.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Bathroom Items
                </h2>
                <p className="mb-4">
                  Assisted living bathrooms are typically smaller and often come with safety features like grab bars and walk-in showers. Bring personal care items, but keep the space clutter-free for safety.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-navy">Toiletries:</strong> Shampoo, soap, toothbrush, toothpaste, deodorant, and any preferred grooming products. Bring what they actually use&mdash;not an excess of backups.</li>
                  <li><strong className="text-navy">Bath towels and washcloths:</strong> Two to three sets is sufficient. Most communities offer laundry services.</li>
                  <li><strong className="text-navy">Non-slip bath mat:</strong> Even with safety features, an extra non-slip surface is worthwhile.</li>
                  <li><strong className="text-navy">Shower chair (if needed):</strong> Some communities provide these; ask before purchasing one.</li>
                  <li><strong className="text-navy">Personal medications:</strong> Bring a complete and current list of medications. The community will typically manage medications through their pharmacy, but you&apos;ll need to coordinate the transition.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Clothing
                </h2>
                <p className="mb-4">
                  Pack enough for about two weeks of wear, accounting for the community&apos;s laundry schedule. Prioritize comfort and ease of dressing&mdash;especially if your loved one receives help getting dressed.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Seven to ten everyday outfits (comfortable, easy to put on and take off)</li>
                  <li>Two to three sets of pajamas or sleepwear</li>
                  <li>A warm sweater or cardigan (common areas can be cool)</li>
                  <li>A light jacket for outdoor walks</li>
                  <li>Non-slip shoes or slippers with rubber soles</li>
                  <li>One outfit for special occasions or outings</li>
                  <li>Undergarments, socks, and compression stockings if prescribed</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-navy">Label everything.</strong> This is critical. Laundry in a communal setting can lead to lost items. Use iron-on labels or a permanent marker on clothing tags with your loved one&apos;s name.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Personal &amp; Sentimental Items
                </h2>
                <p className="mb-4">
                  These are the items that transform a room into a home. They don&apos;t take up much space, but they carry enormous emotional weight.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-navy">Family photos:</strong> Framed photos of loved ones, grandchildren, and cherished memories. Consider a digital photo frame that cycles through a collection.</li>
                  <li><strong className="text-navy">A favorite quilt, throw, or afghan:</strong> Something handmade or deeply familiar that feels like home.</li>
                  <li><strong className="text-navy">Religious or spiritual items:</strong> A Bible, prayer beads, or a small devotional shelf if faith is important to your loved one.</li>
                  <li><strong className="text-navy">A few treasured decorative objects:</strong> A figurine, vase, or small artwork that holds personal meaning. Choose two or three, not twenty.</li>
                  <li><strong className="text-navy">Hobby supplies:</strong> Knitting needles, puzzles, a watercolor set, playing cards&mdash;whatever keeps them engaged.</li>
                  <li><strong className="text-navy">A calendar and address book:</strong> Staying oriented and connected helps combat isolation and confusion.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  What NOT to Bring
                </h2>
                <p className="mb-4">
                  Just as important as what you pack is what you leave behind. Some items are prohibited by communities for safety reasons; others simply won&apos;t fit or aren&apos;t practical.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-navy">Large furniture:</strong> Oversized sofas, dining tables, china cabinets, and king-size beds rarely fit. Measure everything against the floor plan.</li>
                  <li><strong className="text-navy">Cooking appliances:</strong> Most communities prohibit hot plates, toasters, toaster ovens, and full-size microwaves due to fire risk. Check the community&apos;s specific policies.</li>
                  <li><strong className="text-navy">Candles and space heaters:</strong> Open flames and portable heating devices are almost universally prohibited.</li>
                  <li><strong className="text-navy">Excessive duplicates:</strong> Resist bringing ten sets of sheets or a lifetime supply of toiletries. Storage is limited.</li>
                  <li><strong className="text-navy">Valuable jewelry or large sums of cash:</strong> Communities cannot guarantee the security of valuables in private rooms. Use a safe deposit box for heirloom pieces.</li>
                  <li><strong className="text-navy">Area rugs (in most cases):</strong> Loose rugs are a significant trip hazard. If your loved one insists, choose a low-pile rug with non-slip backing and confirm it&apos;s allowed.</li>
                  <li><strong className="text-navy">Cleaning supplies:</strong> Housekeeping is provided. Chemical cleaning products can pose a safety risk if a resident has cognitive impairment.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  How to Prioritize Sentimental Items
                </h2>
                <p className="mb-4">
                  This is often the hardest part. Your loved one has a lifetime of possessions, and most won&apos;t be coming along. Here are approaches that help:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong className="text-navy">The &ldquo;Top Ten&rdquo; rule:</strong> Ask your loved one to choose ten items that mean the most to them. Start there, and add more only if space allows.</li>
                  <li><strong className="text-navy">Photograph what you can&apos;t keep:</strong> Create a photo album or digital slideshow of items that can&apos;t make the move. The memory is preserved even when the object isn&apos;t.</li>
                  <li><strong className="text-navy">Distribute to family:</strong> Passing meaningful items to children and grandchildren gives them new life and keeps them in the family.</li>
                  <li><strong className="text-navy">Rotate seasonal items:</strong> If storage allows at a family member&apos;s home, swap out decorations or photos seasonally to keep the space feeling fresh.</li>
                  <li><strong className="text-navy">Don&apos;t rush the process:</strong> If possible, give your loved one weeks rather than days to sort through their belongings. The emotional work of letting go takes time.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Practical Tips for Move Day
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Set up the room before your loved one arrives so they walk into a space that already feels like home.</li>
                  <li>Make the bed with their own bedding, place photos on the nightstand, and arrange furniture in a layout similar to what they&apos;re used to.</li>
                  <li>Bring a small box of essentials&mdash;medications, glasses, a change of clothes, phone charger, and a comfort item&mdash;so nothing critical gets lost in the shuffle.</li>
                  <li>Stay for the first meal if possible. Sharing that experience helps ease the emotional transition.</li>
                  <li>Don&apos;t try to unpack everything on day one. Let your loved one settle in gradually.</li>
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
                  title: "The Complete Senior Downsizing Checklist",
                  href: "/resources/downsizing-checklist",
                  description: "A phase-by-phase guide covering everything from three months before the move to settling in.",
                },
                {
                  title: "How to Help Your Parent Downsize",
                  href: "/resources/how-to-help-parent-downsize",
                  description: "A step-by-step guide for adult children navigating the downsizing process.",
                },
                {
                  title: "Independent Living vs. Assisted Living",
                  href: "/choosing-senior-living/independent-vs-assisted-living",
                  description: "Understand the differences to make sure you're packing for the right type of community.",
                },
                {
                  title: "Essential Questions to Ask on a Tour",
                  href: "/choosing-senior-living/questions-to-ask-on-tour",
                  description: "Know what to look for when visiting communities before move-in day.",
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
              Need Help Planning the Move?
            </h2>
            <p className="text-white/80 mb-8">
              Our transition specialists help families plan every detail&mdash;from downsizing and packing to setting up the new space. Schedule a free consultation and let us take the stress out of moving day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <a
                href="tel:5037558555"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-navy transition-colors uppercase tracking-wider text-sm"
              >
                Call (503) 755-8555
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
