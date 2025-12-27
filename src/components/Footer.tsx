"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[var(--primary-600)] font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-serif font-bold">LEXAVIK</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cabinet d&apos;avocats créé en avril 2015, spécialisé en droit des affaires. Nous intervenons à Paris et à Abidjan pour sécuriser vos projets et vous défendre devant les juridictions nationales et internationales.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/lexavik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary-600)] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/lexavik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary-600)] transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/lexavik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary-600)] transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/practices" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Domaines d&apos;Intervention
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Actualités & Insights
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Nos Bureaux
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practices */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Expertises</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/practices#ohada-law" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Droit OHADA
                </Link>
              </li>
              <li>
                <Link href="/practices#corporate-law" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Droit des Sociétés
                </Link>
              </li>
              <li>
                <Link href="/practices#banking-finance" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Droit Bancaire & Financier
                </Link>
              </li>
              <li>
                <Link href="/practices#major-projects" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Grands Projets
                </Link>
              </li>
              <li>
                <Link href="/practices#litigation-arbitration" className="text-gray-300 hover:text-[var(--primary-400)] transition-colors">
                  Contentieux & Arbitrage
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--primary-400)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Paris</p>
                  <p className="text-gray-300 text-sm">93, Rue de Maubeuge, 75010 Paris</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--primary-400)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Téléphone</p>
                  <a href="tel:+33153160540" className="text-gray-300 text-sm hover:text-[var(--primary-400)]">
                    +33 (0) 1.53.16.05.40
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--primary-400)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:akwaba@lexavik.com"
                    className="text-gray-300 text-sm hover:text-[var(--primary-400)] transition-colors"
                  >
                    akwaba@lexavik.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">Copyright © 2025 LEXAVIK - Tous droits réservés</p>
            <div className="flex gap-6 text-sm">
              <Link href="/legal/privacy" className="text-gray-400 hover:text-[var(--primary-400)] transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="/legal/terms" className="text-gray-400 hover:text-[var(--primary-400)] transition-colors">
                Mentions Légales
              </Link>
              <Link href="/legal/cookies" className="text-gray-400 hover:text-[var(--primary-400)] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
