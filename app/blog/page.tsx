import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { blogArticles } from '@/lib/blog-data'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Hungary Görkorcsolyázás',
  description:
    'Cikkek, útmutatók és érdekességek a görkorcsolyázás világából. Technikák, felszerelés, fitnesz, történelem és urbán görkorcsolyázás.',
}

const categoryColors: Record<string, string> = {
  'Kezdőknek': 'text-neon border-neon/40',
  'Történelem': 'text-silver border-silver/40',
  'Biztonság': 'text-primary border-primary/40',
  'Sportágak': 'text-accent border-accent/40',
  'Urban': 'text-neon border-neon/40',
  'Edzés': 'text-primary border-primary/40',
  'Felszerelés': 'text-silver border-silver/40',
  'Technika': 'text-accent border-accent/40',
  'Fitness': 'text-primary border-primary/40',
  'Helyszínek': 'text-neon border-neon/40',
  'Életstílus': 'text-silver border-silver/40',
}

export default function BlogPage() {
  const featured = blogArticles[0]
  const rest = blogArticles.slice(1)

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-hero.png"
            alt="Blog hőskép — görkorcsolyázó fénycsíkkal"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, oklch(0.1 0.005 260 / 0.3) 0%, oklch(0.1 0.005 260) 100%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              Tudásbázis
            </span>
          </div>
          <h1 className="font-heading text-[clamp(3rem,8vw,6rem)] leading-none text-foreground text-balance">
            BLOG &amp;
            <br />
            <span className="neon-text">CIKKEK</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg max-w-xl leading-relaxed">
            Minden, amit a görkorcsolyázásról tudni érdemes — kezdőknek és
            haladóknak egyaránt.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Kiemelt cikk
        </p>
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid md:grid-cols-2 gap-0 border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden"
        >
          <div className="relative h-64 md:h-auto bg-muted overflow-hidden">
            <Image
              src="/images/disciplines.png"
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-between bg-card">
            <div>
              <span className={`inline-block text-[10px] tracking-[0.25em] uppercase border px-3 py-1 mb-6 ${categoryColors[featured.category] ?? 'text-primary border-primary/40'}`}>
                {featured.category}
              </span>
              <h2 className="font-heading text-[clamp(1.6rem,3vw,2.5rem)] leading-tight text-foreground mb-4 text-balance group-hover:text-primary transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {featured.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-8 text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              Olvasd el
              <ArrowRight
                size={14}
                className="group-hover:translate-x-2 transition-transform duration-300"
                aria-hidden="true"
              />
            </div>
          </div>
        </Link>
      </section>

      {/* All articles grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="section-divider mb-12" />
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10">
          Összes cikk
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-background p-6 lg:p-8 flex flex-col gap-4 hover:bg-card transition-colors duration-300"
            >
              <span className={`inline-block self-start text-[10px] tracking-[0.25em] uppercase border px-2.5 py-0.5 ${categoryColors[article.category] ?? 'text-primary border-primary/40'}`}>
                {article.category}
              </span>
              <h3 className="font-heading text-lg leading-tight text-foreground text-balance group-hover:text-primary transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-primary mt-auto pt-4 border-t border-border">
                Tovább
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
