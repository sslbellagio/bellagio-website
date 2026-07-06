'use client'
import Image from 'next/image'
import type { BannerProps } from './Banner1'

const ORANGE = '#E8631A'
const DARK = '#1A1208'
const MUTED = '#6B5D48'

export default function Banner2({ onEnquire }: BannerProps) {
  return (
    <>
      <style>{`
        .b2-wrap { width:100%; height:100%; display:flex; background:#fff; overflow:hidden; }

        .b2-left {
          position: relative; width: 50%; height: 100%;
          flex-shrink: 0; overflow: visible;
        }
        .b2-logo-over { position: absolute; top: 1.5rem; left: 1.5rem; z-index: 3; }
        .b2-logo-sub {
          font-family: var(--font-body); font-size: 0.72rem;
          color: rgba(255,255,255,0.9); letter-spacing: 0.1em; margin-top: 0.25rem;
        }

        .b2-right {
          flex: 1; background: #FFFFFF;
          display: flex; flex-direction: column;
          padding: 1.5rem 2.5rem 1.25rem 2rem;
          position: relative; overflow: hidden; z-index: 1;
        }
        .b2-maharera { display:flex; justify-content:flex-end; align-items:flex-start; gap:0.6rem; }
        .b2-maharera-text {
          font-family: var(--font-body); font-size: 0.55rem;
          line-height: 1.6; color: ${MUTED}; text-align: right;
        }
        .b2-qr-box {
          width:56px; height:56px; border:1px solid #ccc; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
        }

        .b2-content { flex:1; display:flex; flex-direction:column; justify-content:center; padding:0.5rem 0; }

        .b2-eyebrow {
          font-family: var(--font-body); font-size: 0.65rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: ${ORANGE}; margin-bottom: 0.75rem;
        }
        .b2-headline {
          font-family: var(--font-body); font-size: clamp(0.95rem, 1.75vw, 1.55rem);
          font-weight: 700; color: ${DARK}; line-height: 1.3;
          text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1.25rem;
        }
        .b2-accent { color: ${ORANGE}; }
        .b2-divider { display:flex; align-items:center; gap:0.7rem; margin-bottom:1.25rem; }
        .b2-divider-line { height:1px; background:${DARK}; width:80px; }
        .b2-divider-diamond { width:8px; height:8px; background:${DARK}; transform:rotate(45deg); flex-shrink:0; }

        .b2-amenities-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.6rem 1.5rem; margin-bottom:1.25rem; }
        .b2-amenity {
          font-family: var(--font-body); font-size: clamp(0.75rem, 1.1vw, 0.9rem);
          color: ${DARK}; display:flex; align-items:center; gap:0.5rem;
        }
        .b2-dot { width:6px; height:6px; background:${ORANGE}; border-radius:50%; flex-shrink:0; }

        .b2-strip {
          display:block; background:${ORANGE}; color:#fff;
          font-family:var(--font-body); font-weight:700;
          font-size:clamp(0.72rem, 1.2vw, 1rem); letter-spacing:0.12em;
          text-transform:uppercase; padding:0.9rem 1.5rem;
        }
        .b2-bottom {
          display:flex; align-items:center; gap:1rem;
          margin-top:1.25rem; padding-top:1rem; border-top:1px solid rgba(0,0,0,0.08);
        }
        .b2-disclaimer {
          font-family:var(--font-body); font-size:0.48rem;
          color:rgba(107,93,72,0.55); line-height:1.55; flex:1;
        }
        .b2-curve { }

        @media (max-width: 767px) {
          .b2-wrap { flex-direction:column; }
          .b2-left { width:100%; height:42%; overflow:hidden; }
          .b2-right { padding:1rem 1.25rem 0.75rem; }
          .b2-maharera { display:none; }
          .b2-amenities-grid { gap:0.4rem 1rem; }
          .b2-strip { font-size:0.72rem; letter-spacing:0.06em; text-align:center; }
          .b2-bottom { padding-top:0.6rem; margin-top:0.6rem; }
          .b2-disclaimer { display:none; }
          .b2-curve { display:none; }
        }
      `}</style>

      <div className="b2-wrap">
        <div className="b2-left">
          {/* IMAGE: /images/hero-banner/banner2.webp */}
          <Image src="/images/hero-banner/banner1.webp"
            alt="SSL Bellagio amenities — luxury lifestyle Dombivli East"
            fill priority={false}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 767px) 100vw, 50vw" />
          {/* <div className="b2-logo-over">
            <Image src="/images/bellagio-logo.webp" alt="SSL Bellagio"
              width={150} height={75}
              style={{ width: 'auto', height: '48px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            <p className="b2-logo-sub">Sonarpada, Dombivli (E)</p>
          </div> */}
          {/* Concave curve divider */}
          <svg className="b2-curve" aria-hidden="true"
            style={{ position: 'absolute', right: -1, top: 0, height: '100%', width: '70px', zIndex: 2, pointerEvents: 'none' }}
            viewBox="0 0 70 100" preserveAspectRatio="none">
            <path d="M 70 0 Q 0 50 70 100 L 70 0 Z" fill="#ffffff" />
          </svg>
        </div>

        <div className="b2-right">
          <div className="b2-maharera">
            <div className="b2-maharera-text">
              MahaRERA Registration No.:<br />PM1330002600001<br />https://maharera.mahaonline.gov.in
            </div>
            {/* Add /images/hero-banner/qr-code.png and replace with <Image> */}
            <div className="b2-qr-box">
              <Image src="/images/rera-qr.jpeg"
                alt="MahaRERA QR Code" width={60} height={60}
                style={{ flexShrink: 0 }} />
            </div>
          </div>

          <div className="b2-content">
            {/* EDITABLE: Eyebrow */}
            <p className="b2-eyebrow">25+ World-Class Amenities</p>
            {/* EDITABLE: Headline */}
            <h2 className="b2-headline">
              Life at Bellagio is<br />
              <span className="b2-accent">More Than a Home</span>.<br />
              It&apos;s a complete lifestyle.
            </h2>
            <div className="b2-divider">
              <div className="b2-divider-line" /><div className="b2-divider-diamond" /><div className="b2-divider-line" />
            </div>
            {/* EDITABLE: Amenity list */}
            <div className="b2-amenities-grid">
              {['Infinity Pool', 'Air-Conditioned Gym', 'Steam & Sauna', 'Yoga Zone',
                "Kids' Play Area", 'Indoor Game Room', "Senior Citizens' Area", 'AC Clubhouse'
              ].map(a => (
                <div key={a} className="b2-amenity"><div className="b2-dot" />{a}</div>
              ))}
            </div>
            {/* EDITABLE: Price strip */}
            <span className="b2-strip">1&amp;2BHK Starting From ₹42.40 Lakhs.</span>
          </div>

          <div className="b2-bottom">
            <Image src="/images/SSL logo.png" alt="SSL Life Spaces" width={130} height={55}
              style={{ width: 'auto', height: '34px', objectFit: 'contain', flexShrink: 0 }} />
            <p className="b1-disclaimer" style={{ fontSize: '0.2rem' }} >
              The Real Estate (Regulation and Development) Act, 2016 has been introduced and the rules and regulations notified thereunder ("RERA") on 1st May 2017. The process of updating our website is being initiated to ensure full compliance with the law. The advertisements available on this ad were created prior to RERA came into force and thus contains/may contain promotional material related to future phases of the project. The offerings outlined in those advertisements in whatever form may not be a part of the initial phase of the project and may be delivered in later phases or on completion of the Project.The present content on the Ad(s), specifications and amenities including but not limited to visuals, pictures, images/ renderings/maps are purely indicative and informative in nature and only an architect's impression and only indicative of the envisaged development and not actual depiction of buildings/landscapes etc. And shall not be considered as our offer/promise/commitment of any nature in respect of the project the same is subject to approval from local authorities.The common areas and amenities that have been shown in any advertisement, audio visuals and/or any type of communication in any form whatsoever is/are for the entire Project and not specific for any particular building or phase of the Project and that the common areas and amenities will not be available on completion of the first phase of the Project or later phases. The common areas and amenities shall be available for the entire project and will be developed in a phase-wise manner, over a period of time. The details of the projects undertaken by the company including the brochures, plans, elevations, images, projections, details, descriptions, contents pertaining to the projects are being modified in terms of the stipulations/ recommendations under the Real Estate Act 2016 and rules made thereunder (RERA). You are required to verify all the details, including area, amenities, services, terms of sales, payments and other relevant terms independently with the company sales team, by physically visiting the project site. Any decision regarding booking of the apartment/s in the project by you, until the project is registered under RERA, relying upon the contents of this ad shall be solely at your costs and consequences. Mangeshi Group and or its directors, employees, are not liable for any consequence of any action taken by the viewer relying on such material/information on this web.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
