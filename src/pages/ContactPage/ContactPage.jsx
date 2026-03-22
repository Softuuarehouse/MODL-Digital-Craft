import './ContactPage.css'

export default function ContactPage() {

  return (
    <div className="contact page-enter">
      {/* Background */}
      <div className="contact__bg">
        <img
          className="contact__bg-img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4RcpzAcyjzXiDa6744TkpczEYWD3GDhp68CHNm7Js5revnQXxTzCHol7uYXCxd1OqNssMBVYZuOFPaOVMwmz_N8Fn25e2qUr8U72THZgzp_qxmX0rG8RVE0NI2pfn4TUsQSE0mSen89ICR0YBY-ji8UTj-zQtVSf5igsrvfbGpeSAngKTE675SecZH-UuhvPDm4F6Aw1gowKONvAUSNwq0_F4x39_EAempGwjUAh6s5OxFTz80yzBbTX8tNbiTS4wCYcaI83VbXDk"
          alt=""
          aria-hidden="true"
        />
        <div className="contact__bg-gradient" />
        <div className="contact__bg-text">CONNECT</div>
      </div>

      <div className="contact__inner">
        {/* Left — Info */}
        <div className="contact__info">
          <div className="contact__status-badge">
            <span className="dot" />
            Terminal Active
          </div>

          <h1 className="contact__title">
            Establish<br />
            <span className="accent">Connection.</span>
          </h1>

          <p className="contact__subtitle">
            Direct transmission to the design studio. Our architects and engineers are
            on standby for your next project brief.
          </p>

          <div className="contact__details">
            <div>
              <p className="contact__detail-label">Location Coordinates</p>
              <p className="contact__detail-value">
                Giza , Eygpt
              </p>
            </div>
            <div>
              <p className="contact__detail-label">Digital Signal</p>
              <p className="contact__detail-value">
                +20 10 08555281
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
