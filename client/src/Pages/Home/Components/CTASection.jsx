import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <>
      <section className="section cta">
        <div className="container">
          <div className="cta-box">
            <h3 className="h2 cta-title">Ready to start your project?</h3>
            <p className="body-text cta-text">
              Tell us your goals and constraints. We’ll reply with a clear plan,
              timeline, and a fixed quote within 24 hours.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get started today
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
