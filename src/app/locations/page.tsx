import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function LocationsPage() {

  return (
    <div className="min-h-screen bg-secondary-950 px-4 pt-44 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 mx-auto max-w-7xl">
        <h1 className="mb-6 text-center text-4xl font-light leading-tight lg:text-5xl text-primary-700">Locations</h1>
        <p className="text-lg text-center leading-relaxed text-white">Strategically spread across the Continent</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            {/* Abidjan Section */}
            <Link href="/cities/abidjan" className="group relative h-[50vh] md:h-screen overflow-hidden bg-black">
                <Image
                src="/babi.jpg"
                alt="Abidjan cityscape"
                width={1200}
                height={800}
                className="object-cover h-full w-full opacity-70 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                <div>
                    <p className="text-amber-400 text-sm md:text-base tracking-wider mb-2">
                    AFRICA <span className="text-white/70">{">"} CÔTE D&apos;IVOIRE</span>
                    </p>
                    <h2 className="text-white text-4xl md:text-6xl font-serif mb-10">Abidjan</h2>
                    <div className="flex flex-col text-white">
                        <p className="text-sm md:text-base tracking-wider mb-2">LEXAVIK</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Conseils juridiques agréés</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Ivoire Trade Center (ITC)</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Tour C, 2e étage</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Boulevard Hassan II, Cocody</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">01 BP 10889</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Abidjan 01</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Côte d’Ivoire</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm uppercase tracking-wider">Voir sur une carte</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-24 md:w-48 md:h-32">
                <div className="absolute bottom-0 right-0 w-full h-full bg-amber-400/80 -skew-x-12 transform origin-bottom-right" />
                </div>
            </Link>

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
                    EUROPE <span className="text-white/70">{">"} FRANCE</span>
                    </p>
                    <h2 className="text-white text-4xl md:text-6xl font-serif mb-10">Paris</h2>
                    <div className="flex flex-col text-white">
                        <p className="text-sm md:text-base tracking-wider mb-2">LEXAVIK</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Cabinet d&apos;Avocats</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">93, Rue de Maubeuge</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">75010 Paris</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">France</p>
                        <p className="text-sm md:text-base tracking-wider mb-2 mt-4">Tél: +33 (0) 1.53.16.05.40</p>
                        <p className="text-sm md:text-base tracking-wider mb-2">Email: akwaba@lexavik.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm uppercase tracking-wider">Voir sur une carte</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-24 md:w-48 md:h-32">
                <div className="absolute bottom-0 right-0 w-full h-full bg-amber-400/80 -skew-x-12 transform origin-bottom-right" />
                </div>
            </Link>
        </div>
    </div>
  )
}

