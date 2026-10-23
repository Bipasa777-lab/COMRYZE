import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { BRAND, SITE } from "@/lib/utils";
import "./globals.css";
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const title = `${BRAND} — We Build, Grow & Scale Digital Businesses`;
const description = "E-commerce, growth marketing, creative and technology from one team for your complete digital journey.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE), title, description,
  openGraph: { title, description, type: "website", url: SITE, siteName: BRAND },
  twitter: { card: "summary_large_image", title, description },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Organization", name: BRAND, url: SITE, description };
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}</body>
    </html>
  );
}
