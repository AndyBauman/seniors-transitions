import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Signs Your Parent May Need Assisted Living | Senior Transitions Group",
  description:
    "Learn to recognize the common signs that a parent may need assisted living — from safety concerns and medication issues to social isolation and declining nutrition. Includes advice on how to start the conversation.",
};

export default function SignsParentNeedsAssistedLivingPage() {
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
              Signs Your Parent May Need Assisted Living
            </h1>
            <p className="text-lg text-white/80">
              It&apos;s rarely one dramatic event. More often, it&apos;s a pattern of small changes that adds up. Here&apos;s what to watch for and how to respond.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Deciding that a parent needs more support than they can get at home is one of the most difficult realizations a family can face. The challenge is that the signs are often gradual&mdash;a missed medication here, a forgotten bill there, a fall that &ldquo;wasn&apos;t that bad.&rdquo; Individually, each incident seems manageable. But together, they paint a picture of declining safety and quality of life.
              </p>
              <p>
                This guide is designed to help you recognize the patterns and take action before a crisis forces the decision. If several of these signs resonate with your family&apos;s situation, it may be time to explore assisted living options.
              </p>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Safety Concerns at Home
                </h2>
                <p className="mb-4">
                  Safety is often the first and most urgent signal. Watch for:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong className="text-navy">Frequent falls or near-falls.</strong> Even falls that don&apos;t cause serious injury indicate a balance or mobility problem that will likely worsen. A fall in the bathroom or on stairs can be life-threatening.</li>
                  <li><strong className="text-navy">Burns or kitchen accidents.</strong> Leaving burners on, forgetting food on the stove, or scorching pots are common early warning signs. If you visit and notice burn marks on countertops or ruined cookware, take note.</li>
                  <li><strong className="text-navy">Driving incidents.</strong> New dents on the car, getting lost on familiar routes, traffic citations, or near-misses reported by others suggest it may no longer be safe for your parent to drive.</li>
                  <li><strong className="text-navy">Inability to respond to emergencies.</strong> If a smoke alarm went off at 3 a.m., could your parent get out safely? If they fell, could they reach a phone to call for help?</li>
                  <li><strong className="text-navy">The home itself is declining.</strong> Burned-out light bulbs, a cluttered or unsanitary kitchen, piles of mail, broken appliances that haven&apos;t been repaired, or an overgrown yard can signal that your parent can no longer keep up with basic home maintenance.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Medication Management Problems
                </h2>
                <p className="mb-4">
                  Medication errors are one of the most common and dangerous issues for seniors living alone. Signs include:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Pill bottles that are overfull (doses being skipped) or empty too soon (double-dosing)</li>
                  <li>Expired medications in the medicine cabinet</li>
                  <li>Confusion about which medications to take and when</li>
                  <li>Failing to refill prescriptions on time</li>
                  <li>New or worsening health symptoms that could be related to inconsistent medication use</li>
                </ul>
                <p className="mt-4">
                  In assisted living, trained staff manage medication administration&mdash;ensuring the right medications are taken at the right times. For seniors on multiple prescriptions, this alone can be a life-changing level of support.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Social Isolation and Withdrawal
                </h2>
                <p className="mb-4">
                  Isolation is both a symptom and a risk factor. When a parent becomes increasingly homebound, the consequences go far beyond loneliness:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong className="text-navy">Declining mental health.</strong> Chronic isolation is linked to depression, anxiety, and accelerated cognitive decline. If your parent seems more withdrawn, apathetic, or hopeless, isolation may be a contributing factor.</li>
                  <li><strong className="text-navy">Loss of social connections.</strong> Friends passing away, losing the ability to drive, or physical limitations that prevent going out can leave a senior with almost no regular human contact.</li>
                  <li><strong className="text-navy">Withdrawal from activities they once enjoyed.</strong> If your parent used to attend church, volunteer, play cards with friends, or go to lunch regularly and has stopped, that shift deserves attention.</li>
                  <li><strong className="text-navy">Over-reliance on television.</strong> When the TV is on all day every day, it often indicates a lack of other stimulation and engagement.</li>
                </ul>
                <p className="mt-4">
                  Assisted living communities are inherently social. Residents share meals, participate in group activities, and develop friendships with peers. For isolated seniors, the social benefits alone can dramatically improve quality of life.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Nutrition and Weight Changes
                </h2>
                <p className="mb-4">
                  Pay attention to your parent&apos;s relationship with food. Poor nutrition is both a sign that help is needed and a serious health risk in its own right.
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Noticeable weight loss (clothes fitting loosely, gaunt appearance)</li>
                  <li>A refrigerator that&apos;s empty or full of expired food</li>
                  <li>Relying almost exclusively on frozen meals, crackers, or cereal</li>
                  <li>Not eating regular meals or skipping meals entirely</li>
                  <li>Difficulty using the stove or preparing food safely</li>
                </ul>
                <p className="mt-4">
                  In assisted living, three nutritious meals and snacks are provided daily. For many seniors, this is the single biggest improvement in their daily life after moving to a community.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Personal Care and Hygiene Decline
                </h2>
                <p className="mb-4">
                  Changes in personal appearance and hygiene can be among the most noticeable signs, though families sometimes attribute them to &ldquo;just getting older.&rdquo; Watch for:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Wearing the same clothes repeatedly without laundering them</li>
                  <li>Body odor or unkempt appearance that&apos;s out of character</li>
                  <li>Difficulty bathing or fear of falling in the shower</li>
                  <li>Neglecting dental care, haircuts, or grooming</li>
                  <li>Incontinence issues that aren&apos;t being managed</li>
                </ul>
                <p className="mt-4">
                  These changes often indicate that the physical act of personal care has become difficult or frightening. Assisted living staff provide gentle, dignified help with bathing, dressing, and grooming&mdash;restoring comfort and self-respect.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Cognitive and Behavioral Changes
                </h2>
                <p className="mb-4">
                  Cognitive decline doesn&apos;t always mean dementia, but any significant change deserves medical evaluation. Signs to watch for:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Repeating the same questions or stories in a single conversation</li>
                  <li>Getting confused about the day, time, or familiar places</li>
                  <li>Difficulty managing finances&mdash;unpaid bills, unusual purchases, or vulnerability to scams</li>
                  <li>Forgetting appointments or important events</li>
                  <li>Personality changes: increased suspicion, agitation, or uncharacteristic behavior</li>
                  <li>Difficulty following instructions or completing familiar multi-step tasks</li>
                </ul>
                <p className="mt-4">
                  If cognitive changes are present, it&apos;s especially important to explore care options sooner rather than later. As cognition declines, the ability to participate in decision-making diminishes. Involving your parent in the choice of community while they can still express preferences is a gift to both of you.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  How to Start the Conversation
                </h2>
                <p className="mb-4">
                  Bringing up assisted living is one of the hardest conversations you&apos;ll ever have with a parent. Here&apos;s how to approach it with sensitivity:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong className="text-navy">Lead with love, not logistics.</strong> Start with your concern for their well-being, not a sales pitch for a particular community. &ldquo;I&apos;ve been worried about you being alone so much&rdquo; opens the door better than &ldquo;I found a great place for you.&rdquo;</li>
                  <li><strong className="text-navy">Frame it as gaining, not losing.</strong> Focus on what they&apos;ll gain: meals prepared for them, new friends, activities, peace of mind, and no more home maintenance. Avoid framing it as something being taken away.</li>
                  <li><strong className="text-navy">Share specific observations.</strong> Vague concerns are easy to dismiss. &ldquo;I noticed the stove was left on last Tuesday&rdquo; or &ldquo;You&apos;ve fallen twice this month&rdquo; are harder to brush aside.</li>
                  <li><strong className="text-navy">Involve their doctor.</strong> A recommendation from a trusted physician carries weight and can depersonalize the conversation. It becomes &ldquo;the doctor recommends&rdquo; rather than &ldquo;I think you should.&rdquo;</li>
                  <li><strong className="text-navy">Tour together.</strong> Offer to visit a community together with no pressure. Seeing the reality of modern assisted living&mdash;which is nothing like the nursing homes of decades past&mdash;often shifts resistance more than any conversation can.</li>
                  <li><strong className="text-navy">Be patient.</strong> This conversation rarely succeeds on the first attempt. Give your parent time to process, and revisit the topic gently. Pushing too hard can entrench resistance.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  When to Act Urgently
                </h2>
                <p className="mb-4">
                  While a gradual transition is always preferable, certain situations require immediate action:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A fall resulting in hospitalization</li>
                  <li>A house fire or serious kitchen accident</li>
                  <li>A wandering incident (especially if dementia is involved)</li>
                  <li>A major medication error requiring medical attention</li>
                  <li>Evidence of self-neglect that puts their health at immediate risk</li>
                  <li>Financial exploitation or abuse</li>
                </ul>
                <p className="mt-4">
                  In these cases, prioritize safety above all else. A temporary respite stay in an assisted living community can provide a safe environment while your family makes longer-term plans.
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
                  title: "Managing Guilt When Moving a Parent",
                  href: "/resources/managing-guilt-moving-parent",
                  description: "How to navigate the emotional weight of placing a parent in care.",
                },
                {
                  title: "Assisted Living vs. Memory Care",
                  href: "/choosing-senior-living/assisted-living-vs-memory-care",
                  description: "Understand the key differences to determine the right level of care.",
                },
                {
                  title: "Independent Living vs. Assisted Living",
                  href: "/choosing-senior-living/independent-vs-assisted-living",
                  description: "Compare these two options to find the appropriate level of support.",
                },
                {
                  title: "How to Help Your Parent Downsize",
                  href: "/resources/how-to-help-parent-downsize",
                  description: "A complete guide for adult children managing the downsizing process.",
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
              Concerned About a Parent? Let&apos;s Talk.
            </h2>
            <p className="text-white/80 mb-8">
              Our senior living advisors help families assess care needs, explore options, and find the right community&mdash;all at no cost to you. Schedule a free, confidential consultation.
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
