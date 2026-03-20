import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Équipe — Avocats Experts LEXAVIK",
  description:
    "Rencontrez les avocats du cabinet LEXAVIK : des experts en droit des affaires, droit OHADA, droit bancaire et droit international au service de vos projets en France et en Afrique.",
  alternates: {
    canonical: "https://www.lexavik.com/team",
  },
  openGraph: {
    title: "Notre Équipe — Avocats Experts LEXAVIK",
    description:
      "Rencontrez les avocats du cabinet LEXAVIK : des experts en droit des affaires, droit OHADA, droit bancaire et droit international.",
    url: "https://www.lexavik.com/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
