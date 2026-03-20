import Link from "next/link";
import { ArrowRight, BookOpen, Users, Package } from "lucide-react";

export const metadata = {
  title: "Resources & Guides for Families | Senior Transitions Group",
  description:
    "Browse our library of expert guides on choosing senior living, supporting aging parents, downsizing, and managing the emotional side of senior transitions.",
};

const choosingSeniorLiving = [
  {
    title: "Assisted Living vs. Memory Care: What's the Difference?",
    href: "/choosing-senior-living/assisted-living-vs-memory-care",
    description:
      "Compare care levels, staff training, security features, activities, and costs to understand which option fits your loved one's needs.",
  },
  {
    title: "Essential Questions to Ask on a Senior Living Tour",
    href: "/choosing-senior-living/questions-to-ask-on-tour",
    description:
      "A printable list of 20 questions organized by category so you leave every tour with the information you need.",
  },
  {
    title: "What Is a CCRC (Continuing Care Retirement Community)?",
    href: "/choosing-senior-living/what-is-a-ccrc",
    description:
      "Learn how CCRCs work, how entrance fees and monthly costs are structured, and who these communities are best for.",
  },
  {
    title: "What to Bring When Moving to Assisted Living",
    href: "/choosing-senior-living/what-to-bring",
    description:
      "A room-by-room packing guide with tips on space planning, what NOT to bring, and how to prioritize sentimental items.",
  },
  {
    title: "Independent Living vs. Assisted Living: Which Is Right?",
    href: "/choosing-senior-living/independent-vs-assisted-living",
    description:
      "A detailed comparison of services, costs, lifestyle, and care to help your family decide which level of support is appropriate.",
  },
];

const forFamilies = [
  {
    title: "Signs Your Parent May Need Assisted Living",
    href: "/resources/signs-parent-needs-assisted-living",
    description:
      "Recognize the common warning signs — from safety concerns and medication issues to isolation and nutrition — and learn how to approach the conversation.",
  },
  {
    title: "Managing Guilt When Moving a Parent to Senior Living",
    href: "/resources/managing-guilt-moving-parent",
    description:
      "Acknowledge the emotional weight of this decision. Practical strategies for reframing guilt, staying involved, and caring for yourself as a caregiver.",
  },
  {
    title: "How to Help Your Parent Downsize: A Complete Guide",
    href: "/resources/how-to-help-parent-downsize",
    description:
      "A step-by-step guide covering emotional preparation, the sorting process, working with professionals, and navigating family dynamics.",
  },
];

const downsizingAndMoving = [
  {
    title: "The Complete Senior Downsizing Checklist",
    href: "/resources/downsizing-checklist",
    description:
      "A phased checklist from three months before the move through settling in — with a room-by-room sorting guide included.",
  },
  {
    title: "What to Bring When Moving to Assisted Living",
    href: "/choosing-senior-living/what-to-bring",
    description:
      "Know exactly what to pack, what to leave behind, and how to make a smaller space feel like home.",
  },
  {
    title: "How to Help Your Parent Downsize: A Complete Guide",
    href: "/resources/how-to-help-parent-downsize",
    description:
      "Practical guidance for adult children navigating the emotional and logistical challenges of helping a parent downsize.",
  },
];

function ResourceSection({
  icon: Icon,
  title,
  description,
  articles,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  articles: { title: string; href: string; description: string }[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-coral/10 flex items-center justify-center rounded">
          <Icon className="h-5 w-5 text-coral" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-navy">
          {title}
        </h2>
      </div>
      <p className="text-muted-foreground mb-8 ml-13">{description}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="block bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow group"
          >
            <h3 className="font-serif text-lg font-medium text-navy mb-2 group-hover:text-coral transition-colors">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {article.description}
            </p>
            <span className="text-coral text-sm font-medium inline-flex items-center">
              Read Article <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-medium italic mb-6">
              Resources &amp; Guides
            </h1>
            <p className="text-lg text-white/80">
              Expert articles to help your family navigate senior living decisions, support aging parents, and manage the transition with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-custom section-padding">
          <div className="space-y-16">
            <ResourceSection
              icon={BookOpen}
              title="Choosing Senior Living"
              description="Guides to help you compare community types, evaluate options, and make an informed decision."
              articles={choosingSeniorLiving}
            />

            <hr className="border-gray-200" />

            <ResourceSection
              icon={Users}
              title="For Families"
              description="Support and guidance for adult children navigating a parent's transition to senior living."
              articles={forFamilies}
            />

            <hr className="border-gray-200" />

            <ResourceSection
              icon={Package}
              title="Downsizing &amp; Moving"
              description="Practical checklists and guides for the physical process of downsizing and relocating."
              articles={downsizingAndMoving}
            />
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-medium mb-4">
              Have Questions? We&apos;re Here to Help.
            </h2>
            <p className="text-white/80 mb-8">
              Our team of senior transition specialists can provide personalized guidance for your family&apos;s unique situation. Schedule a free, no-obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Free Consultation
              </Link>
              <a
                href="tel:5037558555"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-navy transition-colors uppercase tracking-wider text-sm"
              >
                Call (503) 755-8555
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
