"use client"

import { motion } from "motion/react"
import { JSX } from "react"

export default function Hero({title, subtitle, btns=<p></p>}:{title:string, subtitle:string, btns?:JSX.Element}) {

  return (
    <div className="relative min-h-[50dvh] flex items-end pb-24 justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/bg1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-linear-to-r from-[#302c51]/90 to-[#7c2f59]/90" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 pb-auto flex items-center justify-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-xl text-gray-200">
            {subtitle}
          </p>
          {btns}
          
        </motion.div>
      </div>

    </div>
  )
}

{/* <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button onClick={scrollToContent} className="group bg-[#ed7d31] text-white hover:bg-[#ed7d31]/90">
              Découvrez les sujets clés
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#7c2f59]">
              Recevez les mises à jour par email
            </Button>
          </div> */}
{/* Animated scroll indicator */}
{/* <motion.div
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    duration: 1.5,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse",
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <ChevronDown className="h-8 w-8 text-white opacity-50" />
</motion.div> */}