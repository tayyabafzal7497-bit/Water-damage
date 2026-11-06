export const site = {
  name: "Water Damage Loan",
  shortName: "Water Damage Loan",
  tagline: "Water damage cleanup and drying across the United States — matched with independent local water damage contractors.",
  market: "United States",
  stateAbbr: "US",
  phoneDisplay: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "(888) 555-0117",
  phoneE164: process.env.NEXT_PUBLIC_BUSINESS_PHONE_E164 || "+18885550117",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "",
  license: process.env.NEXT_PUBLIC_LICENSE_NUMBER || "",
  officeAddress: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "",
  emergency247: process.env.NEXT_PUBLIC_EMERGENCY_24_7 === "true",
  reviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "",
  profileUrl: process.env.NEXT_PUBLIC_GOOGLE_PROFILE_URL || "",
};

export const BRAND_PROMISE =
  "A clear written scope, a contractor who finds the water source and the drying plan before quoting, and no surprise scope changes.";

export const DISCLOSURE =
  "Water Damage Loan connects homeowners with independent local water damage contractors. " +
  "The contractors who respond are independent businesses who perform the work, set their own prices, " +
  "and are responsible for their own licensing, certifications and insurance. " +
  "Water Damage Loan is not a lender, does not make loans, and does not promise financing, approval, or any interest rate. " +
  "Any financing information on this site is general information only. " +
  "By requesting a quote, you agree your details may be shared with up to three contractors.";

export const SAFETY_NOTICE =
  "If water may have reached outlets, wiring, or the electrical panel, do not step into the water — call emergency services or your utility and wait for professionals. " +
  "Shut off the water supply and electricity only if you can do so safely, from a dry place, without stepping into standing water. " +
  "Never enter a flooded area where electricity may be live, and call 911 for any dangerous situation.";

export const TEMP_PHONE_NOTE =
  "Temporary placeholder number — replace with the LeadSmart number before launch.";
