import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="section cta">
      <div className="container">
        <div className="glass-card cta-box">
          <span className="badge-label text-red">Ready to Get Started?</span>

          <h2 className="cta-title">
            Let's Build Your <br />
            Custom Software Solution
          </h2>

          <p className="cta-text">
            Partner with Sri Lanka's trusted software solutions company for your
            next project. We respond within 24 hours with a clear plan and a
            transparent fixed quote.
          </p>

          <div className="cta-actions">
            <Link to="#contact" className="btn btn-primary">
              Get a Quote
            </Link>
            <Link to="#services" className="btn btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
