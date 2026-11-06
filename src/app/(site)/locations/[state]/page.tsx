import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { stateInfos, citiesByState, cityLabel } from "@/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { IconMapPin } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return stateInfos.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: slug } = await params;
  const info = stateInfos.find((s) => s.slug === slug);
  if (!info) return {};
  const meta = pageMeta({
    title: `Water damage contractors in ${info.name}`,
    description: `Water damage across ${info.name}: how climate, housing, and water sources shape the work, plus the cities contractors cover.`,
    path: routes.state(slug),
    ogImageKey: `state-${slug}`,
  });
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    robots: meta.robots,
    openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: slug } = await params;
  const info = stateInfos.find((s) => s.slug === slug);
  if (!info) notFound();
  const cities = citiesByState(slug);

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.state(slug),
          type: "CollectionPage",
          name: `Water damage contractors in ${info.name}`,
          description: info.intro[0] ?? "",
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Service areas", path: routes.locations() },
            { name: info.name, path: routes.state(slug) },
          ],
        })}
      />
      <section className="bg-ink">
        <div className="container-x py-14">
          <Breadcrumbs
            items={[
              { name: "Home", href: routes.home() },
              { name: "Service areas", href: routes.locations() },
              { name: info.name },
            ]}
          />
          <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
            Basement water damage contractors in {info.name}
          </h1>
          <div className="mt-4 max-w-3xl space-y-4 text-lg text-white/85">
            {info.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-14">
          <SectionHeading eyebrow={info.name} title="What shapes water damage work here" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Housing stock", body: info.details.housing },
              { title: "Climate", body: info.details.climate },
              { title: "Permits", body: info.details.permits },
            ].map((d) => (
              <div key={d.title} className="card p-6">
                <h2 className="font-serif text-xl font-semibold text-ink">{d.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-14">
          <SectionHeading eyebrow="Towns" title={`${info.name} towns we cover`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={routes.city(slug, c.slug)}
                className="card group flex items-start gap-3 p-5 hover:shadow-md"
              >
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-deep" />
                <span>
                  <span className="font-serif text-lg font-semibold text-ink group-hover:text-sky-deep">
                    {cityLabel(c).split(",")[0]}
                  </span>
                  <span className="mt-1 block text-sm text-ink/65">
                    {c.areas.slice(0, 3).join(" · ")}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
