import React from "react";

const testimonials = [
  {
    name: "Rajitha Fernando",
    role: "Owner",
    company: "MotoGear Helmet Store",
    location: "Colombo",
    quote:
      "Axivelt transformed our inventory chaos into a streamlined system. The POS and stock tracking eliminated manual errors completely.",
    initials: "RF",
    projectType: "Inventory System",
    website: "",
  },
  {
    name: "Anuhas",
    role: "Owner",
    company: "AroundLankaTravels",
    location: "Colombo",
    website: "https://aroundlankatravels.com/",
    quote:
      "Axivelt delivered a beautiful travel website that showcases our tours perfectly. Our online bookings have increased significantly since launch.",
    initials: "SP",
    projectType: "Travel Website",
  },
  {
    name: "Dr. Nuwan Silva",
    role: "Owner",
    company: "EasyNeat",
    location: "Melbourne",
    website: "https://easyneat.com.au/",
    quote:
      "The booking platform revolutionized our operations. Customers love the process, and our staff saves hours weekly with the automated dashboard.",
    initials: "NS",
    projectType: "Booking Platform",
  },
];

function Stars() {
  return (
    <div className="testimonials-stars text-red">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.17L12 18.896 4.664 23.166l1.402-8.17L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="badge-label text-red">Client Stories</span>
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Trusted by businesses across Sri Lanka and internationally. Here is
            how we've helped companies scale.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="glass-card testimonials-card">
              <div className="testimonials-card-top">
                <div className="testimonials-avatar">{t.initials}</div>
                <div className="testimonials-info">
                  <strong className="testimonials-name">{t.name}</strong>
                  <span className="testimonials-role">
                    {t.role} • {t.company}
                  </span>
                </div>
              </div>

              <div className="testimonials-card-middle">
                <p className="testimonials-quote">"{t.quote}"</p>

                {t.website && (
                  <a
                    href={t.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="testimonials-link">
                    Visit Project <span className="arrow">→</span>
                  </a>
                )}
              </div>

              <div className="testimonials-card-bottom">
                <span className="testimonials-tag">{t.projectType}</span>
                <Stars />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
