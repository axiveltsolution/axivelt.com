import React from "react";

/**
 * WhyChooseUs.jsx
 * - Six cards showcasing competitive advantages
 * - SEO-optimized content for Sri Lankan market
 * - Edit the `features` array to change content
 */

const features = [
  {
    title: "Local Expertise, Global Standards",
    text: "Based in Colombo, we understand Sri Lankan businesses while delivering international-quality web development. Competitive pricing without compromising on security, performance, or scalability.",
  },
  {
    title: "Transparent & Affordable Pricing",
    text: "Clear proposals with fixed quotes starting from Rs. 75,000 for business websites. No hidden costs, no surprise fees—just honest pricing that fits your budget and timeline.",
  },
  {
    title: "Modern Technology Stack",
    text: "Built with React, Node.js, and cloud infrastructure—your custom website loads fast, ranks well on Google, and scales effortlessly as your business grows.",
  },
  {
    title: "SEO & Performance First",
    text: "Every website we develop includes technical SEO optimization, Core Web Vitals enhancement, and Google Analytics integration to help you rank higher and convert more visitors.",
  },
  {
    title: "Complete Web Systems Development",
    text: "From simple landing pages to complex inventory management systems—we handle everything including payment gateways, API integrations, and custom business automation.",
  },
  {
    title: "Ongoing Support & Maintenance",
    text: "24/7 monitoring, automatic backups, security updates, and fast response times. Our affordable maintenance plans keep your website secure and running smoothly year-round.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section why-section" aria-labelledby="why-title">
      <div className="slab why-slab">
        <div className="section-header why-header">
          <div>
            <div className="badge">Why Choose Axivelt Solutions</div>
            <h2 id="why-title" className="section-title why-title">
              Why Choose Our Web Development Company?
            </h2>
            <p className="sub-title">
              Leading software development company in Sri Lanka delivering
              custom websites, web applications, and inventory systems. Here's
              what sets us apart from other web development companies in Colombo
              and across the island.
            </p>
          </div>
          <div className="why-cta">
            <a className="btn btn-outline" href="#get-a-quote">
              Get free quote
            </a>
            <a className="btn btn-primary" href="#projects">
              View portfolio
            </a>
          </div>
        </div>

        <div className="grid grid-3 why-grid" aria-hidden={false}>
          {features.map((f, i) => (
            <article key={i} className="card why-card">
              <div className="card-content why-card-content">
                <h3 className="h3 card-title why-card-title">{f.title}</h3>
                <p className="p-muted">{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
