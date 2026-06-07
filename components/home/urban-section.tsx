'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const environments = [
  {
    title: 'Sima felületek',
    desc: 'A legjobb aszfalt, csiszolt beton és speciális görkorcsolyás burkolat — tanuld meg, hol érdemes keresni őket.',
  },
  {
    title: 'Rekreációs parkok',
    desc: 'Parkokba integrált futóutak és körpályák, ahol a természet és az urbán sport találkozik.',
  },
  {
    title: 'Fedett pályák',
    desc: 'Esőben, hidegben, melegben — a fedett edzőterek és sportcsarnokok egész évben elérhetők.',
  },
  {
    title: 'Szabadtéri helyszínek',
    desc: 'Promenádok, kikötők, parkolók és viaduktok alatt húzódó betonszakaszok — a város tele van lehetőséggel.',
  },
  {
    title: 'Tanulásra alkalmas helyek',
    desc: 'Kis forgalmú utcák, csendes terek, enyhén lejtős bevásárlóközpont-parkolók — ideálisak az első lépésekhez.',
  },
]

export default function UrbanSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      aria-label="Urbán görkorcsolyás környezetek"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="relative h-full min-h-64 overflow-hidden">
              <Image
                src="/images/urban.png"
                alt="Légi felvétel urbán görkorcsolyás pályáról alkonyatkor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, oklch(0.1 0.005 260) 100%)' }} />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-neon" aria-hidden="true" />
              <span className="text-xs tracking-[0.3em] uppercase text-neon font-semibold">
                Urbán helyszínek
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] leading-none text-foreground mb-8">
              A VÁROS
              <br />
              <span className="neon-text">MINT PÁLYA</span>
            </h2>

            <div className="flex flex-col gap-6">
              {environments.map((e, i) => (
                <div
                  key={e.title}
                  className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${i * 80 + 300}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon mt-2 shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">{e.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                  {i < environments.length - 1 && <div className="mt-5 h-px bg-border/40 ml-5" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
