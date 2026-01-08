"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useStore } from "@/hooks/use-language"
import Image from "next/image"
import { EXPERTISE_POLES } from "@/constants/company"
import { useMemo } from "react"
import { HOME_DICT, COMMON_DICT } from "@/hooks/dictionnary"

interface PracticeSectionProps {
  selectedCategory?: string;
  searchDomain?: string;
  isSearchPage?: boolean;
}

export default function PracticeSection({
  selectedCategory = "",
  searchDomain = "",
  isSearchPage = false
}: PracticeSectionProps) {
  const { language } = useStore();

  // Filtrer les domaines en fonction des critères de recherche
  const filteredDomains = useMemo(() => {
    // Si on est sur la page de recherche et qu'il n'y a pas de critères, ne rien afficher
    if (isSearchPage && !selectedCategory && !searchDomain) {
      return [];
    }

    // Créer une liste plate de domaines avec leur catégorie parente
    let allDomains: Array<{
      id: string;
      name: { fr: string; en: string };
      category: typeof EXPERTISE_POLES[number];
    }> = [];

    // Si une catégorie est sélectionnée, ne prendre que les domaines de cette catégorie
    const polesToSearch = selectedCategory
      ? EXPERTISE_POLES.filter(pole => pole.id === selectedCategory)
      : EXPERTISE_POLES;

    // Construire la liste de domaines avec leur catégorie
    polesToSearch.forEach(pole => {
      pole.domains.forEach(domain => {
        allDomains.push({
          id: domain.id,
          name: { fr: domain.fr, en: domain.en },
          category: pole
        });
      });
    });

    // Filtrer par recherche textuelle si présente
    if (searchDomain) {
      const searchLower = searchDomain.toLowerCase();
      allDomains = allDomains.filter(domain =>
        domain.name[language].toLowerCase().includes(searchLower)
      );
    }

    return allDomains;
  }, [selectedCategory, searchDomain, language, isSearchPage]);

  // Si on est sur la page de recherche et qu'il n'y a aucun résultat, afficher un message
  if (isSearchPage && filteredDomains.length === 0) {
    return (
      <div className="relative min-h-screen bg-linear-to-b from-[#F5F1EB] to-[#FFFAF6] w-full px-4 py-20 sm:px-6 lg:px-8 font-[family-name:var(--font-dm-sans)]">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-600 text-lg">
            {language === 'fr'
              ? "Utilisez les champs de recherche ci-dessus pour trouver un domaine d'expertise."
              : "Use the search fields above to find an area of expertise."}
          </p>
        </div>
      </div>
    );
  }

  // Si on n'est pas sur la page de recherche, afficher EXPERTISE_POLES comme avant
  if (!isSearchPage) {
    return (
      <div className="relative bg-linear-to-b from-[#F5F1EB] to-[#FFFAF6] w-full px-4 py-20 sm:px-6 lg:px-0 font-[family-name:var(--font-dm-sans)]">
        <div className="mx-auto max-w-360 flex flex-row">
          {/* Header */}
          <div className="flex flex-col mb-16 lg:px-8 w-full">
            <div className="mb-6">
              <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">What We Are Expert At</span>
              <h2 className="text-4xl font-light text-secondary lg:text-5xl">Legal Practice Areas</h2>
            </div>
            <p className="text-gray-600 max-w-lg">
              Notre expertise couvre un large éventail de domaines juridiques.
              Nous offrons des solutions sur mesure adaptées à vos besoins spécifiques.
            </p>
            <Button className="mt-auto self-start">
              Voir tous nos domaines d'expertise
            </Button>
          </div>

          {/* Practice Areas Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 mb-12">
            {EXPERTISE_POLES.map((area, index) => {
              return (
                  <div
                    key={area.id}
                    className={`group relative hover:shadow-2xl hover:border-primary-700 transition-all duration-300 h-70 ${index === 0 || index === 3 ? 'bg-secondary/20' : ''}`}
                  >
                    <Link
                      href={`/practices/${area.id}`}
                      className=""
                    >
                    <div className="flex flex-col p-3 gap-3">
                      <div className="flex p-1 items-center justify-center w-max rounded-full bg-primary-700/10 text-primary-700 transition-all">
                        <Image
                          src={area.svg}
                          alt={area.title.fr}
                          width={35}
                          height={35}
                          className="min-h-12 min-w-12 size-12 max-w-12 max-h-12 object-cover group-hover:fill-white"
                        />
                      </div>
                      <h3 className="text-2xl font-medium text-secondary group-hover:text-primary-700 transition-colors">
                        {area.title.fr}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 px-3">
                      {area.description.fr}
                    </p>
                      <div className={`absolute bottom-5 right-5 inline-flex items-center  font-medium hover:text-primary-800 ${index === 0 || index === 3 ? 'text-secondary' : 'text-primary'}`}>
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </Link>
                  </div>
              );
            })}
          </div>

        </div>
      </div>
    );
  }

  // Si on est sur la page de recherche avec des résultats, afficher les résultats filtrés
  return (
    <div className="relative bg-linear-to-b from-[#F5F1EB] to-[#FFFAF6] w-full px-4 py-20 sm:px-6 lg:px-8 font-[family-name:var(--font-dm-sans)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-secondary">
            {language === 'fr'
              ? `${filteredDomains.length} résultat${filteredDomains.length > 1 ? 's' : ''} trouvé${filteredDomains.length > 1 ? 's' : ''}`
              : `${filteredDomains.length} result${filteredDomains.length > 1 ? 's' : ''} found`}
          </h3>
        </div>

        {/* Results Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDomains.map((domain) => (
            <div
              key={domain.id}
              className="group relative hover:shadow-xl transition-all duration-300 bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-700"
            >
              <Link href={`/practices/${domain.id}`}>
                <div className="flex flex-col gap-4">
                  {/* Icône de la catégorie */}
                  <div className="flex p-2 items-center justify-center w-max rounded-full bg-primary-700/10 text-primary-700 transition-all">
                    <Image
                      src={domain.category.svg}
                      alt={domain.category.title[language]}
                      width={40}
                      height={40}
                      className="size-10 object-contain"
                    />
                  </div>

                  {/* Nom du domaine */}
                  <h3 className="text-lg font-medium text-secondary group-hover:text-primary-700 transition-colors">
                    {domain.name[language]}
                  </h3>

                  {/* Badge de catégorie */}
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-700/10 text-primary-700">
                      {domain.category.title[language]}
                    </span>
                  </div>

                  <div className="mt-auto pt-2 inline-flex items-center text-primary-700 font-medium hover:text-primary-800 text-sm">
                    {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
