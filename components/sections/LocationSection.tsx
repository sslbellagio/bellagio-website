'use client'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

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

const UPCOMING_INFRA = [
  { title: 'Airoli–Katai Tunnel Road', detail: 'Direct connectivity to central suburbs. Cuts commute by 2 hours.', dist: '2.5 km' },
  { title: 'Metro Line 12 — Kalyan–Taloja', detail: 'Fully elevated, 20 km metro. Reduces travel time to Navi Mumbai.', dist: '2 km' },
  { title: 'Virar–Alibaug Multimodal Corridor', detail: '126 km access-controlled expressway connecting Raigad, Thane, Palghar.', dist: '2 km' },
  { title: 'Navi Mumbai International Airport', detail: 'Second airport in Mumbai — just 30 minutes from the project.', dist: '20 km' },
  { title: 'Ahmedabad–Mumbai Bullet Train', detail: 'Bullet train route corridor passes through the vicinity.', dist: '4 km' },
  { title: 'Mothagaon–Mankoli Bridge', detail: '980m, 6-lane bridge connecting Thane to Dombivli. Saves 1 hour.', dist: '5 km' },
]

export default function LocationSection() {
  return (
    <section id="location" aria-label="SSL Bellagio location and connectivity"
      style={{ background: 'var(--bg-location)' }}>
      <div className="section-container">

        <SectionHeading
          eyebrow="Sonar Pada, Dombivli East"
          // title="The Ultimate Address."
          title="Location"
          subtitle="A balanced proposition — convenience, affordability, and strong growth potential. Infrastructure is evolving. Opportunities are expanding. Today, Sonar Pada stands poised for appreciation."
          light
        />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ marginBottom: '3rem', border: '1px solid rgba(150,114,62,0.3)', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d73.085!3d19.215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSonar%20Pada%2C%20Dombivli%20East!5e0!3m2!1sen!2sin!4v1"
            width="100%" height="400" style={{ border: 0, display: 'block', pointerEvents: 'none' }}
            allowFullScreen loading="lazy"
            title="SSL Bellagio location map — Sonar Pada, Dombivli East"
            referrerPolicy="no-referrer-when-downgrade" />
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0', marginBottom: '4rem'
        }}>
          {Object.entries(CONNECTIVITY).map(([category, items], ci) => (
            <motion.div key={category}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: ci * 0.1, duration: 0.6 }}
              style={{
                padding: '2rem', borderRight: ci < 3 ? '1px solid rgba(150,114,62,0.2)' : 'none',
                borderBottom: '1px solid rgba(150,114,62,0.2)'
              }}>
              <h4 style={{
                fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--color-brand)', marginBottom: '1.25rem'
              }}>{category}</h4>
              {items.map((item, ii) => (
                <div key={ii} style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'baseline', padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(150,114,62,0.1)'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.8rem',
                    color: 'rgba(245,237,216,0.75)'
                  }}>{item.place}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                    color: 'var(--color-brand-light)', fontWeight: 500,
                    whiteSpace: 'nowrap', marginLeft: '0.5rem'
                  }}>{item.dist}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* <SectionHeading eyebrow="Upcoming Infrastructure" title="The Next Chapter in Exponential Growth." light />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px',
          background: 'rgba(150,114,62,0.2)'
        }}>
          {UPCOMING_INFRA.map((infra, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{ background: 'var(--bg-location)', padding: '2rem' }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.6rem', fontWeight: 500,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--color-brand)', marginBottom: '0.5rem'
              }}>{infra.dist} away</p>
              <h4 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 300,
                color: 'var(--color-text-light)', marginBottom: '0.5rem'
              }}>{infra.title}</h4>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.82rem', lineHeight: 1.7,
                color: 'rgba(245,237,216,0.6)'
              }}>{infra.detail}</p>
            </motion.div>
          ))}
        </div> */}

      </div>
    </section>
  )
}
