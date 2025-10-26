import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <>
      <section className="section cta">
        <div>
          <div className="cta-box">
            <div
              className="badge"
              style={{ display: "inline-block", marginBottom: "1rem" }}>
              Ready to Get Started?
            </div>
            <h2 className="h2 cta-title">Let's Build Your Custom Website</h2>
            <p className="sub-title cta-text">
              Partner with Sri Lanka's trusted web development company for your
              next project. Share your goals and we'll respond with a clear
              plan, realistic timeline, and transparent fixed quote - all within
              24 hours. No hidden costs, no pressure.
            </p>
            <div className="cta-actions">
              <Link to="#get-a-quote" className="btn btn-primary">
                Get free quote now
              </Link>
              <Link to="#services" className="btn btn-secondary">
                View our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
