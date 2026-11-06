import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { site, BRAND_PROMISE, SAFETY_NOTICE } from "@/content/site";
import {
  serviceCategories,
  servicesByCategory,
  regions,
  allCities,
  publishedArticles,
  generalFaqs,
} from "@/content";
import { SectionHeading, PhotoCard, Chip, CheckItem } from "@/components/ui";
import { FaqList } from "@/components/FaqList";
import { ZipChecker } from "@/components/ZipChecker";
import { CtaBand } from "@/components/CtaBand";
import { ProblemFinder } from "@/components/ProblemFinder";
import { WorkGallery } from "@/components/WorkGallery";
import { galleryPhotos } from "@/content/gallery";
import { Reviews } from "@/components/Reviews";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";
import { IconCheck, IconArrowRight } from "@/components/icons";

const meta = pageMeta({
  title: "Water Damage Restoration Across the United States",
  description:
    "Water damage restoration across the United States — find the source, remove the water, dry the structure, and document the work, matched with independent local contractors and quoted clearly in writing.",
  path: routes.home(),
  ogImageKey: "home",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    images: [{ url: meta.ogImage }],
  },
};

const LOCAL_KNOWLEDGE = [
  {
    title: "The first 24 hours decide the outcome",
    body: "Materials that dry promptly can often be saved; materials that stay wet warp, swell, and develop odor. Extraction and measured drying should begin as soon as it is safe — not after the adjuster visits.",
  },
  {
    title: "Floodwater is treated as contaminated",
    body: "Water that entered from outside, or up through a drain, can carry sewage, chemicals, and debris. Cleanup starts with protective equipment and removal of porous materials it touched — not with a household mop.",
  },
  {
    title: "Drying is measured, not guessed",
    body: "A surface that feels dry can still be wet inside the wall or under the floor. Moisture readings, not touch, decide when drying is done — and readings are what your insurance file needs.",
  },
  {
    title: "Paying: claim first, then the gap",
    body: "Get the written scope and the insurer's written position first. The gap between them is what needs funding from savings, a payment plan, or a general financing option — never a promised loan.",
  },
]

const PROCESS = [
  { title: "Tell us about the water problem", body: "Two minutes: what happened, where the water is, and when. No obligation." },
  { title: "Get a clear written quote", body: "An independent local water damage contractor scopes the work — extraction, drying, cleaning, and repair — in writing." },
  { title: "Dry, verify, repair", body: "The structure dried to a measured standard, readings documented for insurance, then finishes repaired — never over wet materials." },
]

export default function HomePage() {
  const faqs = generalFaqs.slice(0, 6);
  const guides = publishedArticles.slice(0, 3);

  return (
    <div data-home>
      <JsonLd
        data={pageGraph({
          path: routes.home(),
          type: "WebPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [{ name: "Home", path: routes.home() }],
          faqs: faqs.map((f) => ({ q: f.q, a: f.a })),
        })}
      />

      {/* Hero */}
      <section className="bg-ink">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow-light">Across the United States</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
              Water damage, found at the source and dried right
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Water damage restoration, flood cleanup, burst pipe removal, and structural drying across 6 cities — matched
              with an independent local water damage contractor, quoted clearly in writing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={routes.requestService()} className="btn-primary">
                Get a free quote
              </Link>
              <a href={`tel:${site.phoneE164}`} className="btn-outline-light">
                Call {site.phoneDisplay}
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-white">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Service area</dt>
                <dd className="mt-1 font-serif text-xl font-semibold">6 cities</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Quote</dt>
                <dd className="mt-1 font-serif text-xl font-semibold">Free &amp; written</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/60">Water damage contractors</dt>
                <dd className="mt-1 font-serif text-xl font-semibold">Independent locals</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col gap-4">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/hero.jpg"
                alt="Empty interior room (stock photo)"
                className="aspect-[16/10] w-full rounded-2xl object-cover"
              />
              <figcaption className="mt-2 text-sm text-white/60">
                Stock photo — illustrative example, not a Water Damage Loan job.
              </figcaption>
            </figure>
            <div className="card w-full p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-ink">Check your ZIP</h2>
              <p className="mt-2 text-ink/70">
                See if water damage contractors cover your neighborhood, then start your quote.
              </p>
              <div className="mt-4">
                <ZipChecker />
              </div>
              <ul className="mt-6 space-y-3">
                {[BRAND_PROMISE, "Scope itemized in writing — extraction, drying, repair.", "Drying verified by moisture readings before sign-off."].map((t) => (
                  <CheckItem key={t}>{t}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety banner */}
      <section className="bg-alert-tint">
        <div className="container-x py-5">
          <p className="text-[15px] leading-relaxed text-ink">
            <strong className="font-bold">Safety first:</strong> {SAFETY_NOTICE}
          </p>
        </div>
      </section>

      {/* See how it works — video */}
      <section className="bg-paper">
        <div className="container-x max-w-4xl py-16">
          <SectionHeading
            eyebrow="Video"
            title="See how it works"
            align="center"
          />
          <div className="mt-8">
            <video
              controls
              preload="metadata"
              poster="/photos/hero.jpg"
              className="aspect-video w-full rounded-2xl bg-ink object-cover"
            >
              <source src="/videos/waterdamagesloan-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="mt-3 text-center text-sm text-ink/55">
              On-screen text only, no narration. Photos are stock photos — illustrative examples, not Water Damage Loan jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Promise band */}
      <section className="bg-amber-tint">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="text-lg font-medium text-ink-deep">
            <strong className="font-bold">Our promise:</strong> {BRAND_PROMISE}
          </p>
          <Link href={routes.about()} className="inline-flex shrink-0 items-center gap-1 font-semibold text-sky-deep hover:underline">
            How Water Damage Loan works <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <ProblemFinder />

      {/* Service categories */}
      <section className="bg-paper">
        <div className="container-x py-16">
          <SectionHeading
            eyebrow="Services"
            title="What water damage contractors can do for you"
            lede="Every job starts with diagnosis — where the water came from, how far it traveled, and what drying it needs — because that is what stops damage from spreading."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {serviceCategories.map((cat) => {
              const first = servicesByCategory(cat.slug)[0];
              return (
                <PhotoCard
                  key={cat.slug}
                  href={`${routes.services()}#${cat.slug}`}
                  title={cat.name}
                  blurb={cat.blurb}
                  image={first?.photo}
                  alt={cat.name}
                />
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href={routes.services()} className="btn-secondary">
              Browse all water damage services
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="container-x py-16">
          <SectionHeading
            eyebrow="How it works"
            title="From first call to final walkthrough"
            align="center"
          />
          <ol className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="card p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink font-serif text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-ink/75">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-paper-deep">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="6 cities across the United States"
              lede="Independent water damage contractors cover Los Angeles, Houston, Dallas, Philadelphia, Columbus, and Miami. Pick your city for local notes on housing, water risks, and what contractors see most there."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {allCities.slice(0, 12).map((c) => (
                <Chip key={c.slug} href={`/locations/us/${c.slug}/`}>
                  {c.slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                </Chip>
              ))}
            </div>
            <Link href={routes.locations()} className="link mt-4 inline-block font-semibold">
              View all service areas
            </Link>
          </div>
          <div className="card p-6 sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-ink">Not sure you&apos;re covered?</h3>
            <p className="mt-2 text-ink/70">Enter your ZIP — it takes five seconds.</p>
            <div className="mt-4">
              <ZipChecker />
            </div>
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="bg-ink">
        <div className="container-x py-16">
          <SectionHeading
            dark
            eyebrow="Local knowledge"
            title="Water damage isn't the same everywhere"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOCAL_KNOWLEDGE.map((k) => (
              <div key={k.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber text-ink-deep">
                  <IconCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-white">{k.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/75">{k.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="bg-white">
        <div className="container-x py-16">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Guides" title="Learn before you book" />
            <Link href={routes.resources()} className="link hidden shrink-0 font-semibold sm:block">
              All guides
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {guides.map((g) => (
              <PhotoCard
                key={g.slug}
                href={`/resources/${g.slug}/`}
                title={g.title}
                blurb={g.answer.slice(0, 140) + "…"}
                image={g.photo}
                alt={g.title}
              />
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      <WorkGallery photos={galleryPhotos} />


      {/* FAQ */}
      <section className="bg-paper">
        <div className="container-x max-w-4xl py-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            align="center"
          />
          <div className="mt-8">
            <FaqList faqs={faqs} idPrefix="home-faq" />
          </div>
          <div className="mt-6 text-center">
            <Link href={routes.faq()} className="link font-semibold">
              See all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
