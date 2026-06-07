'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(60px)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" aria-label="Főoldal hős szekció">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Görkorcsolyázó éjszakai városi környezetben, mozgásos életlenséggel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, oklch(0.1 0.005 260) 0%, oklch(0.1 0.005 260 / 0.5) 40%, transparent 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, oklch(0.1 0.005 260 / 0.8) 0%, transparent 60%)' }} />
      </div>

      {/* Speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[20, 45, 62, 78].map((top, i) => (
          <div
            key={i}
            className="speed-line"
            style={{
              top: `${top}%`,
              left: 0,
              right: 0,
              opacity: 0.3 + i * 0.1,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Top indicator */}
      <div className="absolute top-24 right-6 lg:right-10 flex flex-col items-end gap-2 z-10" aria-hidden="true">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 origin-center mt-4">
          Scroll
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32">
        <div className="max-w-5xl">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              Magyarország görkorcsolyás közössége
            </span>
          </div>

          {/* Heading — kinetic typography */}
          <h1
            ref={headingRef}
            className="font-heading text-[clamp(3.5rem,12vw,9rem)] leading-none text-foreground mb-6 text-balance"
          >
            GÖRDÜLJ
            <br />
            <span className="neon-text">TOVÁBB</span>
            <span className="block text-[clamp(1.2rem,3vw,2.5rem)] font-sans font-light tracking-[0.08em] text-silver mt-4 uppercase">
              — A görkorcsolyázás világa
            </span>
          </h1>

          {/* Subline */}
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
            Szabadság, sebesség és egyensúly — fedezd fel a görkorcsolyázás
            minden dimenzióját a főváros útjain és azon túl.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#disciplines"
              className="group flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 blue-glow"
            >
              Felfedezem
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/tanulas"
              className="flex items-center gap-3 px-7 py-3.5 border border-foreground/20 text-foreground text-xs font-semibold tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
            >
              Tanulás & Technika
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { value: '6+', label: 'Sportágak' },
              { value: '15+', label: 'Blog cikk' },
              { value: '100%', label: 'Ingyenes tudás' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-heading text-3xl text-primary">{stat.value}</span>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom edge accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" aria-hidden="true" />
    </section>
  )
}
