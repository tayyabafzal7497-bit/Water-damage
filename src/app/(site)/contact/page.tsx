import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/ui";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { IconPhone, IconClock } from "@/components/icons";

const meta = pageMeta({
  title: "Contact Water Damage Loan",
  description:
    "Contact Water Damage Loan in United States — request a quote, ask about a project, or reach us about anything else.",
  path: routes.contact(),
  ogImageKey: "contact",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.contact(),
          type: "ContactPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Contact", path: routes.contact() },
          ],
        })}
      />
      <section className="bg-ink">
        <div className="container-x py-14">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Contact" }]} />
          <h1 className="mt-2 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
            Talk to us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Questions about a project, a quote, or how Water Damage Loan works — call
            or send a request and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <div className="container-x grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Contact" title="Reach us directly" />
          <div className="mt-6 space-y-4">
            <a href={`tel:${site.phoneE164}`} className="card flex items-center gap-4 p-5 hover:shadow-md">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
                <IconPhone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-wide text-ink/55">Phone</span>
                <span className="font-serif text-xl font-semibold text-ink">{site.phoneDisplay}</span>
              </span>
            </a>
            {site.email && (
              <a href={`mailto:${site.email}`} className="card flex items-center gap-4 p-5 hover:shadow-md">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
                  <IconClock className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-ink/55">Email</span>
                  <span className="font-serif text-xl font-semibold text-ink">{site.email}</span>
                </span>
              </a>
            )}
            <div className="card p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink/55">Service area</p>
              <p className="mt-1 text-ink/85">{site.market} — a service-area brand, no public office.</p>
            </div>
          </div>
        </div>
        <div>
                      <LeadFormBlock />
        </div>
      </div>
    </>
  );
}
