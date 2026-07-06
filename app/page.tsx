import Navbar           from '@/components/Navbar'
import HeroSection      from '@/components/sections/HeroSection'
import AboutSection     from '@/components/sections/AboutSection'
import AmenitiesSection from '@/components/sections/AmenitiesSection'
import LocationSection  from '@/components/sections/LocationSection'
import FloorPlanSection from '@/components/sections/FloorPlanSection'
import ContactSection   from '@/components/sections/ContactSection'
import FooterSection    from '@/components/sections/FooterSection'

export default function Home() {
  return (
    <main>
      {/* Sticky navbar with Enquire Now button and auto-popup trigger */}
      <Navbar />

      {/* Section 1: Hero — fullscreen carousel */}
      <HeroSection />

      {/* Section 2: About — developer credentials, stats, project highlights, Dombivli story */}
      <AboutSection />

      {/* Section 3: Amenities — Swiper carousel + smart home features */}
      <AmenitiesSection />

      {/* Section 4: Location — Google Maps + connectivity + upcoming infra */}
      <LocationSection />

      {/* Section 5: Floor Plans — GSAP reveal, tab selector, floor plan images */}
      <FloorPlanSection />

      {/* Section 6: Contact — enquiry form + sales office details */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </main>
  )
}
