'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import EnquiryPopup from './ui/EnquiryPopup'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Floor Plans', href: '#floorplans' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const lenis = (window as any).lenis
    const target = document.querySelector(href)
    if (target && lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 })
    else if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-desktop-btn   { display: flex; }
        .nav-hamburger     { display: none; }
        @media (max-width: 767px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-btn   { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>

      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
          background: scrolled ? 'rgba(26,18,8,0.96)' : 'rgba(26,18,8,0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(150,114,62,0.2)',
          padding: '0.75rem 2rem',
          display: 'flex', alignItems: 'center',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* LEFT — Logo */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/bellagio-logo.webp"
              alt="SSL Bellagio Logo"
              width={140}
              height={70}
              style={{ width: 'auto', height: '48px', objectFit: 'contain', display: 'block' }}
              priority
            />
          </a>
        </div>

        {/* CENTER — Desktop Nav Links */}
        <ul className="nav-desktop-links"
          style={{ gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={e => handleNavClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 500,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: 'rgba(245,237,216,0.75)', textDecoration: 'none',
                  transition: 'color 0.3s', whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-brand-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,237,216,0.75)')}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT — Desktop Enquire Button / Mobile Hamburger */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {/* Desktop: Enquire Now button */}
          <button className="nav-desktop-btn btn-brand"
            style={{ fontSize: '0.65rem', padding: '0.65rem 1.5rem', alignItems: 'center' }}
            onClick={() => setPopupOpen(true)}
            aria-label="Open enquiry form">
            Enquire Now
          </button>

          {/* Mobile: Hamburger only */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none', border: 'none',
              color: 'var(--color-brand-light)', cursor: 'pointer',
              alignItems: 'center', justifyContent: 'center', padding: '4px',
            }}
            aria-label="Toggle menu">
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: 'rgba(20,13,5,0.98)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}>
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} onClick={e => handleNavClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 300,
                  color: 'var(--color-text-light)', textDecoration: 'none', letterSpacing: '0.06em',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-brand-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-light)')}>
                {link.label}
              </a>
            ))}
            <button
              className="btn-brand"
              style={{ marginTop: '0.5rem', fontSize: '0.7rem', padding: '0.8rem 2.5rem' }}
              onClick={() => { setMobileOpen(false); setPopupOpen(true) }}>
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  )
}
