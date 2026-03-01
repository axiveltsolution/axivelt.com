import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add glass effect when the user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to close the menu when a link is clicked
  const closeMenu = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  // Lock scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${open ? "navbar--open" : ""}`}>
      <div className="container navbar-container">
        {/* Brand Logo with Blood Red Accent */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          AXIVELT SOLUTIONS<span className="text-red">.</span>
        </Link>

        {/* Desktop Links (No active classes, clean simple Links) */}
        <nav className="navbar-desktop">
          <Link to="/" className="navbar-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/#services" className="navbar-link" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/#about" className="navbar-link" onClick={closeMenu}>
            About
          </Link>

          {/* UPDATED: Projects now points to the homepage section */}
          <Link to="/#projects" className="navbar-link" onClick={closeMenu}>
            Projects
          </Link>

          <Link to="/#contact" className="btn btn-primary" onClick={closeMenu}>
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu">
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className="navbar-mobile">
        <Link to="/" className="navbar-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/#services" className="navbar-link" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/#about" className="navbar-link" onClick={closeMenu}>
          About
        </Link>

        {/* UPDATED: Mobile link also points to #projects */}
        <Link to="/#projects" className="navbar-link" onClick={closeMenu}>
          Projects
        </Link>

        <Link to="/#contact" className="btn btn-primary" onClick={closeMenu}>
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
