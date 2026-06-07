import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Történelem — Hungary Görkorcsolyázás',
  description:
    'A görkorcsolyázás története a 18. századi feltalálástól a modern inline skatig. Fedezd fel a sport magyarországi múltját és fejlődését.',
}

const timeline = [
  {
    year: '1760',
    title: 'Az első görkorcsolya',
    body: 'John Joseph Merlin belga feltaláló mutatta be az első primitív görkorcsolyát egy londoni partyn. A szerkezet egysorú fémkorongokból állt — és a bemutató katasztrófával végződött, amikor Merlin nekiütközött egy tükörnek.',
  },
  {
    year: '1819',
    title: 'Párizsi szabadalom',
    body: 'M. Petitbled párizsi szabadalmaztatta az első háromkerekes görkorcsolyát. A szerkezet irányíthatatlan volt, de a szabadalom mégis megalapozta a görkorcsolya mint találmány státuszát Európában.',
  },
  {
    year: '1863',
    title: 'A modern görkorcsolya születése',
    body: 'James Leonard Plimpton találta fel a négykerekű, rocking-action görkorcsolyát, amellyel valóban lehetséges volt kanyarodni. Ez volt a modern görkorcsolyázás tényleges kezdete.',
  },
  {
    year: '1880-as évek',
    title: 'Európai elterjedés',
    body: 'A görkorcsolya egész Európában elterjedt. Az első magyarországi görgőspálya-feljegyzések Budapest belvárosához köthetők, ahol a tehetős polgárság szórakozásaként jelent meg.',
  },
  {
    year: '1900-as évek',
    title: 'Tömegszport Magyarországon',
    body: 'A 20. század első felében a görkorcsolyapályák egyre szélesebb rétegekhez értek el. Az állami sportpolitika is beemelte a görkorcsolyát a rekreációs tevékenységek közé.',
  },
  {
    year: '1980-as évek',
    title: 'Az inline forradalom',
    body: 'Scott Olson szerkesztette újra az egysorú görkorcsolyát, és megalapította a Rollerblade márkát. Az inline korcsolya először a hoki edzések kiegészítője volt, majd önálló sportágak sorát szülte.',
  },
  {
    year: '1990-es évek',
    title: 'Magyarország inline kora',
    body: 'Az inline görkorcsolya Magyarországon is divathullámot indított el. A 90-es évek közepe-vége az inline görkorcsolya igazi aranykorát jelentette — nemcsak sport, hanem életstílus is volt.',
  },
  {
    year: 'Ma',
    title: 'Reneszánsz és közösség',
    body: 'A görkorcsolyázás ma reneszánszát éli. Az urbán görkorcsolyázás, a speed skating, a slalom és a fitness gurulás aktív közösségek köré szerveződik Magyarországon.',
  },
]

const disciplines = [
  {
    name: 'Freestyle / Slalom',
    desc: 'Kúpok között, zenére végzett koreografált mozgás. A precizitás és a kreativitás ötvözete.',
    img: '/images/techniques.png',
  },
  {
    name: 'Speed Skating',
    desc: 'A gyorsasági görkorcsolyázás olimpiai sportág, ahol a végső cél a maximális sebesség elérése hosszabb pályán.',
    img: '/images/fitness.png',
  },
  {
    name: 'Artistic Skating',
    desc: 'Zenére végzett pontozásos programok, egyéni és csoportos versenyszámok — a balett és a sport találkozása.',
    img: '/images/disciplines.png',
  },
  {
    name: 'Urban / Aggressive',
    desc: 'A város mint pálya — lépcsők, rámpák, korlátok és sima betonterületek adják az akciók terepét.',
    img: '/images/urban.png',
  },
]

export default function TortenetPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/history.png"
            alt="Régi és modern görkorcsolya kettős expozíción"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, oklch(0.1 0.005 260) 100%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              1760-tól napjainkig
            </span>
          </div>
          <h1 className="font-heading text-[clamp(3rem,8vw,6rem)] leading-none text-foreground text-balance">
            A GÖRKORCSOLYA
            <br />
            <span className="neon-text">TÖRTÉNETE</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg max-w-2xl leading-relaxed">
            Két és fél évszázad innováció, divathullámok és sportforradalmak — a
            görkorcsolyázás útja a szalonoktól az utcáig.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16">
          Idővonal
        </p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden="true" />

          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="group flex gap-0 md:gap-12 items-start py-10 border-b border-border last:border-b-0 hover:bg-card/30 transition-colors duration-300 px-4 -mx-4"
              >
                {/* Year */}
                <div className="hidden md:flex flex-col items-end min-w-[5.5rem] pr-6 pt-1">
                  <span className="font-heading text-lg text-primary group-hover:text-neon transition-colors duration-300">
                    {item.year}
                  </span>
                </div>
                {/* Dot */}
                <div className="hidden md:flex mt-2 flex-shrink-0 relative z-10" aria-hidden="true">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-neon transition-colors duration-300 ring-4 ring-background" />
                </div>
                {/* Content */}
                <div className="flex-1 md:pl-8">
                  <span className="md:hidden text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-1 block">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines section */}
      <section className="bg-card/30 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="section-divider mb-16" />
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Sportágak
              </p>
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-none text-foreground">
                SPORTÁGI FEJLŐDÉS
              </h2>
            </div>
            <Link
              href="/tanulas"
              className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-primary hover:text-neon transition-colors duration-300"
            >
              Tanulás &amp; Technikák
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {disciplines.map((d) => (
              <div key={d.name} className="group bg-background overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-base text-foreground mb-2">{d.name}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
