'use client'

import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const disciplines = [
  {
    id: '01',
    title: 'Rekreációs görkorcsolyázás',
    desc: 'Lazítás, mozgás és szabadság — a görkorcsolyázás legközvetlenebb formája. Parkokban, utcákon, a természet közelében.',
    accent: 'primary',
  },
  {
    id: '02',
    title: 'Inline görkorcsolyázás',
    desc: 'A modern görkorcsolya csúcsa. Négy-öt kerék egy sorban — sebesség, stabilitás és agilitás egyszerre.',
    accent: 'neon',
  },
  {
    id: '03',
    title: 'Művészi görkorcsolyázás',
    desc: 'Balett és sport találkozása. Forgások, ugrások és elegáns mozdulatsorok — a görkorcsolyázás leglátványosabb ága.',
    accent: 'secondary',
  },
  {
    id: '04',
    title: 'Gyorskorcsolyázás alapjai',
    desc: 'Teljesítmény és technika. A hosszú lépések, az alacsony testtartás és a ritmus maximális sebességet eredményez.',
    accent: 'primary',
  },
  {
    id: '05',
    title: 'Urbán görkorcsolyázás',
    desc: 'A város mint pálya. Lépcsők, rámpák és korlátok — a városi tér átalakul a korcsolyázó keze alatt.',
    accent: 'neon',
  },
  {
    id: '06',
    title: 'Freestyle & Slalom',
    desc: 'Kúpok között, folyékony mozdulatokkal — a precizitás és a kreativitás tökéletes ötvözete.',
    accent: 'secondary',
  },
]

const accentMap: Record<string, string> = {
  primary: 'text-primary',
  neon: 'text-neon',
  secondary: 'text-accent',
}

const borderMap: Record<string, string> = {
  primary: 'border-primary/30 hover:border-primary',
  neon: 'border-neon/30 hover:border-neon',
  secondary: 'border-accent/30 hover:border-accent',
}

export default function DisciplinesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="disciplines"
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Görkorcsolya sportágak"
    >
      {/* bg */}
      <div className="absolute inset-0 bg-card/30" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" aria-hidden="true" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                Sportágak
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] leading-none text-foreground">
              GÖRKORCSOLYÁZÁS
              <br />
              <span className="text-muted-foreground">IRÁNYZATAI</span>
            </h2>
          </div>
          <div className="relative md:max-w-xs">
            <Image
              src="/images/disciplines.png"
              alt="Dinamikus görkorcsolyázók urbán környezetben"
              width={300}
              height={200}
              className="w-full h-40 object-cover opacity-70"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {disciplines.map((d, i) => (
            <div
              key={d.id}
              className={`bg-background p-8 border-0 transition-all duration-700 group cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${borderMap[d.accent]}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`font-heading text-5xl leading-none ${accentMap[d.accent]} opacity-30 group-hover:opacity-60 transition-opacity`}>
                  {d.id}
                </span>
                <div className={`w-8 h-px mt-4 ${accentMap[d.accent].replace('text-', 'bg-').replace('text', 'bg')} opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-12`} aria-hidden="true" />
              </div>
              <h3 className={`font-heading text-xl mb-3 text-foreground group-hover:${accentMap[d.accent]} transition-colors`}>
                {d.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
