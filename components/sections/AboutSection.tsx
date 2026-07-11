'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '../ui/SectionHeading'
import AnimatedCounter from '../ui/AnimatedCounter'

const STATS = [
  { value: 28, suffix: '+', label: 'Years of\nFulfilling Dreams' },
  { value: 2.5, suffix: '+', label: 'Million Sq.Ft.\nDelivered' },
  { value: 72, suffix: '+', label: 'Projects\nDelivered' },
  { value: 7200, suffix: '+', label: 'Happy\nFamilies' },
]

const HIGHLIGHTS = [
  { value: '11-Acre', label: 'Project Size (Phase 1: 2-Acre)' },
  { value: '2', label: 'Residential Towers' },
  { value: '485', label: 'Total Residences' },
  { value: '429 sq.ft.', label: 'Starting Unit Size' },
  { value: 'Smart', label: 'Home Automation Included' },
  { value: '4 Years', label: 'Possession Timeline' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export default function AboutSection() {
  return (
    <section id="about" aria-label="About SSL Bellagio"
      style={{ background: 'var(--bg-about)' }}>
      <div className="section-container">

        <SectionHeading
          eyebrow="SSL Life Spaces · 25+ Years"
          title="Lifestyle Pioneers of Kalyan, Dombivli & Thakurli"
          subtitle="For some, choose nothing less than eminence in life. A location that stands apart. A lifestyle at par with tomorrow's living standards. Welcome to AI Living."
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '0', borderTop: '1px solid var(--color-border)', borderLeft: '1px solid var(--color-border)',
          marginBottom: '4rem'
        }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{
              padding: '2rem 1.5rem', textAlign: 'center',
              borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)'
            }}>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '3rem', fontWeight: 400,
                color: 'var(--color-brand)', lineHeight: 1
              }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-muted)',
                marginTop: '0.5rem', whiteSpace: 'pre-line', lineHeight: 1.6
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem', alignItems: 'center', marginBottom: '4rem'
        }}>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', aspectRatio: '4/5' }}>

            <div style={{
              position: 'absolute', inset: '-15px',
              border: '1px solid rgba(150,114,62,0.3)', zIndex: 0
            }} />
            <div style={{
              position: 'absolute', inset: '15px',
              border: '1px solid rgba(150,114,62,0.6)', zIndex: 2, pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', zIndex: 1 }}>
              <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ width: '100%', height: '100%', position: 'relative' }}
              >
                <Image src="/images/about.webp" alt="SSL Bellagio building exterior Dombivli East"
                  fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </motion.div>
            </div>
          </motion.div>

          <div>
            <SectionHeading eyebrow="Project Highlights" title="Rise to Live Above the Regular." align="left" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {HIGHLIGHTS.map((h, i) => (
                <motion.div key={i} custom={i} variants={cardVariants} initial="hidden"
                  whileInView="visible" viewport={{ once: true }}>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '1.6rem', fontWeight: 500,
                    color: 'var(--color-brand)'
                  }}>{h.value}</div>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 500,
                    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)',
                    marginTop: '0.25rem'
                  }}>{h.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ borderLeft: '2px solid var(--color-brand)', paddingLeft: '2rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)',
            fontWeight: 300, color: 'var(--color-text-primary)', marginBottom: '1rem'
          }}>
            Dombivli — The City That Has Always Had a Story to Tell
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.8,
            color: 'var(--color-text-muted)', maxWidth: '700px'
          }}>
            Dombivli isn't new to the spotlight. Long before it became one of MMR's most sought-after addresses, it was home to musicians, authors, and artists who shaped Maharashtra's cultural identity. A cosmopolitan population of over 12 lakh. Maharashtra's first literate town. Seamless connectivity to Thane, Navi Mumbai, and Mumbai. Today, the city is writing its next chapter — and it's one worth being part of.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
