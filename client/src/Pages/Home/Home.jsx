import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

/* Assets (your GIFs) */
import gifPerf from "../../assets/gifs/performance.gif";
import gifReliable from "../../assets/gifs/reliable.gif";
import gifSEO from "../../assets/gifs/seo_home.gif";
import gifWebsites from "../../assets/gifs/websites.gif";
import gifWebapps from "../../assets/gifs/webapps.gif";
import gifMaintenance from "../../assets/gifs/maintenance.gif";

/* ================= Intersection Observer (fade-in on scroll) ================= */
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

/* ================= RotatingText (aligned + width reserved) ================= */
function RotatingText({ words, interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const [widthPx, setWidthPx] = useState(0);
  const measureRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const computeWidth = () => {
    const root = measureRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-word]");
    let max = 0;
    items.forEach(el => {
      const w = el.getBoundingClientRect().width;
      if (w > max) max = w;
    });
    setWidthPx(Math.ceil(max));
  };

  useEffect(() => {
    computeWidth();
    const onResize = () => computeWidth();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [words]);

  return (
    <>
      <span
        className="rotator"
        style={{ width: widthPx ? `${widthPx}px` : undefined, height: "1em" }}
        aria-live="polite"
        aria-atomic="true"
      >
        {words.map((w, i) => (
          <span key={w} className={`word ${i === index ? "active" : ""}`}>
            {w}
          </span>
        ))}
      </span>

      {/* Hidden measurer (same font as title) */}
      <span className="rotator-measure" ref={measureRef} aria-hidden="true">
        {words.map(w => (
          <span key={`m-${w}`} data-word className="word-measure">
            {w}
          </span>
        ))}
      </span>
    </>
  );
}

/* ================= Scroll to #hash (for /#projects, /#faq, /#about) ================= */
function useScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);
}

/* ============================= Page ============================= */
export default function Home() {
  const rotatingWords = ["fast", "beautiful", "secure", "scalable"];
  useScrollToHash();

  return (
    <div className="home">
      {/* HERO */}
      <section className="section hero">
        <div className="container">
          <div className="badge">🇱🇰 Sri Lanka • Remote-first</div>

          <h1 className="title">
            <span className="title-line">We build</span>
            <span className="title-line title-rotator">
              <RotatingText words={rotatingWords} />
            </span>
            <span className="title-line">web experiences.</span>
          </h1>

          <p className="sub">
            Websites, web apps, and inventory systems engineered with React, Node.js, and WordPress.
            We also handle maintenance &amp; SEO. so you can focus on growing your business.
          </p>

          <div className="actions">
            <Link to="/contact" className="btn btn-primary">Start a project</Link>
            <Link to="/our-projects" className="btn btn-secondary">View our work</Link>
            <a href="mailto:axiveltofficial@gmail.com" className="btn btn-outline" aria-label="Send us an email">Email us</a>
            <a href="https://wa.me/94700000000" target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="Contact us on WhatsApp">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="section">
        <div className="container slab">
          <div className="section-header">
            <h2 className="h2 section-title">Built for results</h2>
          </div>

          <div className="grid grid-3">
            <FeatureCard
              icon={gifPerf}
              title="Performance first"
              description="Core Web Vitals 90+, next-gen images (WebP/AVIF), critical CSS, code-splitting, HTTP/2, and edge caching. So pages load instantly."
            />
            <FeatureCard
              icon={gifReliable}
              title="Hardened & reliable"
              description="Secure headers, validation, dependency updates, CI checks, structured logging, and uptime monitoring to keep your product safe and stable."
            />
            <FeatureCard
              icon={gifSEO}
              title="SEO that works"
              description="Semantic HTML, schema & Open Graph, clean URLs, XML sitemaps/robots, fast pages, and analytics + goals to measure growth."
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container slab">
          <div className="section-header">
            <h2 className="h2 section-title">What we do</h2>
            <Link to="/services" className="link-muted section-link">All services →</Link>
          </div>

          <div className="grid grid-3">
            <ServiceCard
              icon={gifWebsites}
              title="Websites & Platforms"
              items={[
                "Corporate & SME websites",
                "High-converting landing pages",
                "Blogs & content management",
                "E-commerce (Stripe/WooCommerce)",
                "Multilingual & localization",
              ]}
            />
            <ServiceCard
              icon={gifWebapps}
              title="Web Apps & Dashboards"
              items={[
                "Custom portals & CRM systems",
                "Inventory/ERP (stock, orders, reports)",
                "Role-based dashboards & permissions",
                "API integrations (payments, SMS, maps)",
                "Realtime events & notifications",
              ]}
            />
            <ServiceCard
              icon={gifMaintenance}
              title="Maintenance & Growth"
              items={[
                "Performance & Core Web Vitals tuning",
                "Security updates, backups, monitoring",
                "Bug fixes & small feature updates",
                "On-page SEO & content support",
                "Monthly care plans & reporting",
              ]}
            />
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section id="projects" className="section">
        <div className="container slab">
          <div className="section-header">
            <h2 className="h2 section-title">Recent work</h2>
            <Link to="/our-projects" className="link-muted section-link">View all projects →</Link>
          </div>

          <div className="grid grid-3 grid-projects">
            <ProjectCard
              href="/our-projects"
              title="GadgetHub"
              description="C# + ASP.NET • B2C electronics marketplace with product search, accounts, and admin tools."
              image="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop"
            />
            <ProjectCard
              href="/our-projects"
              title="FixMate.lk"
              description="React + Node Js • On-demand service booking, payments, role-based dashboard, and notifications."
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
            />
            <ProjectCard
              href="/our-projects"
              title="LankaSafeTours"
              description="React + Node js • Tours & booking website with packages, inquiries, and analytics."
              image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            <StatCard number="10+" label="Projects delivered" />
            <StatCard number="A+" label="Lighthouse grade" />
            <StatCard number="48h" label="Small site turnaround" />
            <StatCard number="100%" label="Client satisfaction" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <AboutSection />

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-box">
            <h3 className="h2 cta-title">Ready to start your project?</h3>
            <p className="body-text cta-text">
              Tell us your goals and constraints. We’ll reply with a clear plan, timeline, and a fixed quote within 24 hours.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Get started today</Link>
              <Link to="/services" className="btn btn-secondary">Explore services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <div className="faq">
            <h2 className="h2" style={{ textAlign: "center", marginBottom: "3rem" }}>
              Frequently asked questions
            </h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary>How quickly can you launch a project?</summary>
                <p>
                  Landing pages and small sites can be delivered in 3-5 days.
                  Business websites typically take 1-2 weeks. Larger web apps depend on scope.
                  You'll get a realistic timeline before we begin.
                </p>
              </details>
              <details className="faq-item">
                <summary>Do you provide SEO and marketing support?</summary>
                <p>
                  Yes. We ship semantic HTML, schema/OG tags, fast pages, clean URLs, XML sitemaps,
                  analytics &amp; conversion goals, plus ongoing on-page SEO if needed.
                </p>
              </details>
              <details className="faq-item">
                <summary>Can you maintain and update our existing website?</summary>
                <p>
                  Absolutely. Our care plans include backups, security updates, performance monitoring,
                  bug fixes, and small enhancements each month.
                </p>
              </details>
              <details className="faq-item">
                <summary>What if we already have a design or content?</summary>
                <p>
                  Perfect. We'll implement your Figma/UX and wire up the CMS. If content is pending,
                  we can launch in phases and iterate quickly.
                </p>
              </details>
              <details className="faq-item">
                <summary>Do you work with clients outside Sri Lanka?</summary>
                <p>
                  Yes. We're remote-first (GMT+5:30) and used to async collaboration. We work over
                  email, chat, and shared docs with clear weekly updates.
                </p>
              </details>
              <details className="faq-item">
                <summary>Which technologies do you use?</summary>
                <p>
                  React, Node.js/Express, Vite, WordPress, and MySQL/MongoDB. Choosing the best stack
                  for performance, security, and long-term maintainability.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================= Presentational Cards ============================= */
function FeatureCard({ icon, title, description }) {
  const [iconLoaded, setIconLoaded] = useState(false);
  const [iconError, setIconError] = useState(false);
  const cardRef = useIntersectionObserver();

  return (
    <article
      ref={cardRef}
      className="card"
      style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)" }}
    >
      <div className="card-icon">
        {!iconError ? (
          <img
            src={icon}
            alt={`${title} icon`}
            loading="lazy"
            onLoad={() => setIconLoaded(true)}
            onError={() => setIconError(true)}
            style={{ opacity: iconLoaded ? 1 : 0, transition: "opacity 0.3s" }}
          />
        ) : (
          <div className="icon-fallback" aria-hidden="true">{title.charAt(0)}</div>
        )}
      </div>
      <div className="card-content">
        <h3 className="h3 card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </article>
  );
}

function ServiceCard({ icon, title, items = [] }) {
  const [iconLoaded, setIconLoaded] = useState(false);
  const [iconError, setIconError] = useState(false);
  const cardRef = useIntersectionObserver();

  return (
    <article
      ref={cardRef}
      className="card"
      style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)" }}
    >
      <div className="card-icon">
        {!iconError ? (
          <img
            src={icon}
            alt={`${title} services`}
            loading="lazy"
            onLoad={() => setIconLoaded(true)}
            onError={() => setIconError(true)}
            style={{ opacity: iconLoaded ? 1 : 0, transition: "opacity 0.3s" }}
          />
        ) : (
          <div className="icon-fallback" aria-hidden="true">{title.charAt(0)}</div>
        )}
      </div>
      <div className="card-content">
        <h3 className="h3 card-title">{title}</h3>
        {items.length > 0 && (
          <ul className="card-list">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}

function ProjectCard({ href = "/our-projects", title, description, image }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useIntersectionObserver();
  const Wrapper = href ? Link : "div";

  return (
    <Wrapper
      ref={cardRef}
      {...(href ? { to: href } : {})}
      className="work"
      aria-label={href ? `View ${title} project details` : undefined}
      style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)" }}
    >
      <div className="work-thumb">
        {!imageError ? (
          <img
            className="work-img"
            src={image}
            alt={`${title} project preview`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.4s" }}
          />
        ) : (
          <div className="image-fallback">
            <div className="project-placeholder">{title.charAt(0)}</div>
          </div>
        )}
        {!imageLoaded && !imageError && <div className="image-placeholder" />}
      </div>
      <div className="work-body">
        <h4 className="work-title">{title}</h4>
        <p className="muted work-tag">{description}</p>
      </div>
    </Wrapper>
  );
}

function StatCard({ number, label }) {
  const cardRef = useIntersectionObserver();
  return (
    <div
      ref={cardRef}
      className="stat"
      style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)" }}
    >
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function AboutSection() {
  const leftRef = useIntersectionObserver();
  const rightRef = useIntersectionObserver();

  return (
    <section id="about" className="section about">
      <div className="container slab">
        <div className="about-grid">
          {/* Left: copy */}
          <div
            ref={leftRef}
            className="about-copy"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all .6s cubic-bezier(.4,0,.2,1)" }}
          >
            <div className="about-badges">
              <span className="chip">Remote-first</span>
              <span className="chip">Sri Lanka</span>
              <span className="chip">Senior-led</span>
            </div>

            <h2 className="h2 about-title">About AxiveltSolution</h2>

            <p className="body-text about-lead">
              We’re a small, senior team building <strong>fast, secure web experiences</strong> for founders
              and SMEs. From corporate sites to custom dashboards and inventory systems. We ship with
              <strong> clarity, realistic timelines, and a fixed quote</strong>.
            </p>

            <ul className="about-points">
              <li><strong>Speed</strong> - small sites in 48–72h; phased delivery for larger scopes.</li>
              <li><strong>Clarity</strong> - a written plan, milestones, and an owner for every task.</li>
              <li><strong>Care</strong> - monitoring, backups, updates, and small fixes via care plans.</li>
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

          {/* Right: process card */}
          <div
            ref={rightRef}
            className="about-panel"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all .6s cubic-bezier(.4,0,.2,1) .06s" }}
          >
            <div className="about-art" aria-hidden="true" />
            <h3 className="h3 about-panel-title">How we work</h3>
            <ol className="about-steps">
              <li>
                <span className="step-n">1</span>
                <div>
                  <div className="step-t">Discovery call</div>
                  <div className="muted">Goals, constraints, content &amp; integrations.</div>
                </div>
              </li>
              <li>
                <span className="step-n">2</span>
                <div>
                  <div className="step-t">Plan &amp; fixed quote</div>
                  <div className="muted">Scope, milestones, timeline, responsibilities.</div>
                </div>
              </li>
              <li>
                <span className="step-n">3</span>
                <div>
                  <div className="step-t">Build &amp; review</div>
                  <div className="muted">Staging link, async updates, rapid iterations.</div>
                </div>
              </li>
              <li>
                <span className="step-n">4</span>
                <div>
                  <div className="step-t">Launch &amp; care</div>
                  <div className="muted">Monitoring, backups, analytics &amp; small fixes.</div>
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
