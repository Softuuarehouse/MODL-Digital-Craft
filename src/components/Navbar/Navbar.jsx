import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useLang } from '../../i18n/LangContext'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const navigate  = useNavigate()
  const { t, toggle } = useLang()
  const { links, cta, langBtn } = t.navbar

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleMobileNav = (to) => { setOpen(false); navigate(to) }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        {/* Logo — MODL never translated */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-mark"><span /></div>
          <span className="navbar__logo-text">MODL-Digital-Craft</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + lang toggle + hamburger */}
        <div className="navbar__cta">
          <Link to="/contact" className="navbar__cta-btn">{cta}</Link>
          <button className="navbar__lang-btn" onClick={toggle} aria-label="Toggle language">
            {langBtn}
          </button>
          <button
            className={`navbar__hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`navbar__mobile-drawer ${open ? 'open' : ''}`}>
        {links.map(({ to, label }) => (
          <button
            key={to}
            className="navbar__mobile-link"
            onClick={() => handleMobileNav(to)}
          >
            {label}
          </button>
        ))}
        <button className="navbar__lang-btn" onClick={toggle} style={{ marginTop: '1rem' }}>
          {langBtn}
        </button>
      </div>
    </>
  )
}
