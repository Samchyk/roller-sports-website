'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import { blogArticles } from '@/lib/blog-data'

export default function BlogPreviewSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const featured = blogArticles.slice(0, 3)

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Blog előnézet"
    >
      <div className="absolute inset-0 bg-card/30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`flex items-end justify-between mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" aria-hidden="true" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                Blog
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] leading-none text-foreground">
              LEGÚJABB
              <br />
              <span className="text-muted-foreground">ÍRÁSOK</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary hover:text-neon transition-colors group"
          >
            Összes cikk
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {featured.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className={`group bg-background p-8 hover:bg-card transition-all duration-500 flex flex-col gap-4 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-8 h-px bg-primary group-hover:w-14 transition-all duration-300" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{article.category}</span>
              <h3 className="font-heading text-xl text-foreground group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-primary font-semibold tracking-wider uppercase mt-2">
                Olvasd el
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        <div
          className={`mt-8 md:hidden transition-all duration-700 delay-400 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary hover:text-neon transition-colors"
          >
            Összes cikk <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
