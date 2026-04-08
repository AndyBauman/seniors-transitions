"use client";

import { useState } from "react";
import {
  Users,
  Heart,
  Home,
  Scale,
  MapPin,
  FileText,
  Building,
  Send,
  Package,
} from "lucide-react";

const situations = [
  {
    icon: Building,
    text: "Senior moving to assisted living or memory care",
  },
  {
    icon: Users,
    text: "Family coordinating a parent's transition",
  },
  {
    icon: Heart,
    text: "Estate after a loved one's passing",
  },
  {
    icon: Home,
    text: "Home with deferred maintenance — can't list traditionally",
  },
  {
    icon: Scale,
    text: "Medicaid planning — need to liquidate home asset",
  },
  {
    icon: MapPin,
    text: "Out-of-state family managing parent's home",
  },
  {
    icon: FileText,
    text: "Probate property needing resolution",
  },
  {
    icon: Package,
    text: "Downsizing from the family home",
  },
];

export default function ReferPage() {
  const [activeTab, setActiveTab] = useState<"partner" | "family">("partner");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Refer a Family
            </h1>
            <p className="text-lg text-white/80">
              Whether you&apos;re a professional partner or a family friend,
              we&apos;d be honored to help.
            </p>
          </div>
        </div>
      </section>

      {/* Who to Refer */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Who Can We Help?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If someone you know is in any of these situations, we can make
              their transition easier.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {situations.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 p-4 bg-muted rounded"
              >
                <item.icon className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Forms */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto">
            {/* Tab Switcher */}
            <div className="flex rounded overflow-hidden mb-8 border border-border">
              <button
                onClick={() => {
                  setActiveTab("partner");
                  setIsSubmitted(false);
                }}
                className={`flex-1 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
                  activeTab === "partner"
                    ? "bg-navy text-white"
                    : "bg-white text-navy hover:bg-muted"
                }`}
              >
                I&apos;m a Professional
              </button>
              <button
                onClick={() => {
                  setActiveTab("family");
                  setIsSubmitted(false);
                }}
                className={`flex-1 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
                  activeTab === "family"
                    ? "bg-navy text-white"
                    : "bg-white text-navy hover:bg-muted"
                }`}
              >
                I Know a Family
              </button>
            </div>

            {/* Partner Form */}
            {activeTab === "partner" && (
              <div className="bg-white p-8 rounded shadow-sm">
                <h3 className="font-serif text-2xl font-medium text-navy mb-2">
                  Partner With Us to Help More Families
                </h3>
                <p className="text-muted-foreground mb-6">
                  We solve the #1 delay in senior placements — the home sale.
                  Refer your clients and they can move in sooner.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-coral/10 flex items-center justify-center mx-auto mb-4 rounded-full">
                      <Send className="h-8 w-8 text-coral" />
                    </div>
                    <h4 className="font-serif text-xl font-medium text-navy mb-2">
                      Referral Received
                    </h4>
                    <p className="text-muted-foreground">
                      Thank you — we&apos;ll reach out to the family within 24
                      hours and keep you updated.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Organization *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Your Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Family&apos;s Name & Situation *
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                        placeholder="Tell us about the family and their situation so we can prepare before reaching out..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Submit Referral"}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Family Form */}
            {activeTab === "family" && (
              <div className="bg-white p-8 rounded shadow-sm">
                <h3 className="font-serif text-2xl font-medium text-navy mb-2">
                  Know a Family Going Through a Senior Transition?
                </h3>
                <p className="text-muted-foreground mb-6">
                  If someone you know is navigating this, we&apos;d be honored
                  to help. Share their info and we&apos;ll reach out with care.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-coral/10 flex items-center justify-center mx-auto mb-4 rounded-full">
                      <Send className="h-8 w-8 text-coral" />
                    </div>
                    <h4 className="font-serif text-xl font-medium text-navy mb-2">
                      Thank You!
                    </h4>
                    <p className="text-muted-foreground">
                      We appreciate you thinking of them. We&apos;ll reach out
                      gently and let them know you recommended us.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Your Email or Phone *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Their Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">
                          Best Way to Reach Them
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                          placeholder="Phone or email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Their Situation
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                        placeholder="Anything you can share helps us approach them with the right context..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Referral"}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium mb-4">
              Questions About Referring?
            </h2>
            <p className="text-white/80 mb-8">
              Call us directly — we&apos;re happy to discuss how we work with
              partners and families.
            </p>
            <a
              href="tel:5037558555"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>(503) 755-8555</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
