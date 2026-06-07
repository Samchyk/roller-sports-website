'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const items = [
  'Egyensúly alapok',
  'Fékezési technikák',
  'Kanyarodás és irányváltás',
  'Koordinációs tréning',
  'Haladó mozgásminták',
]

export default function TechniquesPreview() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Tanulás és technikák előnézet"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side — left, asymmetric */}
        <div
          className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          <div className="relative aspect-[4/3] clip-skew-right overflow-hidden">
            <Image
              src="/images/techniques.png"
              alt="Görkorcsolya kerekek közelről, mozgás életlenséggel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, oklch(0.1 0.005 260 / 0.4) 0%, transparent 60%)' }} />
          </div>
          {/* floating accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rotate-12 pointer-events-none" aria-hidden="true" />
          <div className="absolute -top-4 -left-4 w-16 h-16 border border-neon/20 pointer-events-none" aria-hidden="true" />
        </div>

        {/* Text side */}
        <div
          className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              Tanulás & Technika
            </span>
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] leading-none text-foreground mb-6">
            MOZGÁS ÉS
            <br />
            <span className="neon-text">MESTERSÉG</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Az első bizonytalan lépéstől az önbizalommal teli gurulásig — átfogó
            technikai útmutatóink lépésről lépésre kísérnek végig a
            görkorcsolyázás tanulásán.
          </p>

          <ul className="flex flex-col gap-3 mb-10" role="list">
            {items.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4 text-sm text-foreground/80"
                style={{ transitionDelay: `${i * 60 + 300}ms` }}
              >
                <span className="text-primary font-heading text-xs">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1 h-px bg-border" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/tanulas"
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-primary hover:text-neon transition-colors group"
          >
            Teljes útmutató
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
