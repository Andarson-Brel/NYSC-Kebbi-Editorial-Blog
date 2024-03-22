export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-nav-container">
        <nav className="nav">
          <div className="logo-container">
            <img
              className="logo"
              src="/images/logo.png"
              alt="logo-img"
              loading="lazy"
            />
          </div>
          <div className="nav-links">
            <ul className="nav-list">
              <li className="nav-item">Home</li>
              <li className="nav-item">Blog</li>
              <li className="nav-item">About Us</li>
              <li className="nav-item">Privacy Policy</li>
            </ul>
            <div className="btn-container"></div>
          </div>
        </nav>
        <div className="contact-footer">
          <div className="address-footer">
            <p className="address">
              NYSC Secretriat, Birnin Kebbi, Kebbi State.
              <br />
              Kebbinysceditorial@gmail.com 07049020487
            </p>
            <div className="footer-socials">
              <img
                className="footer-socials-img"
                alt="footer socials "
                src="/images/facebook.svg"
              />
              <img
                className="footer-socials-img"
                alt="footer socials "
                src="/images/twitter.svg"
              />
              <img
                className="footer-socials-img"
                alt="footer socials "
                src="/images/instagram.svg"
              />
            </div>
          </div>
          <div className="socials-footer"></div>
        </div>
      </div>
    </footer>
  );
}
