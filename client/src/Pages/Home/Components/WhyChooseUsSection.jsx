import React from "react";

/**
 * WhyChooseUs.jsx
 * - Six cards, no icons.
 * - External CSS file: WhyChooseUs.css
 * - Edit the `features` array to change headings / SEO text.
 */

const features = [
  {
    title: "Full-stack expertise",
    text: "From static HTML prototypes to production-grade React + Node apps — we build scalable, maintainable systems with SQL, MongoDB, and PHP backends.",
  },
  {
    title: "Performance & SEO first",
    text: "Fast by design — optimized assets, SSR/SSG options, semantic markup and measurable SEO practices so your product ranks and converts.",
  },
  {
    title: "Security & Reliability",
    text: "Hardened deployments, secure auth patterns, dependency management and monitoring so your app stays safe and available under load.",
  },
  {
    title: "Design that converts",
    text: "Modern, accessible UI with clear UX patterns and conversion-focused interactions — we design interfaces that look premium and drive action.",
  },
  {
    title: "Flexible integration",
    text: "APIs, webhooks, third-party services and legacy systems — we integrate cleanly with your tools and migrate data safely when needed.",
  },
  {
    title: "Long-term partnership",
    text: "We deliver with documentation, tests and handover support so your team can own the product long after launch.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section why-section" aria-labelledby="why-title">
      <div className="slab why-slab">
        <div className="section-header why-header">
          <div>
            <div className="badge">Why choose us</div>
            <h1 id="why-title" className="section-title why-title">
              Build faster. Launch stronger.
            </h1>
            <p className="sub-title">
              We design, engineer and ship reliable web & app products — from
              prototypes to production. Below are the core strengths we bring to
              every project.
            </p>
          </div>
          <div className="why-cta">
            <a className="btn btn-outline" href="#get-a-quote">
              Get a quote
            </a>
            <a className="btn btn-primary" href="#projects">
              See work
            </a>
          </div>
        </div>

        <div className="grid grid-3 why-grid" aria-hidden={false}>
          {features.map((f, i) => (
            <article key={i} className="card why-card">
              <div className="card-content why-card-content">
                <h3 className="h3 card-title why-card-title">{f.title}</h3>
                <p className="card-text why-card-text">{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
