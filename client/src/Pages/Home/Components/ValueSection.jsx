import React from "react";
import { useState, useEffect, useRef } from "react";

/* ======= Assets (your GIFs) ======= */
import gifPerf from "../../../assets/gifs/performance.gif";
import gifReliable from "../../../assets/gifs/reliable.gif";
import gifSEO from "../../../assets/gifs/seo_home.gif";

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

function FeatureCard({ icon, title, description }) {
  const [iconLoaded, setIconLoaded] = useState(false);
  const [iconError, setIconError] = useState(false);
  const cardRef = useIntersectionObserver();

  return (
    <article
      ref={cardRef}
      className="card"
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}>
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
          <div className="icon-fallback" aria-hidden="true">
            {title.charAt(0)}
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="h3 card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </article>
  );
}

export default function ValueSection() {
  return (
    <>
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
    </>
  );
}
