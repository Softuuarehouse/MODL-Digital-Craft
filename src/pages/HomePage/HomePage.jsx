import { Link } from 'react-router-dom'
import { useLang } from '../../i18n/LangContext'
import useInView from '../../hooks/useInView'
import './HomePage.css'

function StatsSection({ stats }) {
  const { ref, visible } = useInView(0.2)
  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        {stats.map(({ number, label }, i) => (
          <div key={i} className={`stat-item ${visible ? 'visible' : ''}`}>
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServicesSection({ h }) {
  const { ref, visible } = useInView(0.15)
  return (
    <section className="services-preview" ref={ref}>
      <div className="services-preview__inner">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">{h.servicesEyebrow}</p>
            <h2 className="section-title">{h.servicesTitle}</h2>
          </div>
          <Link to="/studio" className="btn-outline">{h.viewStudio}</Link>
        </div>
        <div className="services-grid">
          {h.services.map((s, i) => (
            <div key={i} className={`service-card ${visible ? 'visible' : ''}`}>
              <div className="service-card__num">{s.num}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const { t } = useLang()
  const h = t.home

  return (
    <div className="home page-enter">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg">
          <img
            className="hero__bg-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvU_ATn7T5YBkhurDsSy_XTF2jPjWYYfBFAbL_TtHUbDkQp6oJcp8x-0FLM1E4R0z56_L4x6HSOwerwzC96DvkL9R4X8clBywvieL8rYQITzZgHHkC5KBJsqG6599N1DLEW_lY51TGSSskORgChGhEQKN0O4MvZ4UZLCnfNAG3tz0bMBnq6ChtBeHPQ7C4TxaXVr4oa_5MUlIO1uumaQd5YvvwDov_lI1NrO-bdYCBNRJjiBUTBtXKjxLCis-ECSgwLk1F2ZclUIgL"
            alt="Architectural scale model"
          />
          <div className="hero__bg-overlay" />
          <div className="hero__grid" />
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
        </div>

        <div className="hero__coords">
          <div>LAT: 30.0444° N</div>
          <div>LNG: 31.2357° E</div>
          <div>ALT: 42.00M</div>
          <div>PROJ: MODL-2026-001</div>
        </div>

        <div className="hero__content">
          <div className="hero__eyebrow">{h.eyebrow}</div>
          <h1 className="hero__title">
            {/* MODL is NEVER translated — always hardcoded */}
            <span>MODL</span>
            <span className="accent">{h.heroLine2}</span>
          </h1>
          <p className="hero__subtitle">{h.subtitle}</p>
          <div className="hero__actions">
            <Link to="/gallery" className="btn-primary">
              {h.exploreCta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/studio" className="btn-outline">{h.studioCta}</Link>
          </div>
        </div>

        <div className="hero__spec-card">
          <div className="hero__spec-label">
            {h.specLabel}
            <span className="hero__spec-dot" />
          </div>
          {h.specRows.map(({ k, v, cls }) => (
            <div className="hero__spec-row" key={k}>
              <span className="hero__spec-key">{k}</span>
              <span className={`hero__spec-val ${cls || ''}`}>{v}</span>
            </div>
          ))}
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span className="hero__scroll-label">{h.scroll}</span>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {h.marquee.map((item, i) => (
            <span className="marquee-item" key={i}>{item}</span>
          ))}
        </div>
      </div>

      <StatsSection stats={h.stats} />
      <ServicesSection h={h} />
    </div>
  )
}
