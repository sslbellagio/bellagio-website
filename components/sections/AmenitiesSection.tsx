'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { useRef } from 'react'

const AMENITIES = [
  { img: '/images/amenities/pool.webp', title: 'Infinity Pool', desc: 'Rise, unwind, and merge with the horizon.' },
  { img: '/images/amenities/gym.webp', title: 'Air-Conditioned Gym', desc: 'Peak performance meets perfect comfort.' },
  { img: '/images/amenities/steam.webp', title: 'Steam & Sauna', desc: 'Step in. Slow down. Emerge renewed.' },
  { img: '/images/amenities/yoga.webp', title: 'Yoga Zone', desc: 'Every breath bringing you closer to balance.' },
  { img: '/images/amenities/kids-playing.webp', title: 'Kids\' Play Area', desc: 'Every corner sparks joy and discovery.' },
  // { img: '/images/amenities/garden.webp', title: 'Garden Area', desc: 'Elevated greens for everyday calm.' },
  // { img: '/images/amenities/clubhouse.webp', title: 'AC Clubhouse', desc: 'Spaces to connect and celebrate life\'s moments.' },
  { img: '/images/amenities/indoor.webp', title: 'Indoor Game Room', desc: 'Created for spirited play and endless excitement.' },
  { img: '/images/amenities/senior.webp', title: 'Senior Citizens\' Area', desc: 'Dedicated zone that honours every moment lived.' },
]

export default function AmenitiesSection() {
  return (
    <section id="amenities" aria-label="SSL Bellagio amenities"
      style={{
        background: 'var(--bg-amenities)', paddingTop: 'var(--section-py)',
        paddingBottom: 'var(--section-py)'
      }}>

      <div style={{
        maxWidth: 'var(--max-width)', margin: '0 auto',
        paddingLeft: 'var(--container-px)', paddingRight: 0
      }}>
        <SectionHeading
          eyebrow="A World of Recreation"
          title="Amenities"
          subtitle="Step into a realm where recreation meets refinement. Be it serene wellness zones or vibrant social spaces, every amenity is thoughtfully crafted. At Bellagio, leisure is not an afterthought, but a way of life."
        />
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides
        autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        loop
        simulateTouch={false}
        allowTouchMove={false}
        breakpoints={{
          640: { slidesPerView: 2.2, centeredSlides: false },
          1024: { slidesPerView: 3.2, centeredSlides: false },
        }}
        style={{ paddingBottom: '3rem', paddingLeft: 'var(--container-px)' }}
        onSwiper={(swiper) => {
          // Pass all wheel events through to Lenis — do not let Swiper trap them
          swiper.el.addEventListener('wheel', (e) => { e.stopPropagation() }, { passive: true })
        }}>

        {AMENITIES.map((amenity, i) => (
          <SwiperSlide key={i}>
            <motion.article
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.6 }}
              style={{
                background: 'var(--color-white)', overflow: 'hidden',
                border: '1px solid var(--color-border)'
              }}
              aria-label={`Amenity: ${amenity.title}`}>

              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <Image src={amenity.img} alt={`${amenity.title} at SSL Bellagio Dombivli`}
                  fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }} />
              </div>

              <div style={{ padding: '1.5rem' }}>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.6rem', fontWeight: 500,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--color-brand)', marginBottom: '0.4rem'
                }}>Amenity</p>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 300,
                  color: 'var(--color-text-primary)', marginBottom: '0.5rem'
                }}>{amenity.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.6,
                  color: 'var(--color-text-muted)'
                }}>{amenity.desc}</p>
              </div>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{
        maxWidth: 'var(--max-width)', margin: '3rem auto 0',
        padding: '0 var(--container-px)'
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)'
        }}>
          {[
            { img: '/images/security/facial-lock.jpg', title: 'Facial Lock Security', desc: 'Advanced facial recognition for secure access.' },
            { img: '/images/security/my-gate-app.jpg', title: 'MyGate Integration', desc: 'Seamless visitor management via mobile.' },
            { img: '/images/security/smart-home.jpg', title: 'Smart Home Automation', desc: 'Control your home environment effortlessly.' },
          ].map((feat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              style={{
                padding: '2rem', background: 'var(--color-white)',
                textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <Image src={feat.img} alt={feat.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
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
          ))}
        </div>
      </div>
    </section>
  )
}
