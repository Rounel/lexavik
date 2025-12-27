"use client"

import { ArrowRight, Scale, Building2, Shield, Users, Plane } from "lucide-react"
import { PRACTICE_AREAS } from "@/constants/company"
import { PRACTICES_DICT } from "@/hooks/dictionnary/practices"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroBanner from "@/components/HeroBanner"
import { useStore } from "@/hooks/use-language"
import CTASection from "@/components/CTA"
import PracticeSection from "@/components/PracticeSection"


// Map icon names to actual icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Plane,
  Building2,
  Scale,
  Shield
};

export default function PracticesPage() {
  const { language } = useStore();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner
        subtitle={PRACTICES_DICT.PracticeAreas[language]}
        title={PRACTICES_DICT.OurPractices[language]}
        description={language === 'fr'
          ? "Dans un contexte de mondialisation et de développement croissant des échanges commerciaux, l'optimisation et la bonne gouvernance s'imposent comme un impératif. Le cabinet LEXAVIK accompagne ses clients tant en conseil qu'en contentieux."
          : "In a context of globalization and growing commercial exchanges, optimization and good governance are imperative. LEXAVIK supports its clients in both advisory and litigation matters."}
        overlayColor="secondary"
        overlayOpacity={55}
        className="pt-32"
      />

      {/* Practice Areas Grid */}
      <PracticeSection />

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
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
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
