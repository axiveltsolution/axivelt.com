import React from "react";
import { useRef, useEffect, useState } from "react";
import "./../Home.css";

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
      className="card services-section-card"
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}>
      <div className="card-icon services-section-gif">
        {!iconError ? (
          <img
            src={icon}
            alt={`${title} - web development services Sri Lanka`}
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
    title: "Custom Website Development",
    desc: "Responsive business websites, e-commerce platforms, and landing pages built with React. Perfect for startups and SMEs in Colombo looking to establish their online presence.",
  },
  {
    gif: gifWebapps,
    title: "Web Application Development",
    desc: "Custom portals, booking systems, CRM dashboards, and SaaS platforms. Scalable web apps built with modern JavaScript frameworks for complex business needs.",
  },
  {
    gif: gifInventory,
    title: "Inventory & ERP Systems",
    desc: "Complete web systems development for inventory management, stock tracking, order processing, supplier management, and business reporting with seamless integrations.",
  },
  {
    gif: gifSeo,
    title: "SEO & Performance Optimization",
    desc: "Technical SEO, Core Web Vitals optimization, Google Analytics setup, and Search Console integration to help your website rank higher and load faster.",
  },
  {
    gif: gifMaintenance,
    title: "Website Maintenance & Support",
    desc: "Affordable care plans including automated backups, security updates, uptime monitoring, bug fixes, and continuous improvements with 24/7 support availability.",
  },
  {
    gif: gifMigrations,
    title: "Website Migrations & Fixes",
    desc: "Migrate to better hosting, rescue broken websites, refactor legacy code, and modernize outdated frontends with zero downtime deployment strategies.",
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
        <h2 className="h1">Our Web Development Services</h2>
        <p className="sub-title">
          Comprehensive website development Sri Lanka businesses trust.
          Transparent pricing, fixed timelines, and expert execution from
          discovery to launch.
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
