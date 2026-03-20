import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez LEXAVIK — Consultation Juridique",
  description:
    "Contactez le cabinet LEXAVIK pour toute question juridique. Nos avocats spécialisés en droit des affaires et droit OHADA sont disponibles à Paris. Prise de rendez-vous en ligne.",
  alternates: {
    canonical: "https://www.lexavik.com/contact",
  },
  openGraph: {
    title: "Contactez LEXAVIK — Consultation Juridique",
    description:
      "Contactez le cabinet LEXAVIK pour toute question juridique. Nos avocats spécialisés en droit des affaires et droit OHADA sont disponibles à Paris.",
    url: "https://www.lexavik.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
