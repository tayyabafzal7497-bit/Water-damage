import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { CheckItem } from "@/components/ui";

const meta = pageMeta({
  title: "Request a Electrical Quote",
  description: "Request a free written water damage work quote in United States. Two minutes — an independent local water damage contractor follows up.",
  path: "/request-service/",
  noindex: true,
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  robots: "noindex, follow",
};

export default function RequestServicePage() {
  return (
    <div className="bg-paper">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Request a quote" }]} />
          <h1 className="mt-2 font-serif text-4xl font-semibold text-ink text-balance">
            Get your free water damage work quote
          </h1>
          <p className="mt-4 text-lg text-ink/75">
            Two minutes now saves days of calling around. Here&apos;s what
            happens next:
          </p>
          <ul className="mt-6 space-y-4">
            <CheckItem>An independent local water damage contractor — not a call center — reviews your project.</CheckItem>
            <CheckItem>You get a clear written quote: prep, coats, products, timeline.</CheckItem>
            <CheckItem>No obligation. Your details go to at most three water damage contractors.</CheckItem>
          </ul>
          <p className="mt-8 text-ink/70">
            Rather talk it through?{" "}
            <a href={`tel:${site.phoneE164}`} className="link font-semibold">
              Call {site.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="lg:col-span-3">
                      <LeadFormBlock />
        </div>
      </div>
    </div>
  );
}
