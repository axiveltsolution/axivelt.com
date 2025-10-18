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
      <div className="container slab">
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
              <span className="chip">Sri Lanka</span>
              <span className="chip">Senior-led</span>
            </div>

            <h2 className="h2 about-title">About AxiveltSolution</h2>

            <p className="body-text about-lead">
              We’re a small, senior team building{" "}
              <strong>fast, secure web experiences</strong> for founders and
              SMEs. From corporate sites to custom dashboards and inventory
              systems. We ship with
              <strong> clarity, realistic timelines, and a fixed quote</strong>.
            </p>

            <ul className="about-points">
              <li>
                <strong>Speed</strong> - small sites in 48–72h; phased delivery
                for larger scopes.
              </li>
              <li>
                <strong>Clarity</strong> - a written plan, milestones, and an
                owner for every task.
              </li>
              <li>
                <strong>Care</strong> - monitoring, backups, updates, and small
                fixes via care plans.
              </li>
            </ul>

            <div className="about-stack">
              <span className="stack-label">Core stack</span>
              <ul className="stack-chips">
                <li className="chip">React</li>
                <li className="chip">Node.js</li>
                <li className="chip">Express</li>
                <li className="chip">Vite</li>
                <li className="chip">WordPress</li>
                <li className="chip">MySQL / MongoDB</li>
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
            <h3 className="h3 about-panel-title">How we work</h3>
            <ol className="about-steps">
              <li>
                <span className="step-n">1</span>
                <div>
                  <div className="step-t">Discovery call</div>
                  <div className="muted">
                    Goals, constraints, content &amp; integrations.
                  </div>
                </div>
              </li>
              <li>
                <span className="step-n">2</span>
                <div>
                  <div className="step-t">Plan &amp; fixed quote</div>
                  <div className="muted">
                    Scope, milestones, timeline, responsibilities.
                  </div>
                </div>
              </li>
              <li>
                <span className="step-n">3</span>
                <div>
                  <div className="step-t">Build &amp; review</div>
                  <div className="muted">
                    Staging link, async updates, rapid iterations.
                  </div>
                </div>
              </li>
              <li>
                <span className="step-n">4</span>
                <div>
                  <div className="step-t">Launch &amp; care</div>
                  <div className="muted">
                    Monitoring, backups, analytics &amp; small fixes.
                  </div>
                </div>
              </li>
            </ol>

            <div className="about-mini-stats">
              <div className="mini">
                <div className="mini-n">48-72h</div>
                <div className="mini-l">Small site delivery</div>
              </div>
              <div className="mini">
                <div className="mini-n">A+</div>
                <div className="mini-l">Core Web Vitals</div>
              </div>
              <div className="mini">
                <div className="mini-n">GMT+5:30</div>
                <div className="mini-l">Timezone</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
