import type { Problem } from "./types";

export const problems: Problem[] = [
  { slug: "standing-water", symptom: "Standing water on the floor", cause: "An active leak, flood, or backup that has not been stopped or pumped out.", serviceSlug: "water-damage-restoration", guideSlug: "first-24-hours-water-damage", urgency: "high" },
  { slug: "burst-pipe", symptom: "A pipe burst and water is running", cause: "A failed pipe section releasing pressurized water into walls or rooms.", serviceSlug: "burst-pipe-water-removal", guideSlug: "burst-pipe-steps", urgency: "high" },
  { slug: "ceiling-stain", symptom: "A ceiling stain or sagging ceiling", cause: "Water traveling through the roof or a floor above and pooling above drywall.", serviceSlug: "roof-leak-water-damage", guideSlug: "first-24-hours-water-damage", urgency: "medium" },
  { slug: "basement-flooded", symptom: "A flooded basement", cause: "Groundwater, surface water, drain backup, or a plumbing break reaching the lowest level.", serviceSlug: "basement-flooding-cleanup", guideSlug: "flood-vs-leak-damage", urgency: "high" },
  { slug: "sewage-backup", symptom: "Water or waste coming up through a drain", cause: "A blockage or sewer backup pushing wastewater into low fixtures.", serviceSlug: "sewage-backup-cleanup", guideSlug: "flood-vs-leak-damage", urgency: "high" },
  { slug: "wet-walls", symptom: "Walls that stay damp after a leak", cause: "Moisture trapped in wall cavities or materials that were never properly dried.", serviceSlug: "structural-drying-dehumidification", guideSlug: "how-structural-drying-works", urgency: "medium" },
  { slug: "wet-belongings", symptom: "Furniture, rugs, or documents got wet", cause: "Water reaching contents before it was stopped or extracted.", serviceSlug: "contents-drying-cleaning", guideSlug: "first-24-hours-water-damage", urgency: "medium" },
  { slug: "floodwater-outside", symptom: "Storm or street water entered the home", cause: "Flooding from outside — storm surge, river overflow, or street flooding.", serviceSlug: "flood-cleanup", guideSlug: "flood-vs-leak-damage", urgency: "high" },
];
