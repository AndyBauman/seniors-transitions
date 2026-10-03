import Link from "next/link";
import { ArticleSchema } from "@/components/SchemaMarkup";
import { SITE_URL } from "@/lib/site";

export const PNW_OFFICIAL_RESOURCES = [
  {
    name: "Oregon Department of Human Services — Seniors & People with Disabilities",
    href: "https://www.oregon.gov/dhs/seniors-disabilities/Pages/index.aspx",
  },
  {
    name: "Washington DSHS — Aging and Long-Term Support Administration",
    href: "https://www.dshs.wa.gov/altsa",
  },
  {
    name: "Alzheimer's Association",
    href: "https://www.alz.org/",
  },
] as const;

interface ResourceArticleExtrasProps {
  headline: string;
  description: string;
  path: string;
  bottomLine: string;
}

export function ResourceArticleSchema({
  headline,
  description,
  path,
}: Omit<ResourceArticleExtrasProps, "bottomLine">) {
  const url = `${SITE_URL}${path}`;
  return (
    <ArticleSchema
      headline={headline}
      description={description}
      url={url}
      datePublished="2025-06-01"
      dateModified="2026-05-01"
    />
  );
}

export function ResourceArticleIntro({ bottomLine }: { bottomLine: string }) {
  return (
    <>
      <p className="text-sm text-muted-foreground mb-4">
        Updated May 2026 · Educational only—not medical or legal advice.
      </p>
      <p className="text-lg text-navy mb-8 leading-relaxed">
        <strong>Bottom line:</strong> {bottomLine}
      </p>
    </>
  );
}

/** Schema + intro for resource articles (use inside main content column). */
export function ResourceArticleExtras(props: ResourceArticleExtrasProps) {
  return (
    <>
      <ResourceArticleSchema
        headline={props.headline}
        description={props.description}
        path={props.path}
      />
      <ResourceArticleIntro bottomLine={props.bottomLine} />
    </>
  );
}

export function PnwOfficialResourcesBox() {
  return (
    <aside className="mt-12 p-6 bg-muted rounded-lg border border-navy/10">
      <h2 className="font-serif text-xl text-navy mb-3">
        Official resources (Oregon &amp; Washington)
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        For benefits, aging services, and dementia support, start with these
        trusted sources:
      </p>
      <ul className="space-y-2">
        {PNW_OFFICIAL_RESOURCES.map((r) => (
          <li key={r.href}>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral hover:underline text-sm font-medium"
            >
              {r.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground mt-4">
        Need hands-on help in the Portland–Vancouver area?{" "}
        <Link href="/free-family-consultation" className="text-coral underline">
          Schedule a free family consultation
        </Link>
        .
      </p>
    </aside>
  );
}
