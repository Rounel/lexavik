'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Large Text */}
        <div className="mb-8">
          <h1 className="text-[200px] lg:text-[250px] font-light text-primary-700/20 leading-none select-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-secondary mb-4">
            Oops! This Page Is Not Found.
          </h2>
          <p className="text-gray-600 text-lg">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
            Retournez à la page d&apos;accueil pour continuer votre navigation.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button className="group rounded bg-secondary px-8 py-6 text-white hover:bg-secondary-700 transition-all">
              <Home className="mr-2 h-5 w-5" />
              Retour à l&apos;accueil
            </Button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Page précédente
          </button>
        </div>

        {/* Additional Help Text */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Si vous pensez qu&apos;il s&apos;agit d&apos;une erreur, veuillez{" "}
            <Link href="/contact" className="text-primary-700 hover:text-primary-800 underline">
              nous contacter
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
