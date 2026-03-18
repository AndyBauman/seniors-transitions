export const metadata = {
  title: "Privacy Policy | Senior Transitions Group",
  description: "Privacy policy for Senior Transitions Group.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Privacy Policy
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
                  Information We Collect
                </h2>
                <p>
                  We collect information you provide directly to us, such as when you
                  fill out a contact form, schedule a consultation, or communicate
                  with us. This may include your name, email address, phone number,
                  and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Send you information about our services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  necessary to provide our services or as required by law.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate security measures to protect your personal
                  information. However, no method of transmission over the Internet
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-medium text-navy mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us
                  at{" "}
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
