import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Cookie, Shield, BarChart3, Settings, Megaphone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie irányelvek — Hungary Görkorcsolyázás',
  description:
    'Hogyan használ sütiket (cookie-kat) a hungarygorkorcsolyazas.com. A sütik típusai, céljuk, kezelésük és a böngészőbeállítások részletes ismertetése.',
}

const lastUpdated = '2026. június 7.'

const cookieTypes = [
  {
    icon: Shield,
    label: 'Feltétlenül szükséges',
    color: 'text-neon',
    desc: 'A weboldal alapvető működéséhez nélkülözhetetlen sütik. Ezek biztosítják a navigációt, a biztonságos böngészést és a hozzájárulási beállítások megjegyzését. Ezek nem kapcsolhatók ki.',
    examples: 'pl. cookie-consent (hozzájárulás állapota)',
  },
  {
    icon: BarChart3,
    label: 'Statisztikai',
    color: 'text-primary',
    desc: 'Anonim módon segítenek megérteni, hogyan használják a látogatók az oldalt — mely tartalmak népszerűek, honnan érkeznek a felhasználók. Ezekből fejlesztjük a tartalmat.',
    examples: 'pl. látogatottsági statisztika',
  },
  {
    icon: Settings,
    label: 'Funkcionális',
    color: 'text-secondary-foreground',
    desc: 'Megjegyzik a beállításaidat és preferenciáidat (például nyelvi választás), hogy személyre szabottabb élményt nyújtsanak a következő látogatáskor.',
    examples: 'pl. megjelenítési preferenciák',
  },
  {
    icon: Megaphone,
    label: 'Marketing',
    color: 'text-accent-foreground',
    desc: 'Csak kifejezett hozzájárulás esetén kerülnek beállításra. Releváns tartalmak és ajánlatok megjelenítését szolgálják. Jelenleg oldalunk nem helyez el marketingsütiket.',
    examples: 'jelenleg nem használatos',
  },
]

const sections = [
  {
    id: 'mi-az',
    title: 'Mi az a süti (cookie)?',
    body: [
      'A süti (cookie) egy kis méretű szöveges fájl, amelyet a meglátogatott weboldal helyez el a böngésződben, illetve az eszközödön. A sütik széles körben elterjedt technológiát jelentenek, amelyet szinte minden modern weboldal használ a megfelelő működés és a jobb felhasználói élmény érdekében.',
      'A sütik önmagukban nem képesek azonosítani téged, és nem tartalmaznak kártékony kódot. Segítségükkel az oldal "emlékszik" a műveleteidre és beállításaidra egy bizonyos ideig, így nem kell ezeket minden látogatáskor újból megadnod.',
    ],
  },
  {
    id: 'miert',
    title: 'Miért használunk sütiket?',
    body: [
      'A hungarygorkorcsolyazas.com elsősorban azért használ sütiket, hogy biztosítsa az oldal zavartalan működését, megjegyezze a hozzájárulási döntésedet, valamint anonim formában mérje az oldal látogatottságát és teljesítményét.',
      'Célunk, hogy folyamatosan javítsuk a tartalmainkat és a böngészési élményt — a sütik ehhez nyújtanak hasznos, összesített visszajelzést anélkül, hogy a személyes adataidat felfednék.',
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, oklch(0.14 0.008 260), transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="speed-line top-40 left-0 right-0 opacity-40" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <Cookie size={18} className="text-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              Jogi tájékoztató
            </span>
          </div>
          <h1 className="font-heading text-[clamp(2.5rem,7vw,5rem)] leading-none text-foreground text-balance">
            COOKIE
            <br />
            <span className="neon-text">IRÁNYELVEK</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg max-w-2xl leading-relaxed">
            Átlátható tájékoztatás arról, hogyan és miért használunk sütiket a
            hungarygorkorcsolyazas.com oldalon — és hogyan tarthatod kézben őket.
          </p>
          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Utoljára frissítve: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Intro text sections */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col gap-14">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-5">
                {s.title}
              </h2>
              <div className="flex flex-col gap-4">
                {s.body.map((p, i) => (
                  <p key={i} className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cookie types */}
      <section className="bg-card/30 py-20 mt-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="section-divider mb-14" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Kategóriák
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-none text-foreground mb-12">
            AZ ÁLTALUNK HASZNÁLT SÜTIK
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {cookieTypes.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.label}
                  className="group bg-background p-8 hover:bg-card/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={22} className={c.color} aria-hidden="true" />
                    <h3 className="font-heading text-lg text-foreground">{c.label}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {c.desc}
                  </p>
                  <p className="text-xs tracking-wider text-foreground/50 border-t border-border pt-3">
                    {c.examples}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Managing cookies */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <div id="kezeles" className="scroll-mt-28 mb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-5">
            Hogyan kezelheted a sütiket?
          </h2>
          <div className="flex flex-col gap-4 mb-8">
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
              Az oldal első megnyitásakor megjelenő sávban bármikor elfogadhatod
              vagy elutasíthatod a nem feltétlenül szükséges sütiket. A döntésed a
              böngésződben tárolódik, és bármikor módosíthatod.
            </p>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
              Emellett a böngésződ beállításaiban is teljes mértékben kezelheted,
              korlátozhatod vagy törölheted a sütiket. Felhívjuk a figyelmedet, hogy
              a feltétlenül szükséges sütik letiltása esetén előfordulhat, hogy az
              oldal egyes funkciói nem működnek megfelelően.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647' },
              { name: 'Mozilla Firefox', href: 'https://support.mozilla.org/kb/sutik-engedelyezese-es-tiltasa' },
              { name: 'Safari', href: 'https://support.apple.com/hu-hu/guide/safari/sfri11471/mac' },
              { name: 'Microsoft Edge', href: 'https://support.microsoft.com/hu-hu/microsoft-edge' },
            ].map((b) => (
              <a
                key={b.name}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-2 border border-border px-5 py-4 hover:border-primary/50 hover:bg-card/30 transition-all duration-300"
              >
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  {b.name}
                </span>
                <ArrowRight
                  size={14}
                  className="text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Third party */}
        <div id="harmadik-fel" className="scroll-mt-28 mb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-5">
            Harmadik féltől származó sütik
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            Bizonyos esetekben harmadik felek (például beágyazott térképek, videók
            vagy anonim látogatottság-mérő szolgáltatások) is elhelyezhetnek sütiket
            az eszközödön. Ezekre az adott szolgáltató saját adatvédelmi és cookie
            szabályzata vonatkozik, amelyre nincs közvetlen ráhatásunk.
          </p>
        </div>

        {/* Changes */}
        <div id="modositas" className="scroll-mt-28 mb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-5">
            A szabályzat módosítása
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            Jelen cookie irányelveket időről időre frissíthetjük a jogszabályi
            változások vagy az oldal fejlesztései miatt. A módosításokat ezen az
            oldalon tesszük közzé, a frissítés dátumának feltüntetésével. Javasoljuk,
            hogy alkalmanként tekintsd át ezt a tájékoztatót.
          </p>
        </div>

        {/* Contact CTA */}
        <div id="kapcsolat" className="scroll-mt-28">
          <div className="relative border border-border bg-card/40 p-8 lg:p-10 overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, oklch(0.6 0.22 240 / 0.5), transparent)' }}
              aria-hidden="true"
            />
            <h2 className="font-heading text-xl lg:text-2xl text-foreground mb-3">
              Kérdésed van a sütikről?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-6">
              Ha bármilyen kérdésed van a sütik használatával vagy az adatkezeléssel
              kapcsolatban, fordulj hozzánk bizalommal.
            </p>
            <a
              href="mailto:info@hungarygorkorcsolyazas.com"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              info@hungarygorkorcsolyazas.com
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-primary hover:text-neon transition-colors duration-300"
            >
              <ArrowRight size={14} className="rotate-180" aria-hidden="true" />
              Vissza a főoldalra
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
