"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Law is a system of rules and guidelines created and enforced by government tal or social institutions to regulate behavior within a society. Its primaryed purpose is to maintain order, resolve disputes, and protect individuals and their rights. Laws can be enacted at various levels.",
    author: "John M.Alexon",
    role: "CIVIL LAWYER",
    rating: 5,
  },
  {
    id: 2,
    text: "Exceptional legal services with outstanding professionalism. The team demonstrated remarkable expertise in handling complex cases with efficiency and dedication. Highly recommended for anyone seeking top-tier legal representation.",
    author: "Sarah Johnson",
    role: "CLIENT",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const current = testimonials[currentIndex]

  return (
    <main className="bg-gradient-to-b from-[#F5F1EB] to-[#FFFAF6] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <p className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">← Our Testimonials</p>
              <h1 className="text-[#0F1F35] font-serif text-4xl lg:text-5xl leading-tight">
                Our happy client&apos;s review
              </h1>
            </div>
            <button className="bg-[#0F1F35] hover:bg-[#1a2f45] transition-colors text-white px-8 py-3 font-semibold uppercase tracking-wide text-sm">
              Read More
            </button>
          </div>

          {/* Right Column - Testimonial Card */}
          <div className="p-8 space-y-6 border-l border-[#E8E8E8]">
            <div className="flex items-center justify-between">
                {/* Quote Icon */}
                <div className="text-5xl leading-none"><Quote className="fill-primary stroke-primary rotate-180" /></div>

                {/* Star Rating */}
                <div className="flex gap-1">
                {[...Array(current.rating)].map((_, i) => (
                    <span key={i} className="text-sm">
                    ⭐
                    </span>
                ))}
                </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-[#7A7A7A] font-serif text-base leading-relaxed">{current.text}</p>

            <div className="flex items-center justify-between pt-6 border-t border-[#E8E8E8]">
                {/* Author Info */}
                <div className="">
                    <h3 className="text-[#0F1F35] font-semibold text-lg">{current.author}</h3>
                    <p className="text-[#9A9A9A] uppercase tracking-wider text-xs font-medium mt-1">{current.role}</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 pt-4">
                <button
                    onClick={goToPrevious}
                    className="bg-[#0F1F35] hover:bg-[#1a2f45] transition-colors text-white p-3 rounded flex items-center justify-center"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={goToNext}
                    className="bg-[#C4A881] hover:bg-[#B39770] transition-colors text-white p-3 rounded flex items-center justify-center"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={20} />
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
