import React from "react";
import { Link } from "react-router-dom";

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.68 6.1L0 24l6.07-1.64A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.9 9.9 0 01-5.03-1.38l-.36-.21-3.6.97.96-3.52-.23-.37A9.9 9.9 0 012 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.31-7.18c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.67.14-.2.29-.77.96-.95 1.16-.18.2-.35.22-.64.08-.29-.14-1.23-.45-2.34-1.42-.86-.77-1.43-1.72-1.6-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.3.43-.45.14-.15.18-.25.27-.42.09-.18.04-.33-.02-.46-.06-.14-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.46.07-.7.33-.24.25-.92.9-.92 2.2s.94 2.55 1.07 2.72c.13.17 1.86 2.84 4.51 3.98.63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.1.51-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge-label">Software Engineering Agency</span>

          <h1 className="hero-title">
            We build secure <br />
            <span className="text-red">Software Solutions.</span>
          </h1>

          <p className="hero-subtitle">
            Leading software development company in Sri Lanka specializing in
            custom web applications, inventory systems, and enterprise
            platforms.
          </p>

          <div className="hero-actions">
            <Link to="#contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link to="#projects" className="btn btn-outline">
              View Portfolio
            </Link>

            <a
              href="https://wa.me/94766980686"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-btn"
              aria-label="Contact us on WhatsApp">
              <IconWhatsApp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
