import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div>
          <p className="footer__brand-name">Archi-Maquette</p>
          <p className="footer__brand-desc">
            A precision digital architecture studio where physical craftsmanship meets
            computational design. We build the models that define tomorrow's cities.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="footer__col-title">Navigate</p>
          <ul className="footer__col-links">
            <li><Link to="/"        className="footer__col-link">Home</Link></li>
            <li><Link to="/studio"  className="footer__col-link">Studio</Link></li>
            <li><Link to="/gallery" className="footer__col-link">Gallery</Link></li>
            <li><Link to="/contact" className="footer__col-link">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="footer__col-title">Services</p>
          <ul className="footer__col-links">
            <li><a className="footer__col-link">3D Visualization</a></li>
            <li><a className="footer__col-link">Scale Modeling</a></li>
            <li><a className="footer__col-link">Urban Simulation</a></li>
            <li><a className="footer__col-link">Algorithmic Design</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Archi-Maquette Studio. All rights reserved.
        </p>
        <div className="footer__status">
          <span className="footer__status-dot" />
          Systems Operational
        </div>
      </div>
    </footer>
  )
}
