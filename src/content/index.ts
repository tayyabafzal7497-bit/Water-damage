/**
 * Unified content access — concatenates core + More files, plus lookups.
 */
import type {
  Article,
  City,
  CityService,
  Service,
} from "./types";
import { serviceCategories, services } from "./services";
import { moreServices } from "./servicesMore";
import { cities, regions, stateInfos, cityLabel } from "./locations";
import { moreCities, cityServices } from "./locationsMore";
import { articles } from "./articles";
import { moreArticles } from "./articlesMore";
import { problems } from "./problems";
import { generalFaqs } from "./faqs";
import { reviews } from "./reviews";
import { beforeAfters } from "./beforeAfter";
import { landingPages } from "./landingPages";
import { contentDates } from "./dates";

export {
  serviceCategories,
  regions,
  stateInfos,
  cityLabel,
  problems,
  generalFaqs,
  reviews,
  beforeAfters,
  landingPages,
  contentDates,
};

export const allServices: Service[] = [...services, ...moreServices];
export const allCities: City[] = [...cities, ...moreCities];
export const allArticles: Article[] = [...articles, ...moreArticles];
export { cityServices };

export const publishedServices = allServices.filter(
  (s) => s.status === "PUBLISHED"
);
export const publishedCities = allCities.filter(
  (c) => c.status === "PUBLISHED"
);
export const publishedArticles = allArticles.filter(
  (a) => a.status === "PUBLISHED"
);
export const publishedCityServices = cityServices.filter(
  (cs) => cs.status === "PUBLISHED"
);

export function getService(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getCity(slug: string): City | undefined {
  return allCities.find((c) => c.slug === slug);
}

export function getArticle(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getCityService(
  citySlug: string,
  serviceSlug: string
): CityService | undefined {
  return cityServices.find(
    (cs) => cs.citySlug === citySlug && cs.serviceSlug === serviceSlug
  );
}

export function servicesByCategory(categorySlug: string): Service[] {
  return publishedServices.filter((s) => s.category === categorySlug);
}

export function citiesByState(stateSlug: string): City[] {
  return publishedCities.filter((c) => c.stateSlug === stateSlug);
}
