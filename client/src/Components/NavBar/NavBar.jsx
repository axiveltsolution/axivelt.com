import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  // Check if a hash link (like #about) is active
  const isHashActive = (h) => pathname === "/" && hash === h;

  // Close mobile menu when navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const NavItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "link active" : "link")}
      onClick={() => setOpen(false)}>
      {label}
    </NavLink>
  );

  const AnchorItem = (h, label) => (
    <Link
      to={`/${h}`}
      className={isHashActive(h) ? "link active" : "link"}
      onClick={() => setOpen(false)}>
      {label}
    </Link>
  );

  return (
    <header className={`nav-header${open ? " open" : ""}`}>
      <div className="nav-container">
        {/* Brand */}
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <p className="logo-text-nav">Axivelt Solution</p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main Navigation">
          {NavItem("/", "Home")}
          {AnchorItem("#services", "Services")}
          {AnchorItem("#projects", "Projects")}
          {AnchorItem("#about", "About")}
          {AnchorItem("#faq", "FAQ")}
          {AnchorItem("#get-a-quote", "Get a Quote")}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div id="mobile-menu" className="drawer" role="dialog" aria-modal="true">
        <nav className="m-links" aria-label="Mobile Navigation">
          {NavItem("/", "Home")}
          {AnchorItem("#services", "Services")}
          {AnchorItem("#projects", "Projects")}
          {AnchorItem("#about", "About")}
          {AnchorItem("#faq", "FAQ")}
          {AnchorItem("#get-a-quote", "Get a Quote")}
        </nav>
      </div>
    </header>
  );
}
