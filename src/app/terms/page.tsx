export const metadata = {
  title: "Terms of Service | Senior Transitions Group",
  description: "Terms of service for Senior Transitions Group.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Terms of Service
            </h1>
            <p className="text-white/70">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing and using this website, you accept and agree to be
                  bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Services
                </h2>
                <p>
                  Senior Transitions Group provides senior transition services
                  including placement assistance, real estate services, and move
                  management. Specific terms for individual services will be provided
                  in separate service agreements.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Use of Website
                </h2>
                <p>
                  This website is provided for informational purposes. You agree not
                  to use this site for any unlawful purpose or in any way that could
                  damage, disable, or impair the site.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Intellectual Property
                </h2>
                <p>
                  All content on this website, including text, graphics, logos, and
                  images, is the property of Senior Transitions Group and is
                  protected by copyright laws.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  Senior Transitions Group shall not be liable for any indirect,
                  incidental, special, or consequential damages arising out of or
                  related to your use of this website or our services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes
                  will be effective immediately upon posting to this website.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about these Terms of Service, please contact
                  us at{" "}
                  <a
                    href="mailto:info@seniors-transitions.com"
                    className="text-coral hover:underline"
                  >
                    info@seniors-transitions.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:8007842273" className="text-coral hover:underline">
                    (800) 784-2273
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
