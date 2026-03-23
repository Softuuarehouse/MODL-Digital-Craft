import { useLang } from '../../i18n/LangContext'
import './ContactPage.css'

function WhatsAppIcon() {
  return (
    <svg className="contact__wa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function ContactPage() {
  const { t } = useLang()
  const c      = t.contact
  const WA_NUMBER  = '201008555281'
  const WA_MESSAGE = encodeURIComponent(c.whatsapptext)

  const waLink = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

  return (
    <div className="contact page-enter">
      <div className="contact__bg">
        <img
          className="contact__bg-img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4RcpzAcyjzXiDa6744TkpczEYWD3GDhp68CHNm7Js5revnQXxTzCHol7uYXCxd1OqNssMBVYZuOFPaOVMwmz_N8Fn25e2qUr8U72THZgzp_qxmX0rG8RVE0NI2pfn4TUsQSE0mSen89ICR0YBY-ji8UTj-zQtVSf5igsrvfbGpeSAngKTE675SecZH-UuhvPDm4F6Aw1gowKONvAUSNwq0_F4x39_EAempGwjUAh6s5OxFTz80yzBbTX8tNbiTS4wCYcaI83VbXDk"
          alt="" aria-hidden="true"
        />
        <div className="contact__bg-gradient" />
        <div className="contact__bg-text">{c.bgText}</div>
      </div>

      <div className="contact__inner contact__inner--info-only">
        <div className="contact__header">
          <div className="contact__status-badge">
            <span className="dot" />
            {c.badge}
          </div>
          <h1 className="contact__title">
            {c.title}<br />
            <span className="accent">{c.titleAccent}</span>
          </h1>
          <p className="contact__subtitle">{c.subtitle}</p>
        </div>

        <div className="contact__details-grid">
          {/* Egypt */}
          <div className="contact__detail-card">
            <p className="contact__detail-label">{c.locLabel} — 🇪🇬</p>
            <p className="contact__detail-value">
              {c.locValue}
              <span className="contact__detail-sub">+20 10 08555281</span>
            </p>
          </div>

          {/* KSA */}
          <div className="contact__detail-card">
            <p className="contact__detail-label">{c.locLabel} — 🇸🇦</p>
            <p className="contact__detail-value">
              {t.lang === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
              <span className="contact__detail-sub">
                {t.lang === 'ar' ? 'متاح للمشاريع في المملكة' : 'Available for KSA projects'}
              </span>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="contact__detail-card">
            <p className="contact__detail-label">{c.sigLabel}</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__detail-value contact__wa-link"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
              +20 10 08555281
            </a>
          </div>
        </div>

        <div className="contact__divider" />

        <div className="contact__sys-bar">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/>
            <path d="M6 3v3l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          {t.lang === 'ar' ? 'النظام جاهز' : 'System Ready for Dispatch'}
          <span className="contact__sys-divider">|</span>
          <span className="contact__sys-time">
            {new Date().toLocaleTimeString('en-US', { hour12: false })} UTC
          </span>
        </div>
      </div>
    </div>
  )
}
