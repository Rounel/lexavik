"use client"

import HeroBanner from "@/components/HeroBanner"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useStore } from "@/hooks/use-language"
import { LOCATIONS_DICT } from "@/hooks/dictionnary"


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

        <div className="max-h-[55dvh]">
            {/* Casablanca Section */}
            <div className="group relative h-[55dvh] overflow-hidden bg-black">
                <Image
                    src="/paris.jpg"
                    alt="Casablanca cityscape"
                    width={1200}
                    height={800}
                    className="object-cover h-full w-full opacity-70 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between max-w-360 mx-auto">
                    <div>
                        <p className="text-amber-400 text-sm md:text-base tracking-wider mb-2">
                        {LOCATIONS_DICT.Europe[language]} <span className="text-white/70">{">"} {LOCATIONS_DICT.France[language]}</span>
                        </p>
                        <h2 className="text-white text-4xl md:text-6xl font-serif mb-10">{LOCATIONS_DICT.Paris[language]}</h2>
                        <div className="flex flex-col text-white">
                            <p className="text-sm md:text-base tracking-wider mb-2">LEXAVIK</p>
                            <p className="text-2xl font-semibold text-white  tracking-wider mb-2">{LOCATIONS_DICT.LawFirm[language]}</p>
                            <p className="text-sm md:text-base tracking-wider mb-2">8, rue de Chantilly</p>
                            <p className="text-sm md:text-base tracking-wider mb-2">75009 Paris</p>
                            <p className="text-sm md:text-base tracking-wider mb-2">France</p>
                            <p className="text-sm md:text-base tracking-wider mb-2 mt-4">Tél.: +33(6) 24 05 03 22 / 07 52 71 42 43</p>
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
            </div>
        </div>

        <div className="py-6 lg:py-12">
            <div className="max-w-360 px-4 lg:px-10 flex flex-col justify-between mx-auto">
                <div className="mb-10">
                    <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">{LOCATIONS_DICT.InternationalPartners[language]}</span>
                    <h2 className="mb-6 text-4xl font-light text-secondary lg:text-5xl">
                    {LOCATIONS_DICT.InternationalPartners[language]}
                    </h2>
                    {/* <p className="text-lg leading-relaxed text-gray-300 max-w-xl mx-auto">
                    {LOCATIONS_DICT.InternationalPartners[language]}
                    </p> */}
                </div>

                <div className="grid grid-cols-2">
                    <div className="">
                        <span>ABIDJAN-CÔTE D'IVOIRE </span>
                        <h3 className="text-2xl font-semibold text-primary mb-4">Cabinet OBENG-KOFI Fian </h3>
                        <p className="text-sm md:text-base tracking-wider mb-2">Cocody Canebière,</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Route du Lycée Technique </p>
                        <p className="text-sm md:text-base tracking-wider mb-2">01 B.P. 6514 Abidjan 01 (RCI)</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Tél : + (225) 22 44 68 36 / + (225) 22 44 68 46</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Fax : + (225) 22 44 68 72</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">obengfian@yahoo.fr</p>
                    </div>
                    <div className="">
                        <span>MALI</span>
                        <h3 className="text-2xl font-semibold text-primary mb-4">Cabinet de Me MAKAN Diallo</h3>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

