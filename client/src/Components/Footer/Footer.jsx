import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div>
            <h3 className="title">Axivelt</h3>
            <p className="muted">
              Websites, web apps, and inventory systems. React, Node.js &amp; WordPress.
              Based in Sri Lanka. Serving clients worldwide.
            </p>
          </div>

          <div>
            <h4 className="head">Links</h4>
            <ul className="list">
              <li><Link to="/services" className="footlink">Services</Link></li>
              <li><Link to="/#projects" className="footlink">Projects</Link></li>
              <li><Link to="/contact" className="footlink">Contact</Link></li>
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
                <a className="footlink" href="https://wa.me/94700000000" target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </li>
            </ul>
            <span className="badge">48–72h delivery for small sites</span>
          </div>
        </div>

        <div className="bottom">
          <small>© {year} AxiveltSolution. All rights reserved.</small>
          <small>
            Developed by{" "}
            <a className="footlink" href="mailto:axiveltofficial@gmail.com">AxiveltSolution</a>
          </small>
        </div>
      </div>
    </footer>
  );
}
