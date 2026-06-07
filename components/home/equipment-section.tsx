'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const equipmentItems = [
  {
    title: 'Görkorcsolya típusok',
    body: 'Rekre­ációs, fitness, aggressive, speed — minden sportághoz más talpszerkezet és kerékméret ideális. Az alapok megértése segít a helyes választásban.',
  },
  {
    title: 'Kerekek és görgők',
    body: 'A kerék átmérője, keménysége és anyaga döntően befolyásolja a teljesítményt. Puha kerék tapad, kemény kerék gurul — mindennek megvan a helye.',
  },
  {
    title: 'Cipőbélés és kényelmi szempontok',
    body: 'A felfűzés módja, a cipő merevsége és a belső bélés komfort­anyaga mind befolyásolja a lábban érzett biztonságot és a mozgás precizitását.',
  },
  {
    title: 'Karbantartás alapok',
    body: 'Rendszeres csapágytisztítás, kerékcsere és fék-ellenőrzés — néhány perc gondozás meghosszabbítja a felszerelés élettartamát.',
  },
]

export default function EquipmentSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Felszerelés és kellékek"
    >
      <div className="absolute inset-0 bg-card/40" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-neon" aria-hidden="true" />
              <span className="text-xs tracking-[0.3em] uppercase text-neon font-semibold">
                Felszerelés & Kellékek
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] leading-none text-foreground mb-8">
              AZ ESZKÖZ
              <br />
              <span className="neon-text">ISMERETE</span>
            </h2>

            <div className="flex flex-col gap-6">
              {equipmentItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <h3 className="font-heading text-base text-neon mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  {i < equipmentItems.length - 1 && <div className="mt-5 h-px bg-border" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="relative aspect-square clip-skew-left overflow-hidden">
              <Image
                src="/images/equipment.png"
                alt="Prémium inline görkorcsolya részletek, neon megvilágítással"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(225deg, oklch(0.1 0.005 260 / 0.5) 0%, transparent 60%)' }} />
            </div>
            {/* accent box */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-neon/20" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
