import type { LandingPage } from "./types";

export const landingPages: LandingPage[] = [
  {
    slug: "water-damage-restoration-quote", serviceSlug: "water-damage-restoration", headline: "Water Damage Restoration — Find the Source, Dry It Right, Quoted in Writing", subhead: "Tell us where the water is and we will connect you with an independent local water damage contractor. You get a written scope, a measured drying plan, and an explanation of the work before anything starts.",
    bullets: ["Written scope before the job starts", "Water source named — pipe, roof, flood, drain, or appliance", "Moisture readings tracked until materials reach the dry standard", "Drying, cleaning, and repair quoted as separate phases", "Documentation with photos and readings for your insurance claim"],
    faqs: [
      { q: "How do I know restoration will fix my water damage?", a: "It fixes the job it is scoped for: source stopped, water extracted, structure dried to a measured standard, and finishes repaired. A contractor should inspect first and say plainly if your job needs a plumber, roofer, or other trade alongside the drying." },
      { q: "How long does drying take?", a: "It depends on the materials and how wet they were. Drying runs until moisture readings reach the dry standard, typically days rather than hours, and the contractor should show you those readings." },
      { q: "Is Water Damage Loan a lender?", a: "No. Water Damage Loan connects you with independent contractors and is not a lender. It does not offer loans, promise approval, or set interest rates." },
    ],
    kwWhitelist: ["water damage restoration", "water damage repair near me", "water damage contractor", "emergency water damage restoration", "water damage cleanup"],
  },
  {
    slug: "flood-cleanup-help", serviceSlug: "flood-cleanup", headline: "Flood Cleanup — Safe Pump-Out, Drying, and Cleaning After a Flood", subhead: "Floodwater is treated as contaminated. Tell us what happened and we will connect you with an independent local contractor who pumps out safely, removes mud and debris, dries, and cleans — with documentation for your claim.",
    bullets: ["Safety check before entry — no live electricity in the water", "Pump-out timed against outside water levels", "Mud, silt, and debris removed before drying begins", "Porous materials the floodwater touched removed, not cleaned", "Photos and readings documented for insurance"],
    faqs: [
      { q: "Is floodwater safe to clean up myself?", a: "No. Floodwater can carry sewage, chemicals, and debris, and it can hide electrical hazards. Stay out of it and let the contractor confirm the area is safe before cleanup begins." },
      { q: "Why is flood-damaged drywall usually removed?", a: "Drywall below the flood line soaks up contaminated water and is difficult to clean and dry inside the wall. Removing it lets the wall cavity dry properly and be cleaned." },
      { q: "Should I wait for my insurer before starting flood cleanup?", a: "Document everything with photos first, then start the work that prevents further damage — water removal and drying. Waiting while materials stay wet usually makes the damage worse." },
    ],
    kwWhitelist: ["flood cleanup", "flood damage cleanup", "flood restoration", "house flooded cleanup", "storm flood cleanup"],
  },
  {
    slug: "burst-pipe-help", serviceSlug: "burst-pipe-water-removal", headline: "Burst Pipe Help — Stop the Water, Dry the Structure, Fix It Once", subhead: "A burst pipe releases pressurized water fast. Tell us what you see and we will connect you with an independent local contractor who stops the flow, extracts the water, dries with measured equipment, and repairs the pipe and the finishes.",
    bullets: ["Shut the water off if it is safe to do so, from a dry place", "Water extracted and moisture mapped in walls, ceilings, and floors", "Drying tracked by readings until materials reach the dry standard", "Pipe repair and finish repair quoted in writing", "Documentation with photos and readings for your claim"],
    faqs: [
      { q: "What should I do first when a pipe bursts?", a: "Shut off the main water supply if you can do so safely, from a dry place, without stepping into standing water. If water has reached outlets or the panel, stay out and call for help." },
      { q: "Is burst pipe water clean water?", a: "Supply-line water starts clean, but once it runs through insulation, wall cavities, and flooring it picks up contaminants, so the contractor still cleans and dries thoroughly." },
      { q: "Does the pipe repair come before drying?", a: "Stopping the flow comes first, then extraction and drying. The permanent pipe repair and the finish repairs are scoped once the structure is dry." },
    ],
    kwWhitelist: ["burst pipe water removal", "burst pipe repair", "pipe burst water damage", "emergency pipe burst", "burst water pipe cleanup"],
  },
];
