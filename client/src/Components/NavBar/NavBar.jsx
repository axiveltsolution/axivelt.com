import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.svg";

export default function NavBar() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  // active state for home anchors
  const isHashActive = (h) => pathname === "/" && hash === h;

  // close drawer when route/hash changes
  useEffect(() => { setOpen(false); }, [pathname, hash]);

  // lock scroll when drawer open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const item = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "link active" : "link")}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  const anchor = (h, label) => (
    <Link
      to={`/${h}`}
      className={isHashActive(h) ? "link active" : "link"}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className={`nav${open ? " open" : ""}`}>
      <div className="container row">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <p className="logo-text-nav">Axivelt Solution</p>
        </Link>

        {/* Desktop links */}
        <nav className="links">
          {item("/", "Home")}
          {item("/services", "Services")}
          {anchor("#projects", "Projects")}
          {anchor("#about", "About")}
          {anchor("#faq", "FAQ")}
        </nav>

        <Link to="/contact" className="cta desk-cta" onClick={() => setOpen(false)}>
          Contact Us
        </Link>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div id="mobile-menu" className="drawer" role="dialog" aria-modal="true">
        <nav className="m-links">
          {item("/", "Home")}
          {item("/services", "Services")}
          {anchor("#projects", "Projects")}
          {anchor("#about", "About")}
          {anchor("#faq", "FAQ")}
          <Link to="/contact" className="cta m-cta" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
