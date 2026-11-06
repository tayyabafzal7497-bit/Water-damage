"use client";

import { useState } from "react";
import Link from "next/link";
import { problems } from "@/content";
import { SectionHeading } from "./ui";

const URGENCY_LABEL: Record<string, string> = {
  low: "When you get to it",
  medium: "Worth scheduling soon",
  high: "Don't wait on this",
};

export function ProblemFinder() {
  const [selected, setSelected] = useState<string | null>(null);
  const problem = problems.find((p) => p.slug === selected);

  return (
    <section className="bg-white">
      <div className="container-x py-16">
        <SectionHeading
          eyebrow="Problem finder"
          title="What's happening with your power?"
          lede="Pick what you see — we'll tell you what usually causes it and what fixes it."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {problems.map((p) => (
            <button
              key={p.slug}
              onClick={() => setSelected(p.slug)}
              aria-pressed={selected === p.slug}
              className={`rounded-full px-5 py-2.5 text-[15px] font-medium ring-1 transition-colors ${
                selected === p.slug
                  ? "bg-ink text-white ring-ink"
                  : "bg-paper text-ink ring-line hover:bg-sky-tint hover:text-sky-deep"
              }`}
            >
              {p.symptom}
            </button>
          ))}
        </div>
        {problem && (
          <div className="card mt-6 max-w-3xl p-6 sm:p-8" role="status">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-serif text-2xl font-semibold text-ink">{problem.symptom}</h3>
              <span className="rounded-full bg-amber-tint px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-dark">
                {URGENCY_LABEL[problem.urgency]}
              </span>
            </div>
            <p className="mt-3 text-lg text-ink/85">
              <strong className="font-semibold">Usually caused by:</strong> {problem.cause}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={`/water-damage-services/${problem.serviceSlug}/`}
                className="btn-secondary !min-h-[44px] !text-sm"
              >
                How water damage contractors fix it
              </Link>
              {problem.guideSlug && (
                <Link
                  href={`/resources/${problem.guideSlug}/`}
                  className="btn-ghost-light !min-h-[44px] !text-sm !text-ink hover:!bg-paper-deep"
                >
                  Read the guide
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
