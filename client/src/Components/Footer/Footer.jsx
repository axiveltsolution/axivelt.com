import { Link } from "react-router-dom";
import "./Footer.css";

/** Social links */
const WHATSAPP_NUMBER = "94766980686"; // wa.me format (no +)
const INSTAGRAM_URL =
  "https://www.instagram.com/axiveltsolutions?igsh=dWo1ZHR0YTJqNzQw&utm_source=qr"; // <-- replace if different
const FACEBOOK_URL =
  "https://www.facebook.com/share/1Ek3LgcVKT/?mibextid=wwXIfr"; // <-- replace if different

/* Simple inline SVG icons using currentColor */
function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.68 6.1L0 24l6.07-1.64A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.9 9.9 0 01-5.03-1.38l-.36-.21-3.6.97.96-3.52-.23-.37A9.9 9.9 0 012 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.31-7.18c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.67.14-.2.29-.77.96-.95 1.16-.18.2-.35.22-.64.08-.29-.14-1.23-.45-2.34-1.42-.86-.77-1.43-1.72-1.6-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.3.43-.45.14-.15.18-.25.27-.42.09-.18.04-.33-.02-.46-.06-.14-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.46.07-.7.33-.24.25-.92.9-.92 2.2s.94 2.55 1.07 2.72c.13.17 1.86 2.84 4.51 3.98.63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34z"
      />
    </svg>
  );
}
function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.95.24 2.41.4.61.24 1.05.53 1.51.99.46.46.75.9.99 1.51.16.46.35 1.24.4 2.41.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.95-.4 2.41a4 4 0 01-.99 1.51 4 4 0 01-1.51.99c-.46.16-1.24.35-2.41.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.95-.24-2.41-.4a4 4 0 01-1.51-.99 4 4 0 01-.99-1.51c-.16-.46-.35-1.24-.4-2.41C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.95.4-2.41.24-.61.53-1.05.99-1.51.46-.46.9-.75 1.51-.99.46-.16 1.24-.35 2.41-.4C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.75 0 8.33.01 7.05.07 5.77.13 4.87.33 4.1.62a6.2 6.2 0 00-2.24 1.46A6.2 6.2 0 00.4 4.3c-.3.77-.49 1.67-.55 2.95C-.21 8.54-.2 8.96-.2 12s-.01 3.46.07 4.75c.06 1.28.26 2.18.55 2.95.34.86.83 1.58 1.46 2.24A6.2 6.2 0 003.8 22.7c.77.3 1.67.49 2.95.55C8.04 23.79 8.46 23.8 12 23.8s3.96-.01 5.25-.07c1.28-.06 2.18-.26 2.95-.55a6.2 6.2 0 002.24-1.46 6.2 6.2 0 001.46-2.24c.3-.77.49-1.67.55-2.95.06-1.29.07-1.71.07-5.25s-.01-3.96-.07-5.25c-.06-1.28-.26-2.18-.55-2.95a6.2 6.2 0 00-1.46-2.24A6.2 6.2 0 0020.9.62c-.77-.3-1.67-.49-2.95-.55C16.04-.01 15.62 0 12 0z"
      />
      <path
        fill="currentColor"
        d="M12 5.84A6.16 6.16 0 105.84 12 6.16 6.16 0 0012 5.84m0-2.04A8.2 8.2 0 113.8 12 8.2 8.2 0 0112 3.8zM18.36 3.64a1.44 1.44 0 101.44 1.44 1.44 1.44 0 00-1.44-1.44z"
      />
    </svg>
  );
}
function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.494v-9.294H9.691V11.06h3.128V8.414c0-3.1 1.893-4.79 4.659-4.79 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.314h3.59l-.467 3.646h-3.123V24h6.127C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer c-footer-nav">
      <div>
        <div className="grid">
          <div>
            <h3>Axivelt Solutions</h3>
            <p className="muted">
              Websites, web apps, and inventory systems. React, Node.js &amp;
              WordPress. Based in Sri Lanka. Serving clients worldwide.
            </p>

            {/* Social icons row */}
            <div className="socials">
              <a
                className="social-link"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp">
                <IconWhatsApp className="icon" />
              </a>
              <a
                className="social-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram">
                <IconInstagram className="icon" />
              </a>
              <a
                className="social-link"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook">
                <IconFacebook className="icon" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="head">Sections</h4>
            <ul className="list">
              <li>
                <Link to="/services" className="footlink">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/our-projects" className="footlink">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footlink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="head">Contact</h4>
            <ul className="list">
              <li>
                <a className="footlink" href="mailto:axiveltofficial@gmail.com">
                  axiveltofficial@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="footlink"
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer">
                  WhatsApp: +94&nbsp;76&nbsp;698&nbsp;0686
                </a>
              </li>
            </ul>
            <span className="badge">48–72h delivery for small sites</span>
          </div>
        </div>

        <div className="bottom">
          <small>© {year} AxiveltSolutions. All rights reserved.</small>
          <small>
            Developed by{" "}
            <a className="footlink" href="mailto:axiveltofficial@gmail.com">
              AxiveltSolutions
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}
