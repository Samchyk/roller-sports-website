'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-card/95 backdrop-blur-md border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          Weboldalunk sütiket használ a felhasználói élmény javítása érdekében. A
          böngészés folytatásával elfogadod a{' '}
          <Link
            href="/cookie-iranyelvek"
            className="text-primary underline underline-offset-2 hover:text-neon transition-colors"
          >
            cookie irányelveinket
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-xs font-semibold tracking-[0.15em] uppercase px-4 py-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
          >
            Elutasítom
          </button>
          <button
            onClick={accept}
            className="text-xs font-semibold tracking-[0.15em] uppercase px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
