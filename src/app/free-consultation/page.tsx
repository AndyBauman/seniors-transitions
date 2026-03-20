"use client";

import { useState } from "react";
import { Heart, Shield, Clock, Send, Phone, Star } from "lucide-react";

const promises = [
  {
    title: "Your Treasures",
    description:
      "We treat every item with the respect it deserves. Nothing is discarded without your say.",
    icon: Heart,
  },
  {
    title: "Your Timeline",
    description:
      "We move at your pace. No rushing, no pressure. You decide when you're ready.",
    icon: Clock,
  },
  {
    title: "Your Way",
    description:
      "Every decision is yours. We guide and support — we never push.",
    icon: Star,
  },
];

export default function FreeConsultationPage() {
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
              Your Treasures, Your Timeline, Your Way
            </h1>
            <p className="text-lg text-white/80">
              A free, no-pressure conversation about your next chapter. We
              listen first.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-navy mb-6">
                This Is About You
              </h2>
              <p className="text-muted-foreground mb-4">
                Thinking about a move doesn&apos;t mean you have to rush into
                anything. Maybe you&apos;re considering your options.
                Maybe the house has just become too much to maintain. Or maybe
                you&apos;re ready but don&apos;t know where to start.
              </p>
              <p className="text-muted-foreground mb-8">
                Whatever brought you here, this consultation is simply a
                conversation. We&apos;ll listen to what matters to you, answer
                your questions honestly, and help you see what&apos;s possible
                — with no obligation whatsoever.
              </p>

              <div className="space-y-6 mb-8">
                {promises.map((item) => (
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
                  &ldquo;They made me feel like my wishes mattered at every
                  step. I never felt rushed or talked down to. It was my
                  move, my way.&rdquo;
                </p>
                <div className="w-12 h-1 bg-coral mt-4 mb-3"></div>
                <p className="text-muted-foreground text-sm">
                  Margaret, 82 — moved to assisted living in 2024
                </p>
              </div>
            </div>

            <div>
              <div className="bg-muted p-8 rounded">
                <h2 className="font-serif text-2xl font-medium text-navy mb-2">
                  Schedule Your Free Consultation
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  No obligation. Completely free. Everything you share is
                  confidential.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-coral/10 flex items-center justify-center mx-auto mb-4 rounded-full">
                      <Send className="h-8 w-8 text-coral" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-navy mb-2">
                      Thank You
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ve received your information and will be in
                      touch within 24 hours. If you&apos;d prefer to talk
                      sooner, please call us anytime.
                    </p>
                    <a
                      href="tel:5037558555"
                      className="inline-flex items-center text-coral font-medium mt-4 hover:underline"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      (503) 755-8555
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
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
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
                        What&apos;s on Your Mind?
                      </label>
                      <textarea
                        id="situation"
                        name="situation"
                        rows={4}
                        value={formData.situation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                        placeholder="Share anything you'd like us to know before we talk..."
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
                      Your information is private. We will never share it
                      with anyone.
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
                Rather talk to someone now?
              </h2>
              <p className="text-white/70">
                We&apos;re here and happy to listen.
              </p>
            </div>
            <a
              href="tel:5037558555"
              className="inline-flex items-center justify-center px-8 py-4 bg-coral text-white font-medium text-lg rounded-sm hover:bg-coral/90 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              (503) 755-8555
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
