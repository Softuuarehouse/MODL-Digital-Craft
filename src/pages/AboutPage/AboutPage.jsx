import useInView from '../../hooks/useInView'
import './AboutPage.css'

const VALUES = [
  {
    icon: '⬡',
    title: '3D Visualization',
    desc: 'Photorealistic spatial renderings that communicate architectural intent with absolute clarity. We bridge imagination and comprehension through light, shadow, and material.',
  },
  {
    icon: '◈',
    title: 'Algorithmic Design',
    desc: 'Generative workflows that optimize for natural light, airflow, and human circulation. Computational logic serves human experience — never the reverse.',
  },
  {
    icon: '◎',
    title: 'Urban Simulation',
    desc: 'Large-scale city-sector modeling with real-world environmental physics. Test futures, refine outcomes, and commit with confidence before ground is broken.',
  },
]


export default function AboutPage() {
  const missionRef  = useInView(0.15)
  const valuesRef   = useInView(0.15)
  const teamRef     = useInView(0.1)

  return (
    <div className="about page-enter">
      {/* Banner */}
      <div className="about__banner">
        <div className="about__banner-bg">
          <img
            className="about__banner-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnIWp540ZEdRf2lqbKFC773YwEfq-afsNpq8Zko_QFvBWo3wtH3kD_dlANGeo7f5u-aB67uL92r1HGJaPWQ7O-cClA6blGYf5IZfU8UufMepbJe7RQ-YenJlj3ZbMNkav9_ZsE4gPrEVVlEgPXdZUbUSZYCrZCFfReop_qolUSZ11t00JTg8ZWzp7RCJyRCGAlcz8mL4-GCJYqQdSETfMybEsbNLrd_2ODd8JE3oh3XaDhh2y8Pm2OB9PzWONQ6MjByuW93nnakAyb"
            alt="Architectural studio space"
          />
          <div className="about__banner-overlay" />
        </div>
        <div className="about__banner-content">
          <div className="about__banner-eyebrow">Studio Profile — Floor 42</div>
          <h1 className="about__banner-title">
            The Studio<br />Behind the Vision
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="about__body">
        {/* Mission */}
        <div
          ref={missionRef.ref}
          className={`about__mission ${missionRef.visible ? 'visible' : ''}`}
        >
          <div>
            <p className="about__mission-label">// Our Mission</p>
            <h2 className="about__mission-title">
              Engineering<br />Atmospheres
            </h2>
            <p className="about__mission-text">
              We synthesize the digital and physical realms into a single, cohesive architectural
              narrative. We don't just build models — we engineer environments where urban life
              can be simulated, tested, and refined before the first foundation is poured.
            </p>
            <p className="about__mission-text">
              Founded in 2009 by a collective of architects and computational designers,
              Archi-Maquette has grown into a globally recognized practice with studios in
              New York, Tokyo, and Amsterdam.
            </p>
          </div>
          <div>
            <blockquote className="about__mission-quote">
              "Every maquette is a dialogue between the architect's intent and the environmental
              reality. We use algorithmic rigor to ensure that every interior glow and every
              landscape curve serves a purposeful human outcome — beauty that justifies itself
              through performance."
            </blockquote>
          </div>
        </div>

        {/* Values / Services */}
        <div ref={valuesRef.ref}>
          <div className="about__team-header">
            <p className="section-eyebrow">// Core Disciplines</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
              How We Work
            </h2>
          </div>
          <div className="about__values">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className={`value-card ${valuesRef.visible ? 'visible' : ''}`}
              >
                <span className="value-card__icon">{v.icon}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="about__status-bar">
          <div className="status-item">
            <p className="status-item__label">Current Focus</p>
            <p className="status-item__value">Floor 42 / Studio A</p>
          </div>
          <div className="status-item">
            <p className="status-item__label">Lighting State</p>
            <p className="status-item__value">
              Warm Interior
              <span className="live-dot" />
            </p>
          </div>
          <div className="status-item">
            <p className="status-item__label">Active Renders</p>
            <p className="status-item__value">3 Queued</p>
          </div>
        </div>
      </div>
    </div>
  )
}
