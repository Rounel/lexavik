import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de LEXAVIK — Notre Cabinet, Nos Valeurs",
  description:
    "Découvrez LEXAVIK, cabinet d'avocats fondé en 2015, spécialisé en droit des affaires et droit OHADA. Une équipe pluridisciplinaire au service de vos projets en France et en Afrique.",
  alternates: {
    canonical: "https://www.lexavik.com/about",
  },
  openGraph: {
    title: "À Propos de LEXAVIK — Notre Cabinet, Nos Valeurs",
    description:
      "Découvrez LEXAVIK, cabinet d'avocats fondé en 2015, spécialisé en droit des affaires et droit OHADA. Une équipe pluridisciplinaire au service de vos projets en France et en Afrique.",
    url: "https://www.lexavik.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
