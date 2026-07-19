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
      {/* SEO H1 Tag - Visually hidden but readable by Google */}
      <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
        SSL Bellagio — Premium 1 & 2 BHK Smart Homes in Dombivli East
      </h1>

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
