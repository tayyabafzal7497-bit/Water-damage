import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { generalFaqs } from "@/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";

const meta = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "How Water Damage Loan works, what water damage contractors do, quotes, timelines, permits and more — answers to common questions.",
  path: routes.faq(),
  ogImageKey: "faq",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.faq(),
          type: "WebPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "FAQ", path: routes.faq() },
          ],
          faqs: generalFaqs.map((f) => ({ q: f.q, a: f.a })),
        })}
      />
      <section className="bg-ink">
        <div className="container-x py-14">
          <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "FAQ" }]} />
          <h1 className="mt-2 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            How Water Damage Loan works, what to expect from a water damage contractor, and the
            practical stuff — quotes, timelines, permits.
          </p>
        </div>
      </section>

      <div className="container-x max-w-4xl py-14">
        <h2 className="sr-only">All questions</h2>
        <FaqList faqs={generalFaqs} idPrefix="faq-page" />
        <p className="mt-8 text-center text-ink/70">
          Still curious?{" "}
          <Link href={routes.contact()} className="link font-semibold">
            Contact us
          </Link>
          .
        </p>
      </div>

      <CtaBand />
    </>
  );
}
