import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NEWS_ARTICLES } from "@/constants/company"
import HeroBanner from "@/components/HeroBanner";

export default function NewsPage() {
  // Duplicate articles to have more content for demonstration
  const allArticles = [...NEWS_ARTICLES, ...NEWS_ARTICLES, ...NEWS_ARTICLES, ...NEWS_ARTICLES];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner
        subtitle="Actualités"
        title="Restez informé"
        description="Retrouvez toutes nos actualités, nos publications et les dernières évolutions juridiques qui pourraient vous concerner."
        overlayColor="secondary"
        overlayOpacity={55}
        className="pt-32"
      />

      {/* News Grid */}
      <div className="px-4 py-20 sm:px-6 lg:px-8 font-[family-name:var(--font-dm-sans)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allArticles.map((article, index) => {
              const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <article
                  key={`${article.id}-${index}`}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl hover:border-primary-700 transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <Image
                      src={article.image || "/logo.png"}
                      alt={article.title.fr}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {article.category.fr}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={article.date}>{formattedDate}</time>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-medium text-secondary mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {article.title.fr}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt.fr}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors"
                    >
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="h-1 bg-gray-100 group-hover:bg-primary-700 transition-colors duration-300"></div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}