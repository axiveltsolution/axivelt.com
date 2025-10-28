import React from "react";
import "./../Home.css";

/**
 * TestimonialSection.jsx
 * - 3 testimonials with 5 stars
 * - SEO-optimized content for Sri Lankan market
 * - Includes client location and project type
 */

const testimonials = [
  {
    name: "Rajitha Fernando",
    role: "Owner",
    company: "MotoGear Lanka",
    location: "Colombo",
    website: "",
    quote:
      "Axivelt Solutions transformed our inventory chaos into a streamlined web system. Their web development expertise is unmatched in Sri Lanka - professional, responsive, and delivered exactly what we needed within budget and timeline.",
    initials: "RF",
    projectType: "Inventory Management System",
  },
  {
    name: "Anuhas",
    role: "Owner",
    company: "AroundLankaTravels",
    location: "Colombo, Sri Lanka",
    website: "https://aroundlankatravels.com/",
    quote:
      "We needed a custom website that could compete with international hotel chains. Our online bookings increased by 240% after launch, and guests constantly praise how easy it is to book through our site.",
    initials: "SP",
    projectType: "Travel Agency Website",
  },
  {
    name: "Dr. Nuwan Silva",
    role: "Owner",
    company: "EasyNeat",
    location: "Melbourne, Australia",
    website: "https://easyneat.com.au/",
    quote:
      "As a startup, we needed affordable web development without sacrificing quality. Axivelt gave us both. Their team understood our vision and created a website that perfectly represents our brand. Highly recommended!",
    initials: "NS",
    projectType: "Booking Website",
  },
];

function Stars({ size = 14 }) {
  return (
    <div className="ts-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="ts-star"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.17L12 18.896 4.664 23.166l1.402-8.17L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials, size = 48 }) {
  return (
    <svg
      className="ts-avatar"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={`Profile ${initials}`}>
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#9d7aff" />
          <stop offset="1" stopColor="#ff3d9a" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#g1)" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#fff">
        {initials}
      </text>
    </svg>
  );
}

export default function TestimonialSection() {
  return (
    <section className="section ts-section" aria-labelledby="ts-title">
      <div className="slab ts-slab">
        <div
          className="ts-header"
          style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            className="badge"
            style={{ display: "inline-block", marginBottom: "1rem" }}>
            Client Success Stories
          </div>
          <h2 id="ts-title" className="h1">
            What Our Clients Say
          </h2>
          <p className="sub-title">
            Trusted by businesses across Sri Lanka - from Colombo to Galle and
            Kandy. Here's what companies say about our web development services.
          </p>
        </div>

        <div className="ts-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="ts-card card">
              <header className="ts-card-head">
                <Avatar initials={t.initials} />
                <div className="ts-meta">
                  <strong className="ts-name">{t.name}</strong>
                  <span className="ts-role">
                    {t.role} - <span className="ts-company">{t.company}</span>
                  </span>
                  <span
                    className="ts-location"
                    style={{ fontSize: "0.875rem", color: "#64748b" }}>
                    {t.location} • {t.projectType}
                  </span>
                  <Stars />
                </div>
              </header>

              <div className="ts-body">
                <p className="ts-quote">"{t.quote}"</p>
                <a style={{ color: "#9d7aff" }} href={t.website}>
                  {t.website}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
