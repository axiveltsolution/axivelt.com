import React, { useEffect, useRef } from "react";

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
      { threshold: 0.1, ...options },
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);
  return ref;
}

export default function AboutSection() {
  const leftRef = useIntersectionObserver();
  const rightRef = useIntersectionObserver();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div ref={leftRef} className="about-copy">
            <div className="about-badges">
              <span className="badge-label">Remote-first</span>
              <span className="badge-label">Colombo, SL</span>
              <span className="badge-label">Senior-led</span>
            </div>

            <h2 className="about-title">
              Engineering Digital <br />
              Excellence.
            </h2>

            <p className="about-lead">
              Premier software engineering agency specializing in custom systems
              and high-performance web applications. We deliver secure digital
              solutions with absolute transparency.
            </p>

            <ul className="about-points">
              <li>
                <strong>Speed</strong> — Sites in 2-4 weeks; systems in 6-12
                weeks.
              </li>
              <li>
                <strong>Transparency</strong> — Fixed quotes and clear
                milestones.
              </li>
              <li>
                <strong>Support</strong> — 24/7 monitoring and maintenance.
              </li>
            </ul>

            <div className="about-stack">
              <span className="badge-label text-red">Core Technology</span>
              <div className="about-stack-flex">
                <span>React</span>
                <span className="dot">•</span> <span>Node.js</span>
                <span className="dot">•</span> <span>Vite</span>
                <span className="dot">•</span> <span>MongoDB</span>
                <span className="dot">•</span> <span>AWS</span>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="glass-card about-panel">
            <h3 className="badge-label text-red">Our Development Process</h3>

            <ol className="about-process-list">
              <li>
                <span className="process-num text-red">01</span>
                <div>
                  <div className="process-title">Discovery</div>
                  <div className="process-desc">
                    Technical requirements and goal alignment.
                  </div>
                </div>
              </li>
              <li>
                <span className="process-num text-red">02</span>
                <div>
                  <div className="process-title">Proposal</div>
                  <div className="process-desc">
                    Fixed pricing and detailed deliverables.
                  </div>
                </div>
              </li>
              <li>
                <span className="process-num text-red">03</span>
                <div>
                  <div className="process-title">Development</div>
                  <div className="process-desc">
                    Weekly updates and collaborative feedback.
                  </div>
                </div>
              </li>
              <li>
                <span className="process-num text-red">04</span>
                <div>
                  <div className="process-title">Launch</div>
                  <div className="process-desc">
                    Live deployment and ongoing support.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
