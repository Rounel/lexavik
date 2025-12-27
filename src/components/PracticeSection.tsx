"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useStore } from "@/hooks/use-language"
import Image from "next/image"
import { PRACTICE_AREAS } from "@/constants/company"


export default function PracticeSection() {
  const { language } = useStore();

  return (
    <div className="relative bg-linear-to-b from-[#F5F1EB] to-[#FFFAF6] w-full px-4 py-20 sm:px-6 lg:px-0 font-[family-name:var(--font-dm-sans)]">
      <div className="mx-auto max-w-360">
        {/* Header */}
        <div className="flex justify-between mx-auto items-end mb-16 lg:px-8 w-full">
          <div className="">
            <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">What We Are Expert At</span>
            <h2 className="text-4xl font-light text-secondary lg:text-5xl">Legal Practice Areas</h2>
          </div>
          <p className="text-gray-600 max-w-lg">
            Notre expertise couvre un large éventail de domaines juridiques.
            Nous offrons des solutions sur mesure adaptées à vos besoins spécifiques.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {PRACTICE_AREAS.map((area) => {
            return (
                <div
                  key={area.id}
                  className={`group relative border-secondary border-t hover:shadow-2xl hover:border-primary-700 transition-all duration-300`}
                >
                  <Link
                    href={`/expertise/${area.id}`}
                    className=""
                  >
                  <div className="flex flex-col p-3 gap-3">
                    <div className="flex p-1 items-center justify-center w-max rounded-full bg-primary-700/10 text-primary-700 transition-all">
                      <Image
                        src={area.svg}
                        alt={area.title.fr}
                        width={35}
                        height={35}
                        className="min-h-12 min-w-12 size-12 max-w-12 max-h-12 object-cover group-hover:fill-white"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-secondary group-hover:text-primary-700 transition-colors">
                      {area.title.fr}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 px-3">
                    {area.description.fr}
                  </p>
                  {/* <ul>
                    {
                      area.domains.map((domain) => (
                        <li key={domain.id+'pas-epds'} className="mb-2">
                          {domain.fr}
                        </li>
                      ))
                    }
                  </ul> */}
                    {/* <div className="">
                      <Image
                        src={area.img}
                        alt={area.title.fr}
                        width={400}
                        height={600}
                        className="w-full object-cover"
                      />
                    </div> */}
                    <div className="absolute bottom-5 right-5 inline-flex items-center text-white font-medium hover:text-primary-800">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
