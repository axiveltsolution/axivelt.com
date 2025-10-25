import React from "react";
import { useState, useEffect, useRef } from "react";

/* ================= Intersection Observer ================= */
function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1, ...options }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return ref;
}

export default function AboutSection() {
  const leftRef = useIntersectionObserver();
  const rightRef = useIntersectionObserver();

  return (
    <section id="about" className="section about">
      <div className="slab">
        <div className="about-grid">
          <div
            ref={leftRef}
            className="about-copy"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all .6s cubic-bezier(.4,0,.2,1)",
            }}>
            <div className="about-badges">
              <span className="chip">Remote-first</span>
              <span className="chip">Colombo, Sri Lanka</span>
              <span className="chip">Senior-led</span>
            </div>

            <h2 className="h2 about-title">About Axivelt Solutions</h2>

            <p className="body-text about-lead">
              Leading <strong>web development company in Sri Lanka</strong>{" "}
              specializing in custom websites, web applications, and inventory
              systems. We deliver
              <strong> fast, secure digital solutions</strong> for businesses
              across Colombo, Kandy, Galle, and beyond—with{" "}
              <strong>transparent pricing and realistic timelines</strong>.
            </p>

            <ul className="about-points">
              <li>
                <strong>Speed</strong> — Most corporate sites delivered in 2-4
                weeks; complex web systems in 6-12 weeks with phased rollouts.
              </li>
              <li>
                <strong>Transparency</strong> — Fixed quotes, detailed
                proposals, clear milestones, and a dedicated project manager for
                every build.
              </li>
              <li>
                <strong>Ongoing Support</strong> — 24/7 monitoring, automatic
                backups, security updates, and affordable maintenance plans.
              </li>
            </ul>

            <div className="about-stack">
              <span className="stack-label">Our technology stack</span>
              <ul className="stack-chips">
                <li className="chip">React</li>
                <li className="chip">Node.js</li>
                <li className="chip">Express</li>
                <li className="chip">Vite</li>
                <li className="chip">MySQL / MongoDB</li>
                <li className="chip">Cloud Hosting</li>
              </ul>
            </div>
          </div>

          <div
            ref={rightRef}
            className="about-panel"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all .6s cubic-bezier(.4,0,.2,1) .06s",
            }}>
            <div className="about-art" aria-hidden="true" />
            <h3 className="h3 about-panel-title">Our Development Process</h3>
            <ol className="about-steps">
              <li>
                <span className="step-n">1</span>
                <div>
                  <div className="step-t">Discovery & Planning</div>
                  <div className="muted">
                    Understand your goals, audience, features, and technical
                    requirements.
                  </div>
                </div>
              </li>
              <li>
                <span className="step-n">2</span>
                <div>
                  <div className="step-t">Proposal & Quote</div>
                  <div className="muted">
                    Detailed scope, fixed pricing, timeline, and deliverables in
                    writing.
                  </div>
                </div>
              </li>
              <li>
                <span className="step-n">3</span>
                <div>
                  <div className="step-t">Design & Development</div>
                  <div className="muted">
                    Staging environment access, weekly updates, and
                    collaborative feedback.
                  </div>
                </div>
              </li>
              <li>
                <span className="step-n">4</span>
                <div>
                  <div className="step-t">Launch & Maintenance</div>
                  <div className="muted">
                    Live deployment, training, analytics setup, and ongoing
                    support.
                  </div>
                </div>
              </li>
            </ol>

            <div className="about-mini-stats">
              <div className="mini">
                <div className="mini-n">50+</div>
                <div className="mini-l">Projects delivered</div>
              </div>
              <div className="mini">
                <div className="mini-n">99.8%</div>
                <div className="mini-l">Uptime guarantee</div>
              </div>
              <div className="mini">
                <div className="mini-n">GMT+5:30</div>
                <div className="mini-l">Sri Lanka timezone</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
