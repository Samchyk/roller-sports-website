'use client'

import { useInView } from 'react-intersection-observer'

const facts = [
  {
    num: '01',
    title: 'Mozgástudomány',
    body: 'A görkorcsolyázás közben a test egyensúlyát állandóan karbantartja az egyensúlyi szervrendszer — ez az agy egyik legintenzívebb edzésformája.',
  },
  {
    num: '02',
    title: 'Sebességrekordok',
    body: 'Sík terepen, szélárnyékban egy inline speed skater elérheti a 65 km/h fölötti sebességet — emberi erőből, motorikus meghajtás nélkül.',
  },
  {
    num: '03',
    title: 'Szokatlan tények',
    body: 'A görkorcsolyát eredetileg téli korcsolyázás nyári helyettesítőjeként találták fel. Az első ismert pár 18. századi találmány.',
  },
  {
    num: '04',
    title: 'Urbán kultúra',
    body: 'Párizstól Bangkokig egész városok terveznek ma infrastruktúrát a görkorcsolyások számára — külön sávok, simaaszfalt-parkok és fedett arénak.',
  },
  {
    num: '05',
    title: 'Keréktechnológia',
    body: 'A modern inline kerék poliu­retánból készül, és a felbontott anyag sejtszerkezete határozza meg a tapadást, a visszapattanást és a kopásállóságot.',
  },
  {
    num: '06',
    title: 'Gurulás és fizika',
    body: 'A görkorcsolya gördülési ellenállása tíz-tizenötszöröse kisebb a futásnál — ezért a látszólag könnyed mozgás is hatalmas hatótávolságot tesz lehetővé.',
  },
]

export default function FactsSection() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Érdekes tények a görkorcsolyázásról"
    >
      <div className="absolute inset-0 bg-card/40" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              Tények & Érdekességek
            </span>
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] leading-none text-foreground">
            TUDTAD?
          </h2>
        </div>

        {/* Asymmetric layout — alternating */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {facts.map((f, i) => (
            <div
              key={f.num}
              className={`relative p-8 border border-border transition-all duration-700 group hover:bg-card hover:border-primary/30 cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Decorative number */}
              <div
                className="absolute top-0 right-4 font-heading text-[5rem] leading-none text-foreground/3 group-hover:text-foreground/6 transition-colors select-none"
                aria-hidden="true"
              >
                {f.num}
              </div>
              <div className="relative z-10">
                <div className="w-6 h-px bg-primary mb-5" aria-hidden="true" />
                <h3 className="font-heading text-lg text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
