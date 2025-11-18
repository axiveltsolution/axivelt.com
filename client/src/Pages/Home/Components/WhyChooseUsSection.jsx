import React from "react";
import { Link } from "react-router-dom";

/**
 * WhyChooseUs.jsx
 * - Six cards showcasing competitive advantages
 * - SEO-optimized content for Sri Lankan market (Software Solutions focus)
 * - Edit the `features` array to change content
 */

const features = [
  {
    title: "End-to-End Software Solutions",
    text: "From concept to deployment, we handle everything - custom software development, database design, API integrations, and system automation. One partner for your entire digital transformation journey.",
  },
  {
    title: "Business-Focused Approach",
    text: "We don't just write code - we solve business problems. Our software solutions streamline operations, reduce manual work, and drive measurable ROI for your organization.",
  },
  {
    title: "Transparent & Competitive Pricing",
    text: "Fixed-price quotes with detailed breakdowns. No hidden fees or scope creep. Get enterprise-quality software at Sri Lankan prices - 40-60% lower than international alternatives.",
  },
  {
    title: "Modern & Scalable Technology",
    text: "Built with React, Node.js, and robust databases (PostgreSQL/MongoDB). Your software scales effortlessly as your business grows, handles high traffic, and integrates seamlessly with existing systems.",
  },
  {
    title: "Agile Development Process",
    text: "Weekly demos, continuous feedback, and phased rollouts. You'll see progress every week and start using core features while we build advanced functionality - no waiting months for results.",
  },
  {
    title: "24/7 Support & Maintenance",
    text: "Round-the-clock monitoring, regular updates, bug fixes, and technical support. Our maintenance plans ensure your software stays secure, fast, and reliable with guaranteed uptime.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section why-section" aria-labelledby="why-title">
      <div className="slab why-slab">
        <div className="section-header why-header">
          <div>
            <div
              className="badge"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}>
              Why Choose Axivelt Solutions
            </div>
            <h2 id="why-title" className="section-title why-title">
              Why Choose Our Software Solutions Company?
            </h2>
            <p className="sub-title">
              Leading software solutions company in Sri Lanka delivering custom
              software, enterprise applications, inventory systems, and business
              automation. Here's what sets us apart from other software
              development companies in Colombo and across the island.
            </p>
          </div>
          <div className="why-cta">
            <Link to={"/getaquote"} className="btn btn-outline">
              Get free quote
            </Link>
            <Link to={"/our-projects"} className="btn btn-primary">
              View portfolio
            </Link>
          </div>
        </div>

        <div className="grid grid-3 why-grid" aria-hidden={false}>
          {features.map((f, i) => (
            <article key={i} className="card why-card">
              <div className="card-content why-card-content">
                <h3 className="h3 card-title why-card-title">{f.title}</h3>
                <p className="w-content">{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
