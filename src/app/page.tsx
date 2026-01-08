"use client"

import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRACTICE_AREAS, TEAM_MEMBERS, LEGAL_PROCESS, EXPERTISE_POLES } from "@/constants/company";
import PracticeSection from "@/components/PracticeSection";
import { useStore } from "@/hooks/use-language";
import { HOME_DICT, COMMON_DICT } from "@/hooks/dictionnary";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-dm-serif-text)] relative">
      <HeroSection />
      <AboutSection />
      {/* <StatsSection /> */}
      <PracticeSection />

      {/* Awards Section */}
      {/* <AwardsSection /> */}

      <ProcessSection />
      <TeamPreview />
      {/* <TestimonialsSection /> */}
      {/* <NewsPage /> */}
    </div>
  );
}

// About Section - "Why Choose LEXAVIK"
function AboutSection() {
  const { language } = useStore();

  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-0 font-[family-name:var(--font-dm-sans)]">
      <div className="mx-auto w-full max-w-480">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative h-[700px]">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/team (12).jpeg"
                alt="Legal Excellence"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative overlay box */}
            {/* <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-lg shadow-xl max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-full p-4">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-white text-2xl font-bold">15+</p>
                  <p className="text-white text-sm">Years Experience</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Content Column */}
          <div className="flex flex-col justify-center py-10">
            <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">{HOME_DICT.WhyChoose[language]}</span>
            <h2 className="mb-6 text-4xl font-light text-secondary lg:text-5xl">
              {HOME_DICT.TrustedLegalPartner[language]}
            </h2>

            <p className="text-gray-600 mb-6 max-w-180 text-justify leading-relaxed">
              {HOME_DICT.WhyChooseDescription[language]}
            </p>

            <p className="text-gray-600 mb-8 max-w-180 text-justify leading-relaxed">
              {HOME_DICT.FieldExperience[language]}
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-secondary mb-1">{HOME_DICT.OHADAExpertise[language]}</h4>
                  <p className="text-gray-600 text-sm">{HOME_DICT.OHADAExpertiseDesc[language]}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-secondary mb-1">{HOME_DICT.InternationalPresence[language]}</h4>
                  <p className="text-gray-600 text-sm">{HOME_DICT.InternationalPresenceDesc[language]}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-secondary mb-1">{HOME_DICT.CompleteService[language]}</h4>
                  <p className="text-gray-600 text-sm">{HOME_DICT.CompleteServiceDesc[language]}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/expertise">
                <Button className="group rounded bg-secondary px-8 py-6 text-white hover:bg-secondary-700 transition-all">
                  {HOME_DICT.DiscoverServices[language]}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// Team Preview Section (links to full team page)
function TeamPreview() {
  const { language } = useStore();

  return (
    <div className="bg-secondary-950 px-4 py-20 sm:px-6 lg:px-8 font-[family-name:var(--font-dm-sans)]">
      <div className="mx-auto max-w-360 gap-10 flex justify-between">
        {/* Header */}
        <div className="max-w-lg flex flex-col justify-between">
          <div className="">
            <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">{HOME_DICT.OurTeam[language]}</span>
            <h2 className="text-4xl font-light leading-tight lg:text-5xl text-white mb-4">
              {HOME_DICT.ExpertLawyers[language]}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 max-w-xl mx-auto">
              {HOME_DICT.TeamDescription[language]}
            </p>
          </div>
          <Button className="group w-max rounded bg-primary px-8 py-6 text-white hover:bg-secondary-700 transition-all">
            {HOME_DICT.DiscoverExperts[language]}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.filter(member => member.status === 'associate').map((member, index) => (
            <div key={member.id} className="group relative overflow-hidden rounded-lg bg-white transition-all hover:shadow-xl">
              <div className="relative aspect-3/4 w-full h-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover transition-transform duration-500 ${index === 2 ? "scale-200" : ""} ${index === 1 ? "scale-130" : ""}`}
                />
              </div>
              <div className="p-2 absolute bottom-0 left-0 bg-linear-to-t from-black from-90 to-transparent pt-20 w-full">
                <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
                <p className="text-primary-700 text-sm font-medium mb-2">{member.role[language]}</p>
                {/* <p className="text-gray-400 text-sm">{member.education[language]}</p> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}


// Legal Process Section
function ProcessSection() {
  const { language } = useStore();

  return (
    <div className="py-20 bg-[url('/1.jpg')] w-full bg-cover bg-center bg-no-repeat font-(family-name:--font-dm-sans) relative">
      <div className="absolute top-0 left-0 h-full w-full bg-black/60"></div>
      <div className="mx-auto w-full max-w-360 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 relative">
        {/* Header */}
        <div className="sticky top-0 left-0">
          <div className="max-h-max sticky top-0 left-0">
            <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">{HOME_DICT.OurProcess[language]}</span>
            <h2 className="text-4xl font-light text-white lg:text-5xl mb-4">
              {HOME_DICT.StreamlinedLegalProcess[language]}
            </h2>
            <p className="text-gray-300 max-w-2xl">
              {HOME_DICT.ProcessDescription[language]}
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 top-10 bottom-0 w-0.5 bg-black h-[85%] hidden lg:block" style={{ left: '2rem' }}></div>

          <div className="space-y-6">
            {LEGAL_PROCESS.map((step, index) => (
              <div key={step.step} className="relative flex items-start">
                {/* Step Number Circle */}
                <div className={`shrink-0 my-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold z-10 ${index % 2 === 0 ? 'bg-secondary-900 text-white' : 'bg-primary text-white'}`}>
                  {step.step}
                </div>

                {/* Step Content */}
                <div className={`flex-1 px-6 pb-6 border-b border-primary`}>
                  <h3 className={`text-xl font-semibold mb-4 text-white`}>
                    {step.title[language]}
                  </h3>
                  <p className={`text-white font-light`}>
                    {step.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
