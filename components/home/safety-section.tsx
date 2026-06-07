'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const safetyPoints = [
  {
    num: '01',
    title: 'Védőfelszerelés alapok',
    desc: 'Sisak, térdvédő, csuklóvédő és könyökvédő — az öt alapvető védelmi elem, amelyek nélkül nem érdemes elindulni.',
  },
  {
    num: '02',
    title: 'Bemelegítés és nyújtás',
    desc: 'Görkorcsolyázás előtt 10 perc dinamikus bemelegítés csökkenti a sérülés kockázatát és javítja a teljesítményt.',
  },
  {
    num: '03',
    title: 'Egyensúlyfejlesztés',
    desc: 'Fokozatos haladás — kezdők számára az egyensúly fejlesztése az első és legfontosabb lépés a biztonságos guruláshoz.',
  },
  {
    num: '04',
    title: 'Sérülésmegelőzés',
    desc: 'Ismerd meg a leggyakoribb hibákat és kerüld el őket. A helyes esési technika életmentő tudás lehet.',
  },
]

export default function SafetySection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Biztonság és felkészülés"
    >
      {/* Diagonal accent strip */}
      <div
        className="absolute left-0 right-0 h-full top-0 pointer-events-none"
        style={{ background: 'linear-gradient(160deg, oklch(0.6 0.22 240 / 0.03) 0%, transparent 50%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" aria-hidden="true" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                Biztonság & Felkészülés
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] leading-none text-foreground">
              GÖRDÜLJ
              <br />
              <span className="text-muted-foreground">BIZTONSÁGOSAN</span>
            </h2>
          </div>
          <div className="relative w-48 h-32 overflow-hidden shrink-0">
            <Image
              src="/images/safety.png"
              alt="Védőfelszerelések görkorcsolyázáshoz"
              fill
              className="object-cover opacity-60"
              sizes="192px"
            />
          </div>
        </div>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyPoints.map((p, i) => (
            <div
              key={p.num}
              className={`flex gap-6 p-6 border border-border hover:border-primary/40 transition-all duration-500 group ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-heading text-4xl text-primary/20 group-hover:text-primary/50 transition-colors shrink-0 leading-none">
                {p.num}
              </span>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
