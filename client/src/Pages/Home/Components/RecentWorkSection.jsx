import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import EasyneatImg from "../../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-frontend.jpg";
import MotogearInventoryImg from "../../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard.webp";
import AroundLankaTravelsImg from "../../../assets/projects/aroundlankatravels.com/sri-lanka-traveling-agency-website-aroundlankatravels.com-axivelt-solutions-web-development-in-sri-lanka-project-hero.jpg";

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
      { threshold: 0.1, ...options },
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);
  return ref;
}

function ProjectCard({ href, website, title, description, image, tags }) {
  const navigate = useNavigate();
  const cardRef = useIntersectionObserver();

  return (
    <article ref={cardRef} className="glass-card portfolio-card">
      <div
        className="portfolio-image-wrapper"
        onClick={() => href && navigate(href)}>
        <img src={image} alt={title} className="portfolio-img" loading="lazy" />
        <div className="portfolio-overlay">
          <span className="portfolio-overlay-btn">View Case Study</span>
        </div>
      </div>

      <div className="portfolio-content">
        <h3 className="portfolio-title">{title}</h3>

        <div className="portfolio-tags">
          {tags.map((tag, i) => (
            <span key={i} className="portfolio-tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="portfolio-desc">{description.slice(0, 110)}...</p>

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link">
            Visit Project <span className="arrow">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function RecentWorkSection() {
  return (
    <section id="projects" className="section portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-header-text">
            <span className="badge-label text-red">Selected Works</span>
            <h2 className="portfolio-heading">
              Custom Projects <br />
              We've Built
            </h2>
          </div>
          <Link to="#contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>

        <div className="portfolio-grid">
          <ProjectCard
            href="/projects/easyNeat-cleaning-service-booking-platform"
            website="https://easyneat.com.au"
            title="EasyNeat Platform"
            description="Complete booking platform for Victoria's leading eco-friendly cleaning service. Features real-time booking, payment integration, and customer dashboards."
            image={EasyneatImg}
            tags={["Web App", "React", "Australia"]}
          />
          <ProjectCard
            href="/projects/motogear-inventory-management-system"
            website=""
            title="MotoGear POS"
            description="Professional inventory management system with stock tracking, POS system, and sales analytics dashboards for retail stores."
            image={MotogearInventoryImg}
            tags={["Inventory", "POS", "Retail"]}
          />
          <ProjectCard
            href="/projects/around-lanka-travels-tour-booking-platform"
            website="https://aroundlankatravels.com/"
            title="Around Lanka"
            description="Complete travel agency platform featuring advanced tour booking, destination galleries, and an automated inquiry management system."
            image={AroundLankaTravelsImg}
            tags={["Travel", "Booking", "Tourism"]}
          />
        </div>
      </div>
    </section>
  );
}
