# Senior Transitions Group (STG) — Cursor Implementation Prompt

Copy and paste this entire prompt into Cursor to implement the full tracking and marketing system.

---

## PROMPT START

I need you to implement a tracking, analytics, and content system for SeniorTransitionsGroup.com, a compassionate senior home transition service helping families sell their loved one's home fast so they can move into senior living. The phone number is (503) 555-HOME / (503) 555-4663. *(Update with real number)*

This is a Next.js 14 App Router project with TypeScript and Tailwind CSS.

**CRITICAL BRAND CONTEXT:**
- STG helps seniors and their families transition from their home into assisted living / senior communities
- We buy the home fast (often in 7 days) so the senior can cover move-in costs without Medicaid complications
- Our service is FREE to the family — we get paid by our partners/end buyers
- Tone: COMPASSIONATE, warm, trustworthy — like a knowledgeable friend guiding you through a hard time
- These families are stressed and emotional. The site must feel like a calm, trusted resource — NOT a sales funnel
- NO popups, NO countdown timers, NO social proof toasts, NO aggressive conversion tactics
- Service area: Portland, OR & Vancouver, WA metro

---

## PHASE 1: TRACKING & ANALYTICS (All Invisible — Backend Only)

### 1.1 Create UTM Parameter Capture System

Create `src/components/marketing/UTMCapture.tsx`:

```tsx
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
];

export function UTMCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    UTM_PARAMS.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        document.cookie = `${param}=${encodeURIComponent(value)};path=/;max-age=${30 * 24 * 60 * 60}`;
      }
    });

    if (!document.cookie.includes('first_visit_source')) {
      const referrer = document.referrer;
      let source = 'direct';
      
      if (referrer.includes('facebook.com')) source = 'facebook';
      else if (referrer.includes('google.com')) source = 'google';
      else if (referrer.includes('bing.com')) source = 'bing';
      else if (referrer.includes('caring.com')) source = 'caring';
      else if (referrer.includes('aplaceformom.com')) source = 'aplaceformom';
      else if (referrer.includes('seniorliving.org')) source = 'seniorliving';
      else if (referrer) source = 'referral';

      document.cookie = `first_visit_source=${source};path=/;max-age=${30 * 24 * 60 * 60}`;
      document.cookie = `first_visit_page=${encodeURIComponent(window.location.pathname)};path=/;max-age=${30 * 24 * 60 * 60}`;
      document.cookie = `utm_timestamp=${Date.now()};path=/;max-age=${30 * 24 * 60 * 60}`;
    }
  }, [searchParams]);

  return null;
}
```

### 1.2 Create Analytics Helper Functions

Create `src/lib/analytics.ts`:

```ts
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

// --- META PIXEL EVENTS ---

export function trackMetaPixelLead(data: {
  service_type?: string;
  city?: string;
  source?: string;
}) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Consultation Request',
      content_category: data.service_type || 'Senior Home Transition',
      city: data.city,
      value: 0,
      currency: 'USD',
    });
  }
}

export function trackMetaPixelFormStep(step: number, stepName: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'FormStep', {
      step_number: step,
      step_name: stepName,
    });
  }
}

export function trackMetaPixelViewContent(contentName: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
    });
  }
}

export function trackMetaPixelSchedule() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Schedule');
  }
}

export function trackMetaPixelContact() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  }
}

// --- UTM RETRIEVAL ---

export function getUTMParams(): Record<string, string> {
  if (typeof document === 'undefined') return {};
  
  const params: Record<string, string> = {};
  const cookies = document.cookie.split(';');
  
  const utmKeys = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_term',
    'utm_content', 'fbclid', 'gclid', 'first_visit_source',
    'first_visit_page', 'utm_timestamp',
  ];
  
  cookies.forEach(cookie => {
    const [key, value] = cookie.trim().split('=');
    if (utmKeys.includes(key)) {
      params[key] = decodeURIComponent(value);
    }
  });
  
  return params;
}

// --- ENGAGEMENT TRACKING (invisible) ---

export function trackPhoneClick(location: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', { content_name: `Phone Click: ${location}` });
  }
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', { event_label: location });
  }
}

export function trackFormStart() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'FormStart');
  }
}

export function trackResourceDownload(resourceName: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', 'ResourceDownload', { resource: resourceName });
  }
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'resource_download', { event_label: resourceName });
  }
}

export function trackPageEngagement(pageName: string, scrollDepth: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_label: pageName,
      value: scrollDepth,
    });
  }
}
```

### 1.3 Create Scroll Depth Tracker (Invisible)

Create `src/components/marketing/ScrollTracker.tsx`:

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageEngagement } from '@/lib/analytics';

export function ScrollTracker() {
  const pathname = usePathname();
  const tracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    tracked.current = new Set();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      const thresholds = [25, 50, 75, 90];
      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold);
          trackPageEngagement(pathname, threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
}
```

### 1.4 Create Phone Click Tracker Wrapper

Create `src/components/ui/TrackedPhoneLink.tsx`:

```tsx
'use client';

import { trackPhoneClick } from '@/lib/analytics';

interface TrackedPhoneLinkProps {
  phone: string;
  displayPhone: string;
  location: string; // e.g. "header", "footer", "hero", "mobile-bar"
  className?: string;
  children?: React.ReactNode;
}

export function TrackedPhoneLink({ 
  phone, 
  displayPhone, 
  location, 
  className,
  children 
}: TrackedPhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(location);
  };

  return (
    <a
      href={`tel:${phone}`}
      onClick={handleClick}
      className={className}
    >
      {children || displayPhone}
    </a>
  );
}
```

---

## PHASE 2: MINIMAL, TASTEFUL FRONTEND COMPONENTS

These components are NOT aggressive sales tools. They're simple UX improvements
that help families take the next step when they're ready.

### 2.1 Sticky Mobile Phone Bar (Phone Only — Subtle)

Create `src/components/marketing/StickyPhoneBar.tsx`:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

export function StickyPhoneBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 p-3 lg:hidden z-40 pb-safe">
      <a
        href="tel:5035554663"
        onClick={() => trackPhoneClick('sticky-mobile')}
        className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors max-w-sm mx-auto"
      >
        <Phone className="w-4 h-4" />
        <span>Call to Talk with Our Team</span>
      </a>
    </div>
  );
}
```

### 2.2 Educational Comparison Section (Not a "Calculator")

This section is positioned as educational content — "Understanding Your Options" —
not a sales comparison tool. Families appreciate transparency.

Create `src/components/sections/UnderstandingYourOptions.tsx`:

```tsx
'use client';

import { Clock, Home, HelpCircle } from 'lucide-react';

export function UnderstandingYourOptions() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Understanding Your Options
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every family's situation is different. Here's a straightforward look at
            two common paths so you can decide what's right for yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Traditional Listing */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-100 p-2 rounded-lg">
                <Home className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Traditional Listing</h3>
            </div>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Timeline: 3–6+ months</p>
                  <p>Includes prep, listing, showings, negotiation, and closing</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <p><span className="font-medium text-gray-800">Repairs & updates:</span> Often $10K–$30K+ to make market-ready</p>
                <p><span className="font-medium text-gray-800">Realtor commission:</span> Typically 5–6% of sale price</p>
                <p><span className="font-medium text-gray-800">Staging & showings:</span> Open houses, photography, keeping the home show-ready</p>
                <p><span className="font-medium text-gray-800">Holding costs:</span> Mortgage, taxes, insurance, utilities while waiting</p>
                <p><span className="font-medium text-gray-800">Closing costs:</span> Typically 2–3% of sale price</p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-500 italic">
                  Best for: Families with time, a home in good condition, and no urgency around senior living placement.
                </p>
              </div>
            </div>
          </div>

          {/* Working With Us */}
          <div className="bg-white border border-blue-200 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-50 p-2 rounded-lg">
                <Home className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Working With Us</h3>
            </div>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Timeline: 7–30 days</p>
                  <p>We work on your family's schedule — fast or flexible</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <p><span className="font-medium text-gray-800">Repairs needed:</span> None — we buy as-is, any condition</p>
                <p><span className="font-medium text-gray-800">Fees to your family:</span> None — our service is free to you</p>
                <p><span className="font-medium text-gray-800">Showings:</span> None — no strangers walking through</p>
                <p><span className="font-medium text-gray-800">Belongings:</span> Take what you want — we handle the rest</p>
                <p><span className="font-medium text-gray-800">Closing costs:</span> We cover them</p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-500 italic">
                  Best for: Families on a timeline, homes needing work, out-of-state families, or anyone who wants simplicity during a difficult time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gentle CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which path is right? We're happy to walk through your situation — no pressure, no obligation.
          </p>
          <a
            href="/free-consultation"
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Schedule a Free Consultation
          </a>
        </div>

        {/* FAQ Callout */}
        <div className="mt-8 bg-blue-50 rounded-xl p-5 md:p-6">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="font-medium text-gray-900 mb-1">
                "Will the offer be fair?"
              </p>
              <p>
                Our offers are based on current market data. While typically below full retail 
                (since we cover all costs and close fast), most families net a comparable amount 
                after accounting for the commissions, repairs, and months of holding costs they avoid. 
                We'll walk through the numbers transparently so you can make the best decision for your family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 2.3 How We Help Section (Simple, Warm — No Dollar Tags)

Create `src/components/sections/HowWeHelp.tsx`:

```tsx
import { Home, Clock, DollarSign, Shield, Heart, FileText } from 'lucide-react';

const steps = [
  {
    icon: Home,
    title: 'We Buy the Home As-Is',
    description: 'No repairs, no cleaning, no staging. We take the home in any condition — even with belongings inside.',
  },
  {
    icon: Clock,
    title: 'Close on Your Timeline',
    description: 'Whether your loved one needs to move in 7 days or 60 days, we work around your family\'s schedule.',
  },
  {
    icon: DollarSign,
    title: 'Fair Cash Offer',
    description: 'Proceeds go directly toward senior living move-in costs, deposits, and whatever your family needs.',
  },
  {
    icon: Shield,
    title: 'Medicaid-Safe Process',
    description: 'We structure transactions carefully to avoid triggering the 5-year Medicaid lookback — protecting your family\'s assets.',
  },
  {
    icon: FileText,
    title: 'Zero Cost to Families',
    description: 'No realtor commissions, no closing costs, no hidden fees. We\'re paid by our partners — not you.',
  },
  {
    icon: Heart,
    title: 'Compassionate Support',
    description: 'We coordinate with placement agents, senior communities, and your family to make the transition as smooth as possible.',
  },
];

export function HowWeHelp() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Help Your Family
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We handle the home so you can focus on your loved one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4">
                <step.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## PHASE 3: LAYOUT INTEGRATION

### 3.1 Update Root Layout

Update your `src/app/layout.tsx` to include tracking components:

```tsx
import { Suspense } from 'react';
import { UTMCapture } from '@/components/marketing/UTMCapture';
import { ScrollTracker } from '@/components/marketing/ScrollTracker';
import { StickyPhoneBar } from '@/components/marketing/StickyPhoneBar';

// In your layout body, before closing </body>:
// <Suspense fallback={null}>
//   <UTMCapture />
//   <ScrollTracker />
//   <StickyPhoneBar />
// </Suspense>

// Also add Meta Pixel in the body (replace YOUR_PIXEL_ID):
// <script
//   dangerouslySetInnerHTML={{
//     __html: `
//       !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//       n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
//       n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
//       t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
//       document,'script','https://connect.facebook.net/en_US/fbevents.js');
//       fbq('init', 'YOUR_PIXEL_ID');
//       fbq('track', 'PageView');
//     `,
//   }}
// />
```

### 3.2 Add Sections to Homepage

```tsx
import { HowWeHelp } from '@/components/sections/HowWeHelp';
import { UnderstandingYourOptions } from '@/components/sections/UnderstandingYourOptions';

// Suggested homepage order:
// 1. Hero (empathetic headline + consultation form or phone)
// 2. How It Works (3-step process: Call → Offer → Close)
// 3. HowWeHelp (new — 6-card grid)
// 4. UnderstandingYourOptions (new — Traditional vs Us side-by-side)
// 5. Family Stories / Testimonials
// 6. FAQ
// 7. Gentle CTA + phone number
```

### 3.3 Barrel Exports

Create `src/components/marketing/index.ts`:

```ts
export { UTMCapture } from './UTMCapture';
export { ScrollTracker } from './ScrollTracker';
export { StickyPhoneBar } from './StickyPhoneBar';
```

Create `src/components/sections/index.ts`:

```ts
export { HowWeHelp } from './HowWeHelp';
export { UnderstandingYourOptions } from './UnderstandingYourOptions';
```

---

## PHASE 4: FORM CONVERSION TRACKING

Update your consultation form to track conversions invisibly:

```tsx
import { trackMetaPixelLead, trackFormStart, getUTMParams } from '@/lib/analytics';

// When user first interacts with the form:
const handleFormFocus = () => {
  trackFormStart();
};

// On successful form submission:
const handleSubmit = async (formData: FormData) => {
  // ... your existing submission logic
  
  trackMetaPixelLead({
    service_type: formData.get('situation') as string,
    city: formData.get('city') as string || 'Portland',
  });
  
  // Attach UTM data to submission for lead source tracking
  const utmParams = getUTMParams();
  // Include utmParams in your API call or CRM submission
};
```

---

## DEPENDENCIES

```bash
npm install lucide-react
# or
pnpm add lucide-react
```

---

## SUMMARY

After implementation, you'll have:

**Invisible Backend (families never see this):**
1. UTM parameter capture — tracks which ads/sources drive leads
2. Meta Pixel events — fires Lead, Contact, FormStart, ViewContent for Facebook optimization
3. Scroll depth tracking — know which pages engage families
4. Phone click tracking — know where people call from (header, footer, hero, mobile)
5. Form step tracking — know where people start and drop off
6. Resource download tracking — know which guides people grab

**Minimal Frontend (tasteful, not salesy):**
7. Sticky mobile phone bar — just a phone link, appears after scrolling, no pressure
8. "How We Help" section — 6-card grid, warm and informative, no dollar tags
9. "Understanding Your Options" — educational side-by-side comparison, not a "calculator"

**What's intentionally NOT included:**
- No countdown timers or urgency bars
- No exit intent popups
- No social proof toast notifications
- No "offer stack" with savings dollar amounts
- No aggressive CTAs or guilt-trip dismiss buttons

The site should feel like a knowledgeable, caring friend — not a conversion machine.

## PROMPT END
