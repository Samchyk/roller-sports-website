'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const milestones = [
  { era: '1800-as évek', label: 'Az első görkori próbálkozások Európában' },
  { era: '1950-es évek', label: 'A görkorcsolya berobban Magyarországra' },
  { era: '1980-as évek', label: 'Inline görkorcsolya korszak kezdete' },
  { era: 'Ma', label: 'Urban és freestyle reneszánsz' },
]

export default function HistoryPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Magyar görkorcsolyázás történelme előnézet"
    >
      {/* Dark bg strip */}
      <div className="absolute inset-0 bg-card/50" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Label + heading */}
          <div className="lg:col-span-5">
            <div
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" aria-hidden="true" />
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                  Történelem
                </span>
              </div>
              <h2 className="font-heading text-[clamp(2rem,5vw,4.5rem)] leading-none text-foreground mb-6">
                KORDÁK ÉS
                <br />
                <span className="text-muted-foreground">KEREKEK</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
                A görkorcsolyázás Magyarországon gazdag múltra tekint vissza.
                Ismerd meg, hogyan fejlődött ez a sport a kezdetektől napjainkig.
              </p>
              <Link
                href="/tortenet"
                className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-primary hover:text-neon transition-colors group"
              >
                Teljes történelem
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-4">
            <div className="relative pl-6 border-l border-border">
              {milestones.map((m, i) => (
                <div
                  key={m.era}
                  className={`mb-8 last:mb-0 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="absolute -left-1.5 w-3 h-3 border border-primary/60 rotate-45 bg-background" aria-hidden="true" />
                  <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold block mb-1">
                    {m.era}
                  </span>
                  <p className="text-sm text-foreground/80">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/history.png"
                alt="Görkorcsolya evolúció, vintage és modern"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
