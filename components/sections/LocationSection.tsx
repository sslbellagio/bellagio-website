'use client'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Image from 'next/image'

const CONNECTIVITY = {
  'Commute': [
    { place: 'Dombivli Railway Station', dist: '2.5 km' },
    { place: 'Sagaon Metro Station', dist: '0 km (adjacent)' },
    { place: 'Kalyan Station', dist: '4.0 km' },
    { place: 'Mumbai International Airport', dist: '4.5 km' },
    { place: 'Navi Mumbai Int\'l Airport', dist: '20 km (30 min)' },
    { place: 'Kalyan Shil Road Highway', dist: 'On Highway' },
  ],
  'Education': [
    { place: 'Eva World School', dist: '1 km' },
    { place: 'New Cambridge English School', dist: '500 m' },
    { place: 'Narayana International School', dist: '1 km' },
    { place: 'Omkar International School', dist: '1 km' },
    { place: 'S.S. Jondhale College of Engineering', dist: '1 km' },
  ],
  'Healthcare': [
    { place: 'Jupiter Hospital', dist: '1 km' },
    { place: 'Icon Hospital', dist: '1 km' },
    { place: 'AIIMS Hospital', dist: '1.5 km' },
    { place: 'R R Hospital', dist: '2.1 km' },
  ],
  'Retail': [
    { place: 'DMart', dist: '0.5 km' },
    { place: 'R Mall', dist: '1.5 km' },
    { place: 'Xperia Mall', dist: '2 km' },
    { place: 'Metro Mall', dist: '2 km' },
  ],
}

export default function LocationSection() {
  return (
    <section id="location" aria-label="SSL Bellagio location and connectivity"
      style={{ background: 'var(--bg-location)', paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="section-container">

        <SectionHeading
          eyebrow="Sonar Pada, Dombivli East"
          title="Location"
          subtitle="A balanced proposition — convenience, affordability, and strong growth potential. Infrastructure is evolving. Opportunities are expanding. Today, Sonar Pada stands poised for appreciation."
          light
        />

        {/* Map iframe wrapped simply. Removed heavy animations to ensure smooth scrolling. */}
        {/* 
        <div style={{ marginBottom: '4rem', border: '1px solid rgba(150,114,62,0.3)', overflow: 'hidden', background: '#e5e3df' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d73.085!3d19.215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSonar%20Pada%2C%20Dombivli%20East!5e0!3m2!1sen!2sin!4v1"
            width="100%" height="400" 
            style={{ border: 0, display: 'block', pointerEvents: 'none' }} // pointerEvents none prevents scroll trapping inside map
            allowFullScreen loading="lazy"
            title="SSL Bellagio location map"
            referrerPolicy="no-referrer-when-downgrade" />
        </div> 
        */}

        <div style={{ marginBottom: '4rem', border: '1px solid rgba(150,114,62,0.3)', overflow: 'hidden', background: '#e5e3df', position: 'relative' }}>
          <Image
            src="/images/map-location-final.png"
            alt="SSL Bellagio Location Map"
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem', marginBottom: '2rem'
        }}>
          {Object.entries(CONNECTIVITY).map(([category, items], ci) => (
            <motion.div key={category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.4 }}
              style={{
                padding: '1.5rem',
                border: '1px solid rgba(150,114,62,0.2)',
                background: 'rgba(26,18,8,0.5)'
              }}>
              <h4 style={{
                fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--color-brand)', marginBottom: '1.25rem'
              }}>{category}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {items.map((item, ii) => (
                  <div key={ii} style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px dashed rgba(150,114,62,0.15)',
                    paddingBottom: '0.5rem'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                      color: 'rgba(245,237,216,0.85)'
                    }}>{item.place}</span>
                    <span style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                      color: 'var(--color-brand-light)', fontWeight: 500,
                      whiteSpace: 'nowrap', marginLeft: '1rem'
                    }}>{item.dist}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
