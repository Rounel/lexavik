"use client"

import Image from "next/image"
import { Mail, Phone, Linkedin } from "lucide-react"
import { TEAM_MEMBERS } from "@/constants/company"
import HeroBanner from "@/components/HeroBanner"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner
        subtitle="Our Team"
        title="Exceptional Legal Professionals"
        description="Découvrez le talent et le dévouement de notre équipe juridique exceptionnelle. Rencontrez les experts engagés à protéger vos droits et à obtenir des succès juridiques."
        overlayColor="secondary"
        overlayOpacity={55}
        className="pt-40" // Optionnel : ajustez le padding-top selon vos besoins
      />

      {/* Team Grid */}
      <div className="px-4 py-20 sm:px-6 lg:px-8 font-[family-name:var(--font-dm-sans)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Legal Process Section */}
      {/* <div className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">Our Process</span>
            <h2 className="text-4xl font-light text-white lg:text-5xl mb-4">
              Streamlined Legal Process Of Service
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {LEGAL_PROCESS.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-700/10 text-primary-700 text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-medium text-secondary mb-2">{step.title.fr}</h3>
                <p className="text-gray-600 text-sm">{step.description.fr}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

interface TeamMemberCardProps {
  member: typeof TEAM_MEMBERS[number]
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Social Media Overlay */}
        <div className="absolute inset-0 bg-secondary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={`mailto:${member.email}`}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary-700 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${member.phone}`}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary-700 hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary-700 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium text-secondary mb-1 group-hover:text-primary-700 transition-colors">
          {member.name}
        </h3>
        <p className="text-primary-700 font-medium text-sm mb-2">{member.role.fr}</p>
        <p className="text-gray-600 text-sm mb-3">{member.education.fr}</p>
        <p className="text-gray-500 text-xs">{member.specialization.fr}</p>
      </div>
    </div>
  )
}

