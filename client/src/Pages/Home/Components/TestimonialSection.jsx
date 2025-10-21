import React from "react";
import "./../Home.css";

/**
 * TestimonialSection.jsx
 * - 3 testimonials (5 stars)
 * - Small circular profile image (SVG initials fallback)
 * - Each testimonial includes an anchor to the client's website
 * - Uses namespaced classes so it won't override global styles
 */

const testimonials = [
  {
    name: "Samantha Lee",
    role: "Operations Manager",
    company: "EasyNeat",
    website: "https://easyneat.com.au/",
    quote:
      "The team delivered a fast, reliable booking flow and an admin panel that actually saves our team time. We saw measurable improvements in bookings within weeks.",
    initials: "SL",
  },
  {
    name: "Nimal Perera",
    role: "Founder",
    company: "Around Lanka Travels",
    website: "https://aroundlankatravels.com/",
    quote:
      "A beautiful, conversion-focused site and effortless content management — our booking rates improved and customers love the clean UI.",
    initials: "NP",
  },
  {
    name: "Kasun Fernando",
    role: "Owner",
    company: "MotoGear",
    website: "https://motogear.lk/",
    quote:
      "Great e-commerce performance and a seamless product management flow. The site loads fast and the shopping experience has fewer friction points.",
    initials: "KF",
  },
];

function Stars({ size = 14 }) {
  // five filled stars
  return (
    <div className="ts-stars" aria-hidden>
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
  const bg = "linear-gradient(135deg,#9d7aff,#ff3d9a)";
  // Render simple SVG circle with initials — no external images needed
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
        <div className="ts-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="ts-card card">
              <header className="ts-card-head">
                <Avatar initials={t.initials} />
                <div className="ts-meta">
                  <strong className="ts-name">{t.name}</strong>
                  <span className="ts-role">
                    {t.role} — <span className="ts-company">{t.company}</span>
                  </span>
                  <Stars />
                </div>
              </header>

              <div className="ts-body">
                <p className="ts-quote">
                  “{t.quote}”{" "}
                  <a
                    className="ts-website"
                    href={t.website}
                    target="_blank"
                    rel="noopener noreferrer">
                    Visit {t.company} ↗
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
