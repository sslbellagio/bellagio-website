'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import SectionHeading from '../ui/SectionHeading'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Lock } from 'lucide-react'
import EnquiryForm from '../ui/EnquiryForm'

gsap.registerPlugin(ScrollTrigger)

const FLOOR_PLANS = {
  'Building 1': {
    info: '25 residential floors · 12 units per floor · Ground floor shop · 1st & 2nd floor commercial',
    plans: {
      '1 BHK': { img: '/images/floorplan-b1-1bhk.jpg', area: '~429 sq.ft. (indicative)', alt: 'SSL Bellagio Building 1 1BHK floor plan' },
      '2 BHK': { img: '/images/floor-plan/building-1-2bhk.jpg', area: '594 sq.ft. (carpet: 53.41 + balcony: 1.74 = 55.15 sq.m.)', alt: 'SSL Bellagio Building 1 2BHK floor plan' },
    },
  },
  'Building 2': {
    info: '24 residential floors · 8 units per floor · Ground + 3 podium floors parking',
    plans: {
      '1 BHK': { img: '/images/floorplan-b2-1bhk.jpg', area: '~429 sq.ft. (indicative)', alt: 'SSL Bellagio Building 2 1BHK floor plan' },
      '2 BHK': { img: '/images/floor-plan/building-2-2bhk.jpg', area: 'Available on enquiry', alt: 'SSL Bellagio Building 2 2BHK floor plan' },
    },
  },
}

type Building = keyof typeof FLOOR_PLANS
type PlanType = '1 BHK' | '2 BHK'

export default function FloorPlanSection() {
  const [activeBuilding, setActiveBuilding] = useState<Building>('Building 1')
  const [activePlan, setActivePlan] = useState<PlanType>('1 BHK')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showEnquiryForm, setShowEnquiryForm] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fp-heading', { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '#floorplans', start: 'top 80%', once: true }
        })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!imgRef.current) return
    gsap.fromTo(imgRef.current, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' })
  }, [activeBuilding, activePlan])

  const currentPlan = FLOOR_PLANS[activeBuilding].plans[activePlan]
  const tabBase = {
    fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500,
    letterSpacing: '0.14em', textTransform: 'uppercase' as const,
    padding: '0.75rem 1.75rem', border: '1px solid var(--color-brand)',
    cursor: 'pointer', transition: 'all 0.3s ease', background: 'none'
  }

  return (
    <section id="floorplans" aria-label="SSL Bellagio floor plans"
      style={{ background: 'var(--bg-floorplan)' }}>
      <div className="section-container">

        <div className="fp-heading">
          <SectionHeading eyebrow="Iconic Floor & Unit Plans" title="Floor Plan" />
        </div>

        <div style={{ display: 'flex', gap: '0', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
          {(Object.keys(FLOOR_PLANS) as Building[]).map(b => (
            <button key={b} onClick={() => setActiveBuilding(b)}
              style={{
                ...tabBase,
                background: activeBuilding === b ? 'var(--color-brand)' : 'transparent',
                color: activeBuilding === b ? '#fff' : 'var(--color-brand)',
                borderBottom: 'none', borderRadius: 0
              }}>
              {b}
            </button>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-muted)',
          marginBottom: '2rem', letterSpacing: '0.04em'
        }}>
          {FLOOR_PLANS[activeBuilding].info}
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
          {(['1 BHK', '2 BHK'] as PlanType[]).map(p => (
            <button key={p} onClick={() => setActivePlan(p)}
              style={{
                ...tabBase,
                background: activePlan === p ? 'var(--color-brand)' : 'transparent',
                color: activePlan === p ? '#fff' : 'var(--color-brand)'
              }}>
              {p}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem', alignItems: 'start'
        }}>

          <div ref={imgRef} style={{
            position: 'relative', background: '#fff',
            border: '1px solid var(--color-border)', padding: '1rem',
            cursor: isUnlocked ? 'default' : 'pointer',
            overflow: 'hidden'
          }}
          onClick={() => { if (!isUnlocked) setShowEnquiryForm(true) }}>
            <div style={{
              filter: isUnlocked ? 'none' : 'blur(8px)',
              transition: 'filter 0.5s ease'
            }}>
              <Image src={currentPlan.img} alt={currentPlan.alt}
                width={600} height={500} style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 50vw" />
            </div>

            {!isUnlocked && (
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.4)', zIndex: 10
              }}>
                <button className="btn-brand" style={{ pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lock size={16} /> Unlock Floor Plan
                </button>
              </div>
            )}
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-brand)',
              marginBottom: '0.5rem'
            }}>{activeBuilding} · {activePlan}</p>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 300,
              color: 'var(--color-text-primary)', marginBottom: '1rem'
            }}>
              Plush {activePlan} Residences
            </h3>
            <div className="gold-rule" />
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8,
              color: 'var(--color-text-muted)', marginTop: '1rem', marginBottom: '1.5rem'
            }}>
              Carpet Area: <strong style={{ color: 'var(--color-brand-dark)' }}>{currentPlan.area}</strong>
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.8,
              color: 'var(--color-text-muted)', marginBottom: '2rem'
            }}>
              Intelligently designed layouts with smart home automation, open balconies, dedicated dining area, and premium finishes. Every corner reflects individuality and elegance.
            </p>
            <a href="#contact" className="btn-brand" style={{ textDecoration: 'none', display: 'inline-flex' }}
              aria-label={`Enquire about ${activePlan} at SSL Bellagio`}>
              Enquire About This Unit
            </a>
          </div>
        </div>

      </div>
      
      <AnimatePresence>
        {showEnquiryForm && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
            }}
            onClick={() => setShowEnquiryForm(false)}>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: 'var(--bg-hero)', border: '1px solid rgba(150,114,62,0.3)',
                maxWidth: '480px', width: '100%', padding: '2.5rem', position: 'relative'
              }}>
              <button onClick={() => setShowEnquiryForm(false)} aria-label="Close popup"
                style={{
                  position: 'absolute', top: '1rem', right: '1rem', background: 'none',
                  border: 'none', color: 'var(--color-brand-light)', cursor: 'pointer'
                }}>
                <X size={20} />
              </button>
              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <h2 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 300,
                  color: 'var(--color-text-light)', lineHeight: 1.2
                }}>
                  Unlock Detailed Floor Plans
                </h2>
                <div className="gold-rule" style={{ marginTop: '1rem', margin: 'auto' }} />
              </div>
              
              <EnquiryForm 
                variant="dark" 
                source="Floor Plan" 
                onSuccessImmediate={() => setIsUnlocked(true)}
                onSuccess={() => setShowEnquiryForm(false)} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
