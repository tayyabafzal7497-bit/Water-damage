import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site, DISCLOSURE } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const meta = pageMeta({
  title: "Privacy Policy",
  description: "How Water Damage Loan collects, uses and shares your information when you request a quote or browse the site.",
  path: routes.privacy(),
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  robots: "noindex, follow",
};

export default function PrivacyPage() {
  return (
    <div className="container-x max-w-3xl py-14">
      <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Privacy" }]} />
      <h1 className="mt-2 font-serif text-4xl font-semibold text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink/55">Last updated: October 8, 2026</p>
      <div className="prose-bw mt-8">
        <h2 className="!mt-0">What we collect</h2>
        <p>
          When you request a quote, we collect the details you provide: project
          type, timeline, ZIP code, name, phone number, email (optional) and any
          notes. We also collect basic attribution data (such as UTM parameters)
          to understand which marketing brings requests.
        </p>
        <h2>How we use and share it</h2>
        <p>{DISCLOSURE}</p>
        <p>
          We share your project details with up to three independent water damage work
          contractors so they can contact you with a quote. We do not sell your
          personal information. Call tracking may be used on some pages to
          measure which ads generate calls.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          We use first-party storage for attribution (30 days) and load Google
          Tag Manager only when configured. You can clear site data in your
          browser at any time.
        </p>
        <h2>Your choices</h2>
        <p>
          To access, correct or delete your information, contact us
          {site.email ? (
            <>
              {" "}at <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
            </>
          ) : (
            " through the contact page"
          )}
          . Message and data rates may apply if a water damage contractor contacts you by text.
        </p>
      </div>
    </div>
  );
}
