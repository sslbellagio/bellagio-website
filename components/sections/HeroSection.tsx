'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

import Banner1 from './hero-banners/Banner1'
import Banner2 from './hero-banners/Banner2'
import Banner3 from './hero-banners/Banner3'

/*
  NAVBAR HEIGHT: The section starts exactly at the bottom of the fixed navbar.
  If you change the navbar height, update the --hero-offset value below.
*/
const NAVBAR_HEIGHT = 80 // px — must match the actual rendered navbar height

export default function HeroSection() {
  return (
    <>
      <style>{`
        /* Remove Swiper's default pagination dots for this section */
        #hero-banner .swiper-pagination { display: none; }

        /* Navigation arrows — hidden by default, optional */
        #hero-banner .swiper-button-next,
        #hero-banner .swiper-button-prev { display: none; }
      `}</style>

      <section
        id="hero"
        role="banner"
        aria-label="SSL Bellagio hero banner"
        style={{
          /* Starts right below navbar, fills the rest of the viewport */
          marginTop: NAVBAR_HEIGHT,
          height: `calc(100svh - ${NAVBAR_HEIGHT}px)`,
          minHeight: '520px',
          position: 'relative',
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <Swiper
          id="hero-banner"
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5500,               // EDITABLE: time per slide in ms
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          speed={900}                  // transition duration in ms
          allowTouchMove={false}       // disable swipe — avoids conflicting with Lenis
          style={{ width: '100%', height: '100%' }}
        >
          {/*
            ─── SLIDE 1 ──────────────────────────────────────────
            Content: Connectivity / Metro stats
            Image:   /images/hero-banner/banner1.webp
          */}
          <SwiperSlide>
            <Banner1 />
          </SwiperSlide>

          {/*
            ─── SLIDE 2 ──────────────────────────────────────────
            Content: Amenities / Lifestyle
            Image:   /images/hero-banner/banner2.webp
          */}
          <SwiperSlide>
            <Banner2 />
          </SwiperSlide>

          {/*
            ─── SLIDE 3 ──────────────────────────────────────────
            Content: Smart Home features
            Image:   /images/hero-banner/banner3.webp
          */}
          <SwiperSlide>
            <Banner3 />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
