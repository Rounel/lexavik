"use client"

import Image from "next/image"
import { ArrowRight, Target, Heart, Lightbulb, Award, Users, Globe } from "lucide-react"
import { ABOUT_DICT } from "@/hooks/dictionnary/about"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroBanner from "@/components/HeroBanner"
import { useStore } from "@/hooks/use-language"

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'left' | 'center';
}

const ValueCard = ({ icon, title, description, variant = 'center' }: ValueCardProps) => (
  <div className={`${variant === 'left' ? 'bg-secondary-400/10 p-6' : 'text-center'} rounded-md max-w-md flex flex-col`}>
    <div className={`mb-12 flex size-18 ${variant === 'left' ? '' : 'mx-auto'} items-center justify-center rounded-full bg-primary-700/10 text-primary-700`}>
      {icon}
    </div>
    {variant === 'left' ? (
      <div className="shrink-0 grow flex flex-col justify-between">
        <p className="text-gray-600 mb-2 text-justify grow shrink-0">
          {description}
        </p>
        <h3 className="border-t border-primary-500 pt-2 mt-auto text-xl font-medium text-secondary">
          {title}
        </h3>
      </div>
    ) : (
      <>
        <h3 className="text-xl font-medium text-secondary mb-3">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </>
    )}
  </div>
);

export default function AboutPage() {
  const { language } = useStore();

  const values = [
    {
      icon: <Image src="/excellence.svg" alt="Excellence" width={30} height={30} className="h-10 w-10" />,
      title: ABOUT_DICT.Excellence[language],
      description: ABOUT_DICT.ExcellenceDesc[language]
    },
    {
      icon: <Image src="/integrite.svg" alt="Integrity" width={30} height={30} className="h-10 w-10" />,
      title: ABOUT_DICT.Integrity[language],
      description: ABOUT_DICT.IntegrityDesc[language]
    },
    {
      icon: <Image src="/innovation.svg" alt="Innovation" width={30} height={30} className="h-10 w-10" />,
      title: ABOUT_DICT.Innovation[language],
      description: ABOUT_DICT.InnovationDesc[language]
    },
    {
      icon: <Image src="/engagement.svg" alt="Commitment" width={30} height={30} className="h-10 w-10" />,
      title: ABOUT_DICT.Commitment[language],
      description: ABOUT_DICT.CommitmentDesc[language]
    }
  ]

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
              <div className="space-y-4 text-gray-600 text-justify">
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

      {/* Our Values Section */}
      <div id="values" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-360 gap-16 flex flex-col lg:flex-row justify-between">
          <div className="my-auto">
            <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">
              {ABOUT_DICT.OurValues[language]}
            </span>
            <h2 className="text-4xl font-semibold text-secondary lg:text-5xl mb-6 ">
              {ABOUT_DICT.ValuesGuidingUs[language]}
            </h2>
          </div>

          <div className="grid grid-cols-4 lg:grid-cols-2 gap-8">
            {values.map((card, index) => (
              <ValueCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                variant="left"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expertise & Presence Section */}
      <div className="relative bg-secondary-950 py-20 px-4 sm:px-6 lg:px-8 h-135">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/20 to-secondary-900/50">
        <Image src="/bg-earth.png" alt="Background" fill className="object-cover grayscale-100 opacity-30" />
        </div>
        <div className="mx-auto max-w-7xl relative z-10">
          
          <div className="my-auto">
            {/* <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">
              {ABOUT_DICT.OurValues[language]}
            </span> */}
            <h2 className="text-4xl font-semibold text-primary-600 lg:text-5xl mb-6 max-w-4xl">
              {ABOUT_DICT.GlobalPresence[language]}
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl leading-relaxed">
              {ABOUT_DICT.GlobalPresenceText[language]}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light text-secondary mb-6">
            {ABOUT_DICT.WorkTogether[language]}
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            {ABOUT_DICT.WorkTogetherDesc[language]}
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
                {ABOUT_DICT.MeetTheTeam[language]}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
