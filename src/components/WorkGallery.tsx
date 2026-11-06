"use client";

import { useState } from "react";
import { SectionHeading } from "./ui";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  category: string;
}

/**
 * "Water damage topics" gallery — Pexels stock photos, honestly labeled
 * (never presented as real jobs), per project rule B0.3.
 * Photos are injected via the `photos` prop so the content file stays
 * the single source of truth.
 */
export function WorkGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [filter, setFilter] = useState<"All" | GalleryPhoto["category"]>("All");
  const shown = photos.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="bg-white" aria-label="Water damage topics gallery">
      <div className="container-x py-16">
        <SectionHeading
          eyebrow="Gallery"
          title="Basement water damage topics, up close"
          lede="Stock photos illustrating water damage topics — homes, roofs, interiors, and floors. They are examples, not Water Damage Loan jobs."
          align="center"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {(["All", "Interior", "Exterior", "Detail"] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                filter === c
                  ? "bg-ink text-white"
                  : "bg-paper-deep text-ink/70 hover:bg-line"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <figure
              key={p.src}
              className="card group overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-paper-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="p-4">
                <p className="text-[15px] font-medium text-ink">{p.caption}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-ink/45">
                  {p.category} · Stock photo
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink/55">
          Stock photo — illustrative example, not a Water Damage Loan job.
        </p>
      </div>
    </section>
  );
}
