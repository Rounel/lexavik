import type { Metadata } from "next"
import { PRACTICE_AREAS } from "@/constants/company"
import PracticeDetailContent from "./PracticeDetailContent"

const SITE_URL = "https://www.lexavik.com"

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((practice) => ({ id: practice.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const practice = PRACTICE_AREAS.find((p) => p.id === id)

  if (!practice) {
    return { title: "Domaine introuvable" }
  }

  return {
    title: `${practice.title.fr} — Cabinet LEXAVIK`,
    description: practice.description.fr.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/practices/${practice.id}` },
    openGraph: {
      title: `${practice.title.fr} | LEXAVIK Avocats`,
      description: practice.description.fr.slice(0, 160),
      url: `${SITE_URL}/practices/${practice.id}`,
    },
  }
}

export default function PracticeDetailPage() {
  return <PracticeDetailContent />
}
