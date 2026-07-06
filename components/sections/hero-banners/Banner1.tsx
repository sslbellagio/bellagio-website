'use client'
import Image from 'next/image'

export interface BannerProps {
  onEnquire?: () => void
}

/*
  COLORS (matching reference brochure exactly):
  Orange accent : #E8631A  — used for "1 min", "10 mins", "AI LIVING", price strip
  Dark text     : #1A1208  — headline body text 
  Muted text    : #6B5D48  — subtexts, MahaRERA 
  White panel   : #FFFFFF
*/
const ORANGE = '#E8631A'
const DARK = '#1A1208'
const MUTED = '#6B5D48'

export default function Banner1({ onEnquire }: BannerProps) {
  return (
    <>
      <style>{`
        .b1-wrap {
          width: 100%; height: 100%;
          display: flex;
          background: #fff;
          overflow: hidden;
        }

        /* ── LEFT PANEL ── */
        .b1-left {
          position: relative;
          width: 50%;
          height: 100%;
          flex-shrink: 0;
          overflow: visible; /* allow the curve overlay to bleed right */
        }

        .b1-logo-over {
          position: absolute;
          top: 1.5rem; left: 1.5rem;
          z-index: 3;
        }
        .b1-logo-sub {
          font-family: var(--font-body);
          font-size: 0.72rem;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.1em;
          margin-top: 0.25rem;
        }

        /* ── RIGHT PANEL ── */
        .b1-right {
          flex: 1;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          padding: 1.5rem 2.5rem 1.25rem 2rem;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .b1-maharera {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          gap: 0.6rem;
        }
        .b1-maharera-text {
          font-family: var(--font-body);
          font-size: 0.55rem;
          line-height: 1.6;
          color: ${MUTED};
          text-align: right;
        }
        .b1-qr-box {
          width: 56px; height: 56px;
          border: 1px solid #ccc;
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }

        /* Main content block */
        .b1-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0.5rem 0;
        }

        /* Headline */
        .b1-headline {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.75vw, 1.55rem);
          font-weight: 700;
          color: ${DARK};
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }
        .b1-hl-accent { color: ${ORANGE}; }

        /* Diamond divider */
        .b1-divider {
          display: flex; align-items: center; gap: 0.7rem;
          margin-bottom: 1.5rem;
        }
        .b1-divider-line {
          height: 1px;
          background: ${DARK};
          width: 80px;
        }
        .b1-divider-diamond {
          width: 8px; height: 8px;
          background: ${DARK};
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* Stats */
        .b1-stats-row {
          display: flex;
          align-items: baseline;
          gap: clamp(1.5rem, 3vw, 3.5rem);
          margin-bottom: 0.4rem;
        }
        .b1-stat-num {
          font-family: var(--font-body);
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          color: ${ORANGE};
          line-height: 1;
        }
        .b1-stat-lbl {
          font-family: var(--font-body);
          font-size: clamp(1.4rem, 2.8vw, 2.6rem);
          font-weight: 400;
          color: ${DARK};
          line-height: 1;
        }
        .b1-stat-item {
  display: flex;
  flex-direction: column;
}

.b1-sub {
  margin-top: 0.35rem;
}  

        /* Subtexts */
        // .b1-subs-row {
        //   display: flex;
        //   gap: clamp(1.5rem, 3vw, 3.5rem);
        //   margin-bottom: 1.75rem;
        // }
        .b1-sub {
          font-family: var(--font-body);
          font-size: clamp(0.72rem, 1vw, 0.88rem);
          color: ${MUTED};
        }

        /* Price strip */
        .b1-strip {
          display: block;
          background: ${ORANGE};
          color: #fff;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: clamp(0.72rem, 1.2vw, 1rem);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.9rem 1.5rem;
        }

        /* Bottom bar */
        .b1-bottom {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(0,0,0,0.08);
        }
        .b1-disclaimer {
          font-family: var(--font-body);
          font-size: 0.48rem;
          color: rgba(107,93,72,0.55);
          line-height: 1.55;
          flex: 1;
        }

        /* ── MOBILE ── */
        @media (max-width: 767px) {
          .b1-wrap      { flex-direction: column; }
          .b1-left      { width: 100%; height: 42%; overflow: hidden; }
          .b1-right     { padding: 1rem 1.25rem 0.75rem 1.25rem; }
          .b1-maharera  { display: none; }
          .b1-stats-row { gap: 1.25rem; }
          .b1-subs-row  { gap: 1.25rem; }
          .b1-strip     { font-size: 0.72rem; letter-spacing: 0.06em; text-align: center; }
          .b1-bottom    { padding-top: 0.6rem; margin-top: 0.6rem; }
          .b1-disclaimer{ display: none; }
          /* Hide the SVG curve on mobile */
          .b1-curve     { display: none; }
        }
      `}</style>

      <div className="b1-wrap">

        {/* ══ LEFT: Building Image ══ */}
        <div className="b1-left">
          {/*
            IMAGE: /images/hero-banner/banner1.webp
            → Building exterior render / project photograph
          */}
          <Image
            src="/images/hero-banner/banner2.webp"
            alt="SSL Bellagio building exterior — Sonarpada, Dombivli East"
            fill priority
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="(max-width: 767px) 100vw, 50vw"
          />

          {/* Project logo on image */}
          {/* <div className="b1-logo-over">
            <Image
              src="/images/bellagio-logo.webp"
              alt="SSL Bellagio"
              width={150} height={75}
              style={{ width: 'auto', height: '48px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
            
            <p className="b1-logo-sub">Sonarpada, Dombivli (E)</p>
          </div> */}

          {/*
            ─── CURVED DIVIDER ───────────────────────────────
            This white SVG curve sits on the right edge of the left panel
            giving the brochure-style curved boundary between image and content.
            The viewBox "0 0 60 600" stretches to full height.
          */}
          <svg
            className="b1-curve"
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: -1,
              top: 0,
              height: '100%',
              width: '70px',
              zIndex: 2,
              pointerEvents: 'none',
            }}
            viewBox="0 0 70 100"
            preserveAspectRatio="none"
          >
            {/* Concave curve: image goes right then curves back to the left before hitting 50% mark */}
            <path d="M 70 0 Q 0 50 70 100 L 70 0 Z" fill="#ffffff" />
          </svg>
        </div>

        {/* ══ RIGHT: Content Panel ══ */}
        <div className="b1-right">

          {/* MahaRERA + QR — top right */}
          <div className="b1-maharera">
            <div className="b1-maharera-text">
              {/* EDITABLE: MahaRERA line */}
              MahaRERA Registration No.:<br />
              PM1330002600001<br />
              https://maharera.mahaonline.gov.in
            </div>
            {/*
              ── QR CODE IMAGE ──────────────────────────────────────
              Add your QR code image to: /images/hero-banner/qr-code.png
              Then replace the placeholder box below with:

              <Image src="/images/rera-qr.jpeg"
                alt="MahaRERA QR Code" width={60} height={60}
                style={{ flexShrink: 0 }} />
            */}
            <div className="b1-qr-box">
              <Image src="/images/rera-qr.jpeg"
                alt="MahaRERA QR Code" width={60} height={60}
                style={{ flexShrink: 0 }} />
            </div>
          </div>

          {/* ── Main content ── */}
          <div className="b1-content">

            {/* EDITABLE: Main headline — "AI LIVING" is the orange accent */}
            <h2 className="b1-headline">
              Live where connectivity meets the<br />
              township lifestyle at{' '}
              <span className="b1-hl-accent">AI Living</span>.
            </h2>

            {/* Diamond divider matching reference */}
            <div className="b1-divider">
              <div className="b1-divider-line" />
              <div className="b1-divider-diamond" />
              <div className="b1-divider-line" />
            </div>

            {/* Stats */}
            <div className="b1-stats-row">
              <div className="b1-stat-item">
                <div>
                  {/* EDITABLE: Stat 1 */}
                  <span className="b1-stat-num">1 min </span>
                  <span className="b1-stat-lbl">metro.</span>
                </div>
                <span className="b1-sub">Sagaon metro station.</span>
              </div>

              <div className="b1-stat-item">
                <div>
                  {/* EDITABLE: Stat 2 */}
                  <span className="b1-stat-num">10 mins </span>
                  <span className="b1-stat-lbl">station.</span>
                </div>
                <span className="b1-sub">Dombivli station east.</span>
              </div>
            </div>

            {/* EDITABLE: Price CTA strip */}
            <span className="b1-strip">
              1 &amp; 2 BHK  Starting  From  ₹42.40  Lakhs.
            </span>

          </div>

          {/* Bottom: logo + disclaimer */}
          <div className="b1-bottom">
            {/*
              ── SSL DEVELOPER LOGO ─────────────────────────────────
              If you have the SSL corporate logo (with "SSL Building Spaces for Life")
              add it to: /images/hero-banner/ssl-logo-full.png  and replace src below
            */}
            <Image
              src="/images/SSL logo.png"
              alt="SSL Life Spaces"
              width={130} height={55}
              style={{ width: 'auto', height: '34px', objectFit: 'contain', flexShrink: 0 }}
            />
            {/* EDITABLE: Disclaimer */}
            <p className="b1-disclaimer" style={{ fontSize: '0.2rem' }} >
              The Real Estate (Regulation and Development) Act, 2016 has been introduced and the rules and regulations notified thereunder ("RERA") on 1st May 2017. The process of updating our website is being initiated to ensure full compliance with the law. The advertisements available on this ad were created prior to RERA came into force and thus contains/may contain promotional material related to future phases of the project. The offerings outlined in those advertisements in whatever form may not be a part of the initial phase of the project and may be delivered in later phases or on completion of the Project.The present content on the Ad(s), specifications and amenities including but not limited to visuals, pictures, images/ renderings/maps are purely indicative and informative in nature and only an architect's impression and only indicative of the envisaged development and not actual depiction of buildings/landscapes etc. And shall not be considered as our offer/promise/commitment of any nature in respect of the project the same is subject to approval from local authorities.The common areas and amenities that have been shown in any advertisement, audio visuals and/or any type of communication in any form whatsoever is/are for the entire Project and not specific for any particular building or phase of the Project and that the common areas and amenities will not be available on completion of the first phase of the Project or later phases. The common areas and amenities shall be available for the entire project and will be developed in a phase-wise manner, over a period of time. The details of the projects undertaken by the company including the brochures, plans, elevations, images, projections, details, descriptions, contents pertaining to the projects are being modified in terms of the stipulations/ recommendations under the Real Estate Act 2016 and rules made thereunder (RERA). You are required to verify all the details, including area, amenities, services, terms of sales, payments and other relevant terms independently with the company sales team, by physically visiting the project site. Any decision regarding booking of the apartment/s in the project by you, until the project is registered under RERA, relying upon the contents of this ad shall be solely at your costs and consequences. Mangeshi Group and or its directors, employees, are not liable for any consequence of any action taken by the viewer relying on such material/information on this web.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
