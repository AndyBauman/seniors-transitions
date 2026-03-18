"use client";

import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
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
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/80">
              Let&apos;s talk about your family. No obligation, just
              conversation and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-medium text-navy mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                We&apos;re available 7 days a week to answer your questions and
                discuss how we can help your family.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral/10 flex items-center justify-center flex-shrink-0 rounded">
                    <Phone className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <a
                      href="tel:8007842273"
                      className="text-muted-foreground hover:text-coral transition-colors"
                    >
                      (800) 784-2273
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral/10 flex items-center justify-center flex-shrink-0 rounded">
                    <Mail className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a
                      href="mailto:info@seniors-transitions.com"
                      className="text-muted-foreground hover:text-coral transition-colors"
                    >
                      info@seniors-transitions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral/10 flex items-center justify-center flex-shrink-0 rounded">
                    <Clock className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 6pm
                      <br />
                      Saturday: 10am - 4pm
                      <br />
                      Sunday: By appointment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral/10 flex items-center justify-center flex-shrink-0 rounded">
                    <MapPin className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">
                      Service Area
                    </h3>
                    <p className="text-muted-foreground">
                      Serving families throughout the greater metropolitan area
                      and surrounding communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-muted rounded">
                <p className="font-serif text-lg text-navy italic">
                  &ldquo;Serving families since 2015 with over 450 successful
                  transitions. SRES & NASMM certified.&rdquo;
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-muted p-8 rounded">
                <h2 className="font-serif text-2xl font-medium text-navy mb-6">
                  Schedule a Consultation
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-coral/10 flex items-center justify-center mx-auto mb-4 rounded-full">
                      <Send className="h-8 w-8 text-coral" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-navy mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      We&apos;ve received your message and will be in touch
                      within 24 hours.
                    </p>
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
                        placeholder="John Smith"
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
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Phone Number
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

                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        I&apos;m interested in... *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        <option value="family">
                          Help for my family (senior transition)
                        </option>
                        <option value="placement-agent">
                          Partnership (I&apos;m a placement agent)
                        </option>
                        <option value="community">
                          Partnership (I represent a community)
                        </option>
                        <option value="other">Other inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Tell us about your situation
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-white rounded focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                        placeholder="Share any details that would help us understand your needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy.
                      We&apos;ll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call CTA */}
      <section className="bg-navy text-white">
        <div className="container-custom py-12 px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl font-medium mb-2">
                Prefer to talk now?
              </h2>
              <p className="text-white/70">
                Call us directly – we&apos;re here to help.
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
