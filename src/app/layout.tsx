import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Text, Bitter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400"
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
});

const SITE_URL = "https://www.lexavik.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LEXAVIK — Cabinet d'Avocats | Droit des Affaires Paris & Afrique",
    template: "%s | LEXAVIK Avocats",
  },
  description:
    "Cabinet d'avocats spécialisé en droit des affaires, droit OHADA et droit international. Basé à Paris, LEXAVIK intervient en France et dans toute l'Afrique francophone depuis 2015.",
  keywords: [
    "cabinet avocats Paris",
    "droit des affaires",
    "droit OHADA",
    "avocat Afrique",
    "droit international",
    "LEXAVIK",
    "avocat Paris 9",
    "droit UEMOA",
    "droit bancaire",
    "contentieux international",
  ],
  authors: [{ name: "LEXAVIK", url: SITE_URL }],
  creator: "LEXAVIK",
  publisher: "LEXAVIK",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_GB",
    url: SITE_URL,
    siteName: "LEXAVIK Avocats",
    title: "LEXAVIK — Cabinet d'Avocats | Droit des Affaires Paris & Afrique",
    description:
      "Cabinet d'avocats spécialisé en droit des affaires, droit OHADA et droit international. Basé à Paris, LEXAVIK intervient en France et dans toute l'Afrique francophone depuis 2015.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEXAVIK — Cabinet d'Avocats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lexavik",
    creator: "@lexavik",
    title: "LEXAVIK — Cabinet d'Avocats | Droit des Affaires Paris & Afrique",
    description:
      "Cabinet d'avocats spécialisé en droit des affaires, droit OHADA et droit international. Paris & Afrique.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "LEXAVIK",
  url: SITE_URL,
  logo: `${SITE_URL}/logotextblanc.png`,
  description:
    "Cabinet d'avocats spécialisé en droit des affaires, droit OHADA et droit international, basé à Paris.",
  foundingDate: "2015",
  email: "akwaba@lexavik.com",
  telephone: "+33781916755",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8, Rue de Chantilly",
    postalCode: "75009",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  areaServed: ["FR", "CI", "ML", "SN", "CM", "GA", "BJ", "BF", "TG", "GN"],
  sameAs: [
    "https://facebook.com/lexavik",
    "https://twitter.com/lexavik",
    "https://linkedin.com/company/lexavik",
    "https://instagram.com/lexavik",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerifText.variable} ${bitter.variable} antialiased bg-secondary-950 relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
