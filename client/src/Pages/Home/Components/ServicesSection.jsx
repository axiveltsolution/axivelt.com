import React from "react";
import { useRef, useEffect, useState } from "react";
import "./../Home.css"; // Import the new component-specific CSS

/* ======= SERVICES GIFs ======= */
import gifWebsites from "../../../assets/gifs/websites.gif";
import gifWebapps from "../../../assets/gifs/webapps.gif";
import gifInventory from "../../../assets/gifs/inventory.gif";
import gifSeo from "../../../assets/gifs/seo.gif";
import gifMaintenance from "../../../assets/gifs/maintenance.gif";
import gifMigrations from "../../../assets/gifs/migrations.gif";

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
  }, []);
  return ref;
}

function ServiceCard({ icon, title, description }) {
  const [iconLoaded, setIconLoaded] = useState(false);
  const [iconError, setIconError] = useState(false);
  const cardRef = useIntersectionObserver();

  return (
    <article
      ref={cardRef}
      className="card services-section-card" // Use .card from Home.css and custom class
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}>
      <div className="card-icon services-section-gif">
        {!iconError ? (
          <img
            src={icon}
            alt={`${title} services`}
            loading="lazy"
            decoding="async"
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
        <h3 className="h3">{title}</h3>
        <p className="muted">{description}</p>
      </div>
    </article>
  );
}

/* ================= SERVICES ================= */
const items = [
  {
    gif: gifWebsites,
    title: "Websites (React / WordPress)",
    desc: "Corporate sites, marketing pages, blogs, CMS-backed content.",
  },
  {
    gif: gifWebapps,
    title: "Web Apps & Dashboards",
    desc: "Custom portals, role-based dashboards, bookings, automation.",
  },
  {
    gif: gifInventory,
    title: "Inventory / ERP Systems",
    desc: "Stock, orders, suppliers, reports. Integrations when needed.",
  },
  {
    gif: gifSeo,
    title: "SEO & Performance",
    desc: "Core Web Vitals, on-page SEO, analytics & search console.",
  },
  {
    gif: gifMaintenance,
    title: "Maintenance & Care Plans",
    desc: "Backups, updates, uptime monitoring, bug fixes, improvements.",
  },
  {
    gif: gifMigrations,
    title: "Migrations & Fixes",
    desc: "Move hosts, rescue broken sites, refactor legacy frontends.",
  },
];

export default function ServicesSection() {
  const sectionRef = useIntersectionObserver();

  return (
    <section
      id="services"
      className="section services-section"
      ref={sectionRef}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}>
      <div className="slab">
        <h1 className="h1">Our Services</h1>
        <p className="sub-title">
          Clear scope, fixed price, fast delivery. Most corporate sites ship in
          1–2 weeks.
        </p>
        <div className="grid grid-3 services-section-grid">
          {items.map((s, i) => (
            <ServiceCard
              key={i}
              icon={s.gif}
              title={s.title}
              description={s.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
