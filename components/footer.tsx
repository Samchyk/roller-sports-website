import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const footerLinks = {
  'Oldalak': [
    { href: '/', label: 'Főoldal' },
    { href: '/tanulas', label: 'Tanulás & Technikák' },
    { href: '/tortenet', label: 'Történelem' },
    { href: '/blog', label: 'Blog' },
  ],
  'Jogi': [
    { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelvek' },
    { href: '/cookie-iranyelvek', label: 'Cookie irányelvek' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-card/50" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.6 0.22 240 / 0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="absolute inset-0 border border-primary/60 rotate-45" />
                <div className="absolute inset-1.5 bg-primary/20 rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-neon rounded-full" />
                </div>
              </div>
              <span className="font-heading text-xl tracking-widest text-foreground uppercase">
                Hungarygorkorcsolyazas
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Magyarország görkorcsolyás közösségének digitális otthona. Minden,
              amit a görkorcsolyázásról tudni érdemes — egy helyen.
            </p>

            <div id="kapcsolat" className="mt-8 scroll-mt-28">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Kapcsolat
              </p>
              <a
                href="mailto:info@hungarygorkorcsolyazas.com"
                className="text-primary hover:text-neon transition-colors duration-300 text-sm"
              >
                info@hungarygorkorcsolyazas.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">
                  {section}
                </p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <ArrowRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary"
                          aria-hidden="true"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-1 text-muted-foreground text-xs tracking-wider overflow-hidden h-6">
            <div className="flex animate-marquee gap-12 whitespace-nowrap" aria-hidden="true">
              {['GÖRKORCSOLYA', 'INLINE', 'SPEED', 'ARTISTIC', 'URBAN', 'BALANCE', 'MOTION', 'GÖRDÜLJ', 'GÖRKORCSOLYA', 'INLINE', 'SPEED', 'ARTISTIC', 'URBAN', 'BALANCE', 'MOTION', 'GÖRDÜLJ'].map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground tracking-wider shrink-0">
            &copy; hungarygorkorcsolyazas.com
          </p>
        </div>
      </div>
    </footer>
  )
}
