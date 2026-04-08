================================================================================
SENIOR TRANSITIONS GROUP (STG) — MARKETING FRAMEWORK IMPLEMENTATION GUIDE
================================================================================
Complete tracking, content, and external marketing system for senior home transitions
Backend-heavy tracking + external marketing. Site itself stays calm and trustworthy.

Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS
Phone: (503) 555-HOME / (503) 555-4663 *(Update with real number)*
Service Area: Portland, OR & Vancouver, WA metro

BRAND RULES:
- Tone: Compassionate, warm, trustworthy — like a knowledgeable friend
- Site feel: Calm resource, NOT a conversion funnel
- NO popups, countdowns, toast notifications, or aggressive sales tactics
- Families are stressed and emotional — every touchpoint should reduce anxiety
- All conversion optimization happens INVISIBLY (backend) or EXTERNALLY (ads, email, SEO)

================================================================================
TABLE OF CONTENTS
================================================================================
1. META (FACEBOOK) PIXEL INTEGRATION
2. UTM PARAMETER CAPTURE SYSTEM
3. META PIXEL CONVERSION EVENTS
4. ENGAGEMENT TRACKING (Scroll, Phone, Form, Downloads)
5. "HOW WE HELP" SECTION (Warm, No Dollar Tags)
6. "UNDERSTANDING YOUR OPTIONS" SECTION (Educational Comparison)
7. HERO SECTION GUIDANCE
8. STICKY MOBILE PHONE BAR (Subtle)
9. REFERRAL PAGE (For Partners & Families)
10. EMAIL NURTURE SEQUENCE (5 Emails)
11. FACEBOOK AD COPY (5 Variations)
12. 30-DAY FACEBOOK CONTENT CALENDAR
13. GOOGLE ADS COPY (Search)
14. LOCAL SEO CONTENT STRATEGY
15. PARTNER-SPECIFIC LANDING PAGES

================================================================================
1. META (FACEBOOK) PIXEL INTEGRATION
================================================================================
FILE: src/app/layout.tsx

PURPOSE: Track visitors for retargeting + conversion optimization.
This is invisible to families — purely backend.

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID_HERE');
      fbq('track', 'PageView');
    `,
  }}
/>
<noscript>
  <img height="1" width="1" style={{ display: 'none' }}
    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"
    alt="" />
</noscript>
```

================================================================================
2. UTM PARAMETER CAPTURE SYSTEM
================================================================================
FILE: src/components/marketing/UTMCapture.tsx

PURPOSE: Track which ads/sources drive leads. Invisible to users.
Captures UTMs on landing, stores in cookies, attaches to form submissions.

REFERRER SOURCES TO TRACK:
- facebook.com → 'facebook'
- google.com → 'google'
- bing.com → 'bing'
- caring.com → 'caring' (senior living directory)
- aplaceformom.com → 'aplaceformom' (senior living referral)
- seniorliving.org → 'seniorliving'
- everything else → 'referral'
- no referrer → 'direct'

(See full component code in cursor-prompt.md)

================================================================================
3. META PIXEL CONVERSION EVENTS
================================================================================
FILE: src/lib/analytics.ts

PURPOSE: Fire conversion events when users submit consultation forms,
click phone numbers, download resources, or engage deeply.
This tells Facebook WHO converts so it optimizes ad delivery.

EVENTS TO TRACK:
- Lead → consultation form submission
- Contact → phone click
- Schedule → consultation scheduled
- ViewContent → key page views
- FormStart (custom) → user begins filling form
- FormStep (custom) → user progresses through form steps
- ResourceDownload (custom) → user downloads a guide/checklist
- ScrollDepth (via gtag) → 25%, 50%, 75%, 90% scroll milestones

(See full code in cursor-prompt.md)

================================================================================
4. ENGAGEMENT TRACKING (All Invisible)
================================================================================

4A. SCROLL DEPTH TRACKER
FILE: src/components/marketing/ScrollTracker.tsx
PURPOSE: Know which pages families actually read vs bounce from.
Tracks 25/50/75/90% scroll thresholds per page.
Renders nothing visible.

4B. PHONE CLICK TRACKER
FILE: src/components/ui/TrackedPhoneLink.tsx
PURPOSE: Wrap all phone links so you know WHERE people click to call.
Tracks: header, footer, hero, mobile-bar, FAQ, comparison section.
Fires both Meta Pixel (Contact) and Google Analytics events.

4C. FORM INTERACTION TRACKING
PURPOSE: Track when users first focus on form fields (FormStart),
progress through steps (FormStep), and submit (Lead).
Attach UTM params to every submission for source attribution.

4D. RESOURCE DOWNLOAD TRACKING
PURPOSE: If you offer downloadable guides (e.g., "Senior Transition Checklist"),
track which resources people grab. Useful for retargeting.

================================================================================
5. "HOW WE HELP" SECTION
================================================================================
FILE: src/components/sections/HowWeHelp.tsx

PURPOSE: Simple, warm 6-card grid explaining what families get.
NO dollar savings tags. NO "value stack" framing. Just clear, caring information.

CARDS:
1. We Buy the Home As-Is — No repairs, no cleaning, no staging
2. Close on Your Timeline — 7 days or 60 days, your choice
3. Fair Cash Offer — Proceeds fund move-in costs
4. Medicaid-Safe Process — Avoid 5-year lookback issues
5. Zero Cost to Families — No commissions, no closing costs
6. Compassionate Support — We coordinate with communities and placement agents

DESIGN: Clean card grid, blue accent color, no aggressive styling

(See full component code in cursor-prompt.md)

================================================================================
6. "UNDERSTANDING YOUR OPTIONS" SECTION
================================================================================
FILE: src/components/sections/UnderstandingYourOptions.tsx

PURPOSE: Educational side-by-side showing Traditional Listing vs Working With Us.
Framed as helpful information — NOT a sales calculator.

KEY DIFFERENCES FROM REMOVESCRAP VERSION:
- No interactive slider/selector (no "pick your scenario" gamification)
- No red vs green aggressive color coding
- No "RECOMMENDED" badge
- No dollar total at the bottom screaming savings
- Static, informational layout — like a helpful article
- Includes "Best for:" guidance so families self-select
- Ends with inline FAQ: "Will the offer be fair?" answered honestly

(See full component code in cursor-prompt.md)

================================================================================
7. HERO SECTION GUIDANCE
================================================================================

PURPOSE: First impression. Must immediately communicate empathy and competence.

HEADLINE OPTIONS (empathetic, not salesy):
1. "Your Loved One Needs to Move. We'll Handle the Home."
2. "Sell the Home Fast. Fund the Move. Focus on Family."
3. "When a Senior Transition Means Selling the Home — We're Here to Help."

SUBHEADLINE:
"No repairs. No fees. No stress. Just a fair offer and a family who cares."

CTA OPTIONS (gentle):
- "Schedule a Free Consultation" (primary)
- Phone number displayed prominently (secondary)
- NO "Get My Free Quote" or "Get Started Now" aggressive language

TRUST ELEMENTS (below the fold):
- "Serving Portland & Vancouver families since [Year]"
- Star rating + number of families helped
- BBB / Chamber of Commerce if applicable
- "Free to families — we're paid by our partners"

DO NOT INCLUDE:
- Countdown timers
- "Limited availability" messaging
- Flashing or animated urgency
- Stock photos of sad seniors (use warm, real imagery)

================================================================================
8. STICKY MOBILE PHONE BAR
================================================================================
FILE: src/components/marketing/StickyPhoneBar.tsx

PURPOSE: On mobile, after scrolling past the hero, show a subtle phone bar.
Just a phone link — no "Get Quote" button, no dual CTAs.

DESIGN:
- White background with subtle border-top
- Single blue button: "Call to Talk with Our Team"
- Phone icon + text
- Appears after 600px scroll
- Hidden on desktop

(See full component code in cursor-prompt.md)

================================================================================
9. REFERRAL PAGE
================================================================================
FILE: src/app/refer/page.tsx

PURPOSE: Separate referral paths for PARTNERS and FAMILIES.

PARTNER SECTION (placement agents, communities, attorneys):
- Headline: "Partner With Us to Help More Families"
- Value prop: "We help YOUR clients sell fast so they can move in sooner"
- Simple form: Partner name, organization, family details, situation
- No incentive needed — the value IS faster placements and move-ins

FAMILY SECTION:
- Headline: "Know a Family Going Through a Senior Transition?"
- Warm messaging: "If someone you know is navigating this, we'd be honored to help"
- Simple form: Your name, their name, their situation, best contact

WHO TO REFER (situations grid):
- Senior moving to assisted living or memory care
- Family coordinating parent's transition
- Estate after a loved one's passing
- Home with deferred maintenance — can't list traditionally
- Medicaid planning — need to liquidate home asset
- Out-of-state family managing parent's home
- Probate property needing resolution
- Downsizing from the family home

================================================================================
10. EMAIL NURTURE SEQUENCE (5 Emails — Warm, Not Pushy)
================================================================================

PURPOSE: Follow up with consultation requests. Educate, build trust,
address concerns, gently convert. NOT a pressure sequence.

---

EMAIL 1: Day 0 — Confirmation + What to Expect
SUBJECT: We received your request — here's what happens next

Hi {{first_name}},

Thank you for reaching out to Senior Transitions Group. We know this is a big
decision, and we're honored you're considering us.

Here's what happens next:
1. A member of our team will review your situation
2. We'll reach out within 2 hours during business hours
3. We'll walk you through your options — no pressure, no obligation

We're here to make this easier for your family, not harder.

Warmly,
The Senior Transitions Group Team

P.S. If timing is urgent, call us directly and we'll prioritize your situation.

---

EMAIL 2: Day 3 — How Our Process Works
SUBJECT: How we help families sell their loved one's home (simply explained)

Hi {{first_name}},

We know selling a home during a senior transition feels overwhelming.
Here's how we make it simple:

Step 1: Free consultation — We learn about your situation and timeline.
Step 2: Fair cash offer — Usually within 24-48 hours. No appraisals dragging on.
Step 3: Close on your timeline — 7 days or 60 days. Proceeds go toward move-in costs.

What makes us different:
- No realtor commissions
- No repairs or cleaning needed
- No showings or open houses
- No closing costs to you
- Medicaid-safe transaction structure

We're paid by our partners — not you. Our service costs your family nothing.

Have questions? Reply to this email — a real person reads every one.

—Senior Transitions Group

---

EMAIL 3: Day 7 — Family Story
SUBJECT: "We didn't know this was even possible" — a Beaverton family

Hi {{first_name}},

Last month, a family in Beaverton was in a tough spot. Their mom needed memory
care — soon. The house needed $30K+ in repairs to list. A realtor said 4-6 months.

The community had a room NOW. They needed funds in 2 weeks.

They called us. We made a fair offer in 48 hours. Closed in 11 days. Proceeds
covered the deposit, first 3 months, and moving costs.

Their mom moved in the following Monday.

The daughter told us: "We didn't know this was even possible. You took the
biggest stress off our plate so we could focus on Mom."

If your family is in a similar situation, we're here.

—Senior Transitions Group

---

EMAIL 4: Day 10 — Common Questions
SUBJECT: Questions families ask before working with us

Hi {{first_name}},

Still thinking it over? We understand. Here are the top 3 questions we hear:

"Will we get a fair price?"
Our offers are based on current market data. While below full retail (we cover
all costs and close fast), most families net a comparable amount after you subtract
the commissions, repairs, staging, and months of holding costs they'd otherwise pay.

"What about all the stuff in the house?"
We buy as-is — furniture, belongings, and all. We coordinate donation of usable
items and handle the rest respectfully. You take what you want.

"Is this really free? What's the catch?"
No catch. We're paid by our real estate partners — the same way placement agents
are paid by the senior community. Your family pays nothing.

Any other questions? Just reply.

—Senior Transitions Group

---

EMAIL 5: Day 18 — Gentle Check-In
SUBJECT: Still thinking about the home?

Hi {{first_name}},

Just checking in — is selling your loved one's home still on your mind?

If the timing wasn't right, that's okay. We're here when you're ready.

Already found a solution? We're glad things worked out. If you know another
family going through a senior transition, we'd be honored to help them.

[Refer a family →](https://seniortransitionsgroup.com/refer)

With care,
—The Team

================================================================================
11. FACEBOOK AD COPY (5 Variations)
================================================================================

TARGET AUDIENCES:
- Adults 35-65 with parents 70+ (sandwich generation)
- Adult children searching for senior living options
- Interests: caregiving, Alzheimer's, aging parents, senior living
- Geo: Portland/Vancouver metro, 50-mile radius

---

AD 1: DIRECT (Cold Traffic)

Is your parent moving to senior living? The hardest part shouldn't be selling
the house.

We help families sell their loved one's home fast — so you can focus on
what matters most.

✅ Sell in as few as 7 days
✅ No repairs, no showings
✅ Fair cash offer — funds cover move-in costs
✅ 100% free to families

Serving Portland & Vancouver families.

HEADLINE: Sell the Home Fast. Fund the Move. Focus on Family.
DESCRIPTION: Compassionate senior home transitions. Free consultation.
CTA: Learn More

---

AD 2: PROBLEM-AGITATE-SOLVE (Retargeting)

You've been putting it off. We understand.

Selling a parent's home while coordinating senior living is... a lot.

❌ The house needs work you can't afford
❌ A realtor says 4-6 months
❌ Mom needs to move NOW
❌ You're managing this while working full-time

There's a better way. We buy the home as-is. Close in as few as 7 days.
Funds go toward move-in costs. No fees. No stress.

HEADLINE: Your Parent Needs to Move. We'll Handle the Home.
DESCRIPTION: No repairs. No realtor. No fees. Free consultation.
CTA: Get Started

---

AD 3: TESTIMONIAL (Warm Audiences)

"My mom needed memory care, and we had no idea how to sell her house fast.
Senior Transitions Group made a fair offer, closed in 11 days, and helped
coordinate the cleanout. They treated our family like their own."
— Jennifer M., Beaverton

⭐⭐⭐⭐⭐

If your family is navigating a senior transition, you don't have to do it alone.

HEADLINE: Trusted by Portland Families Like Yours
DESCRIPTION: Compassionate home sales. Free consultation.
CTA: Learn More

---

AD 4: SITUATION-SPECIFIC (3 Versions)

VERSION A — Memory Care / Assisted Living:
Your parent was approved for assisted living. But they need to move in 2 weeks —
and the home hasn't even been listed.

We buy senior homes fast, as-is, so families can fund the move without waiting.

Free consultation. No obligation. No fees.

VERSION B — Out-of-State Family:
Managing a parent's home sale from out of state?

No need to fly back for repairs, showings, or closings. We buy as-is, handle
everything locally, and close on your timeline.

VERSION C — Estate / Probate:
Dealing with a parent's estate? We understand how emotional it can be.

We buy estate homes as-is — even with deferred maintenance, belongings,
or in probate. Fair offer. One less thing to worry about.

---

AD 5: VIDEO SCRIPT (60 seconds)

[HOOK — 0-5 sec]
"If your parent needs to move to senior living and you don't know what to do
with the house... keep watching."

[PROBLEM — 5-15 sec]
"Most families face this: Mom needs to move NOW, but the house needs work,
it's full of 40 years of stuff, and a realtor says months to sell."

[AGITATE — 15-25 sec]
"The community has a room today. Every day you wait, you're paying for a home
nobody's living in — plus the stress is real."

[SOLUTION — 25-40 sec]
"We buy the home as-is. No repairs, no showings. Close in as few as 7 days.
Funds go directly toward move-in costs."

[TRUST — 40-50 sec]
"Our service is free to families. We work with senior communities across
Portland. And every transaction is structured to protect against Medicaid issues."

[CTA — 50-60 sec]
"Tap the link for a free consultation. Let's take the house off your plate —
so you can focus on what matters."

================================================================================
12. 30-DAY FACEBOOK CONTENT CALENDAR
================================================================================

FRAMEWORK: Value-first, empathy-driven
3 value posts : 1 gentle ask
Tone: Warm, educational, supportive — NEVER salesy

WEEK 1 — ESTABLISH TRUST & EDUCATE
Day 1 (Mon): [VALUE] "5 questions to ask when choosing a senior living community"
Day 2 (Tue): [VALUE] Family story / testimonial graphic
Day 3 (Wed): [VALUE] "What does it really cost to sell a home the traditional way?"
Day 4 (Thu): [ASK] "Navigating a senior transition? We're here to help. Free consultation."
Day 5 (Fri): [VALUE] Team photo + mission statement
Day 6 (Sat): [VALUE] "Start the conversation with your parent early — even if they're not ready"
Day 7 (Sun): [VALUE] Share a local Portland senior resource or event

WEEK 2 — BUILD SOCIAL PROOF
Day 8 (Mon): [VALUE] Family testimonial quote graphic
Day 9 (Tue): [VALUE] "What happens to the home when a parent moves to senior living?"
Day 10 (Wed): [VALUE] "3 things families don't know about Medicaid and home sales"
Day 11 (Thu): [ASK] "Selling a parent's home shouldn't add stress. Let us help."
Day 12 (Fri): [VALUE] Google review screenshot + thank you
Day 13 (Sat): [VALUE] "Signs it might be time to talk about senior living"
Day 14 (Sun): [VALUE] Community spotlight — local neighborhood focus

WEEK 3 — ADDRESS CONCERNS
Day 15 (Mon): [VALUE] "How do cash home offers work? Honest breakdown"
Day 16 (Tue): [VALUE] Infographic: Traditional Sale vs Our Process
Day 17 (Wed): [VALUE] "Can we sell if the house is still full of belongings?"
Day 18 (Thu): [ASK] "Going through a senior transition? You don't have to do it alone."
Day 19 (Fri): [VALUE] "Portland-area senior living communities we recommend"
Day 20 (Sat): [VALUE] Caregiver self-care tip
Day 21 (Sun): [VALUE] Partner spotlight — placement agent or community

WEEK 4 — DEEPEN TRUST + CONVERT
Day 22 (Mon): [VALUE] Case study: "How we helped a family close in 11 days"
Day 23 (Tue): [VALUE] "What adult children wish they'd known about senior transitions"
Day 24 (Wed): [ASK] "Know a family dealing with this? Share this post."
Day 25 (Thu): [VALUE] Partner interview clip or quote
Day 26 (Fri): [ASK] "This month we helped [X] families. Call or message if we can help yours."
Day 27 (Sat): [VALUE] "You DON'T have to fix up the house to sell it"
Day 28 (Sun): [VALUE] Gratitude post: "Thank you to every family who trusted us"
Day 29 (Mon): [ASK] "New month. If your family is ready, we're here."
Day 30 (Tue): [VALUE] Monthly recap: families helped, homes sold, communities partnered

================================================================================
13. GOOGLE ADS COPY
================================================================================

HIGH-INTENT KEYWORDS:
- sell parents house fast portland
- sell home for senior living
- cash home buyer senior transition
- sell house as is portland
- sell house fast vancouver wa
- help selling elderly parents home
- sell inherited home portland
- estate home buyer portland
- sell home medicaid portland

---

AD GROUP 1: Senior Home Sale Portland
HEADLINE 1: Sell Your Parent's Home Fast — Portland
HEADLINE 2: Close in 7 Days. No Repairs Needed.
HEADLINE 3: Free to Families — Call Today
DESCRIPTION 1: Helping Portland families sell their loved one's home for senior
living transitions. Fair cash offer. No fees. No stress.
DESCRIPTION 2: No repairs, no showings, no commissions. Funds go toward move-in
costs. Free consultation.

---

AD GROUP 2: Senior Transition Vancouver WA
HEADLINE 1: Sell Home for Senior Living — Vancouver WA
HEADLINE 2: Fair Cash Offer in 48 Hours
HEADLINE 3: Free Consultation — No Obligation
DESCRIPTION 1: Your parent needs to move. We buy as-is, close fast, and funds
cover senior living costs.
DESCRIPTION 2: Compassionate service for families in transition. No fees, no
repairs. Free consultation.

---

AD GROUP 3: Estate / Probate
HEADLINE 1: Estate Home Buyers — Portland Area
HEADLINE 2: We Buy As-Is. You Focus on Family.
HEADLINE 3: Compassionate. Fast. Fair.
DESCRIPTION 1: Dealing with a parent's estate? We buy homes as-is — even with
belongings, deferred maintenance, or in probate.
DESCRIPTION 2: Fair cash offer. Close in 7-30 days. No repairs. Serving Portland
& Vancouver families.

---

AD GROUP 4: Medicaid Home Sale
HEADLINE 1: Sell Home Without Triggering Medicaid
HEADLINE 2: Medicaid-Safe Home Sales Portland
HEADLINE 3: Protect Your Family's Assets
DESCRIPTION 1: Need to sell for senior living without Medicaid lookback issues?
We structure transactions to protect your family.
DESCRIPTION 2: Fair cash offer. Fast close. Free consultation for Portland families.

================================================================================
14. LOCAL SEO CONTENT STRATEGY
================================================================================

CITY PAGES (create for each):
Portland, OR | Vancouver, WA | Beaverton, OR | Lake Oswego, OR
Tigard, OR | Gresham, OR | Hillsboro, OR | West Linn, OR
Oregon City, OR | Camas, WA

SERVICE + CITY PAGES:
- /sell-home-senior-living-portland
- /sell-home-as-is-beaverton
- /estate-home-buyer-lake-oswego
- /sell-parents-house-fast-vancouver-wa
- /medicaid-home-sale-portland

PAGE STRUCTURE:
1. H1 with primary keyword + city
2. Empathetic intro (2-3 sentences, mention city naturally)
3. Who We Help (family situations)
4. How It Works (3-step process)
5. What Makes Us Different (4-5 caring differentiators)
6. Family Story from that area
7. Service Area Map
8. FAQ (3-5 questions, situation+city specific)
9. CTA: Consultation form + phone
10. Internal links to related services and nearby cities

BLOG CONTENT (Long-Tail SEO):
- "How to sell a parent's home fast in Portland for senior living"
- "What is the Medicaid 5-year lookback rule and how home sales are affected"
- "Checklist: What to do when moving a parent to assisted living"
- "How much does it cost to sell a house in Portland? Traditional vs cash offer"
- "How to sell a home full of belongings in Oregon"
- "Estate sale vs selling as-is: Which is better for families?"
- "Signs it's time to talk to your parent about senior living"
- "How to choose the right senior living community in Portland"
- "Out-of-state? How to sell your parent's Oregon home remotely"
- "How placement agents and home buyers work together for senior transitions"

GOOGLE BUSINESS PROFILE:
- Post weekly: family stories, tips, partner highlights
- Respond to every review within 24 hours with warmth
- Add photos: team, community events, partner spotlights (NO stock photos)
- Use Q&A for common family questions
- Categories: "Home Buyer," "Real Estate Consultant," "Senior Services"

================================================================================
15. PARTNER-SPECIFIC LANDING PAGES
================================================================================

PURPOSE: Placement agents, senior communities, and attorneys see different
messaging than families. Create dedicated landing pages.

/partners/placement-agents
- "Help Your Clients Move In Faster"
- Value: We solve the #1 delay in senior placements — the home sale
- How it works: You refer → We buy → Client moves in
- "Just like you get paid by the community, we get paid by the end buyer"
- Form: Refer a family

/partners/senior-communities
- "Fill Rooms Faster — We Handle the Home Sale"
- Value: Your incoming residents can fund move-in costs in days, not months
- No cost to the community or the family
- Form: Partner with us / Refer a resident

/partners/attorneys
- "Fast, Clean Closings for Your Senior Clients"
- Value: Medicaid-safe transactions, probate-friendly, simple documentation
- Form: Refer a client

================================================================================
IMPLEMENTATION CHECKLIST
================================================================================

PHASE 1 — TRACKING (Invisible — Do First)
□ Add Meta Pixel to layout.tsx
□ Add UTM capture component
□ Add ScrollTracker component
□ Add TrackedPhoneLink wrapper to all phone links
□ Add conversion event tracking to consultation form
□ Add form start/step tracking
□ Verify all events firing in Meta Events Manager
□ Set up Google Analytics 4 with scroll + phone events

PHASE 2 — SITE CONTENT (Tasteful, Not Salesy)
□ Build Hero with empathetic headline + phone + form
□ Add "How We Help" section (6-card grid)
□ Add "Understanding Your Options" section (educational comparison)
□ Build FAQ section with honest, caring answers
□ Add family stories / testimonials section
□ Add StickyPhoneBar (mobile only, phone only, subtle)

PHASE 3 — EXTERNAL MARKETING
□ Write 5 Facebook ad variations
□ Schedule 30-day content calendar
□ Write Google Ads copy (4 ad groups)
□ Set up 5-email nurture sequence
□ Create /refer page for partners and families

PHASE 4 — SEO EXPANSION
□ Create 10 city-specific landing pages
□ Create 5 service+city combination pages
□ Write 10 blog posts targeting long-tail keywords
□ Optimize Google Business Profile
□ Build citations: Caring.com, A Place for Mom, BBB, Yelp

PHASE 5 — PARTNER MARKETING
□ Create /partners/placement-agents landing page
□ Create /partners/senior-communities landing page
□ Create /partners/attorneys landing page
□ Build one-pager PDF for each partner type
□ Create co-branded email template for partner intros
□ Set up partner referral tracking (UTM: utm_source=partner_name)

================================================================================
END OF GUIDE
================================================================================
