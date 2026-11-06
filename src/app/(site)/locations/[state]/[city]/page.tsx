import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCity, publishedCities } from "@/content";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { cityQuality } from "@/lib/quality";
import { CityTemplate } from "@/components/templates/CityTemplate";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedCities
    .filter((c) => c.stateSlug === "us" && cityQuality(c).ok)
    .map((c) => ({ state: "us", city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city || city.stateSlug !== "us" || !cityQuality(city).ok) return {};
  const label = `${slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}, US`;
  const meta = pageMeta({
    title: `Water damage contractors in ${label}`,
    description: `Water damage contractors in ${label}: local notes on housing, water risks, and what water damage contractors see most. Free written quotes from independent local water damage contractors.`,
    path: routes.city("us", slug),
    ogImageKey: `city-${slug}`,
  });
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    robots: meta.robots,
    openGraph: { title: meta.title, description: meta.description, url: meta.canonical, images: [{ url: meta.ogImage }] },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city || city.stateSlug !== "us" || !cityQuality(city).ok) notFound();
  return <CityTemplate city={city} />;
}
