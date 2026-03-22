import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'
import './HomePage.css'

const MARQUEE_ITEMS = [
  'Scale Modeling', 'Digital Fabrication', 'Urban Simulation',
  'Parametric Design', 'Photorealistic Rendering', 'Spatial Analysis',
  'Scale Modeling', 'Digital Fabrication', 'Urban Simulation',
  'Parametric Design', 'Photorealistic Rendering', 'Spatial Analysis',
]

const STATS = [
  { number: '180+', label: 'Projects Completed' },
  { number: '42',   label: 'Global Cities Mapped' },
  { number: '98%',  label: 'Client Satisfaction' },
  { number: '15yr', label: 'Studio Experience' },
]

const SERVICES = [
  {
    num: '01',
    title: '3D Visualization',
    desc: 'Photorealistic spatial renderings that breathe life into speculative structures before a single stone is placed. From concept sketch to immersive flythrough.',
  },
  {
    num: '02',
    title: 'Algorithmic Design',
    desc: 'Generative workflows powered by computational logic — optimizing for natural light, airflow, and human circulation at every scale of intervention.',
  },
  {
    num: '03',
    title: 'Urban Simulation',
    desc: 'Complex large-scale city-sector modeling with real-world environmental physics data, enabling planners to test futures before committing resources.',
  },
]

function StatsSection() {
  const { ref, visible } = useInView(0.2)
  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        {STATS.map(({ number, label }, i) => (
          <div key={i} className={`stat-item ${visible ? 'visible' : ''}`}>
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServicesSection() {
  const { ref, visible } = useInView(0.15)
  return (
    <section className="services-preview" ref={ref}>
      <div className="services-preview__inner">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">// Core Disciplines</p>
            <h2 className="section-title">What We Build</h2>
          </div>
          <Link to="/studio" className="btn-outline">View Full Studio →</Link>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
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
  return (
    <div className="home page-enter">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg">
          <img
            className="hero__bg-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvU_ATn7T5YBkhurDsSy_XTF2jPjWYYfBFAbL_TtHUbDkQp6oJcp8x-0FLM1E4R0z56_L4x6HSOwerwzC96DvkL9R4X8clBywvieL8rYQITzZgHHkC5KBJsqG6599N1DLEW_lY51TGSSskORgChGhEQKN0O4MvZ4UZLCnfNAG3tz0bMBnq6ChtBeHPQ7C4TxaXVr4oa_5MUlIO1uumaQd5YvvwDov_lI1NrO-bdYCBNRJjiBUTBtXKjxLCis-ECSgwLk1F2ZclUIgL"
            alt="Minimalist architectural scale model"
          />
          <div className="hero__bg-overlay" />
          <div className="hero__grid" />
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
        </div>

        {/* Coordinates */}
        <div className="hero__coords">
          <div>LAT: 40.7128° N</div>
          <div>LNG: 74.0060° W</div>
          <div>ALT: 42.00M</div>
          <div>PROJ: AM-2024-009</div>
        </div>

        {/* Main content */}
        <div className="hero__content">
          <div className="hero__eyebrow">Studio — Est. 2009</div>
          <h1 className="hero__title">
            <span>MODL</span>
            <span className="accent">Digital Craft</span>
          </h1>
          <p className="hero__subtitle">
            Design the Future — Digitally &amp; Physically
          </p>
          <div className="hero__actions">
            <Link to="/gallery" className="btn-primary">
              Explore Gallery
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/studio" className="btn-outline">Our Studio</Link>
          </div>
        </div>

        {/* Spec card */}
        <div className="hero__spec-card">
          <div className="hero__spec-label">
            Active Project
            <span className="hero__spec-dot" />
          </div>
          {[
            { k: 'Scale',          v: '1:250' },
            { k: 'Materials',      v: 'Glass + Concrete' },
            { k: 'Sustainability', v: 'A+ Rating', cls: 'green' },
            { k: 'Status',         v: 'In Render' },
          ].map(({ k, v, cls }) => (
            <div className="hero__spec-row" key={k}>
              <span className="hero__spec-key">{k}</span>
              <span className={`hero__spec-val ${cls || ''}`}>{v}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span className="hero__scroll-label">Scroll</span>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span className="marquee-item" key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <StatsSection />

      {/* ── Services ── */}
      <ServicesSection />
    </div>
  )
}
