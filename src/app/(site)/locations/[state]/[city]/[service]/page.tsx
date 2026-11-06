import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCity,
  getService,
  getCityService,
  publishedCityServices,
} from "@/content";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { cityQuality, cityServiceQuality } from "@/lib/quality";
import { site } from "@/content/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { LeadFormBlock } from "@/components/lead/LeadFormBlock";
import { JsonLd } from "@/components/JsonLd";
import { pageGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedCityServices
    .filter((cs) => {
      const city = getCity(cs.citySlug);
      if (!city) return false;
      return cityServiceQuality(cs, cityQuality(city).ok).ok;
    })
    .map((cs) => ({ state: "us", city: cs.citySlug, service: cs.serviceSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const cs = getCityService(citySlug, serviceSlug);
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!cs || !city || !service) return {};
  if (!cityServiceQuality(cs, cityQuality(city).ok).ok) return {};
  const shortName = citySlug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  const meta = pageMeta({
    title: `${service.name} in ${shortName}, US`,
    description: `${service.name} in ${shortName}, US: local notes for ${shortName} homes, plus free written quotes from independent local contractors.`,
    path: routes.cityService("us", citySlug, serviceSlug),
    ogImageKey: `cityservice-${citySlug}-${serviceSlug}`,
  });
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    robots: meta.robots,
    openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ state: string; city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const cs = getCityService(citySlug, serviceSlug);
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!cs || !city || !service) notFound();
  if (!cityServiceQuality(cs, cityQuality(city).ok).ok) notFound();

  const shortName = citySlug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: routes.cityService("us", citySlug, serviceSlug),
          type: "ItemPage",
          name: `${service.name} in ${shortName}, US`,
          description: service.metaDescription,
          breadcrumbs: [
            { name: "Home", path: routes.home() },
            { name: "Service areas", path: routes.locations() },
            { name: "United States", path: routes.state("us") },
            { name: shortName, path: routes.city("us", citySlug) },
            { name: service.name, path: routes.cityService("us", citySlug, serviceSlug) },
          ],
          aboutIds: [`${SITE_URL}${routes.service(serviceSlug)}#service`],
          faqs: cs.localFaqs.map((f) => ({ q: f.q, a: f.a })),
          service,
        })}
      />

      <section className="bg-ink">
        <div className="container-x grid gap-10 py-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Breadcrumbs
              items={[
                { name: "Home", href: routes.home() },
                { name: "Service areas", href: routes.locations() },
                { name: "United States", href: routes.state("us") },
                { name: shortName, href: routes.city("us", citySlug) },
                { name: service.name },
              ]}
            />
            <p className="eyebrow-light mt-2">{shortName}, United States</p>
            <h1 className="mt-2 font-serif text-4xl font-semibold text-white text-balance sm:text-5xl">
              {service.name} for {shortName} Homes
            </h1>
            <div className="answer-box mt-6 !border-amber !bg-white/10 !text-white">
              <p>{service.answer}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneE164}`} className="btn-primary">
                Call {site.phoneDisplay}
              </a>
              <Link href={routes.requestService({ service: serviceSlug, zip: city.zips[0] })} className="btn-outline-light">
                Get a free quote
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <LeadFormBlock defaultService={serviceSlug} defaultZip={city.zips[0]} compact />
            </div>
          </div>
        </div>
      </section>

      <div className="container-x max-w-4xl py-14">
        <section className="prose-bw">
          <h2 className="!mt-0 font-serif text-3xl font-semibold">
            {service.name} for {shortName} homes
          </h2>
          {cs.localAngle.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        <section aria-label="How it works" className="mt-10">
          <SectionHeading eyebrow="The work" title={`What the ${service.name.toLowerCase()} job includes`} />
          <ol className="mt-6 space-y-4">
            {service.process.map((p, i) => (
              <li key={p.title} className="flex gap-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-serif font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-ink/75">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <Link href={routes.service(serviceSlug)} className="link font-semibold">
              Full {service.name.toLowerCase()} guide — signs, cost factors &amp; FAQ
            </Link>
          </p>
        </section>

        <section aria-label="FAQ" className="mt-10">
          <SectionHeading eyebrow="FAQ" title={`${shortName} ${service.name.toLowerCase()} questions`} />
          <div className="mt-6">
            <FaqList faqs={cs.localFaqs} idPrefix={`cs-${citySlug}-${serviceSlug}`} />
          </div>
        </section>
      </div>

      <CtaBand
        title={`${service.name} in ${shortName}?`}
        lede="Tell us about the project. An independent local water damage contractor will follow up with a clear written quote."
      />
    </>
  );
}
