'use client'
import Image from 'next/image'
import SectionHeading from '../ui/SectionHeading'
import { motion } from 'framer-motion'

const AMENITIES = [
  { img: '/images/amenities/pool.webp', title: 'Infinity Pool', desc: 'Rise, unwind, and merge with the horizon.' },
  { img: '/images/amenities/gym.webp', title: 'Air-Conditioned Gym', desc: 'Peak performance meets perfect comfort.' },
  { img: '/images/amenities/steam.webp', title: 'Steam & Sauna', desc: 'Step in. Slow down. Emerge renewed.' },
  { img: '/images/amenities/yoga.webp', title: 'Yoga Zone', desc: 'Every breath bringing you closer to balance.' },
  { img: '/images/amenities/kids-playing.webp', title: 'Kids\' Play Area', desc: 'Every corner sparks joy and discovery.' },
  { img: '/images/amenities/indoor.webp', title: 'Indoor Game Room', desc: 'Created for spirited play and endless excitement.' },
  { img: '/images/amenities/senior.webp', title: 'Senior Citizens\' Area', desc: 'Dedicated zone that honours every moment lived.' },
]

export default function AmenitiesSection() {
  return (
    <section id="amenities" aria-label="SSL Bellagio amenities"
      style={{
        background: 'var(--bg-amenities)',
        paddingTop: 'var(--section-py)',
        paddingBottom: 'var(--section-py)',
        width: '100%',
        overflow: 'hidden' // ensure no horizontal blowout
      }}>

      <div style={{
        maxWidth: 'var(--max-width)', margin: '0 auto',
        paddingLeft: 'var(--container-px)', paddingRight: 'var(--container-px)'
      }}>
        <SectionHeading
          eyebrow="A World of Recreation"
          title="Amenities"
          subtitle="Step into a realm where recreation meets refinement. Be it serene wellness zones or vibrant social spaces, every amenity is thoughtfully crafted. At Bellagio, leisure is not an afterthought, but a way of life."
        />
      </div>

      {/* Pure CSS Native Scroll Carousel - Ultra Performant */}
      <style>{`
        .amenities-scroll-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 1.5rem;
          padding: 1rem var(--container-px) 3rem var(--container-px);
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
        }
        .amenities-scroll-container::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }
        .amenity-card-wrapper {
          flex: 0 0 85%;
          max-width: 400px;
          scroll-snap-align: start;
        }
        @media (min-width: 768px) {
          .amenity-card-wrapper { flex: 0 0 45%; }
        }
        @media (min-width: 1024px) {
          .amenity-card-wrapper { flex: 0 0 30%; }
        }
      `}</style>

      <div className="amenities-scroll-container">
        {AMENITIES.map((amenity, i) => (
          <div key={i} className="amenity-card-wrapper">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'var(--color-white)', overflow: 'hidden',
                border: '1px solid var(--color-border)',
                height: '100%',
                display: 'flex', flexDirection: 'column'
              }}
              aria-label={`Amenity: ${amenity.title}`}>
              
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image src={amenity.img} alt={amenity.title}
                  fill style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 85vw, 400px" />
              </div>

              <div style={{ padding: '1.5rem', flex: 1 }}>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--color-brand)', marginBottom: '0.5rem'
                }}>Amenity</p>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 400,
                  color: 'var(--color-text-primary)', marginBottom: '0.5rem'
                }}>{amenity.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.6,
                  color: 'var(--color-text-muted)'
                }}>{amenity.desc}</p>
              </div>
            </motion.article>
          </div>
        ))}
      </div>

      {/* Security Features inside Amenities Section */}
      <div style={{
        maxWidth: 'var(--max-width)', margin: '2rem auto 0',
        padding: '0 var(--container-px)'
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)'
        }}>
          {[
            { img: '/images/security/facial-lock.webp', title: 'Facial Lock Security', desc: 'Advanced facial recognition for secure access.' },
            { img: '/images/security/my-gate-app.webp', title: 'MyGate Integration', desc: 'Seamless visitor management via mobile.' },
            { img: '/images/security/smart-home.webp', title: 'Smart Home Automation', desc: 'Control your home environment effortlessly.' },
          ].map((feat, i) => (
            <div key={i} style={{ background: 'var(--color-white)', padding: '2rem', textAlign: 'center' }}>
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.4 }}
               >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  <Image src={feat.img} alt={feat.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 400,
                  color: 'var(--color-brand-dark)', marginBottom: '0.5rem'
                }}>{feat.title}</h4>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                  color: 'var(--color-text-muted)'
                }}>{feat.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
