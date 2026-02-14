import { Link } from "react-router-dom";
import "./Footer.css";

const WHATSAPP_NUMBER = "94766980686";
const FACEBOOK_URL =
  "https://www.facebook.com/share/1Ek3LgcVKT/?mibextid=wwXIfr";

/* Simplified Icon Wrappers */
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.68 6.1L0 24l6.07-1.64A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.9 9.9 0 01-5.03-1.38l-.36-.21-3.6.97.96-3.52-.23-.37A9.9 9.9 0 012 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.31-7.18c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.67.14-.2.29-.77.96-.95 1.16-.18.2-.35.22-.64.08-.29-.14-1.23-.45-2.34-1.42-.86-.77-1.43-1.72-1.6-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.3.43-.45.14-.15.18-.25.27-.42.09-.18.04-.33-.02-.46-.06-.14-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.46.07-.7.33-.24.25-.92.9-.92 2.2s.94 2.55 1.07 2.72c.13.17 1.86 2.84 4.51 3.98.63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34z" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.494v-9.294H9.691V11.06h3.128V8.414c0-3.1 1.893-4.79 4.659-4.79 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.314h3.59l-.467 3.646h-3.123V24h6.127C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Grid */}
        <div className="footer__grid">
          {/* Brand Info */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__logo">
              AXIVELT SOLUTIONS<span className="text-red">.</span>
            </Link>
            <p className="footer__desc">
              Premier software engineering agency in Sri Lanka. We craft
              high-performance digital solutions for global businesses.
            </p>
            <div className="footer__socials">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp">
                <IconWhatsApp />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook">
                <IconFacebook />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="footer__links-col">
            <h4 className="footer__label">Navigation</h4>
            <ul>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#services">Services</Link>
              </li>
              <li>
                <Link to="/our-projects">Portfolio</Link>
              </li>
              <li>
                <Link to="/#faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="footer__links-col">
            <h4 className="footer__label">Services</h4>
            <ul>
              <li>
                <Link to="/#services">Custom Software</Link>
              </li>
              <li>
                <Link to="/#services">Enterprise Apps</Link>
              </li>
              <li>
                <Link to="/#services">Inventory Systems</Link>
              </li>
              <li>
                <Link to="/#services">Business Automation</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer__links-col">
            <h4 className="footer__label">Contact</h4>
            <ul>
              <li>
                <a href="mailto:axiveltofficial@gmail.com">
                  axiveltofficial@gmail.com
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>+94 76 698 0686</a>
              </li>
              <li className="footer__location">📍 Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>© {year} Axivelt Solutions. All rights reserved.</p>
          <p>
            Designed & Developed by <Link to="/">Axivelt Solutions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
