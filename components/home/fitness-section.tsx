'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const stats = [
  { value: '45%', label: 'Állóképesség javulás', sub: 'Rendszeres görkorcsolyázás mellett' },
  { value: '12+', label: 'Izomcsoport', sub: 'Aktív egy edzés során' },
  { value: '600+', label: 'Kalória/óra', sub: 'Közepesen intenzív gurulással' },
  { value: '3x', label: 'Ízületi terhelés', sub: 'Kevesebb mint futásnál' },
]

const aspects = [
  { title: 'Állóképesség', desc: 'A hosszú gurulások aerob kapacitást fejlesztenek és erősítik a szívrendszert.' },
  { title: 'Mozgékonyság', desc: 'A dinamikus egyensúlygyakorlatok javítják a test általános koordinációját.' },
  { title: 'Rugalmasság', desc: 'A görkorcsolyázás természetes mozdulatai nyújtják a csípő- és lábizomzatot.' },
  { title: 'Testirányítás', desc: 'Tudatos testhasználat és egyensúly — az elesés kerülése fejleszti a proprioceptív képességeket.' },
  { title: 'Regeneráció', desc: 'Alacsony intenzitású gurulás tökéletes aktív regenerációként a kemény edzések között.' },
]

export default function FitnessSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Fitness és koordináció"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
              Fitness & Koordináció
            </span>
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] leading-none text-foreground">
            TEST ÉS
            <br />
            <span className="text-accent">MOZGÁS</span>
          </h2>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-background p-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-heading text-4xl text-accent mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/fitness.png"
              alt="Dinamikus nyújtó pózban lévő görkorcsolyázó városi háttér előtt"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, oklch(0.1 0.005 260) 100%)' }} />
          </div>
          <div className="flex flex-col gap-5">
            {aspects.map((a, i) => (
              <div
                key={a.title}
                className={`border-l-2 border-accent/30 pl-5 hover:border-accent transition-all duration-300 ${inView ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 80 + 300}ms` }}
              >
                <h3 className="font-heading text-base text-foreground mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
