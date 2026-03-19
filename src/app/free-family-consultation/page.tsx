"use client";

import { useState } from "react";
import { Heart, Shield, Clock, Send, Phone } from "lucide-react";

const reassurances = [
  {
    title: "No Obligation",
    description: "This is a conversation, not a commitment.",
    icon: Heart,
  },
  {
    title: "Completely Free",
    description: "There is no cost for an initial consultation.",
    icon: Shield,
  },
  {
    title: "Confidential",
    description: "Everything you share stays between us.",
    icon: Clock,
  },
];

export default function FreeFamilyConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    situation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Free Family Consultation
            </h1>
            <p className="text-lg text-white/80">
              No obligation. Free. Confidential. Just a conversation about your
              family&apos;s situation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-navy mb-6">
                You&apos;re Not Alone in This
              </h2>
              <p className="text-muted-foreground mb-4">
                If you&apos;re helping a parent navigate a move to senior
                living, you already know how complicated it can feel. The
                emotions, the logistics, the family dynamics — it&apos;s a lot.
              </p>
              <p className="text-muted-foreground mb-8">
                This consultation is your chance to talk through your situation
                with someone who has guided hundreds of families through exactly
                this. We&apos;ll listen, ask the right questions, and give you
                honest guidance — whether or not you work with us.
              </p>

              <div className="space-y-6 mb-8">
                {reassurances.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-coral/10 flex items-center justify-center flex-shrink-0 rounded">
                      <item.icon className="h-5 w-5 text-coral" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-muted rounded">
                <p className="font-serif text-lg text-navy italic">
                  &ldquo;Most families tell us they wish they&apos;d called
                  sooner. There&apos;s no wrong time to start the
                  conversation.&rdquo;
                </p>
              </div>
            </div>

            <div>
              <div className="bg-muted p-8 rounded">
                <h2 className="font-serif text-2xl font-medium text-navy mb-6">
                  Tell Us About Your Situation
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-coral/10 flex items-center justify-center mx-auto mb-4 rounded-full">
                      <Send className="h-8 w-8 text-coral" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-navy mb-2">
                      Thank You
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ve received your information and will reach out
                      within 24 hours. If your situation is urgent, please call
                      us directly.
                    </p>
                    <a
                      href="tel:8007842273"
                      className="inline-flex items-center text-coral font-medium mt-4 hover:underline"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      (800) 784-2273
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="situation"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Brief Description of Your Situation
                      </label>
                      <textarea
                        id="situation"
                        name="situation"
                        rows={4}
                        value={formData.situation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                        placeholder="Tell us a little about what's going on with your parent..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting
                        ? "Sending..."
                        : "Request Free Consultation"}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your information is confidential. We&apos;ll never share
                      it with anyone.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-custom py-12 px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl font-medium mb-2">
                Prefer to talk now?
              </h2>
              <p className="text-white/70">
                Call us directly — we&apos;re here to listen.
              </p>
            </div>
            <a
              href="tel:8007842273"
              className="inline-flex items-center justify-center px-8 py-4 bg-coral text-white font-medium text-lg rounded-sm hover:bg-coral/90 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              (800) 784-2273
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
