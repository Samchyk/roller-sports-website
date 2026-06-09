import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ShieldCheck, Database, UserCheck, Lock, Share2, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Adatvédelmi irányelvek — Hungary Görkorcsolyázás',
  description:
    'Hogyan kezeli és védi a személyes adataidat a hungarygorkorcsolyazas.com. Milyen adatokat gyűjtünk, milyen célból, mennyi ideig tároljuk, és milyen jogok illetnek meg.',
}

const principles = [
  {
    icon: Database,
    label: 'Milyen adatokat gyűjtünk',
    color: 'text-neon',
    desc: 'Kizárólag azokat az adatokat kezeljük, amelyeket önként megadsz (például e-mailben történő kapcsolatfelvételkor), illetve amelyeket a böngészésed során a rendszer automatikusan rögzít (anonim látogatottsági statisztika, technikai naplóadatok).',
    examples: 'pl. e-mail cím, IP-cím, böngésző típusa',
  },
  {
    icon: UserCheck,
    label: 'Milyen célból',
    color: 'text-primary',
    desc: 'Az adatokat a megkereséseid megválaszolására, az oldal működésének biztosítására, valamint a tartalmaink és a felhasználói élmény fejlesztésére használjuk. Marketing célú profilalkotást nem végzünk.',
    examples: 'pl. kapcsolattartás, oldalfejlesztés',
  },
  {
    icon: Lock,
    label: 'Hogyan védjük',
    color: 'text-secondary-foreground',
    desc: 'Megfelelő technikai és szervezési intézkedéseket alkalmazunk az adataid védelmében a jogosulatlan hozzáférés, módosítás vagy nyilvánosságra hozatal ellen. Az adatátvitel titkosított (HTTPS) csatornán történik.',
    examples: 'pl. titkosítás, hozzáférés-korlátozás',
  },
  {
    icon: Share2,
    label: 'Kivel osztjuk meg',
    color: 'text-accent-foreground',
    desc: 'Személyes adataidat nem adjuk el és nem adjuk át harmadik feleknek marketing célból. Adatfeldolgozóként kizárólag az oldal működéséhez szükséges szolgáltatókat (pl. tárhelyszolgáltató) vehetünk igénybe.',
    examples: 'pl. tárhely- és e-mail-szolgáltató',
  },
]

const sections = [
  {
    id: 'adatkezelo',
    title: 'Ki az adatkezelő?',
    body: [
      'Jelen tájékoztató a hungarygorkorcsolyazas.com weboldalon (a továbbiakban: „Weboldal") megvalósuló adatkezelésekre vonatkozik. Az adatkezelés célja, hogy átlátható tájékoztatást nyújtsunk arról, hogyan gyűjtjük, használjuk és védjük a látogatóink személyes adatait.',
      'Adatvédelemmel kapcsolatos bármely kérdés vagy kérelem esetén az info@hungarygorkorcsolyazas.com e-mail címen vehetsz fel velünk kapcsolatot.',
    ],
  },
  {
    id: 'jogalap',
    title: 'Az adatkezelés jogalapja',
    body: [
      'Személyes adataidat az Európai Unió Általános Adatvédelmi Rendeletével (GDPR) és a vonatkozó magyar jogszabályokkal összhangban kezeljük. Az adatkezelés jogalapja jellemzően a hozzájárulásod (pl. kapcsolatfelvétel), valamint a jogos érdekünk az oldal biztonságos és megbízható működtetéséhez.',
      'A hozzájáruláson alapuló adatkezelés esetén a hozzájárulásodat bármikor, indoklás nélkül visszavonhatod, ami nem érinti a visszavonás előtti adatkezelés jogszerűségét.',
    ],
  },
]

export default function PrivacyPolicyPage() {
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
            <ShieldCheck size={18} className="text-primary" aria-hidden="true" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              Jogi tájékoztató
            </span>
          </div>
          <h1 className="font-heading text-[clamp(2.5rem,7vw,5rem)] leading-none text-foreground text-balance">
            ADATVÉDELMI
            <br />
            <span className="neon-text">IRÁNYELVEK</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg max-w-2xl leading-relaxed">
            Átlátható tájékoztatás arról, hogyan kezeljük és védjük a személyes
            adataidat a hungarygorkorcsolyazas.com oldalon — és milyen jogok
            illetnek meg téged.
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

      {/* Principles */}
      <section className="bg-card/30 py-20 mt-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="section-divider mb-14" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Alapelvek
          </p>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-none text-foreground mb-12">
            HOGYAN KEZELJÜK AZ ADATAIDAT
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {principles.map((c) => {
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

      {/* Details */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        {/* Retention */}
        <div id="megorzes" className="scroll-mt-28 mb-14">
          <div className="flex items-center gap-3 mb-5">
            <Clock size={20} className="text-primary" aria-hidden="true" />
            <h2 className="font-heading text-2xl lg:text-3xl text-foreground">
              Meddig őrizzük az adatokat?
            </h2>
          </div>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            A személyes adataidat csak addig kezeljük, ameddig az a fenti célok
            eléréséhez feltétlenül szükséges, vagy ameddig azt jogszabály előírja.
            A kapcsolatfelvétel során megadott adatokat a megkeresés lezárását
            követően töröljük, kivéve, ha jogi kötelezettség hosszabb megőrzést ír elő.
          </p>
        </div>

        {/* Your rights */}
        <div id="jogaid" className="scroll-mt-28 mb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-5">
            Az érintettek jogai
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
            A GDPR alapján az alábbi jogok illetnek meg a személyes adataiddal
            kapcsolatban. Bármelyik gyakorlásához írj nekünk az alábbi e-mail címre.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Hozzáférés a kezelt adatokhoz',
              'Helyesbítés kérése',
              'Törléshez való jog („elfeledtetés")',
              'Az adatkezelés korlátozása',
              'Adathordozhatóság',
              'Tiltakozás az adatkezelés ellen',
              'Hozzájárulás visszavonása',
              'Panasz a felügyeleti hatóságnál (NAIH)',
            ].map((r) => (
              <div
                key={r}
                className="flex items-center gap-3 border border-border px-5 py-4 hover:border-primary/50 hover:bg-card/30 transition-all duration-300"
              >
                <ArrowRight size={14} className="text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm text-foreground/80">{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cookies reference */}
        <div id="sutik" className="scroll-mt-28 mb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-5">
            Sütik (cookie-k) kezelése
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            A Weboldal sütiket is használ a megfelelő működés és az anonim
            látogatottság-mérés érdekében. A sütik részletes kezeléséről külön
            tájékoztatóban olvashatsz a{' '}
            <Link href="/cookie-iranyelvek" className="text-primary hover:text-neon transition-colors">
              Cookie irányelvek
            </Link>{' '}
            oldalon.
          </p>
        </div>

        {/* Changes */}
        <div id="modositas" className="scroll-mt-28 mb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-foreground mb-5">
            A tájékoztató módosítása
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            Jelen adatvédelmi tájékoztatót időről időre frissíthetjük a jogszabályi
            változások vagy az oldal fejlesztései miatt. A módosításokat ezen az
            oldalon tesszük közzé. Javasoljuk, hogy alkalmanként tekintsd át ezt a
            tájékoztatót.
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
              Kérdésed van az adatkezelésről?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-6">
              Ha bármilyen kérdésed van a személyes adataid kezelésével vagy a
              jogaid gyakorlásával kapcsolatban, fordulj hozzánk bizalommal.
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
