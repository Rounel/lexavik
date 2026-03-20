import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités Juridiques & Transactions | LEXAVIK",
  description:
    "Retrouvez les dernières actualités juridiques et transactions conseillées par le cabinet LEXAVIK : fusions-acquisitions, investissements en Afrique, deals M&A et opérations internationales.",
  alternates: {
    canonical: "https://www.lexavik.com/news",
  },
  openGraph: {
    title: "Actualités Juridiques & Transactions | LEXAVIK",
    description:
      "Retrouvez les dernières actualités juridiques et transactions conseillées par LEXAVIK : M&A, investissements en Afrique, opérations internationales.",
    url: "https://www.lexavik.com/news",
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
