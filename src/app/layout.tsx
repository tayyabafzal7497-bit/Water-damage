import type { Metadata } from "next";
import { Source_Serif_4, Inter_Tight } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { Tracking } from "@/components/Tracking";
import { siteGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";
import { allCities, publishedServices } from "@/content";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Water Damage Loan | Water Damage Restoration in United States",
  description:
    "Water Damage Loan connects United States homeowners with independent local water damage contractors for water damage restoration. Get a free quote.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) add
          attributes like cz-shortcut-listen to <body> before React loads.
          That is outside React's control, not a site bug. */}
      <body suppressHydrationWarning>
        <JsonLd data={siteGraph(allCities, publishedServices)} />
        <Tracking />
        {children}
      </body>
    </html>
  );
}
