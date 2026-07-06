'use client'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import EnquiryForm from '../ui/EnquiryForm'

export default function ContactSection() {
  return (
    <section id="contact" aria-label="Contact SSL Bellagio"
      style={{ background: 'var(--bg-contact)' }}>
      <div className="section-container">

        <SectionHeading
          eyebrow="Get in Touch"
          title="Schedule Your Site Visit."
          subtitle="Our team is available to answer your queries, arrange a site visit, or share the latest offers. Reach out today."
          align="center"
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'start'
        }}>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{
              background: 'var(--color-white)', padding: '2.5rem',
              border: '1px solid var(--color-border)'
            }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 300,
              color: 'var(--color-text-primary)', marginBottom: '0.5rem'
            }}>
              Request a Callback
            </h3>
            <div className="gold-rule" style={{ marginBottom: '1.5rem' }} />
            <EnquiryForm variant="light" source="contact_section" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 300,
                color: 'var(--color-text-primary)', marginBottom: '0.5rem'
              }}>Sales Lounge</h3>
              <div className="gold-rule" style={{ marginBottom: '1.5rem' }} />

              {[
                { Icon: MapPin, text: 'SSL Bellagio, Near Galaxy Furniture Hub, Kalyan Shil Road, Sonar Pada, Dombivli (E) — 421203' },
                { Icon: Phone, text: '+91 72083 10999', href: 'tel:+917208310999' },
                { Icon: Mail, text: 'info@sslbellagio.com', href: 'mailto:info@sslbellagio.com' },
                { Icon: Clock, text: 'Open Daily: 10:00 AM – 7:00 PM' },
              ].map(({ Icon, text, href }, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  marginBottom: '1.25rem'
                }}>
                  <Icon size={18} color="var(--color-brand)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  {href ? (
                    <a href={href} style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                      lineHeight: 1.6, color: 'var(--color-text-muted)', textDecoration: 'none'
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-brand)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>
                      {text}
                    </a>
                  ) : (
                    <span style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                      lineHeight: 1.6, color: 'var(--color-text-muted)'
                    }}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{
              background: 'var(--color-brand-pale)', padding: '1.5rem',
              border: '1px solid var(--color-border)'
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--color-brand)', marginBottom: '0.5rem'
              }}>MahaRERA Registered</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                color: 'var(--color-text-muted)', lineHeight: 1.6
              }}>
                Registration No: <strong>PM1330002600001</strong><br />
                https://maharera.mahaoaonline.gov.in<br />
                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>All images are for representation purposes only. Actual product may vary.</span>
              </p>
            </div>

            {/* <div style={{ marginTop: '1.5rem', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d73.085!3d19.215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSonar+Pada+Dombivli+East!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="200" style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                title="SSL Bellagio sales lounge location" />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
