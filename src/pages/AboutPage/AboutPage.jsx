import { useLang } from '../../i18n/LangContext'
import useInView from '../../hooks/useInView'
import './AboutPage.css'

export default function AboutPage() {
  const { t } = useLang()
  const a = t.about
  const missionRef = useInView(0.15)
  const valuesRef  = useInView(0.15)

  return (
    <div className="about page-enter">
      {/* Banner */}
      <div className="about__banner">
        <div className="about__banner-bg">
          <img
            className="about__banner-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnIWp540ZEdRf2lqbKFC773YwEfq-afsNpq8Zko_QFvBWo3wtH3kD_dlANGeo7f5u-aB67uL92r1HGJaPWQ7O-cClA6blGYf5IZfU8UufMepbJe7RQ-YenJlj3ZbMNkav9_ZsE4gPrEVVlEgPXdZUbUSZYCrZCFfReop_qolUSZ11t00JTg8ZWzp7RCJyRCGAlcz8mL4-GCJYqQdSETfMybEsbNLrd_2ODd8JE3oh3XaDhh2y8Pm2OB9PzWONQ6MjByuW93nnakAyb"
            alt="Studio space"
          />
          <div className="about__banner-overlay" />
        </div>
        <div className="about__banner-content">
          <div className="about__banner-eyebrow">{a.bannerEyebrow}</div>
          <h1 className="about__banner-title">
            {a.bannerTitle.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="about__body">
        {/* Mission */}
        <div ref={missionRef.ref} className={`about__mission ${missionRef.visible ? 'visible' : ''}`}>
          <div>
            <p className="about__mission-label">{a.missionLabel}</p>
            <h2 className="about__mission-title">
              {a.missionTitle.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className="about__mission-text">{a.missionText1}</p>
            <p className="about__mission-text">{a.missionText2}</p>
          </div>
          <div>
            <blockquote className="about__mission-quote">{a.quote}</blockquote>
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef.ref}>
          <div className="about__team-header">
            <p className="section-eyebrow">{a.valuesEyebrow}</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
              {a.valuesTitle}
            </h2>
          </div>
          <div className="about__values">
            {a.values.map((v, i) => (
              <div key={i} className={`value-card ${valuesRef.visible ? 'visible' : ''}`}>
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
            <p className="status-item__label">{a.statusFocus}</p>
            <p className="status-item__value">{a.statusFocusVal}</p>
          </div>
          <div className="status-item">
            <p className="status-item__label">{a.statusLight}</p>
            <p className="status-item__value">
              {a.statusLightVal}
              <span className="live-dot" />
            </p>
          </div>
          <div className="status-item">
            <p className="status-item__label">{a.statusRender}</p>
            <p className="status-item__value">{a.statusRenderVal}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
