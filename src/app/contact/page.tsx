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

const subjects = [
  "General Inquiry",
  "Legal Consultation",
  "Career Opportunities",
  "Media Relations",
  "Other"
]

const contactInfo = [
  {
    id: 1,
    icon: <Phone className="w-6 h-6 text-white" />,
    title: "Call Us",
    description: "+225 07 07 07 07 07",
    details: "Lun - Ven: 9h00 - 18h00"
  },
  {
    id: 2,
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Email Us",
    description: "contact@lexavik.com",
    details: "Réponse sous 24h"
  },
  {
    id: 3,
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Visit Us",
    description: "93, Rue de Maubeuge",
    details: "75010 Paris, France"
  },
  {
    id: 4,
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    title: "Chat with Us",
    description: "Start a conversation",
    details: "Lun - Ven: 9h00 - 18h00"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroBanner
        subtitle="Contactez-nous"
        title="Nous sommes là pour vous aider"
        description="Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos démarches juridiques."
        overlayColor="secondary"
        overlayOpacity={55}
        className="pt-32"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
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
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch with Us</h2>
            <p className="text-gray-600 mb-8">Fill out the form and our team will get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    className="bg-gray-50 border-gray-200 focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-gray-50 border-gray-200 focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="bg-gray-50 border-gray-200 focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700">
                    Subject
                  </Label>
                  <select
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-1 focus:ring-primary-200 focus:border-primary-300"
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  >
                    <option value="">Select a subject</option>
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
                  Message
                </Label>
                <Textarea
                  id="message"
                  className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-primary-300 focus:ring-1 focus:ring-primary-200"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
                <Button 
                  type="submit" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-base font-medium"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
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
