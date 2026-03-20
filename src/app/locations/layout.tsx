import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Bureaux — Paris, Côte d'Ivoire, Mali | LEXAVIK",
  description:
    "Le cabinet LEXAVIK est présent à Paris et dispose de partenaires en Côte d'Ivoire et au Mali. Retrouvez nos coordonnées et adresses pour nous contacter.",
  alternates: {
    canonical: "https://www.lexavik.com/locations",
  },
  openGraph: {
    title: "Nos Bureaux — Paris, Côte d'Ivoire, Mali | LEXAVIK",
    description:
      "Le cabinet LEXAVIK est présent à Paris et dispose de partenaires en Côte d'Ivoire et au Mali.",
    url: "https://www.lexavik.com/locations",
  },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
