import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { blogArticles } from '@/lib/blog-data'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} — Hungary Görkorcsolyázás`,
    description: article.excerpt,
  }
}

function parseMarkdown(text: string): string {
  return text
    // h3
    .replace(/^### (.+)$/gm, '<h3 class="font-heading text-xl text-foreground mt-8 mb-3">$1</h3>')
    // h2
    .replace(/^## (.+)$/gm, '<h2 class="font-heading text-2xl text-foreground mt-12 mb-4">$1</h2>')
    // bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    // unordered list items
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-muted-foreground">$1</li>')
    // numbered list items
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal text-muted-foreground">$1</li>')
    // paragraphs (double newline)
    .replace(/\n\n(?!<)/g, '</p><p class="text-muted-foreground leading-relaxed">')
    // wrap list items
    .replace(/(<li[^>]*>.*<\/li>\n?)+/g, (match) => `<ul class="my-4 space-y-2">${match}</ul>`)
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  const idx = blogArticles.indexOf(article)
  const prev = blogArticles[idx - 1] ?? null
  const next = blogArticles[idx + 1] ?? null

  const html = parseMarkdown(article.content.trim())

  return (
    <main>
      <Header />

      {/* Article header */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at 20% 50%, oklch(0.6 0.22 240 / 0.4) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 mb-10"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Vissza a bloghoz
          </Link>

          <span className="inline-block text-[10px] tracking-[0.25em] uppercase border border-primary/40 text-primary px-3 py-1 mb-6">
            {article.category}
          </span>

          <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] leading-tight text-foreground text-balance mb-6">
            {article.title}
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            {article.excerpt}
          </p>

          <div className="mt-10 w-full h-px section-divider" />
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-10 pb-20">
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{
            __html: `<p class="text-muted-foreground leading-relaxed">${html}</p>`,
          }}
        />
      </article>

      {/* Prev / next navigation */}
      <nav className="border-t border-border" aria-label="Cikkek navigáció">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group flex flex-col gap-2 p-6 border border-border hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                <ArrowLeft size={12} aria-hidden="true" />
                Előző
              </div>
              <span className="text-sm text-foreground font-semibold leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group flex flex-col gap-2 p-6 border border-border hover:border-primary/40 transition-colors duration-300 text-right ml-auto w-full"
            >
              <div className="flex items-center justify-end gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Következő
                <ArrowRight size={12} aria-hidden="true" />
              </div>
              <span className="text-sm text-foreground font-semibold leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>

      <Footer />
    </main>
  )
}
