"use client"

import { Search } from "lucide-react"
import { EXPERTISE_POLES } from "@/constants/company"
import { PRACTICES_DICT } from "@/hooks/dictionnary/practices"
import HeroBanner from "@/components/HeroBanner"
import { useStore } from "@/hooks/use-language"
import CTASection from "@/components/CTA"
import PracticeSection from "@/components/PracticeSection"
import { useState } from "react"

export default function PracticesPage() {
  const { language } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchDomain, setSearchDomain] = useState<string>("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner
        subtitle={PRACTICES_DICT.PracticeAreas[language]}
        title={PRACTICES_DICT.OurPractices[language]}
        description={PRACTICES_DICT.HeroDescription[language]}
        className="pt-32"
      />

      {/* Search Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="">
            <h3 className="text-2xl font-medium text-secondary mb-6">
              {PRACTICES_DICT.SearchForExpertise[language]}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Catégorie Select */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  {PRACTICES_DICT.Category[language]}
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                >
                  <option value="">
                    {PRACTICES_DICT.AllCategories[language]}
                  </option>
                  {EXPERTISE_POLES.map((pole) => (
                    <option key={pole.id} value={pole.id}>
                      {pole.title[language]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Domaine Input */}
              <div>
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                  {PRACTICES_DICT.Domain[language]}
                </label>
                <div className="relative">
                  <input
                    id="domain"
                    type="text"
                    value={searchDomain}
                    onChange={(e) => setSearchDomain(e.target.value)}
                    placeholder={PRACTICES_DICT.SearchDomain[language]}
                    className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas Grid */}
      <PracticeSection
        selectedCategory={selectedCategory}
        searchDomain={searchDomain}
        isSearchPage={true}
      />

      {/* Why Choose Us Section */}
      {/* <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">
              {language === 'fr' ? "Pourquoi Choisir LEXAVIK" : "Why Choose LEXAVIK"}
            </span>
            <h2 className="text-4xl font-light text-secondary lg:text-5xl mb-6">
              {language === 'fr'
                ? "Une Expertise Reconnue en Droit des Affaires"
                : "Recognized Expertise in Business Law"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {language === 'fr'
                ? "Riche d'une expérience acquise sur le terrain, le Cabinet LEXAVIK maîtrise le droit européen des affaires, le droit OHADA et les différentes réglementations communautaires."
                : "With field-acquired experience, LEXAVIK masters European business law, OHADA law, and various community regulations."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-primary-700 text-4xl font-bold mb-2">450+</div>
              <div className="text-gray-600">
                {language === 'fr' ? "Affaires Résolues" : "Cases Completed"}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-primary-700 text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-600">
                {language === 'fr' ? "Taux de Réussite" : "Success Rate"}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-primary-700 text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-600">
                {language === 'fr' ? "Années d'Expérience" : "Years of Experience"}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-primary-700 text-4xl font-bold mb-2">17</div>
              <div className="text-gray-600">
                {language === 'fr' ? "États OHADA" : "OHADA Member States"}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      {/* <CTASection /> */}
    </div>
  )
}
