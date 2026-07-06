'use client'
import Image from 'next/image'
import type { BannerProps } from './Banner1'

const ORANGE = '#E8631A'
const DARK = '#1A1208'
const MUTED = '#6B5D48'

export default function Banner3({ onEnquire }: BannerProps) {
  return (
    <>
      <style>{`
        .b3-wrap { width:100%; height:100%; display:flex; background:#fff; overflow:hidden; }

        .b3-left {
          position:relative; width:50%; height:100%;
          flex-shrink:0; overflow:visible;
        }
        .b3-logo-over { position:absolute; top:1.5rem; left:1.5rem; z-index:3; }
        .b3-logo-sub {
          font-family:var(--font-body); font-size:0.72rem;
          color:rgba(255,255,255,0.9); letter-spacing:0.1em; margin-top:0.25rem;
        }

        .b3-right {
          flex:1; background:#FFFFFF;
          display:flex; flex-direction:column;
          padding:1.5rem 2.5rem 1.25rem 2rem;
          position:relative; overflow:hidden; z-index:1;
        }
        .b3-maharera { display:flex; justify-content:flex-end; align-items:flex-start; gap:0.6rem; }
        .b3-maharera-text {
          font-family:var(--font-body); font-size:0.55rem;
          line-height:1.6; color:${MUTED}; text-align:right;
        }
        .b3-qr-box {
          width:56px; height:56px; border:1px solid #ccc; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
        }

        .b3-content { flex:1; display:flex; flex-direction:column; justify-content:center; padding:0.5rem 0; }

        .b3-eyebrow {
          font-family:var(--font-body); font-size:0.65rem; font-weight:500;
          letter-spacing:0.22em; text-transform:uppercase;
          color:${ORANGE}; margin-bottom:0.75rem;
        }
        .b3-headline {
          font-family:var(--font-body); font-size:clamp(0.95rem, 1.75vw, 1.55rem);
          font-weight:700; color:${DARK}; line-height:1.3;
          text-transform:uppercase; letter-spacing:0.05em; margin-bottom:1.25rem;
        }
        .b3-accent { color:${ORANGE}; }
        .b3-divider { display:flex; align-items:center; gap:0.7rem; margin-bottom:1.25rem; }
        .b3-divider-line { height:1px; background:${DARK}; width:80px; }
        .b3-divider-diamond { width:8px; height:8px; background:${DARK}; transform:rotate(45deg); flex-shrink:0; }

        .b3-features { display:flex; flex-direction:column; gap:0.7rem; margin-bottom:1.25rem; }
        .b3-feature { display:flex; align-items:flex-start; gap:0.75rem; }
        .b3-feat-icon {
          width:20px; height:20px; background:${ORANGE};
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0; margin-top:2px;
        }
        .b3-feat-title {
          font-family:var(--font-body); font-size:clamp(0.8rem, 1.2vw, 1rem);
          font-weight:600; color:${DARK}; line-height:1.2;
        }
        .b3-feat-desc {
          font-family:var(--font-body); font-size:clamp(0.65rem, 0.9vw, 0.78rem);
          color:${MUTED}; line-height:1.4;
        }

        .b3-strip {
          display:block; background:${ORANGE}; color:#fff;
          font-family:var(--font-body); font-weight:700;
          font-size:clamp(0.72rem, 1.2vw, 1rem); letter-spacing:0.12em;
          text-transform:uppercase; padding:0.9rem 1.5rem;
        }
        .b3-bottom {
          display:flex; align-items:center; gap:1rem;
          margin-top:1.25rem; padding-top:1rem; border-top:1px solid rgba(0,0,0,0.08);
        }
        .b3-disclaimer {
          font-family:var(--font-body); font-size:0.48rem;
          color:rgba(107,93,72,0.55); line-height:1.55; flex:1;
        }

        @media (max-width: 767px) {
          .b3-wrap { flex-direction:column; }
          .b3-left { width:100%; height:42%; overflow:hidden; }
          .b3-right { padding:1rem 1.25rem 0.75rem; }
          .b3-maharera { display:none; }
          .b3-features { gap:0.4rem; }
          .b3-feat-desc { display:none; }
          .b3-strip { font-size:0.72rem; letter-spacing:0.06em; text-align:center; }
          .b3-bottom { padding-top:0.6rem; margin-top:0.6rem; }
          .b3-disclaimer { display:none; }
          .b3-curve { display:none; }
        }
      `}</style>

      <div className="b3-wrap">
        <div className="b3-left">
          {/* IMAGE: /images/hero-banner/banner3.webp — interior / smart home visual */}
          <Image src="/images/hero-banner/banner3.webp"
            alt="SSL Bellagio smart home — premium interiors Dombivli East"
            fill priority={false}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 767px) 100vw, 50vw" />
          {/* <div className="b3-logo-over">
            <Image src="/images/bellagio-logo.webp" alt="SSL Bellagio"
              width={150} height={75}
              style={{ width: 'auto', height: '48px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            <p className="b3-logo-sub">Sonarpada, Dombivli (E)</p>
          </div> */}
          {/* Concave curve divider */}
          <svg className="b3-curve" aria-hidden="true"
            style={{ position: 'absolute', right: -1, top: 0, height: '100%', width: '70px', zIndex: 2, pointerEvents: 'none' }}
            viewBox="0 0 70 100" preserveAspectRatio="none">
            <path d="M 70 0 Q 0 50 70 100 L 70 0 Z" fill="#ffffff" />
          </svg>
        </div>

        <div className="b3-right">
          <div className="b3-maharera">
            <div className="b3-maharera-text">
              MahaRERA Registration No.:<br />PM1330002600001<br />https://maharera.mahaonline.gov.in
            </div>
            {/* Add /images/hero-banner/qr-code.png and replace with <Image> */}
            <div className="b3-qr-box">
              <Image src="/images/rera-qr.jpeg"
                alt="MahaRERA QR Code" width={60} height={60}
                style={{ flexShrink: 0 }} />
            </div>
          </div>

          <div className="b3-content">
            {/* EDITABLE: Eyebrow */}
            <p className="b3-eyebrow">Smart Home Automation</p>
            {/* EDITABLE: Headline */}
            <h2 className="b3-headline">
              Your home, intelligently<br />
              <span className="b3-accent">designed for the future</span>.<br />
              Live smarter at Bellagio.
            </h2>
            <div className="b3-divider">
              <div className="b3-divider-line" /><div className="b3-divider-diamond" /><div className="b3-divider-line" />
            </div>
            {/* EDITABLE: Feature list */}
            <div className="b3-features">
              {[
                { title: 'MyGate App Integration', desc: 'Manage visitors, deliveries & security from your phone.' },
                { title: 'Facial Lock Security', desc: 'AI-powered facial recognition for seamless access.' },
                { title: 'Smart Home Automation', desc: 'Control lights, ACs & appliances with a single tap.' },
                { title: 'CCTV Surveillance', desc: '24×7 monitored security across all common areas.' },
              ].map(f => (
                <div key={f.title} className="b3-feature">
                  <div className="b3-feat-icon">
                    <svg viewBox="0 0 12 12" width="11" height="11">
                      <path d="M1 6l3.5 3.5L11 2" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="b3-feat-title">{f.title}</p>
                    <p className="b3-feat-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* EDITABLE: Price strip */}
            <span className="b3-strip">1&amp;2BHK Starting From ₹42.40 Lakhs.</span>
          </div>

          <div className="b3-bottom">
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
