"use client"

import Image from "next/image"
import { ArrowRight, Target, Heart, Lightbulb, Award, Users, Globe } from "lucide-react"
import { ABOUT_DICT } from "@/hooks/dictionnary/about"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroBanner from "@/components/HeroBanner"
import { useStore } from "@/hooks/use-language"

export default function AboutPage() {
  const { language } = useStore();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner
        subtitle={ABOUT_DICT.AboutUs[language]}
        title={ABOUT_DICT.IntroSubtitle[language]}
        description={ABOUT_DICT.FoundedText[language]}
        overlayColor="secondary"
        overlayOpacity={55}
        className="pt-32"
      />

      {/* Who We Are Section */}
      <div className="px-4 py-20 sm:px-6 lg:px-8 font-[family-name:var(--font-dm-sans)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Content */}
            <div>
              <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">
                {ABOUT_DICT.WhoWeAre[language]}
              </span>
              <h2 className="text-4xl font-light text-secondary lg:text-5xl mb-6">
                {ABOUT_DICT.IntroTitle[language]}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>{ABOUT_DICT.SpecializationText[language]}</p>
                <p>{ABOUT_DICT.ExperienceText[language]}</p>
                <p>{ABOUT_DICT.SynergyText[language]}</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/smart-law-legal-advice-icons-astute-lawyer-working-tools-lawyers-office (3).jpg"
                alt="LEXAVIK Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our History Section */}
      <div id="history" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">
              {ABOUT_DICT.OurHistory[language]}
            </span>
            <h2 className="text-4xl font-light text-secondary lg:text-5xl mb-6">
              {language === 'fr' ? "Une Décennie d'Excellence" : "A Decade of Excellence"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary-700 text-6xl font-bold mb-4">2015</div>
              <h3 className="text-xl font-medium text-secondary mb-3">
                {language === 'fr' ? "Création du Cabinet" : "Firm Founded"}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? "Le Cabinet LEXAVIK est créé en avril 2015 avec une vision claire : offrir des services juridiques d'excellence en droit des affaires."
                  : "LEXAVIK Law Firm was founded in April 2015 with a clear vision: to provide excellent legal services in business law."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary-700 text-6xl font-bold mb-4">2018</div>
              <h3 className="text-xl font-medium text-secondary mb-3">
                {language === 'fr' ? "Expansion Internationale" : "International Expansion"}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? "Développement de notre réseau de partenaires à travers l'Afrique et renforcement de notre présence internationale."
                  : "Development of our partner network across Africa and strengthening of our international presence."}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary-700 text-6xl font-bold mb-4">2024</div>
              <h3 className="text-xl font-medium text-secondary mb-3">
                {language === 'fr' ? "Leader Régional" : "Regional Leader"}
              </h3>
              <p className="text-gray-600">
                {language === 'fr'
                  ? "Aujourd'hui, LEXAVIK est reconnu comme l'un des cabinets leaders en droit des affaires OHADA et droit communautaire."
                  : "Today, LEXAVIK is recognized as one of the leading firms in OHADA business law and community law."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div id="values" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">
              {ABOUT_DICT.OurValues[language]}
            </span>
            <h2 className="text-4xl font-light text-secondary lg:text-5xl mb-6">
              {language === 'fr' ? "Les Valeurs Qui Nous Guident" : "The Values That Guide Us"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6 flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary-700/10 text-primary-700">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-medium text-secondary mb-3">
                {ABOUT_DICT.Excellence[language]}
              </h3>
              <p className="text-gray-600">
                {ABOUT_DICT.ExcellenceDesc[language]}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary-700/10 text-primary-700">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-medium text-secondary mb-3">
                {ABOUT_DICT.Integrity[language]}
              </h3>
              <p className="text-gray-600">
                {ABOUT_DICT.IntegrityDesc[language]}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary-700/10 text-primary-700">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-medium text-secondary mb-3">
                {ABOUT_DICT.Innovation[language]}
              </h3>
              <p className="text-gray-600">
                {ABOUT_DICT.InnovationDesc[language]}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-primary-700/10 text-primary-700">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-medium text-secondary mb-3">
                {ABOUT_DICT.Commitment[language]}
              </h3>
              <p className="text-gray-600">
                {ABOUT_DICT.CommitmentDesc[language]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise & Presence Section */}
      <div className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center text-white">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-12 w-12 text-primary-700" />
                <h3 className="text-3xl font-light">
                  {ABOUT_DICT.GlobalPresence[language]}
                </h3>
              </div>
              <p className="text-gray-300 text-lg">
                {ABOUT_DICT.GlobalPresenceText[language]}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-12 w-12 text-primary-700" />
                <h3 className="text-3xl font-light">
                  {ABOUT_DICT.ClientDiversity[language]}
                </h3>
              </div>
              <p className="text-gray-300 text-lg">
                {ABOUT_DICT.ClientDiversityText[language]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Bono Section */}
      <div id="probono" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">
            {ABOUT_DICT.ProBono[language]}
          </span>
          <h2 className="text-4xl font-light text-secondary lg:text-5xl mb-6">
            {language === 'fr' ? "Engagement envers la Communauté" : "Commitment to the Community"}
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {ABOUT_DICT.ProBonoText[language]}
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light text-secondary mb-6">
            {language === 'fr' ? "Travaillons Ensemble" : "Let's Work Together"}
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            {language === 'fr'
              ? "Découvrez comment LEXAVIK peut vous accompagner dans vos projets juridiques."
              : "Discover how LEXAVIK can support you in your legal projects."}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button className="group rounded bg-secondary px-8 py-6 text-white hover:bg-secondary-700 transition-all">
                {ABOUT_DICT.ContactUs[language]}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/team">
              <Button className="group rounded bg-primary-700 px-8 py-6 text-white hover:bg-primary-800 transition-all">
                {language === 'fr' ? "Rencontrer l'Équipe" : "Meet the Team"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
