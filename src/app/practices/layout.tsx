import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domaines de Pratique — Expertise Juridique | LEXAVIK",
  description:
    "Découvrez les domaines d'expertise du cabinet LEXAVIK : droit OHADA, droit des sociétés, droit bancaire, contentieux, droit fiscal, droit de l'environnement et bien d'autres.",
  alternates: {
    canonical: "https://www.lexavik.com/practices",
  },
  openGraph: {
    title: "Domaines de Pratique — Expertise Juridique | LEXAVIK",
    description:
      "Droit OHADA, droit des sociétés, droit bancaire, contentieux, droit fiscal : l'expertise de LEXAVIK à votre service en France et en Afrique.",
    url: "https://www.lexavik.com/practices",
  },
};

export default function PracticesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
