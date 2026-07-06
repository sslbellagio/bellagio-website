'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const LINKS = ['About', 'Amenities', 'Location', 'Floor Plans', 'Contact']

export default function FooterSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s+/g, ''))
    const lenis = (window as any).lenis

    if (el && lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.2 })
    } else {
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      style={{
        background: 'var(--bg-footer)',
        padding: '4rem var(--container-px) 2rem',
      }}
      aria-label="Footer"
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(150,114,62,0.2)',
            marginBottom: '2rem',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          {/* Logo */}
          <div>
            <div
              style={{
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'center' : 'flex-start',
              }}
            >
              <Image
                src="/images/bellagio-logo.webp"
                alt="SSL Life Spaces"
                width={200}
                height={80}
                priority
                style={{
                  width: '100%',
                  maxWidth: '220px',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                lineHeight: 1.7,
                color: 'rgba(245,237,216,0.5)',
                maxWidth: isMobile ? '100%' : '240px',
                margin: isMobile ? '0 auto' : '0',
              }}
            >
              An unequalled lifestyle at an unrivalled location. Smart Living,
              Dombivli East.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-brand)',
                marginBottom: '1.25rem',
              }}
            >
              Quick Links
            </h4>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {LINKS.map((link) => (
                <li key={link} style={{ marginBottom: '0.6rem' }}>
                  <button
                    onClick={() => scrollTo(link)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'rgba(245,237,216,0.6)',
                      transition: 'color 0.3s',
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-brand-light)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(245,237,216,0.6)'
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-brand)',
                marginBottom: '1.25rem',
              }}
            >
              Developer
            </h4>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                lineHeight: 1.8,
                color: 'rgba(245,237,216,0.5)',
              }}
            >
              SSL Life Spaces
              <br />
              Lifestyle Pioneers of Kalyan, Dombivli & Thakurli
              <br />
              Building Spaces for Life since 1999
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-brand)',
                marginBottom: '1.25rem',
              }}
            >
              Contact
            </h4>

            <a
              href="tel:+917208310999"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                color: 'var(--color-brand-light)',
                textDecoration: 'none',
                marginBottom: '0.5rem',
                letterSpacing: '0.04em',
              }}
            >
              +91 72083 10999
            </a>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'rgba(245,237,216,0.5)',
                lineHeight: 1.6,
              }}
            >
              Kalyan Shil Road, Sonar Pada
              <br />
              Dombivli East — 421203
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'rgba(245,237,216,0.35)',
              lineHeight: 1.6,
              maxWidth: '600px',
            }}
          >
            MahaRERA No: PM1330002600001. All images, renders, and floor plans
            are for representation purposes only and are subject to change
            without prior notice. This website does not constitute an offer or
            contract.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'rgba(245,237,216,0.35)',
            }}
          >
            © {new Date().getFullYear()} SSL Life Spaces. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}