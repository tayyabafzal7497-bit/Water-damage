import type { StateInfo, City } from "./types";

export const stateInfos: StateInfo[] = [
  {
    slug: "us",
    name: "United States",
    abbr: "US",
    intro: [
      "Water damage in the United States does not have one cause. In coastal cities it arrives with storms and storm surge; in the South and Midwest it comes from burst pipes in winter and heavy rain in spring; in the West it follows roof failures, irrigation and plumbing leaks, and wildfire-season runoff. The contractor's first job is always the same, though: find the water source, measure how far it traveled, and dry what it touched before repairing finishes.",
      "Housing across the country runs from historic brick and plaster homes in Philadelphia, to slab-on-grade houses in Houston and Dallas, to stucco and tile-roof homes in Los Angeles and Miami, to mid-century and newer subdivisions in Columbus. The drying answer changes with the construction, the climate, and the water source — which is why this site's pages separate restoration, flood cleanup, pipe and roof leaks, basement flooding, sewage, and drying, instead of selling one service for every wet home.",
    ],
    details: {
      housing: "United States housing varies widely: older multi-story brick and row homes in Philadelphia with basements and plaster walls; slab-on-grade single-story homes across Houston and Dallas where water spreads across the slab and under flooring; stucco homes with tile or shingle roofs in Los Angeles and Miami; and a mix of mid-century and newer construction in Columbus. Slab homes hide water under flooring; basement homes hide it in wall cavities; stucco homes hide roof leaks behind exterior walls. A contractor's first job is to read the construction before recommending a scope.",
      climate: "Water risks follow regional climate. The Gulf and Atlantic coasts, including Houston, Miami, and Philadelphia, face hurricanes, tropical storms, and heavy rain that overwhelm drainage. The interior, including Dallas and Columbus, faces spring storms, flash flooding, and winter freezes that burst pipes. Los Angeles faces winter rain on aging roofs and plumbing, plus runoff after dry seasons. Each region's peak season is different, but the drying standard is the same: measured, not guessed.",
      permits: "Water damage work that changes drainage, discharge, or structure can involve local permit and inspection requirements, which vary by municipality and scope. Emergency water removal and drying generally do not, but repairs that alter plumbing, electrical, or structure can. The contractor quoting the job should confirm the permit requirement for the specific scope before work starts, rather than assuming it.",
    },
    updated: "2026-11-04",
  },
];

export interface Region { name: string; blurb: string; citySlugs: string[]; }

export const regions: Region[] = [
  { name: "West", blurb: "Los Angeles — winter rain, aging roofs, and plumbing leaks in a dry climate.", citySlugs: ["los-angeles"] },
  { name: "South Central", blurb: "Houston and Dallas — Gulf storms, flash flooding, and winter pipe bursts.", citySlugs: ["houston", "dallas"] },
  { name: "East", blurb: "Philadelphia — older row homes, basements, and Atlantic storms.", citySlugs: ["philadelphia"] },
  { name: "Midwest", blurb: "Columbus — spring storms, freeze-thaw, and basement flooding.", citySlugs: ["columbus"] },
  { name: "Southeast", blurb: "Miami — tropical storms, storm surge, and flat, low-lying ground.", citySlugs: ["miami"] },
];

export const cities: City[] = [
  {
    slug: "los-angeles",
    stateSlug: "us",
    county: "Los Angeles",
    status: "PUBLISHED",
    zips: ["90001", "90012", "90026"],
    areas: ["Downtown Los Angeles", "Hollywood", "Silver Lake", "Echo Park", "San Fernando Valley"],
    intro: [
      "Los Angeles water damage is easy to underestimate in a dry climate. Winter storms find aging roofs, and plumbing leaks in slab and stucco homes run quietly for weeks — under flooring, inside walls, and through ceilings — before a stain or a warped floor finally shows. Irrigation leaks and appliance failures add a steady year-round caseload that has nothing to do with rain.",
      "Water Damage Loan connects homeowners here with independent local water damage contractors. The contractor who takes the job inspects the home, finds the water source, measures how far it traveled, and quotes the drying and repair work in writing — Water Damage Loan itself does not employ crews, own trucks, or perform the work, and it is not a lender.",
    ],
    housingNotes: ["Stucco homes with tile or shingle roofs: roof leaks that travel along rafters and appear far from the entry point.", "Slab-on-grade homes: plumbing and appliance leaks that spread under flooring and into wall bases.", "Older homes in central neighborhoods: aging supply lines, galvanized piping, and plaster walls that hide moisture.", "Hillside and canyon homes: runoff and drainage problems that send water toward foundations during winter storms."],
    localIssues: [
      { title: "Winter rain on aging roofs", body: "Los Angeles roofs often fail at flashings, vents, and valleys during winter storms. The water travels inside the roof structure before it shows as a ceiling stain, so the wet area is usually larger than the stain." },
      { title: "Hidden slab and wall leaks", body: "Slab leaks and in-wall plumbing failures run quietly in a dry climate, soaking flooring and wall cavities for weeks. Moisture meters, not visible stains, should define the drying scope." },
      { title: "Runoff after dry seasons", body: "After long dry periods, sudden rain runs off hard, dry ground and overwhelms gutters, drains, and low-lying areas. Grading and drainage around the home matter as much as the roof." },
    ],
    popularServices: ["water-damage-restoration", "roof-leak-water-damage", "burst-pipe-water-removal", "structural-drying-dehumidification"],
    nearby: ["houston", "dallas", "miami"],
    faqs: [
      { q: "Does Los Angeles really get water damage without much rain?", a: "Yes. Plumbing leaks, appliance failures, irrigation breaks, and roof leaks during winter storms cause most Los Angeles water damage. Rain is only one source, and often not the largest." },
      { q: "Why is a ceiling stain not directly under the roof leak?", a: "Water travels along rafters and decking before it finds a path down, so the stain can be rooms away from the entry point. A contractor should trace the path in the attic rather than patching the stain." },
    ],
    updated: "2026-11-04",
  },
  {
    slug: "houston",
    stateSlug: "us",
    county: "Harris",
    status: "PUBLISHED",
    zips: ["77001", "77002", "77006"],
    areas: ["Downtown Houston", "Montrose", "Heights", "Gallaria", "Energy Corridor"],
    intro: [
      "Houston is one of the hardest water cities in the country: Gulf storms, tropical rainfall, and flat, low-lying ground combine so that water arrives fast and drains slowly. Slab-on-grade homes across the city mean that floodwater and plumbing leaks spread across the slab and under flooring, soaking wall bases in every room they reach.",
      "Water Damage Loan connects homeowners here with independent local water damage contractors. The contractor who takes the job inspects the home, finds the water source, measures how far it traveled, and quotes the drying and repair work in writing — Water Damage Loan itself does not employ crews, own trucks, or perform the work, and it is not a lender.",
    ],
    housingNotes: ["Slab-on-grade homes across the city: water spreads across the slab and under flooring, soaking wall bases room by room.", "Older homes inside the Loop: aging plumbing, pier-and-beam sections, and additions with mixed construction.", "Newer suburbs: larger footprints and open plans that let water travel further before it is noticed.", "Low-lying and bayou-adjacent lots: stormwater that rises fast and recedes slowly, with floodwater treated as contaminated."],
    localIssues: [
      { title: "Gulf storms and tropical rainfall", body: "Houston storms can drop enormous rain in hours, overwhelming street drainage and sending water into homes through doors, garages, and low entries. Flood cleanup after such storms is a contaminated-water job." },
      { title: "Flat ground and slow drainage", body: "Flat terrain means water that enters a home leaves slowly, and pumping a home while surrounding groundwater is still high can damage the structure. Timing matters as much as equipment." },
      { title: "Winter pipe bursts", body: "Houston's occasional hard freezes catch pipes that were never insulated for sustained cold. Bursts during the thaw release pressurized water through walls and ceilings." },
    ],
    popularServices: ["flood-cleanup", "water-damage-restoration", "burst-pipe-water-removal", "structural-drying-dehumidification"],
    nearby: ["dallas", "los-angeles", "miami"],
    faqs: [
      { q: "Is Houston floodwater safe to clean up myself?", a: "No. Floodwater can carry sewage, chemicals, and debris, and it can hide electrical hazards. Stay out of it and let the contractor confirm the area is safe before cleanup begins." },
      { q: "Why should I not pump out my home while the street is still flooded?", a: "Pumping while surrounding groundwater is still high can push the slab or foundation upward and crack it. A contractor should judge the timing based on outside water levels, not just the water inside." },
    ],
    updated: "2026-11-04",
  },
  {
    slug: "dallas",
    stateSlug: "us",
    county: "Dallas",
    status: "PUBLISHED",
    zips: ["75201", "75204", "75209"],
    areas: ["Downtown Dallas", "Oak Cliff", "Lakewood", "North Dallas", "Uptown"],
    intro: [
      "Dallas water damage comes from two directions: spring storms and flash flooding that overwhelm drainage, and winter freezes that burst pipes in homes built for heat, not sustained cold. Expansive clay soils add a third problem — they swell when wet and shrink when dry, moving foundations and opening the cracks and joints that later leak.",
      "Water Damage Loan connects homeowners here with independent local water damage contractors. The contractor who takes the job inspects the home, finds the water source, measures how far it traveled, and quotes the drying and repair work in writing — Water Damage Loan itself does not employ crews, own trucks, or perform the work, and it is not a lender.",
    ],
    housingNotes: ["Slab-on-grade homes across the metro: leaks that spread under flooring and into wall bases.", "Brick homes on expansive clay: soil movement that opens cracks and joints, which then become water paths.", "Older homes near the city center: aging plumbing and mixed additions with different construction.", "Newer suburbs: large roofs and long drain runs where a single roof or plumbing failure affects several rooms."],
    localIssues: [
      { title: "Spring storms and flash flooding", body: "Dallas spring storms can flood streets and low areas quickly, and water that enters a home must be treated as potentially contaminated. Cleanup starts with safety, not with pumping." },
      { title: "Freeze-related pipe bursts", body: "Dallas freezes are short but hard, and pipes in attics, exterior walls, and unheated garages burst during the thaw. The water spreads through ceilings and walls before it is noticed." },
      { title: "Expansive clay soils", body: "Clay soils swell when wet and shrink when dry, moving foundations seasonally. That movement opens cracks that later leak, so a water job in Dallas often includes a foundation question." },
    ],
    popularServices: ["water-damage-restoration", "burst-pipe-water-removal", "flood-cleanup", "structural-drying-dehumidification"],
    nearby: ["houston", "columbus", "los-angeles"],
    faqs: [
      { q: "Do Dallas pipes really burst in winter?", a: "Yes. Dallas freezes are brief but cold enough to freeze pipes in attics and exterior walls, and the burst usually happens during the thaw, when pressure returns. Insulation and shutoff knowledge matter even in a warm climate." },
      { q: "Does clay soil make water damage worse in Dallas?", a: "It makes the aftermath worse: swelling and shrinking soil moves foundations and opens cracks that become water paths. A contractor should check for foundation movement as part of a water job, not just dry the rooms." },
    ],
    updated: "2026-11-04",
  },
  {
    slug: "philadelphia",
    stateSlug: "us",
    county: "Philadelphia",
    status: "PUBLISHED",
    zips: ["19103", "19104", "19106"],
    areas: ["Center City", "South Philadelphia", "West Philadelphia", "Northeast Philadelphia", "Fishtown"],
    intro: [
      "Philadelphia's row homes and older masonry buildings carry a particular water story: basements under nearly every home, shared walls that pass water between houses, and aging plumbing and sewer lines that back up during heavy rain. Atlantic storms and nor'easters add the outside water — wind-driven rain through aging roofs and windows, and street flooding in low areas.",
      "Water Damage Loan connects homeowners here with independent local water damage contractors. The contractor who takes the job inspects the home, finds the water source, measures how far it traveled, and quotes the drying and repair work in writing — Water Damage Loan itself does not employ crews, own trucks, or perform the work, and it is not a lender.",
    ],
    housingNotes: ["Row homes with shared walls: water that enters one home can travel to the next, and shared drains back up together.", "Basements under most homes: the lowest level collects groundwater, sewer backup, and plumbing leaks alike.", "Older masonry and plaster: walls that hide moisture and show damage late, as stains or crumbling plaster.", "Aging roofs and windows: wind-driven rain that enters through flashings, sills, and worn roofing."],
    localIssues: [
      { title: "Sewer backups during heavy rain", body: "Philadelphia's older combined sewers can back up into basements during heavy rain. That water is contaminated, and cleanup requires protective equipment and removal of porous materials it touched." },
      { title: "Basement water from every direction", body: "A Philadelphia basement can take water from groundwater, surface runoff, sewer backup, and plumbing at once. The contractor must separate the sources before quoting, because each has a different fix." },
      { title: "Roof and window leaks in storms", body: "Nor'easters and Atlantic storms drive rain through aging roofs and windows. The water travels inside walls and appears as stains rooms away from the entry point." },
    ],
    popularServices: ["basement-flooding-cleanup", "sewage-backup-cleanup", "water-damage-restoration", "roof-leak-water-damage"],
    nearby: ["columbus", "miami", "houston"],
    faqs: [
      { q: "Why does my Philadelphia basement flood from the drain?", a: "During heavy rain, older combined sewers can back up through floor drains and low fixtures. That water is contaminated, so stay out of it and let a contractor handle the cleanup and the cause." },
      { q: "Can a row home's water problem come from a neighbor?", a: "Yes. Shared walls and shared drains mean water and sewer problems can cross between homes. A contractor should check the shared systems, not just your side of the wall." },
    ],
    updated: "2026-11-04",
  },
  {
    slug: "columbus",
    stateSlug: "us",
    county: "Franklin",
    status: "PUBLISHED",
    zips: ["43201", "43215", "43206"],
    areas: ["Downtown Columbus", "Short North", "German Village", "Clintonville", "Upper Arlington"],
    intro: [
      "Columbus water damage follows the Midwest pattern: spring storms and heavy rain that flood basements, freeze-thaw cycles that crack foundations and burst pipes, and summer storms that overwhelm gutters and drainage. Most homes have basements, so the lowest level is where water, sewer backup, and plumbing failures all arrive.",
      "Water Damage Loan connects homeowners here with independent local water damage contractors. The contractor who takes the job inspects the home, finds the water source, measures how far it traveled, and quotes the drying and repair work in writing — Water Damage Loan itself does not employ crews, own trucks, or perform the work, and it is not a lender.",
    ],
    housingNotes: ["Mid-century block basements: joint seepage and floor cracks under hydrostatic pressure after rain and thaw.", "Older homes near downtown: stone and brick foundations with porous walls and aging plumbing.", "Newer suburbs: poured-wall basements with better drainage, but grading and downspout problems still send water to foundations.", "Homes with finished basements: water risk hidden behind finished walls until a storm finds it."],
    localIssues: [
      { title: "Spring rain and thaw together", body: "Columbus spring often brings thaw and rain in the same weeks, raising groundwater and pressing on basement walls and floors at once. Sump pumps, discharge lines, and window wells all get tested together." },
      { title: "Freeze-thaw cracks and pipe bursts", body: "Winter freezes open foundation cracks and burst pipes in unheated spaces; the damage shows during the thaw, when water returns under pressure." },
      { title: "Sump and drainage failures", body: "A sump that cannot keep up in spring, a frozen discharge, or a downspout that empties beside the foundation are common Columbus failure points, and they are often part of the water job, not separate from it." },
    ],
    popularServices: ["basement-flooding-cleanup", "water-damage-restoration", "burst-pipe-water-removal", "structural-drying-dehumidification"],
    nearby: ["philadelphia", "dallas", "houston"],
    faqs: [
      { q: "Why does my Columbus basement only leak in spring?", a: "Spring-only leaking still means water reaches the basement when groundwater peaks. A contractor can tell you whether the fix is drainage, a sump upgrade, grading, or a combination — but waiting until the leak spreads rarely makes it cheaper." },
      { q: "Is a sump pump enough for a Columbus basement?", a: "Only if it is sized to the home's peak inflow, has a clear discharge, and is tested regularly. A pump that cannot keep up in April is not a working system, however new it looks in January." },
    ],
    updated: "2026-11-04",
  },
  {
    slug: "miami",
    stateSlug: "us",
    county: "Miami-Dade",
    status: "PUBLISHED",
    zips: ["33101", "33109", "33130"],
    areas: ["Downtown Miami", "Brickell", "Little Havana", "Coral Gables", "Miami Beach"],
    intro: [
      "Miami water damage is shaped by tropical weather and flat, low-lying ground: hurricanes and tropical storms bring storm surge and driving rain, summer downpours overwhelm drainage in hours, and a high water table keeps the ground saturated. Concrete block and stucco homes, often on slabs, let water spread across floors and into wall bases quickly.",
      "Water Damage Loan connects homeowners here with independent local water damage contractors. The contractor who takes the job inspects the home, finds the water source, measures how far it traveled, and quotes the drying and repair work in writing — Water Damage Loan itself does not employ crews, own trucks, or perform the work, and it is not a lender.",
    ],
    housingNotes: ["Concrete block and stucco homes: water that spreads across slabs and wicks into block walls and wall bases.", "Low-lying coastal lots: storm surge and street flooding that enter through doors, garages, and low entries.", "High-rise and condo-adjacent single-family homes: leaks from above and shared plumbing that affect units below.", "Older homes with flat or low-slope roofs: ponding water and flashing failures that leak during tropical downpours."],
    localIssues: [
      { title: "Storm surge and tropical rain", body: "Miami storms bring surge and rain together, and floodwater from surge or streets is contaminated. Cleanup starts with safety and protective equipment, not with pumping." },
      { title: "High water table and slow drainage", body: "Flat ground and a high water table mean water drains slowly, and pumping while outside water is still high can damage the structure. Timing is part of the job." },
      { title: "Humidity that slows drying", body: "Miami's humidity makes drying harder: dehumidification must work against moist outside air, and materials that stay damp develop odor and growth quickly. Measured drying matters more here, not less." },
    ],
    popularServices: ["flood-cleanup", "water-damage-restoration", "roof-leak-water-damage", "contents-drying-cleaning"],
    nearby: ["houston", "philadelphia", "dallas"],
    faqs: [
      { q: "Is Miami storm surge water safe to clean up myself?", a: "No. Surge and street floodwater can carry sewage, chemicals, and debris, and it can hide electrical hazards. Stay out of it and let the contractor confirm the area is safe." },
      { q: "Why does drying take longer in Miami?", a: "Because the outside air is already humid, dehumidifiers must work harder to pull moisture out of materials. A contractor should track moisture readings daily and adjust the plan, rather than promising a fixed number of days." },
    ],
    updated: "2026-11-04",
  },
];

const CITY_STATE_ABBR: Record<string, string> = {
  "los-angeles": "CA",
  houston: "TX",
  dallas: "TX",
  philadelphia: "PA",
  columbus: "OH",
  miami: "FL",
};

export function cityLabel(city: { slug: string; stateSlug: string }): string {
  const name = city.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const abbr = CITY_STATE_ABBR[city.slug];
  return abbr ? `${name}, ${abbr}` : name;
}
