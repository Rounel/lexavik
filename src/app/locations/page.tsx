"use client"

import HeroBanner from "@/components/HeroBanner"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useStore } from "@/hooks/use-language"
import { LOCATIONS_DICT, COMMON_DICT } from "@/hooks/dictionnary"


export default function LocationsPage() {
  const { language } = useStore()

  return (
    <div className="min-h-screen bg-white">
        <HeroBanner
            subtitle={LOCATIONS_DICT.Locations[language]}
            title={LOCATIONS_DICT.StrategicallySpread[language]}
            description=""
            className="pt-32"
        />

        <div className="h-[50dvh]">
            {/* Casablanca Section */}
            <Link href="/cities/casablanca" className="group relative h-[50vh] md:h-screen overflow-hidden bg-black">
                <Image
                src="/paris.jpg"
                alt="Casablanca cityscape"
                width={1200}
                height={800}
                className="object-cover h-full w-full opacity-70 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                <div>
                    <p className="text-amber-400 text-sm md:text-base tracking-wider mb-2">
                    {LOCATIONS_DICT.Europe[language]} <span className="text-white/70">{">"} {LOCATIONS_DICT.France[language]}</span>
                    </p>
                    <h2 className="text-white text-4xl md:text-6xl font-serif mb-10">{LOCATIONS_DICT.Paris[language]}</h2>
                    <div className="flex flex-col text-white">
                        <p className="text-sm md:text-base tracking-wider mb-2">LEXAVIK</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">{LOCATIONS_DICT.LawFirm[language]}</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">93, Rue de Maubeuge</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">75010 Paris</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">France</p>
                        <p className="text-sm md:text-base tracking-wider mb-2 mt-4">Tél: +33 (0) 1.53.16.05.40</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Email: akwaba@lexavik.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm uppercase tracking-wider">{LOCATIONS_DICT.ViewOnMap[language]}</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-24 md:w-48 md:h-32">
                <div className="absolute bottom-0 right-0 w-full h-full bg-amber-400/80 -skew-x-12 transform origin-bottom-right" />
                </div>
            </Link>
        </div>

        <div className="h-[50dvh]">
            
        </div>
    </div>
  )
}

