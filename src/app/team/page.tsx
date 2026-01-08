"use client"

import Image from "next/image"
import { Mail, Phone, Linkedin, Search } from "lucide-react"
import { TEAM_MEMBERS } from "@/constants/company"
import HeroBanner from "@/components/HeroBanner"
import { useState, useMemo } from "react"
import { useStore } from "@/hooks/use-language"
import { TEAM_DICT } from "@/hooks/dictionnary"

export default function TeamPage() {
  const { language } = useStore()
  const [searchName, setSearchName] = useState<string>("");
  const [searchSpecialization, setSearchSpecialization] = useState<string>("");

  // Filtrer les membres de l'équipe
  const filteredMembers = useMemo(() => {
    let filtered_associate = TEAM_MEMBERS.filter(member => member.status === "associate");
    let filtered_partner = TEAM_MEMBERS.filter(member => member.status === "partner");

    // Filtrer par nom
    if (searchName) {
      const nameLower = searchName.toLowerCase();
      filtered_associate = filtered_associate.filter(member =>
        member.name.toLowerCase().includes(nameLower)
      );
      filtered_partner = filtered_partner.filter(member =>
        member.name.toLowerCase().includes(nameLower)
      );
    }

    // Filtrer par spécialisation (type de droit)
    if (searchSpecialization) {
      const specLower = searchSpecialization.toLowerCase();
      filtered_associate = filtered_associate.filter(member =>
        member.specialization.fr.toLowerCase().includes(specLower) ||
        member.specialization.en.toLowerCase().includes(specLower)
      );
      filtered_partner = filtered_partner.filter(member =>
        member.specialization.fr.toLowerCase().includes(specLower) ||
        member.specialization.en.toLowerCase().includes(specLower)
      );
    }

    return [[...filtered_associate], [...filtered_partner]];
  }, [searchName, searchSpecialization]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner
        subtitle={TEAM_DICT.OurTeam[language]}
        title={TEAM_DICT.ExceptionalProfessionals[language]}
        description={`${TEAM_DICT.TeamDescription1[language]} ${TEAM_DICT.TeamDescription2[language]}`}
        overlayColor="secondary"
        overlayOpacity={55}
        className="pt-40"
      />

      {/* Search Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="">
            <h3 className="text-2xl font-medium text-secondary mb-6">
              {TEAM_DICT.SearchLawyer[language]}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nom Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {TEAM_DICT.LawyerName[language]}
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    placeholder={TEAM_DICT.SearchByName[language]}
                    className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Type de droit Input */}
              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-2">
                  {TEAM_DICT.TypeOfLaw[language]}
                </label>
                <div className="relative">
                  <input
                    id="specialization"
                    type="text"
                    value={searchSpecialization}
                    onChange={(e) => setSearchSpecialization(e.target.value)}
                    placeholder={TEAM_DICT.TypeOfLawPlaceholder[language]}
                    className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="px-4 py-10 sm:px-6 lg:px-8 font-[family-name:var(--font-dm-sans)]">
        <div className="mx-auto max-w-7xl">
          {/* Results count */}
          {(searchName || searchSpecialization) && (
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-secondary">
                {filteredMembers[0].length + filteredMembers[1].length} {TEAM_DICT.ResultsFound[language]}
              </h3>
            </div>
          )}

          {/* Associate grid */}
          <div className={`${filteredMembers[0].length > 0 ? '' : 'hidden'} w-full py-3 border-b border-gray-500 mb-3 text-lg font-bold text-secondary-950`}>
            {TEAM_DICT.Partners[language]}
          </div>
          {filteredMembers[0].length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {filteredMembers[0].map((member) => (
                <TeamMemberCard key={member.id} member={member} language={language} />
              ))}
            </div>
          ) : (
            <div className={`${filteredMembers[0].length > 0 ? '' : 'hidden'} text-center py-12`}>
              <p className="text-gray-600 text-lg">
                {TEAM_DICT.NoLawyerFound[language]}
              </p>
            </div>
          )}

          {/* Partners grid */}
          <div className={`${filteredMembers[1].length > 0 ? '' : 'hidden'} w-full py-3 border-b border-gray-500 mt-10 mb-3 text-lg font-bold text-secondary-950`}>
            {TEAM_DICT.Associates[language]}
          </div>
          {filteredMembers[1].length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {filteredMembers[1].map((member) => (
                <TeamMemberCard key={member.id} member={member} language={language} />
              ))}
            </div>
          ) : (
            <div className={`${filteredMembers[1].length > 0 ? '' : 'hidden'} text-center py-12`}>
              <p className="text-gray-600 text-lg">
                {TEAM_DICT.NoLawyerFound[language]}
              </p>
            </div>
          )}
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
  language: 'en' | 'fr'
}

function TeamMemberCard({ member, language }: TeamMemberCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-3/4 overflow-hidden bg-gray-200">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Social Media Overlay */}
        <div className="flex-col absolute inset-0 bg-secondary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-5">
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
          <div className="px-4 text-justify">
            <p className="text-gray-300 text-sm mb-3">{member.education[language]}</p>
            <p className="text-gray-100 text-xs">{member.specialization[language]}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium text-secondary mb-1 group-hover:text-primary-700 transition-colors">
          {member.name}
        </h3>
        <p className="text-primary-700 font-medium text-sm mb-2">{member.role[language]}</p>
      </div>
    </div>
  )
}

