import Image from "next/image"
import { ArrowRight, Users, Plane, ShoppingCart, Building2, Scale, Shield, CheckCircle2 } from "lucide-react"
import { PRACTICE_AREAS } from "@/constants/company"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroBanner from "@/components/HeroBanner"

// Map icon names to actual icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Plane,
  ShoppingCart,
  Building2,
  Scale,
  Shield
};

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner
        subtitle="Notre Expertise"
        title="Des solutions juridiques sur mesure"
        description="Découvrez nos domaines d'expertise et comment nous pouvons vous accompagner dans la résolution de vos problématiques juridiques."
        overlayColor="secondary"
        overlayOpacity={55}
        className="pt-32"
      />

      {/* Services Section */}
      <div className="px-4 py-20 sm:px-6 lg:px-8 font-[family-name:var(--font-dm-sans)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area) => {
              const IconComponent = iconMap[area.icon] || Scale;
              return (
                <div
                  key={area.id}
                  className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-2xl hover:border-primary-700 transition-all duration-300"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-700/10 text-primary-700 transition-all group-hover:bg-primary-700 group-hover:text-white">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="mb-3 text-2xl font-medium text-secondary group-hover:text-primary-700 transition-colors">
                    {area.title.fr}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {area.description.fr}
                  </p>
                  <Link
                    href={`/expertise/${area.id}`}
                    className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/smart-law-legal-advice-icons-astute-lawyer-working-tools-lawyers-office (3).jpg"
                alt="Professional Legal Services"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">
                Why Choose LEXAVIK
              </span>
              <h2 className="text-4xl font-light text-secondary lg:text-5xl mb-6">
                Professional Lawyer At Your Complete Legal Solution
              </h2>
              <p className="text-gray-600 mb-8">
                Créé en avril 2015, LEXAVIK offre un service juridique complet combinant expertise locale et internationale. Nous maîtrisons le droit OHADA, le droit européen des affaires et les réglementations communautaires pour répondre aux besoins de nos clients.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Expertise OHADA et Communautaire</h4>
                    <p className="text-gray-600 text-sm">
                      Maîtrise du droit des affaires OHADA et des réglementations CEMAC, UEMOA, CIMA, OAPI
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Présence Internationale</h4>
                    <p className="text-gray-600 text-sm">
                      Bureaux à Paris et Abidjan avec réseau de partenaires à travers l&apos;Afrique
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Équipe Pluridisciplinaire</h4>
                    <p className="text-gray-600 text-sm">
                      Avocats docteurs en droit et agrégés spécialisés en droit des affaires
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-secondary mb-1">Service Complet</h4>
                    <p className="text-gray-600 text-sm">
                      Du conseil à la défense en contentieux devant les juridictions nationales et internationales
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="group rounded bg-secondary px-8 py-6 text-white hover:bg-secondary-700 transition-all">
                    Contactez-nous
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Frequently Asked Question For Clients
          </h2>
          <p className="text-gray-300 mb-8">
            Besoin de conseil juridique? Nos experts sont là pour vous aider.
            Contactez-nous dès aujourd&apos;hui pour une consultation.
          </p>
          <Link href="/contact">
            <Button className="group rounded bg-primary-700 px-8 py-6 text-white hover:bg-primary-800 transition-all">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

