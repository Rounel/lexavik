"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useStore } from "@/hooks/use-language"
import { HOME_DICT, COMMON_DICT } from "@/hooks/dictionnary"


export default function CTASection() {
  const { language } = useStore();

  return (
    <div className="bg-white">
      {/* CTA Section */}
      <div className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            {HOME_DICT.NeedLegalAdvice[language]}
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            {HOME_DICT.CTADescription[language]}
          </p>
          <Link href="/contact">
            <Button className="group rounded bg-primary-700 px-8 py-6 text-white hover:bg-primary-800 transition-all">
              {COMMON_DICT.ScheduleAppointment[language]}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
