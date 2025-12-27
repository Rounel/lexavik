'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView } from "motion/react"

export default function FSection({
    children,
    title,
    subtitle
  }: {
    children: ReactNode;
    title: string;
    subtitle: string;
  }) {
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 50 }}
      whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      viewport={{ root: scrollRef }}
      transition={{
        duration: .5,
        delay: .2,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
        <section className="px-4 sm:px-64" ref={scrollRef}>
            <div className="flex flex-col gap-1 mb-9 text-center">
                <h4 className="text-secondary font-semibold uppercase">{title}</h4>
                <h2 className="text-white font-semibold text-3xl sm:text-3xl">{subtitle}</h2>
            </div>

            {children}
        </section>
    </motion.div>
  );
}
