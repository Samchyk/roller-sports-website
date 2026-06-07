'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/tanulas', label: 'Tanulás' },
  { href: '/tortenet', label: 'Történet' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Hungary Görkorcsolyázás főoldal">
          <div className="relative w-8 h-8 flex-shrink-0">
            <div className="absolute inset-0 border border-primary/60 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
            <div className="absolute inset-1.5 bg-primary/20 rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-neon rounded-full" />
            </div>
          </div>
          <span className="font-heading text-lg tracking-widest text-foreground">
            Hungarygorkorcsolyazas
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Főnavigáció">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/rolunk#kapcsolat"
            className="text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Kapcsolat
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-500 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-6" aria-label="Mobilnavigáció">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/rolunk#kapcsolat"
            onClick={() => setOpen(false)}
            className="text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 border border-primary/50 text-primary text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Kapcsolat
          </Link>
        </nav>
      </div>
    </header>
  )
}
