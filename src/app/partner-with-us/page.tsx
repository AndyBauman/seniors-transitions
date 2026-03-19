"use client";

import { useState } from "react";
import {
  Handshake,
  Shield,
  TrendingUp,
  Users,
  Send,
  Phone,
} from "lucide-react";

const benefits = [
  {
    title: "Dedicated Support",
    description:
      "A single partner manager who knows your business and coordinates every referral.",
    icon: Users,
  },
  {
    title: "Proven Results",
    description:
      "450+ successful transitions, SRES and NASMM certified team, 10+ years of experience.",
    icon: TrendingUp,
  },
  {
    title: "Ethical Standards",
    description:
      "Full transparency, no conflicts of interest, and complete accountability to shared clients.",
    icon: Shield,
  },
  {
    title: "Mutual Growth",
    description:
      "Competitive referral compensation, co-marketing opportunities, and joint client education.",
    icon: Handshake,
  },
];

export default function PartnerWithUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    title: "",
    email: "",
    phone: "",
    partnerType: "",
    message: "",
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
              Partner With Us
            </h1>
            <p className="text-lg text-white/80">
              Join a growing network of professionals delivering exceptional
              senior transition experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-navy mb-6">
                Build a Partnership That Delivers
              </h2>
              <p className="text-muted-foreground mb-4">
                Whether you&apos;re a placement agent, senior living community,
                real estate professional, or elder law attorney, our partnership
                programs are designed to enhance your client services and
                strengthen your practice.
              </p>
              <p className="text-muted-foreground mb-8">
                Fill out the form and a member of our partnerships team will
                reach out within one business day to discuss how we can work
                together.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-coral/10 flex items-center justify-center flex-shrink-0 rounded">
                      <benefit.icon className="h-5 w-5 text-coral" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1 text-sm">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-muted rounded">
                <p className="font-serif text-lg text-navy italic">
                  &ldquo;Partnering with Senior Transitions Group has been
                  one of the best decisions for our practice. Their team is
                  professional, responsive, and genuinely cares about our
                  shared clients.&rdquo;
                </p>
              </div>
            </div>

            <div>
              <div className="bg-muted p-8 rounded">
                <h2 className="font-serif text-2xl font-medium text-navy mb-6">
                  Partnership Inquiry
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
                      Our partnerships team will review your inquiry and
                      reach out within one business day.
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
                  <form onSubmit={handleSubmit} className="space-y-5">
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
                        placeholder="Full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Organization *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        placeholder="Company or practice name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Your Role / Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                        placeholder="e.g. Senior Living Advisor, Director of Admissions"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-navy mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="partnerType"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Partnership Type *
                      </label>
                      <select
                        id="partnerType"
                        name="partnerType"
                        required
                        value={formData.partnerType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                      >
                        <option value="">Select your role</option>
                        <option value="placement-agent">
                          Placement Agent
                        </option>
                        <option value="community">
                          Senior Living Community
                        </option>
                        <option value="real-estate">
                          Real Estate Agent
                        </option>
                        <option value="attorney">
                          Elder Law Attorney / Estate Planner
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Tell Us About Your Interest
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                        placeholder="What are you looking for in a partnership?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting
                        ? "Sending..."
                        : "Submit Partnership Inquiry"}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      We respond to all partnership inquiries within one
                      business day.
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
                Want to discuss partnership options?
              </h2>
              <p className="text-white/70">
                Call our partnerships team directly.
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
