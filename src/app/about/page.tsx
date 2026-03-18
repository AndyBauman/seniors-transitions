import { Heart, Award, Users, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Senior Transitions Group",
  description:
    "Learn about Senior Transitions Group - expert senior transition specialists guiding families with compassion and expertise since 2015.",
};

const stats = [
  { label: "Years of Experience", value: "10+", icon: Clock },
  { label: "Successful Transitions", value: "450+", icon: Heart },
  { label: "Families Served", value: "500+", icon: Users },
  { label: "Certified Specialists", value: "SRES & NASMM", icon: Award },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              About Senior Transitions Group
            </h1>
            <p className="text-lg text-white/80">
              Expert senior transition specialists guiding families with
              compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Senior Transitions Group was founded in 2015 with a simple but
                  powerful mission: to make the transition to senior living as
                  smooth and stress-free as possible for both seniors and their
                  families.
                </p>
                <p>
                  We recognized that moving from a long-time family home
                  involves much more than logistics. It&apos;s an emotional
                  journey that requires understanding, patience, and expertise.
                  That&apos;s why we created a comprehensive service that
                  addresses every aspect of the transition.
                </p>
                <p>
                  Today, we&apos;re proud to have helped over 450 families
                  navigate this significant life change. Our team of certified
                  specialists brings together expertise in real estate, senior
                  care placement, and move management to provide truly
                  integrated support.
                </p>
              </div>
            </div>
            <div className="bg-muted p-8 lg:p-12">
              <p className="font-serif text-2xl text-navy italic leading-relaxed">
                &ldquo;Every senior deserves a partner who understands both the
                practical and emotional complexity of transition. We&apos;re
                that partner.&rdquo;
              </p>
              <div className="w-12 h-1 bg-coral mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-coral" />
                <p className="font-serif text-3xl md:text-4xl font-medium mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-8 text-center">
              Our Approach
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-coral/10 flex items-center justify-center rounded">
                  <span className="font-serif text-xl font-semibold text-coral">
                    1
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Listen First
                  </h3>
                  <p className="text-muted-foreground">
                    Every family&apos;s situation is unique. We start by
                    understanding your specific needs, concerns, and goals
                    before recommending any solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-coral/10 flex items-center justify-center rounded">
                  <span className="font-serif text-xl font-semibold text-coral">
                    2
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Comprehensive Planning
                  </h3>
                  <p className="text-muted-foreground">
                    We create a detailed transition plan that coordinates all
                    aspects of the move – from finding the right community to
                    selling the home to managing the physical move.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-coral/10 flex items-center justify-center rounded">
                  <span className="font-serif text-xl font-semibold text-coral">
                    3
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Hands-On Support
                  </h3>
                  <p className="text-muted-foreground">
                    We don&apos;t just advise – we actively manage every step of
                    the process, ensuring nothing falls through the cracks and
                    reducing stress for the entire family.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-coral/10 flex items-center justify-center rounded">
                  <span className="font-serif text-xl font-semibold text-coral">
                    4
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    Ongoing Care
                  </h3>
                  <p className="text-muted-foreground">
                    Our relationship doesn&apos;t end at move-in. We follow up
                    to ensure the transition is successful and the senior is
                    thriving in their new home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a free consultation to discuss your family&apos;s needs.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
