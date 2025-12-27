"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { PRACTICE_AREAS, TEAM_MEMBERS } from "@/constants/company"
import { PRACTICES_DICT } from "@/hooks/dictionnary/practices"
import { Button } from "@/components/ui/button"
import HeroBanner from "@/components/HeroBanner"
import { useStore } from "@/hooks/use-language"

export default function PracticeDetailPage() {
  const params = useParams()
  const { language } = useStore()
  const practiceId = params.id as string

  const practice = PRACTICE_AREAS.find(p => p.id === practiceId)

  if (!practice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            {language === 'fr' ? "Pratique Non Trouvée" : "Practice Not Found"}
          </h1>
          <Link href="/practices">
            <Button className="bg-primary-700 hover:bg-primary-800">
              {language === 'fr' ? "Retour aux Pratiques" : "Back to Practices"}
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // Filter team members who specialize in this practice
  const relevantTeamMembers = TEAM_MEMBERS.filter(member =>
    member.specialization[language].toLowerCase().includes(practice.title[language].toLowerCase().split(' ')[0])
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner
        subtitle={PRACTICES_DICT.PracticeAreas[language]}
        title={practice.title[language]}
        description={practice.description[language]}
        overlayColor="secondary"
        overlayOpacity={55}
        className="pt-32"
      />

      {/* Main Content */}
      <div className="px-4 py-20 sm:px-6 lg:px-8 font-[family-name:var(--font-dm-sans)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-light text-secondary mb-6">
                  {PRACTICES_DICT.OurExpertise[language]}
                </h2>

                <div className="text-gray-600 leading-relaxed space-y-4">
                  {/* Content based on practice ID - This would ideally come from a CMS or detailed content file */}
                  {practiceId === 'ohada-law' && (
                    <>
                      <p>
                        {language === 'fr'
                          ? "Le droit OHADA (Organisation pour l'Harmonisation en Afrique du Droit des Affaires) constitue le socle juridique des affaires dans 17 États africains. Notre cabinet possède une expertise reconnue dans l'application et l'interprétation de ces textes unifiés."
                          : "OHADA law (Organization for the Harmonization of Business Law in Africa) forms the legal foundation for business across 17 African states. Our firm has recognized expertise in the application and interpretation of these unified texts."}
                      </p>
                      <h3 className="text-2xl font-medium text-secondary mt-8 mb-4">
                        {PRACTICES_DICT.KeyServices[language]}
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{language === 'fr' ? "Constitution et fonctionnement des sociétés commerciales et GIE" : "Incorporation and operation of commercial companies and Economic Interest Groups"}</li>
                        <li>{language === 'fr' ? "Conseil en droit commercial général" : "General commercial law advice"}</li>
                        <li>{language === 'fr' ? "Structuration et mise en place de sûretés (hypothèque, nantissement, gage)" : "Structuring and implementation of securities (mortgage, pledge, lien)"}</li>
                        <li>{language === 'fr' ? "Recouvrement de créances et voies d'exécution" : "Debt recovery and enforcement proceedings"}</li>
                        <li>{language === 'fr' ? "Procédures collectives et restructuration" : "Collective proceedings and restructuring"}</li>
                        <li>{language === 'fr' ? "Arbitrage OHADA" : "OHADA arbitration"}</li>
                      </ul>
                    </>
                  )}

                  {practiceId === 'corporate-law' && (
                    <>
                      <p>
                        {language === 'fr'
                          ? "Le droit des sociétés est au cœur de notre pratique. Nous accompagnons nos clients dans toutes les étapes de la vie de leur entreprise, de la constitution à la transmission, en passant par les opérations de croissance externe."
                          : "Corporate law is at the heart of our practice. We support our clients through all stages of their company's life, from incorporation to transmission, including external growth operations."}
                      </p>
                      <h3 className="text-2xl font-medium text-secondary mt-8 mb-4">
                        {PRACTICES_DICT.KeyServices[language]}
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{language === 'fr' ? "Constitution de sociétés et choix de structure juridique" : "Company incorporation and legal structure selection"}</li>
                        <li>{language === 'fr' ? "Fusions et acquisitions (M&A)" : "Mergers and acquisitions (M&A)"}</li>
                        <li>{language === 'fr' ? "Pactes d'actionnaires et gouvernance d'entreprise" : "Shareholders' agreements and corporate governance"}</li>
                        <li>{language === 'fr' ? "Audits juridiques (due diligence)" : "Legal audits (due diligence)"}</li>
                        <li>{language === 'fr' ? "Restructurations et réorganisations" : "Restructuring and reorganizations"}</li>
                        <li>{language === 'fr' ? "Opérations sur le capital" : "Capital transactions"}</li>
                      </ul>
                    </>
                  )}

                  {/* Default content for other practices */}
                  {!['ohada-law', 'corporate-law'].includes(practiceId) && (
                    <>
                      <p>{practice.description[language]}</p>
                      <h3 className="text-2xl font-medium text-secondary mt-8 mb-4">
                        {PRACTICES_DICT.KeyServices[language]}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'fr'
                          ? "Nous offrons un service complet et personnalisé dans ce domaine de pratique. Contactez-nous pour en savoir plus sur nos services spécifiques."
                          : "We offer comprehensive and personalized service in this practice area. Contact us to learn more about our specific services."}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact CTA */}
              <div className="bg-secondary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">
                  {PRACTICES_DICT.ContactExpert[language]}
                </h3>
                <p className="text-gray-300 mb-6">
                  {language === 'fr'
                    ? "Nos experts sont à votre disposition pour répondre à vos questions."
                    : "Our experts are available to answer your questions."}
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-primary-700 hover:bg-primary-800">
                    {language === 'fr' ? "Nous Contacter" : "Contact Us"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Related Practices */}
              <div className="border border-gray-200 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-secondary mb-4">
                  {language === 'fr' ? "Autres Domaines" : "Other Practices"}
                </h3>
                <ul className="space-y-3">
                  {PRACTICE_AREAS.filter(p => p.id !== practiceId).slice(0, 5).map(p => (
                    <li key={p.id}>
                      <Link
                        href={`/practices/${p.id}`}
                        className="text-gray-600 hover:text-primary-700 transition-colors flex items-center gap-2"
                      >
                        <ArrowRight className="h-4 w-4" />
                        {p.title[language]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {relevantTeamMembers.length > 0 && (
        <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-secondary mb-4">
                {PRACTICES_DICT.KeyContacts[language]}
              </h2>
              <p className="text-gray-600">
                {language === 'fr'
                  ? "Rencontrez nos avocats spécialisés dans ce domaine"
                  : "Meet our lawyers specialized in this practice area"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relevantTeamMembers.map(member => (
                <div key={member.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-secondary mb-2">{member.name}</h3>
                  <p className="text-primary-700 mb-4">{member.role[language]}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${member.email}`} className="hover:text-primary-700">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a href={`tel:${member.phone}`} className="hover:text-primary-700">
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            {language === 'fr'
              ? "Prêt à Démarrer Votre Projet ?"
              : "Ready to Start Your Project?"}
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            {language === 'fr'
              ? "Contactez-nous dès aujourd'hui pour discuter de vos besoins juridiques."
              : "Contact us today to discuss your legal needs."}
          </p>
          <Link href="/contact">
            <Button className="group rounded bg-primary-700 px-8 py-6 text-white hover:bg-primary-800 transition-all">
              {language === 'fr' ? "Prendre Rendez-vous" : "Schedule an Appointment"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
