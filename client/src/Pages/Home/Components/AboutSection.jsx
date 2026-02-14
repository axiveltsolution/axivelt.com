import React, { useEffect, useRef } from "react";

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
        <div className="about__grid">
          {/* LEFT COLUMN: The Story */}
          <div ref={leftRef} className="about__copy">
            <div className="about__badges">
              <span className="badge-label">Remote-first</span>
              <span className="badge-label">Colombo, SL</span>
              <span className="badge-label">Senior-led</span>
            </div>

            <h2 className="about__title">
              Engineering Digital <br />
              Excellence.
            </h2>

            <p className="about__lead">
              Premier software engineering agency specializing in custom systems
              and high-performance web applications. We deliver secure digital
              solutions with absolute transparency.
            </p>

            <ul className="about__points">
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

            <div className="about__stack">
              <span className="badge-label text-red">Core Technology</span>
              <div className="about__stack-flex">
                <span>React</span>
                <span className="dot">•</span> <span>Node.js</span>
                <span className="dot">•</span> <span>Vite</span>
                <span className="dot">•</span> <span>MongoDB</span>
                <span className="dot">•</span> <span>AWS</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Process (Using global glass-card!) */}
          <div ref={rightRef} className="glass-card about__panel">
            <h3 className="badge-label text-red">Our Development Process</h3>

            <ol className="about__process-list">
              <li>
                <span className="process__num text-red">01</span>
                <div>
                  <div className="process__title">Discovery</div>
                  <div className="process__desc">
                    Technical requirements and goal alignment.
                  </div>
                </div>
              </li>
              <li>
                <span className="process__num text-red">02</span>
                <div>
                  <div className="process__title">Proposal</div>
                  <div className="process__desc">
                    Fixed pricing and detailed deliverables.
                  </div>
                </div>
              </li>
              <li>
                <span className="process__num text-red">03</span>
                <div>
                  <div className="process__title">Development</div>
                  <div className="process__desc">
                    Weekly updates and collaborative feedback.
                  </div>
                </div>
              </li>
              <li>
                <span className="process__num text-red">04</span>
                <div>
                  <div className="process__title">Launch</div>
                  <div className="process__desc">
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
