import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function NewsDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Link href="/" className="hover:text-primary">
              HOME
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/news" className="hover:text-primary">
              NEWS
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary">Lexavik ADVISES THE TAZI FAMILY ON SALE OF BIOMAG TO COMANER SA</span>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Category */}
          <div className="text-sm font-semibold text-primary">NEWS</div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">
            Lexavik Advises the Tazi family on Sale of Biomag to Comaner SA
          </h1>

          {/* Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src="/babi.jpg"
              alt="Cityscape view"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-primary">DEALS</span>
              <span>•</span>
              <time>FEB 14, 2025</time>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Lexavik is pleased to announce its role as legal advisor to the Tazi family in its sale of Biomag, a
                recognized expert in the production and marketing of flavors and blends for the food industry, to
                Comaner S.A., a specialist in ingredients and food additives in Morocco.
              </p>

              <p>
                This transaction allows Biomag to enter a new phase of growth, benefiting from the strategic and
                financial support of Comaner S.A.
              </p>

              <p>
                Completion of the transaction remains subject to the satisfaction of several conditions precedent,
                including merger control clearance.
              </p>

              <p>
                The Lexavik team advising the Tazi family was led by partner Patrick Larrivé who was assisted by
                associate Maxence Létisse.
              </p>

              <p>Ascent Capital Partners acted as advisor to the sellers in this transaction.</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
