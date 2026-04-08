import Link from "next/link";
import { Clock, Home, HelpCircle } from "lucide-react";

export function UnderstandingYourOptions() {
  return (
    <section className="bg-muted">
      <div className="container-custom section-padding">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
            Understanding Your Options
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every family&apos;s situation is different. Here&apos;s a
            straightforward look at two common paths so you can decide
            what&apos;s right for yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Listing */}
          <div className="bg-white border border-border rounded p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-muted flex items-center justify-center rounded">
                <Home className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy">
                Traditional Listing
              </h3>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-navy">
                    Timeline: 3–6+ months
                  </p>
                  <p>
                    Includes prep, listing, showings, negotiation, and closing
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p>
                  <span className="font-medium text-navy">
                    Repairs & updates:
                  </span>{" "}
                  Often $10K–$30K+ to make market-ready
                </p>
                <p>
                  <span className="font-medium text-navy">
                    Realtor commission:
                  </span>{" "}
                  Typically 5–6% of sale price
                </p>
                <p>
                  <span className="font-medium text-navy">
                    Staging & showings:
                  </span>{" "}
                  Open houses, photography, keeping the home show-ready
                </p>
                <p>
                  <span className="font-medium text-navy">Holding costs:</span>{" "}
                  Mortgage, taxes, insurance, utilities while waiting
                </p>
                <p>
                  <span className="font-medium text-navy">Closing costs:</span>{" "}
                  Typically 2–3% of sale price
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <p className="italic">
                  Best for: Families with time, a home in good condition, and no
                  urgency around senior living placement.
                </p>
              </div>
            </div>
          </div>

          {/* Working With Us */}
          <div className="bg-white border border-coral/30 rounded p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-coral/10 flex items-center justify-center rounded">
                <Home className="w-5 h-5 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy">
                Working With Us
              </h3>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-navy">Timeline: 7–30 days</p>
                  <p>
                    We work on your family&apos;s schedule — fast or flexible
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p>
                  <span className="font-medium text-navy">
                    Repairs needed:
                  </span>{" "}
                  None — we buy as-is, any condition
                </p>
                <p>
                  <span className="font-medium text-navy">
                    Fees to your family:
                  </span>{" "}
                  None — our service is free to you
                </p>
                <p>
                  <span className="font-medium text-navy">Showings:</span> None
                  — no strangers walking through
                </p>
                <p>
                  <span className="font-medium text-navy">Belongings:</span>{" "}
                  Take what you want — we handle the rest
                </p>
                <p>
                  <span className="font-medium text-navy">Closing costs:</span>{" "}
                  We cover them
                </p>
              </div>

              <div className="border-t border-border pt-4">
                <p className="italic">
                  Best for: Families on a timeline, homes needing work,
                  out-of-state families, or anyone who wants simplicity during a
                  difficult time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gentle CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which path is right? We&apos;re happy to walk through your
            situation — no pressure, no obligation.
          </p>
          <Link href="/free-consultation" className="btn-primary">
            Schedule a Free Consultation
          </Link>
        </div>

        {/* FAQ Callout */}
        <div className="mt-8 max-w-3xl mx-auto bg-white border border-border rounded p-5 md:p-6">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-navy mb-1">
                &ldquo;Will the offer be fair?&rdquo;
              </p>
              <p>
                Our offers are based on current market data. While typically
                below full retail (since we cover all costs and close fast), most
                families net a comparable amount after accounting for the
                commissions, repairs, and months of holding costs they avoid.
                We&apos;ll walk through the numbers transparently so you can make
                the best decision for your family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
