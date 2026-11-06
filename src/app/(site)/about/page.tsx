import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site, BRAND_PROMISE, DISCLOSURE } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

const meta = pageMeta({
  title: "About Water Damage Loan",
  description:
    "How Water Damage Loan works: we connect United States homeowners with independent local water damage contractors. Clear quotes, no surprises.",
  path: routes.about(),
  ogImageKey: "about",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.about(),
          type: "AboutPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "About", path: routes.about() },
          ],
        })}
      />
      <section className="bg-ink">
        <div className="container-x py-14">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "About" }]} />
          <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
            {site.tagline}
          </h1>
        </div>
      </section>

      <div className="container-x max-w-3xl py-14">
        <div className="prose-bw">
          <h2 className="!mt-0">What Water Damage Loan is</h2>
          <p>
            Water Damage Loan is a connection service for homeowners in United States
            and United States. When you request a quote, we match your project
            with an independent local water damage work contractor who works in your
            city — and that water damage contractor scopes the job, quotes it in writing, and
            does the work.
          </p>
          <p>
            We don&apos;t send our own crews, because we don&apos;t have any.
            The water damage contractors in our network are independent businesses: they set
            their own prices, choose their products, and are responsible for
            their own licensing and insurance. Our job is to make the first
            step easy — one request, a clear written quote, and a water damage contractor who
            explains the work before starting it.
          </p>
          <h2>What we promise</h2>
          <p>{BRAND_PROMISE}</p>
          <p>
            That means: the scope is written down before work begins, prep work
            (patching, sanding, caulking, priming) is itemized rather than
            assumed, and the final walkthrough happens with you — not after
            you&apos;ve already paid.
          </p>
          <h2>How water damage contractors join</h2>
          <p>
            Water damage contractors who take Water Damage Loan requests are independent contractors
            serving United States. If you&apos;re a water damage contractor interested in
            receiving project requests,{" "}
            <Link href={routes.contact()} className="link">
              get in touch
            </Link>
            .
          </p>
        </div>

        <section aria-label="Disclosure" className="card mt-10 p-6">
          <SectionHeading eyebrow="The fine print" title="How this works, plainly" />
          <p className="mt-4 text-ink/80 leading-relaxed">{DISCLOSURE}</p>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
