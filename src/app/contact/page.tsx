"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import HeroBanner from "@/components/HeroBanner"
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useStore } from "@/hooks/use-language"
import { CONTACT_DICT, COMMON_DICT } from "@/hooks/dictionnary"

export default function ContactPage() {
  const { language } = useStore()

  const subjects = [
    CONTACT_DICT.GeneralInquiry[language],
    CONTACT_DICT.LegalConsultation[language],
    CONTACT_DICT.CareerOpportunities[language],
    CONTACT_DICT.MediaRelations[language],
    CONTACT_DICT.Other[language]
  ]

  const contactInfo = [
    {
      id: 1,
      icon: <Phone className="w-6 h-6 text-white" />,
      title: CONTACT_DICT.CallUs[language],
      description: "+225 07 07 07 07 07",
      details: `${COMMON_DICT.MondayToFriday[language]}: ${COMMON_DICT.Hours[language]}`
    },
    {
      id: 2,
      icon: <Mail className="w-6 h-6 text-white" />,
      title: CONTACT_DICT.EmailUs[language],
      description: "contact@lexavik.com",
      details: COMMON_DICT.ResponseTime[language]
    },
    {
      id: 3,
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: CONTACT_DICT.VisitUs[language],
      description: "93, Rue de Maubeuge",
      details: "75010 Paris, France"
    },
    {
      id: 4,
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: CONTACT_DICT.ChatWithUs[language],
      description: CONTACT_DICT.StartConversation[language],
      details: `${COMMON_DICT.MondayToFriday[language]}: ${COMMON_DICT.Hours[language]}`
    }
  ]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error'
    message: string
  }>({
    type: 'idle',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: CONTACT_DICT.SuccessMessage[language]
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        })
      } else {
        setStatus({
          type: 'error',
          message: data.error || CONTACT_DICT.ErrorMessage[language]
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({
        type: 'error',
        message: CONTACT_DICT.NetworkError[language]
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroBanner
        subtitle={CONTACT_DICT.ContactUs[language]}
        title={CONTACT_DICT.HereToHelp[language]}
        description={CONTACT_DICT.HeroDescription[language]}
        overlayColor="secondary"
        overlayOpacity={55}
        className="pt-32"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.id} className="bg-white border-b p-6 border-gray-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 font-medium">{item.description}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2 bg-white p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{CONTACT_DICT.GetInTouch[language]}</h2>
            <p className="text-gray-600 mb-8">{CONTACT_DICT.FormDescription[language]}</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    {CONTACT_DICT.FullName[language]}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    className="bg-gray-50 border-gray-200 focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    {CONTACT_DICT.EmailAddress[language]}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    className="bg-gray-50 border-gray-200 focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    {CONTACT_DICT.PhoneNumber[language]}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    className="bg-gray-50 border-gray-200 focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700">
                    {CONTACT_DICT.Subject[language]}
                  </Label>
                  <select
                    id="subject"
                    value={formData.subject}
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-1 focus:ring-primary-200 focus:border-primary-300"
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  >
                    <option value="">{CONTACT_DICT.SelectSubject[language]}</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">
                  {CONTACT_DICT.Message[language]}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              {status.type !== 'idle' && (
                <div className={`p-4 rounded-md ${
                  status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
                  status.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
                  'bg-blue-50 text-blue-800 border border-blue-200'
                }`}>
                  {status.type === 'loading' ? (
                    <p className="flex items-center gap-2">
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>
                      {CONTACT_DICT.Sending[language]}
                    </p>
                  ) : (
                    <p>{status.message}</p>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-gray-500">
                  {CONTACT_DICT.PrivacyAgreement[language]}{' '}
                  <a href="/privacy-policy" className="text-primary-600 hover:underline">
                    {CONTACT_DICT.PrivacyPolicy[language]}
                  </a>
                </p>
                <Button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? CONTACT_DICT.Sending[language] : CONTACT_DICT.Submit[language]}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 h-[50dvh]">
        {/* Abidjan Section */}
        {/* <Link href="/cities/abidjan" className="group relative h-[50vh] md:h-screen overflow-hidden bg-black">
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
                {CONTACT_DICT.Africa[language]} <span className="text-white/70">{">"} {CONTACT_DICT.CoteDIvoire[language]}</span>
              </p>
              <h2 className="text-white text-4xl md:text-6xl font-serif mb-10">{CONTACT_DICT.Abidjan[language]}</h2>
              <div className="flex flex-col text-white">
                <p className="text-sm md:text-base tracking-wider mb-2">LEXAVIK</p>
                <p className="text-sm md:text-base tracking-wider mb-2">{CONTACT_DICT.LicensedLegalAdvisors[language]}</p>
                <p className="text-sm md:text-base tracking-wider mb-2">Ivoire Trade Center (ITC)</p>
                <p className="text-sm md:text-base tracking-wider mb-2">Tour C, 2e étage</p>
                <p className="text-sm md:text-base tracking-wider mb-2">Boulevard Hassan II, Cocody</p>
                <p className="text-sm md:text-base tracking-wider mb-2">01 BP 10889</p>
                <p className="text-sm md:text-base tracking-wider mb-2">Abidjan 01</p>
                <p className="text-sm md:text-base tracking-wider mb-2">Côte d'Ivoire</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300">
              <span className="text-sm uppercase tracking-wider">{COMMON_DICT.ViewOnMap[language]}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-24 md:w-48 md:h-32">
            <div className="absolute bottom-0 right-0 w-full h-full bg-amber-400/80 -skew-x-12 transform origin-bottom-right" />
          </div>
        </Link> */}

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
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-amber-400 text-sm md:text-base tracking-wider mb-2">
                {CONTACT_DICT.Europe[language]} <span className="text-white/70">{">"} {CONTACT_DICT.France[language]}</span>
              </p>
              <h2 className="text-white text-4xl md:text-6xl font-serif mb-10">{CONTACT_DICT.Paris[language]}</h2>
              <div className="flex flex-col text-white">
                <p className="text-sm md:text-base tracking-wider mb-2">LEXAVIK</p>
                <p className="text-sm md:text-base tracking-wider mb-2">{CONTACT_DICT.LawFirm[language]}</p>
                <p className="text-sm md:text-base tracking-wider mb-2">93, Rue de Maubeuge</p>
                <p className="text-sm md:text-base tracking-wider mb-2">75010 Paris</p>
                <p className="text-sm md:text-base tracking-wider mb-2">France</p>
                <p className="text-sm md:text-base tracking-wider mb-2 mt-4">Tél: +33 (0) 1.53.16.05.40</p>
                <p className="text-sm md:text-base tracking-wider mb-2">Email: akwaba@lexavik.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300">
              <span className="text-sm uppercase tracking-wider">{COMMON_DICT.ViewOnMap[language]}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-24 md:w-48 md:h-32">
            <div className="absolute bottom-0 right-0 w-full h-full bg-amber-400/80 -skew-x-12 transform origin-bottom-right" />
          </div>
        </div>
      </div>

      <div className="bg-secondary-950">

      </div>
    </div>
  )
}
