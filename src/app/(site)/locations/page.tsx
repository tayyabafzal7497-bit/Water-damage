import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { regions, allCities, cityLabel } from "@/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/ui";
import { ZipChecker } from "@/components/ZipChecker";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { IconMapPin } from "@/components/icons";

const meta = pageMeta({
  title: "Service Areas Across the United States",
  description:
    "Water Damage Loan connects homeowners with independent water damage contractors in 6 cities across the United States — Los Angeles, Houston, Dallas, Philadelphia, Columbus, and Miami. Check your ZIP.",
  path: routes.locations(),
  ogImageKey: "locations",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
};

export default function LocationsHubPage() {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.locations(),
          type: "CollectionPage",
          name: meta.title,
          description: meta.description,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Service areas", path: routes.locations() },
          ],
        })}
      />
      <section className="bg-ink">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: "Home", href: routes.home() }, { name: "Service areas" }]} />
            <p className="eyebrow-light mt-2">United States</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
              Where water damage contractors cover
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Water Damage Loan is a service-area brand: independent local water damage contractors
              cover these 6 cities. No offices, no trucks with our name — just
              water damage contractors where you live.
            </p>
          </div>
          <div className="card p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink">Check your ZIP</h2>
            <div className="mt-4">
              <ZipChecker />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-x py-14">
          <SectionHeading
            eyebrow="How service areas work"
            title="One brand, local water damage contractors"
            lede="You request a quote in your city. We match you with an independent water damage contractor who works there. What changes city to city: housing type, climate, water source, and the issues water damage contractors see most."
          />
          {regions.map((region) => (
            <div key={region.name} className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-ink">{region.name}</h2>
              <p className="mt-1 text-ink/70">{region.blurb}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {region.citySlugs
                  .map((slug) => allCities.find((c) => c.slug === slug))
                  .filter((c) => c && c.status === "PUBLISHED")
                  .map((c) =>
                    c ? (
                      <Link
                        key={c.slug}
                        href={routes.city("us", c.slug)}
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
                    ) : null
                  )}
              </div>
            </div>
          ))}

          <div className="card mt-12 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink">Permits and utilities, city to city</h2>
            <p className="mt-3 text-ink/80 leading-relaxed">
              Water damage work that changes plumbing, electrical, drainage, or structure can
              require a permit and inspection, and rules vary by municipality.
              Water damage contractors who work a city regularly know which scopes
              need a permit there and which are simple maintenance.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
