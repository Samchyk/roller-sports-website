'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Az első lépések',
    desc: 'A kapaszkodás, az állás, az első lépések — ismerd meg, hogyan állj rá biztonsággal a görkorcsolyára.',
  },
  {
    step: '02',
    title: 'Önbizalom építés',
    desc: 'Kis sikerek, fokozatos kihívások — az önbizalom növelése a legfontosabb motiváló erő a tanulás kezdetén.',
  },
  {
    step: '03',
    title: 'Gyakorlati tippek',
    desc: 'Hol gyakorolj? Mivel kezdd? Hogyan kerüld el a leggyakoribb hibákat? Konkrét, bevált tanácsok kezdőknek.',
  },
  {
    step: '04',
    title: 'Kerülendő hibák',
    desc: 'A görkorcsolyázás öt leggyakoribb kezdői hibája és pontos megoldásuk — tanulj mások tapasztalataiból.',
  },
]

export default function BeginnerSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Kezdők útmutatója"
    >
      {/* Cinematic full-bleed background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, oklch(0.6 0.22 240 / 0.04) 0%, transparent 50%, oklch(0.55 0.2 290 / 0.04) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Full-width heading */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              Kezdők útmutatója
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-heading text-[clamp(2.5rem,7vw,6rem)] leading-none text-foreground">
              ELSŐ
              <br />
              <span className="text-primary">GURULÁS</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Mindenki valahol elkezdte. A görkorcsolyázás elsajátítása nem napok,
              hanem percek kérdése — a helyes megközelítéssel.
            </p>
          </div>
        </div>

        {/* Steps — horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-12">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`relative p-8 border-t-2 transition-all duration-700 group hover:border-primary ${
                i % 2 === 0 ? 'border-primary/60' : 'border-border'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-heading text-5xl text-foreground/10 group-hover:text-foreground/20 transition-colors block mb-6 leading-none">
                {s.step}
              </span>
              <h3 className="font-heading text-lg text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <Link
            href="/tanulas"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300 blue-glow group"
          >
            Teljes kezdői útmutató
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
