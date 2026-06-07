import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tanulás & Technikák — Hungary Görkorcsolyázás',
  description:
    'Görkorcsolya tanulási útmutató — kezdőktől haladókig. Fékezési technikák, slalom alapok, biztonság és edzéstervek.',
}

const levels = [
  {
    level: 'Kezdő',
    label: '01',
    color: 'text-neon border-neon/40',
    steps: [
      'Egyensúly és alapállás felvétele',
      'Biztonságos esési technikák',
      'Az első toló-csúszó lépések',
      'Alapfékező módszerek (sarkifék, T-fék)',
      'Kanyarodás alapjai',
    ],
  },
  {
    level: 'Haladó',
    label: '02',
    color: 'text-primary border-primary/40',
    steps: [
      'Folyamatos, ritmikus gördülés',
      'Gyorsítás és lelassítás',
      'Ekeállás-fék (plow stop)',
      'Slalom alapok — kúpok között',
      'Lejtmenetkezelés',
    ],
  },
  {
    level: 'Magabiztosok',
    label: '03',
    color: 'text-accent border-accent/40',
    steps: [
      'Hockey stop',
      'Visszafelé görkorcsolyázás',
      'Crossing kanyar',
      'Ugrásos elemek alapjai',
      'Freestyle mozdulatsor',
    ],
  },
]

const techniques = [
  {
    title: 'Sarkifék',
    category: 'Fékezés',
    difficulty: 'Kezdő',
    desc: 'Az egyik láb orra felfelé emelkedik, a sarokfék gumitömbje a talajon fékez. A leggyakoribb és legjobban tanítható módszer.',
    tip: 'Tartsd a törzsedet kissé hátradőlve, és egyenletesen növeld a nyomást.',
    img: '/images/techniques.png',
  },
  {
    title: 'T-fék',
    category: 'Fékezés',
    difficulty: 'Kezdő',
    desc: 'Az egyik lábat 90 fokos szögben helyezed a másik mögé. A hátul lévő korcsolya súrlódik a talajon.',
    tip: 'A hátul lévő lábat ferde szögben, nem merőlegesen húzd be — ez elkerüli a hirtelen megállást.',
    img: '/images/techniques.png',
  },
  {
    title: 'Ekeállás-fék',
    category: 'Fékezés',
    difficulty: 'Közepes',
    desc: 'Mindkét lábat kifelé, V-alakban nyitod. A kerekek belső éle fékez — erős és hatékony módszer.',
    tip: 'Hajlítsd be a térdeidet mélyen, és egyenletesen terjeszd szét mindkét lábat.',
    img: '/images/techniques.png',
  },
  {
    title: 'Slalom crossing',
    category: 'Slalom',
    difficulty: 'Haladó',
    desc: 'Az egyik láb a másik elé kerül, keresztlépéssel ívelt pályán haladva. Az összes haladó slalom mozgás alapköve.',
    tip: 'Először lassan, a keresztlépés pontos végrehajtására fókuszálva gyakorold — a sebesség magától jön.',
    img: '/images/disciplines.png',
  },
  {
    title: 'Hockey stop',
    category: 'Fékezés',
    difficulty: 'Haladó',
    desc: 'Mindkét láb egyszerre fordul keresztbe, a kerekek oldala fékez. Gyors megálláshoz elengedhetetlen.',
    tip: 'Előbb egy lábbal kísérletezz — a két láb összerendezése fokozatosan jön.',
    img: '/images/equipment.png',
  },
  {
    title: 'Visszafelé gördülés',
    category: 'Haladó technika',
    difficulty: 'Haladó',
    desc: 'Háttal haladva a testsúly áthelyezéssel irányítod a mozgást. Szabad, lapos területen érdemes elkezdeni.',
    tip: 'Kezdd meg nagyon lassan, és közelítsd a falat, hogy ha kell, kapaszkodj.',
    img: '/images/fitness.png',
  },
]

const safetyItems = [
  { item: 'Fejvédő sisak', required: true },
  { item: 'Térdvédő', required: true },
  { item: 'Könyökvédő', required: true },
  { item: 'Csuklóvédő', required: true },
  { item: 'Megfelelő méretű korcsolya', required: true },
  { item: 'Kesztyű (opcionális)', required: false },
  { item: 'Tükrös mellény (közúton)', required: false },
]

export default function TanulasPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/techniques.png"
            alt="Görkorcsolya kerekek közelről"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, oklch(0.1 0.005 260) 100%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              Kezdőktől haladókig
            </span>
          </div>
          <h1 className="font-heading text-[clamp(3rem,8vw,6rem)] leading-none text-foreground text-balance">
            TANULÁS &amp;
            <br />
            <span className="neon-text">TECHNIKÁK</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg max-w-2xl leading-relaxed">
            Strukturált útmutató a görkorcsolyázás megtanulásához — fékezési
            módszerektől a slalom elemekig.
          </p>
        </div>
      </section>

      {/* Learning levels */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12">
          Haladási szintek
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {levels.map((lvl) => (
            <div key={lvl.level} className="bg-background p-8 lg:p-10">
              <div className="flex items-start justify-between mb-6">
                <span className={`inline-block text-[10px] tracking-[0.25em] uppercase border px-3 py-1 ${lvl.color}`}>
                  {lvl.level}
                </span>
                <span className="font-heading text-5xl text-foreground/10 leading-none">
                  {lvl.label}
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {lvl.steps.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle
                      size={14}
                      className="flex-shrink-0 mt-0.5 text-primary"
                      aria-hidden="true"
                    />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Techniques grid */}
      <section className="bg-card/30 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="section-divider mb-16" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Technikák részletesen
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-none text-foreground mb-12">
            TECHNIKÁK &amp; TIPPEK
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {techniques.map((t) => (
              <div key={t.title} className="group bg-background overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-background/50" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-[9px] tracking-[0.2em] uppercase border border-primary/40 text-primary px-2 py-0.5">
                      {t.category}
                    </span>
                    <span className="text-[9px] tracking-[0.2em] uppercase border border-border text-muted-foreground px-2 py-0.5">
                      {t.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{t.desc}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-primary mb-1">Tipp</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{t.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety checklist */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Biztonság
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-none text-foreground mb-6">
              VÉDELMI FELSZERELÉS ELLENŐRZŐLISTA
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              A görkorcsolyás balesetek nagy része megelőzhető a megfelelő
              védőfelszerelés következetes viselésekor — függetlenül a
              tudásszintedtől.
            </p>
            <ul className="flex flex-col gap-3">
              {safetyItems.map((s) => (
                <li
                  key={s.item}
                  className="flex items-center gap-4 py-3 border-b border-border last:border-b-0"
                >
                  <CheckCircle
                    size={16}
                    className={s.required ? 'text-primary flex-shrink-0' : 'text-muted-foreground flex-shrink-0'}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-foreground flex-1">{s.item}</span>
                  <span className={`text-[9px] tracking-[0.2em] uppercase border px-2 py-0.5 flex-shrink-0 ${s.required ? 'text-primary border-primary/40' : 'text-muted-foreground border-border'}`}>
                    {s.required ? 'Kötelező' : 'Ajánlott'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative h-[480px] overflow-hidden">
              <Image
                src="/images/safety.png"
                alt="Görkorcsolyás védőfelszerelés elrendezve"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary/20" aria-hidden="true" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-neon/20" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* CTA to blog */}
      <section className="bg-card/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Mélyebbre mész?
            </p>
            <h3 className="font-heading text-2xl text-foreground">
              OLVASD EL A TECHNIKA CIKKEINKET
            </h3>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-3 px-8 py-4 border border-primary text-primary text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex-shrink-0"
          >
            Blog &amp; Cikkek
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
